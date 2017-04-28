---
layout: post
title: "Assignment 2"
excerpt: <a href="https://amrutakamat16.github.io//2017/02/18/assignment-2.html">Know more </a>
date:   2017-02-18 15:07:19
share: true
---    
2017-02-27     

<b>GOAL:</b>    

For storing the workflows we are currently exploring possible options of graph databases. We need an orchestrator for fetching graphs from graph database based on the request. This was basically suggested to seperate out the concerns between a scheduler and a orchestrator. The orchestrator will be the one communicating with the database and scheduler need not worry about database communication. It will only schedule the tasks which it receives from the orchestrator.  

<b>POSSIBLE SOLUTIONS:</b>    

I have looked into the Neo4J graph database which provides us an option of storing DAGs in the form of nodes and relationships between them. It uses the Cypher query language. Neo4j database basically because it has an option of storing data within the nodes. It can fetch data much faster than a relational database. Also one node can be a part of many DAGs thus removing the possiblity of duplication which would have been the case with relational database.   

I have integrated RabbitMQ to send DAG over the request queue to the scheduler and at the same time accept data sent via the response queue. Please refer the below diagram to have a clear picture of the orchestrator functions:    

<p align="center">
  <img src="../../../orchestrator.png" width="450" style="height: 228px; width: 600px;">
</p>    

<b>CONCLUSION:</b>     

We are still exploring what details should be stored in a node in graph database and in what format should the output be generated.
I have added all my findings to the issue created on github. [Link](https://github.com/airavata-courses/spring17-workload-management/issues/3)
