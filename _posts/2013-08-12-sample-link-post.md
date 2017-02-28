---
layout: post
title: "Possible Solutions"
excerpt: "Our final architecture makes all our tasks independent of each other and store the workflow logic in a centralized orchestrator (maybe graph database) which would be made highly available."
date:   2017-02-18 15:07:19
share: true
---
We started our discussions initially on state-full vs state-less architecture to solve the problem. Later, we discussed the centralized vs decentralized architectures. I was more inclined towards having a decentralized architecture as a centralized workflow would mean a single point of failure. Each architecture has its own pros and cons. It was a tradeoff between a centralized workflow vs dependent microservices. We had our discussions on the Apache Airavata mailing list and these discussions helped us reach a final conclusion of having a centralized architecture with a highly available orchestrator.   

Our final architecture makes all our tasks independent of each other and store the workflow logic in a centralized orchestrator (maybe graph database) which would be made highly available.      
We have made a wiki for each of these solutions with detailed explainations:   
    
* Proof-of-Concept Example : [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/Test-Example-&-Possible-Solutions)
* A state-full design : [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/1.-A-state-full-design-for-workload-management)
* A state-less design : [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/2.-A-state-less-design-for-workload-management)
* A centralized, Apache Mesos inspired design [Final]: [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/%5BFinal%5D-Centralized-architecture-for-workload-management)
* [KB] Messaging infrastructures : [Wiki link](https://github.com/airavata-courses/spring17-workload-management/wiki/Messaging-infrastructures)     
