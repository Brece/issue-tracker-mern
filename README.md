# Issue Tracker (Fullstack MongoDB, Express, React, Node)
This is a CRUD application that tracks tasks and manage the assigned users.

![Project Preview](/client/src/assets/Screenshot%202023-05-10%20at%2019-06-11%20Issue%20Tracker.png)

DISCLAIMER:
*Besides some minor feature improvements the application is fully functional.*
Todos & Ideas:

    display validation errors on form correctly
    filter feature when clicked on user


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


### Database
-   Database credentials can be edited in /server/utils/env.js file. Here you can replace the default values
-   please make sure you match your PORT changes in the client package.json under "proxy"
-   alternatively you can add your credentials in a **.env** file in /server root directory like so:
```
    MONGODB_URI=yourMongoDBConnectionString
    PORT=yourPORT
```

**Restore Database**
-   the documents for each collection are stored in ./server/utils/db.js
-   you can restore them by using tools like [Postman](https://www.postman.com/downloads/) and access the endpoint
```
    GET request at /api/restore 
    
    (it might give you an 500 error if the collection is not empty but the documents will be restored regardless)
```
-   alternatively you can restore them directly in the frontend UI with the "Restore Data" button

        MongoDB only restores default documents that have been deleted.
        Any newly created or default documents that have been edited are NOT affected.

**Delete Database**
-   you can delete each one by hand through the UI
-   you can delete the entire collection through the endpoints:
```
    DELETE request at /api/tasks
    DELETE request at /api/users
```
