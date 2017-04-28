---
layout: post
title: "Assignment 3"
excerpt: <a href="https://amrutakamat16.github.io//2017/02/18/assignment-3.html">Know more </a>
date:   2017-02-18 15:07:19
share: true
---
2017-03-23   
    
<b>GOAL:</b>     

To maintain a relational database which can keep track of the state of the DAG. In case of system crash or any failure, the nodes after the one which failed will be executed. The entire DAG need not be executed again.    

<b>POSSIBLE SOLUTIONS:</b>    

Over the last 2 weeks, we implemented an orchestrator. The orchestrator fetches DAG from the graph database. In order to maintain state of the DAG we created a State database in MySQL. The MySQL database will store experiment id, experiment type and state of the DAG. For mocking, we have created 4 experiment types for fetching DAGs. The graph database will send 1st node from the requested DAG to the orchestrator. The orchestrator will create an entry for maintaining state of DAG in State DB and publish the scheduling request to the scheduler. On receiving response from the scheduler, the orchestrator will fetch the next node in the DAG from graph DB for the corresponding experiment type and similarly update entry in State DB and publish the scheduling request.    

<b>ARCHITECTURE/SOLUTION EVALUATION:</b>    

<p align="center">
  <img src="../../../orchestratorWithDB.png" width="450" style="width: 600px !important;"/>
</p>
     
<b>My GitHub Commits</b>   

Dummy Graph DB Application: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/f590293fd0b7609e76772a9a389375a1480abcbf)
     
Mock Orchestrator:  [Link](https://github.com/airavata-courses/spring17-workload-management/commit/fda7f3180647676c1ad0bebaa7b346eea26117c0)     
RabbitMQ Integration: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/3144b5a0ca0314cecfcb23d308807cd82592a9ca)    
    
Utility to create mock DAGs: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/de98512c7d124379488a3a3dfc5beaebd2db3951)     
JPA for state management: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/c0b19943b7f089e2439ae1210ceec2a2c8b8efe3)    
Orchestrator: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/7ac56a971e6a85146ad2273d630c4770b32a17f8) 
     
