##### Java Stack

In this part, the essential tools and frameworks are:

* Gradle
* Spring Boot stack
    * Spring Data JPA with Hibernate and H2 (for persistence)
    * Spring MVC (for REST endpoints)
* Swagger UI (for API documentation)

#### Getting started

To start the web application just follow these steps:

1. Build the project via Gradle:

    <code>$ ./gradlew build</code>

2. Start the application:
    * In your IDE invoke the class method <code>com.audi.interview.booking.Application#main</code> to start the server , *or*
    * From command line execute:

    <code>$ java -jar build/libs/developer-interview-0.0.1-SNAPSHOT.jar</code>

3. Browse to the following URL for API documentation:

    [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

#### Information

* Spring boot automatically provides an embedded servlet container and a persistence layer based on Hibernate (as JPA provider).
* Data is automatically stored in a H2 in-memory database. On startup the database is populated with test data.
This is done in the <code>com.audi.interview.booking.TestData</code> class. Changes are lost after restarting the application.
* All REST endpoints can be tested locally with the Swagger UI frontend:

    [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
