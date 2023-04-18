# Instructions 
Update this document to summarize research and information learned from this activity. 


<br>

# Project & Portfolio VI 

* **RESEARCH 1.2 How to Build an API**
* **Lisa Terlop**
* **04/11/23**

<br>

## How to Build a Production Ready API
Brief description of the resource and key concepts learned. Feel free to use bullets, embedded images, code examples, and other ideas to capture your research.  

* RESTful is a flexible architectural style for creating APIs

* Here are some basic tips for REST API design:

-Think in terms of Resources — not CRUD operations
-Use proper HTTP verbs
-Craft self-explanatory URLs
-Send proper content types as headers
-Use proper HTTP status codes
-Handle errors properly and send error messages for client errors

* HTTP verbs – GET, POST, PUT, PATCH, DELETE

*  GET /jobs – Retrieves all the jobs
-GET /jobs/1234– Retrieves a specific Job with the JobID 1234
-POST /jobs– Creates a new Job listing
-PUT /jobs/1234 – Updates the job with JobID 1234
-DELETE /jobs/1234 – Deletes the job with JobID 1234
PATCH /jobs/1234 – Updates parts of job with JobID 1234. It is similar to PUT, but put updates the whole job, whereas PATCH updates specific parts of the Job data.

* Always send the default content types if they’re not specified explicitly in the URL
-Examples: 
Content-Type: application/json
Content-Type: text/html
content-Type: application/xml

* it’s always good to separate resources and avoid nesting as much as possible.

* Use proper HTTP status codes and use it consistently across the API
-Here are some examples of HTTP status codes in the API:

GET, PUT, PATCH – 200 OK
POST – 201 Created
DELETE – 204 No content
The following are a few status codes for errors:

400 – Bad request
401 – Unauthorized
404 – Not found
429 – too many requests
500 – Internal server error
<br>

## Why Separate Your Front-end and Backend 

* A frontend is a section that a user can see while the backend is an infrastructure supporting it.
* Joining and separation of frontend and backend have some advantages and disadvantages. Considering the current development scenario, the best of the two can be chosen.

* why frontend and backend should be kept together: 
    - Similar concept and syntax
    - Miscommunications are minimum
    - Efficient resource usage
    - Efficient teamwork with full ownership
    - Effective for simple and small projects
    - Security out-of-the-box

* disadvantages
    - The frontend and backend join was a success in the case of simple websites. The addition of the web pages on a website makes the system inefficient to deliver multiple types of content, images, or other media elements.
    - All the processing tasks are done by the server before the final delivery of the content to the user. This eventually made the server inefficient to handle the multiple user requests.
    - The scope of customization is less as any changes performed in the backend placed a direct impact on the frontend of the website. Also, any development change or maintenance required longer hours than usual.

* benefits of Frontend and backend separation: 
    - Wide technology specialists reach
    - Modularity
    - Quick development and deployment
    - API consolidation

* disadvantages
    - The communication and code management with the APIs increases an overhead burden of documentation on the teams. Along with this, there is no clear way to address the API changes to the frontend.
    - Efforts increases with the division of the frontend and backend. In order to commit any changes, two synchronous commits are made rather than one.
    - The integration of frontend and backend results in bugs, progress delays and in worst cases leads to development failure. Additionally, communication is inefficient between the teams. 

<br>

## Types of database relationships
* There are 3 different types of relations in the database:

    - one-to-one
    - one-to-many
    - many-to-many
* So, how to choose between these 3 different types of relations? If you said the word “many” only once, then this is one-to-many relation. If you would use the word “many” two times, the relation would be many-to-many. And if you wouldn’t use it at all, then it would be one-to-one.

<br>

## Status Codes
* HTTP status codes are divided into 5 “classes”
    - 100s: Informational codes indicating that the request initiated by the browser is continuing.
    - 200s: Success codes returned when browser request was received, understood, and processed by the server.
    - 300s: Redirection codes returned when a new resource has been substituted for the requested resource.
    - 400s: Client error codes indicating that there was a problem with the request.
    - 500s: Server error codes indicating that the request was accepted, but that an error on the server prevented the fulfillment of the request.  


## Reference Links
Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. It is acceptable to provide multiple links for a single topic.  

All of the resources were super helpful in understanding the material but I have to say the video I found on youtube about databases for beginners has been great since it explains things in a simple manner so I can understand it better and having a video referance is also a big plus as I'm a visual learner. 


**Resource 1: Database Design Course**  
[Site Address](https://youtu.be/ztHopE5Wnpc)  

**Resource 2: What is REST API in Node.js **    
[Site Address](https://www.geeksforgeeks.org/what-is-rest-api-in-node-js/)

**Resource 3: Title**      
[Site Address](https://masteringbackend.com/posts/api-design-best-practices)




