---
layout: post
title: "Possible Solutions"
date: 02/20/2017    
share: true
---
We started our discussions initially on state-full vs state-less architecture to solve the problem. Later, we discussed the centralized vs decentralized architectures. I was more inclined towards having a decentralized architecture as a centralized workflow would mean a single point of failure. Each architecture has its own pros and cons. It was a tradeoff between a centralized workflow vs dependent microservices. We had our discussions on the Apache Airavata mailing list and these discussions helped us reach a final conclusion of having a centralized architecture with a highly available orchestrator.    

Our final architecture makes all our tasks independent of each other and store the workflow logic in a centralized orchestrator (maybe graph database) which would be made highly available.    

We have made a wiki for each of these solutions with detailed explainations:    
*Proof-of-Concept Example : Wiki link     
*A state-full design : Wiki link     
*A state-less design : Wiki link     
*A centralized, Apache Mesos inspired design [Final]: Wiki link     
*[KB] Messaging infrastructures : Wiki link" 

