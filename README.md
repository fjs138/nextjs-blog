# FrankJS.net
Personal website, built with React, GraphQL, Sass

## Deployment
[![Netlify Status](https://api.netlify.com/api/v1/badges/50bbc44f-5675-434e-8105-ba1e7c2b2434/deploy-status)](https://app.netlify.com/sites/condescending-jepsen-669694/deploys)

https://frankjs.net


## The Goal
I wanted to relaunch a WordPress blog using React.
I shutdown the blog portion of my business website, and created a new personal website using React. I recreated my blog as part of this new React site.

I wanted to enhance it visually and, as mentioned, expand it beyond a blog.

Overall I was very happy with the continual development capabilities provided to me by Netlify, and the ease of incorporating Contentful as well.

I decided to use Gatsby for this particular project, as I felt it was a good fit, and was an excuse to explore something of interest to me.

Initially I developed this to draw data from markdown formatted blog posts. 

I then created a second branch, "contentful", so that I could develop an iteration that uses a headless cms, in this case
Netlify, and implements CI/CD.

This branch was then rebased into the main branch after completion of the feature set.
<br>
<br>
I also added a build hook to my deployment, so that when my Contentful posts are published or unpublished, it will instruct frankjs.net to
update the "blog page" appropriately.



## Technology Stack

| Technology    	|  Description     	|
| :------------------| :----------------	|
| HTML, CSS, JS 			| Languages     |
| React		| JavaScript library for building user interfaces            |
| NextJS			| 	React framework that gives you building blocks to create web applications. |
| date-fns			|	  Modern JavaScript date utility library


| gray-matter			|	  Parse front-matter from a string or file.|
|remark,remark-html|Unified processor with support for parsing markdown input and serializing markdown as output

|

## Project Specifications
Build a blog with blog posts dynamically generated to appear as seperate page links on the site.

## Anatomy of Project


| File/Folder    	| Purpose           	  |
| :------------------|:-------------------|
|.next|Next.js data|
|components|React components|
| lib	 			| handles processing of blog posts     |
| pages		 			| Main Site Pages|
| posts-data		 			| markdown formatted blog posts   |
| styles| css for parts of the program rather than pages     |


## License
MIT License

Copyright (c) 2020 Frank Santaguida

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

