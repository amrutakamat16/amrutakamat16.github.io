---
layout: post
title: "Assignment 3"
excerpt: <a href="https://amrutakamat16.github.io//2017/02/18/assignment-3.html">Know more </a>
date:   2017-02-18 15:07:19
share: true
---
2017-03-09   
    
<b>GOAL:</b> 

We need an orchestrator for fetching graphs from graph database based on the request. This was basically suggested to seperate out the concerns between a scheduler and a orchestrator. The orchestrator will be the one communicating with the database and scheduler need not worry about database communication. It will only schedule the tasks which it receives from the orchestrator.     

<b>APPROACHES:</b>   

I have integrated RabbitMQ to send DAG over the request queue to the scheduler and at the same time accept data sent via the response queue. Please refer the below diagram to have a clear picture of the orchestrator functions:    

<p align="center">
  <img src="../../../orchestrator.png" width="450" style="height: 228px; width: 600px;">
</p>     

<b>CONCLUSION:</b>    

We are still exploring what details should be stored in a node in graph database and in what format should the output be generated.
