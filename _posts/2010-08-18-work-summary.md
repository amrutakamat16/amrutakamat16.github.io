---
layout: post
title:  "Work Summary"
date: 2010-08-18 08:07:19
comments: true
---     

The summary of all the tasks done in the entire semester includes:

1. Identifying a database for storing all the workflows.
2. Implementing an orchestrator for fetching nodes from Graph Database by integrating RabbitMQ.
3. Finalizing with Neo4j graph database after comparing it with other possible relational databases.
4. Differentiating an abstract and concrete DAG. The concrete DAG being the one which includes all the details within nodes required for scheduling the experiment.
5. Identifying the way to store the entire scheduling request with a graph node in binary format.
6. Initially decided on keeping a MySQL database for keeping track of state of the DAG. But later we found a way of tracking the same with a flag maintained within the node.
7. Recovering nodes which are not executed in case of failure or system crash thus avoiding the entire DAG being re-execution

All these points have been explained in detail in my blog under Possible Solutions[Link].
