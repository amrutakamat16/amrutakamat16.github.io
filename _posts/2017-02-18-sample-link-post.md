---
layout: post
title: "Possible Solutions [Updated]"
excerpt: "Our final architecture makes all our tasks independent of each other and store the workflow logic in a centralized orchestrator (maybe graph database) which would be made highly available."
date:   2017-02-18 15:07:19
share: true
---
2017-02-18

We started our discussions initially on state-full vs state-less architecture to solve the problem. Later, we discussed the centralized vs decentralized architectures. I was more inclined towards having a decentralized architecture as a centralized workflow would mean a single point of failure. Each architecture has its own pros and cons. It was a tradeoff between a centralized workflow vs dependent microservices. We had our discussions on the Apache Airavata mailing list and these discussions helped us reach a final conclusion of having a centralized architecture with a highly available orchestrator.   

Our final architecture makes all our tasks independent of each other and store the workflow logic in a centralized orchestrator (maybe graph database) which would be made highly available.      
We have made a wiki for each of these solutions with detailed explainations:   
    
* Proof-of-Concept Example : [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/Test-Example-&-Possible-Solutions)
* A state-full design : [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/1.-A-state-full-design-for-workload-management)
* A state-less design : [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/2.-A-state-less-design-for-workload-management)
* A centralized, Apache Mesos inspired design [Final]: [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/%5BFinal%5D-Centralized-architecture-for-workload-management)
* [KB] Messaging infrastructures : [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/Messaging-infrastructures)         
      
---    
2017-02-27     

For storing the workflows we are currently exploring possible options of graph databases. 
I have looked into the Neo4J graph database which provides us an option of storing DAGs in the form of nodes and relationships between them. It uses the Cypher query language.

I have added all my findings to the issue created on github. [Link](https://github.com/airavata-courses/spring17-workload-management/issues/3)

---
2017-03-09   
    
We need an orchestrator for fetching graphs from graph database based on the request. I have integrated RabbitMQ to send DAG over the request queue to the scheduler and at the same time accept data sent via the response queue. Please refer the below diagram to have a clear picture of the orchestrator functions:    

<p align="center">
  <img src="../../../orchestrator.png" width="450" style="height: 228px; width: 600px;">
</p>

We are still exploring what details should be stored in a node in graph database and in what format should the output be generated.

---
2017-03-23   
    
Over the last 2 weeks, we implemented an orchestrator. The orchestrator fetches DAG from the graph database. In order to maintain state of the DAG we created a State database in MySQL. The MySQL database will store experiment id, experiment type and state of the DAG. For mocking, we have created 4 experiment types for fetching DAGs. The graph database will send 1st node from the requested DAG to the orchestrator. The orchestrator will create an entry for maintaining state of DAG in State DB and publish the scheduling request to the scheduler. On receiving response from the scheduler, the orchestrator will fetch the next node in the DAG from graph DB for the corresponding experiment type and similarly update entry in State DB and publish the scheduling request.

<p align="center">
  <img src="../../../orchestratorWithDB.png" width="450" style="width: 600px !important;"/>
</p>

---
2017-04-06    
     
Since we completed the orchestrator the previous week. We did a complete end to end flow this week.
The entire architecture for distribued task execution is now in place. Below is the architecture diagram:

<p align="center">
  <img src="../../../architecture.png" style="height: 380px !important;
    width: 900px !important;">
</p>
     
Please refer "My contributions" sections to go through my github commits done in the previous 2 weeks.     

---
2017-04-20    

The below diagram shows the concrete version of DAG in the graph database. The graph database will initially have an abstract DAG which will be fetched and converted to a concrete DAG. The concrete version of the DAG will be used to submit the experiments.    

<p align="center">
  <img src="../../../DAG.png" style="height: 121px !important;
    width: 685px !important;">
</p>
    
Every node within the concrete DAG will store the entire scheduling request needed for the corresponding task execution. It will also store a flag which will keep a track of whether the task was executed or it failed. The scheduling request is stored within the node in binary format and later retrived when the task is to be scheduled. On receiving a response, the corresponding experiment type is fetched from the response and the flag within the currently executed task node is set for successful completion. The next node in the DAG is then sent for scheduling. In case of a system failure or crash, only those nodes whose flag is not set are executed again. This is will help prevent re-execution of entire DAG.   


