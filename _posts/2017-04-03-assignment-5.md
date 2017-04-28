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

<b> POSSIBLE SOLUTIONS: </b>    

The below diagram shows the concrete version of DAG in the graph database. The graph database will initially have an abstract DAG which will be fetched and converted to a concrete DAG. The concrete version of the DAG will be used to submit the experiments.    

<p align="center">
  <img src="../../../DAG.png" style="height: 121px !important;
    width: 685px !important;">
</p>
    
<b>SOLUTION EVALUATION: </b>    
       
Every node within the concrete DAG will store the entire scheduling request needed for the corresponding task execution. It will also store a flag which will keep a track of whether the task was executed or it failed. The scheduling request is stored within the node in binary format and later retrived when the task is to be scheduled. On receiving a response, the corresponding experiment type is fetched from the response and the flag within the currently executed task node is set for successful completion. The next node in the DAG is then sent for scheduling. In case of a system failure or crash, only those nodes whose flag is not set are executed again. This is will help prevent re-execution of entire DAG.   

<b>My Github Commits</b>    
       
Serialization utils for converting scheduling request to binary and vice versa: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/708669d64fd7b3f8a15d6b43d3ceb7e82581a332)    
Store scheduling request in node: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/168bb92fe0b5c4e733dfc9a42074f0db7ab33215)    
Fetching scheduling request from node. Fetching entire Node object from DAG: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/9c4c140306bf1de889ac8d379dffcd409fde97eb)    
Setting completion flag within node to track status: [Link](https://github.com/airavata-courses/spring17-workload-management/commit/decdd3288595f3631ee715d95512f703880e54df)      
