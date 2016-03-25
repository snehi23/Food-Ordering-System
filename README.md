# Node Food Order App

Contributed to Gesto Hungry Hacker Challenge.

A Node app built with MongoDB and Angular.
Node provides the RESTful API. Angular provides the front end and accesses the API. MongoDB stores client orders.

## Required

[node and npm] (runtime environment + package manager)
[mongodb] (database server)

## Optional
[git] (version control + Windows cURL)
[sublime, atom, webstorm] (editors)
[json formatter] (JSON formatter in browser)
[curl] (HTTP request tests for Mac/Linux)
[postman] (HTTP request tests in browser)
[mongobooster] (MongoDB client)

## Installation
1. Clone the repository: `git clone https://github.com/snehi23/Food-Ordering-System.git`
2. Install the application: `npm install`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:8080`

## API Documentation
HTTP      Verb	URL	           Description
GET	      /api/food	           Get all of the food items in the order
POST	    /api/food	           Create a single food item
DELETE	  /api/food/:food_id   Delete a single food item

## Credits

This app is inspired by Node Todo App "https://github.com/scotch-io/node-todo"
