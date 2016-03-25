# Node Food Order App

Contributed to Gesto Hungry Hacker Challenge.

A Node app built with MongoDB and Angular.
Node provides the RESTful API. Angular provides the front end and accesses the API. MongoDB stores client orders.

## Required

[node and npm] (http://nodejs.org)
[mongodb] (https://www.mongodb.org/)

## Optional

[git] (https://github.com/)
[atom] (https://atom.io/)
[json formatter] (http://jsonlint.com/)
[curl] (https://curl.haxx.se/)
[postman] (https://www.getpostman.com/)
[mongobooster] (http://mongobooster.com/)

## Installation

1. Clone the repository: `git clone https://github.com/snehi23/Food-Ordering-System.git`
2. Install the application: `npm install`
3. Start local MongoDB instance (e.g. For OSX use command: `mongod` in terminal to start it)
4. Start the server: `node server.js`
5. View in browser at `http://localhost:8080`

## API Documentation

HTTP      Verb	URL	           Description
GET	      /api/food	           Get all of the food items in the order
POST	    /api/food	           Create a single food item
DELETE	  /api/food/:food_id   Delete a single food item

## Credits

This app is inspired by Node Todo App "https://github.com/scotch-io/node-todo"
