# Issue Tracker (Fullstack MongoDB, Express, React, Node)
This is a CRUD application that tracks tasks and manage the assigned users.

![Project Preview](/client/src/assets/Screenshot%202023-05-10%20at%2009-38-49%20Issue%20Tracker.png)

DISCLAIMER:
*This is still work in progress.*
Todos:

    - I am currently working on the task section of the frontend.
    - how to write a script to retore the database from a file which have a collection referencing another collection

## How to run
### run backend
-   please make sure you've added your *MongoDB connection string* as described below before running the server
-   navigate to the server directory and run the following commands

```
    cd server

    npm install

    npm run server
```
-   by default the server runs on http://localhost:5050/

**Database**
-   Database credentials can be edited in /server/utils/env.js file. Here you can replace the default values
-   please make sure you match your PORT changes in the client package.json under "proxy"
-   alternatively you can add your credentials in a **.env** file in /server root directory like so:
```
MONGODB_URI=yourMongoDBConnectionString
PORT=yourPORT
```

### run frontend
-   navigate to the client directory and run the following commands
```
    cd client

    npm install

    npm start
```

-   by default the frontend runs on http://localhost:3000/
-   if you've changed the **PORT** in the backend, please make sure to make the appropriate changes in the package.json file located in the /client root directory:
```
  "proxy": "http://localhost:PORT"
```
