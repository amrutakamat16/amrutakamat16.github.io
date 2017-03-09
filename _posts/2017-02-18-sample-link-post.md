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
  <img src="https://github.com/amrutakamat16/amrutakamat16.github.io/blob/master/orchestrator.png" width="450"/>
</p>

We are still exploring what details should be stored in a node in graph database and in what format should the output be generated.
