#Exploring the GitHub API

Today we are going to create a tool that allows us to look up a github user via their username, and pull cool data from their account!

## Basic Setup
- Create the index.html file
- Create an app.js file
- Create a controller.js file
- Create a service.js file
- Link in the angularJS CDN at the bottom of the body in our index.html file:
  - "http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min.js"
- Link in our app.js file under our angular link

## Github API
Next we want to get acquainted with the GitHub API documentation located at https://developer.github.com/v3/.

Documentation gives us all the information we need to access the API in it's various forms. If you look at the first section called "Schema" you may see something that looks like this:

```
  $ curl -i https://api.github.com/users/octocat/orgs
```

cURL is a command line tool that allows you to make protocol requests and see the results. If we were to type the above code into our terminal the result would yeild:

```
HTTP/1.1 200 OK
Server: nginx
Date: Fri, 12 Oct 2012 23:33:14 GMT
Content-Type: application/json; charset=utf-8
Connection: keep-alive
Status: 200 OK
ETag: "a00049ba79152d03380c34652f2cb612"
X-GitHub-Media-Type: github.v3
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4987
X-RateLimit-Reset: 1350085394
Content-Length: 5
Cache-Control: max-age=0, private, must-revalidate
X-Content-Type-Options: nosniff

[]
```

