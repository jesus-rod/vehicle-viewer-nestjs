##### Node.js Stack

In this part, the essential tools and frameworks are:

* Yarn
* Node.js
    * typeorm (for persistence)
    * Nest.js (for REST endpoints)
* Swagger UI (for API documentation)


#### Getting started

To start this web application just follow these steps:

1. Installation

    ```bash
    $ yarn install
    ```

2. Running the app 

    ```bash
    # development mode
    $ yarn start
    
    # watch mode
    $ yarn start:dev
    
    # debug mode
    $ yarn start:debug
    
    # production mode
    $ yarn start:prod
    ```

3. Browse to the following URL for API documentation:

    [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

#### Information

* This node backend is based on the [Nest](https://github.com/nestjs/nest) framework, using 
[typeorm](https://typeorm.io/) for persistence. 
* Data is automatically stored in a SQLite in-memory database. On startup the database is populated with test data.
This is done in the respective <code>*-test-data.service.ts</code> classes. Changes are lost after restarting the 
application.
* All REST endpoints can be tested locally with the Swagger UI frontend:

    [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
    
---

## Description


