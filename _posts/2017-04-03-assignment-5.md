---
layout: post
title: "Assignment 5"
excerpt: <a href="https://amrutakamat16.github.io//2017/02/18/assignment-5.html">Know more </a>
date:   2017-02-18 15:07:19
share: true
---
2017-04-20    

<b>GOAL:</b>  

The goal of this week was to seperate out an abstract and concrete DAG. The concrete being the one which has all the information required for scheduling the experiment. The main goal is to keep all details required for scheduling within the DAG node.   

<b> APPROACHES: </b>    

The below diagram shows the concrete version of DAG in the graph database. The graph database will initially have an abstract DAG which will be fetched and converted to a concrete DAG. The concrete version of the DAG will be used to submit the experiments.    

<p align="center">
  <img src="../../../DAG.png" style="height: 121px !important;
    width: 685px !important;">
</p>
    
Every node within the concrete DAG will store the entire scheduling request needed for the corresponding task execution. It will also store a flag which will keep a track of whether the task was executed or it failed. The scheduling request is stored within the node in binary format and later retrived when the task is to be scheduled. On receiving a response, the corresponding experiment type is fetched from the response and the flag within the currently executed task node is set for successful completion. The next node in the DAG is then sent for scheduling. In case of a system failure or crash, only those nodes whose flag is not set are executed again. This is will help prevent re-execution of entire DAG.   
