---
layout: post
title: "Assignment 4"
excerpt: <a href="https://amrutakamat16.github.io//2017/02/18/assignment-4.html">Know more </a>
date:   2017-02-18 15:07:19
share: true
---
2017-03-23   
    
<b>GOAL:</b>     

To maintain a relational database which can keep track of the state of the DAG. In case of system crash or any failure, the nodes after the one which failed will be executed. The entire DAG need not be executed again.    

<b>APPROACHES:</b>    

Over the last 2 weeks, we implemented an orchestrator. The orchestrator fetches DAG from the graph database. In order to maintain state of the DAG we created a State database in MySQL. The MySQL database will store experiment id, experiment type and state of the DAG. For mocking, we have created 4 experiment types for fetching DAGs. The graph database will send 1st node from the requested DAG to the orchestrator. The orchestrator will create an entry for maintaining state of DAG in State DB and publish the scheduling request to the scheduler. On receiving response from the scheduler, the orchestrator will fetch the next node in the DAG from graph DB for the corresponding experiment type and similarly update entry in State DB and publish the scheduling request.    

<b>ARCHITECTURE:</b>    

<p align="center">
  <img src="../../../orchestratorWithDB.png" width="450" style="width: 600px !important;"/>
</p>
