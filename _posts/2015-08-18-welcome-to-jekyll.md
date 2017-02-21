---
layout: post
title:  "Blog - Workload Distribution Management"
date:   2017-02-20 15:07:19
comments: true
---
Welcome to the blog related to distributed workload management!

Theme 3 focuses on finding possible solutions to the issue of managing workloads in a distributed environment with a micro-services based architecture, with emphasis on how these would benefit Apache Airavata. This leads to finding the best way that different micro-services (eg: Airavata micro-services) should communicate and distribute work, in such a way that:

We maintain the ability to scale these micro-services whenever needed (autoscale perhaps?).
The architecture achieves fault tolerance.
We can deploy these micro-services independently, or better in a containerized manner – keeping in mind the ability to use devops for deployment.

<!--more-->

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
