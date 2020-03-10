## ABI Developer Interview Project

###
Welcome to the developer interview project of the Audi Business Innovation GmbH.
This file will give you a brief introduction to the technologies and software needed for this project.
In the getting started paragraph there are the instructions to build and run the code.

---

#### Prerequisites

* Either Java Development Kit >= 1.8 or Node.JS >= 10
* IDE or editor of your choice

#### Technologies

For this project, there are wo different technology stacks you can choose from, one is Java based, the other one 
Node.js based. Just pick whichever you like.

For details and to see how to get started with either stack, please refer to the README in the corresponding 
subdirectories. 

#### Functionality

Using the system, a _user_ can book _vehicles_ for a certain period of time. Through the REST API, _bookings_ can be 
listed, created, and updated. Furthermore, _users_ can be listed and _vehicles_ can be listed and created. Vehicles
have to have unique license plate numbers. Bookings are only possible for active vehicles. Also, a booking can only be 
made, if there is no open or active booking of the same vehicle in the same period.

For details about what exactly each REST Resource provides, see the documentation in the Swagger UI.

Some initial test data is inserted into the system on startup.

---

#### Tasks

You can use either of the two existing implementations in `./node` or `./java` to solve the following tasks. They are
functionally equivalent and you can pick whichever suits you better.

##### Backend Part

1. The customer wants the functionality to search for users by last name:
    * Implement a new method in the <code>UserService</code> class that returns users by a given name
    * Extend the existing API to expose the new functionality

2. The customer wants to be able to insert new vehicles into the system via the API
    * Implement an appropriate extension of the vehicle controller with suitable REST endpoint
    * Persist new data
    * (Optional) Validate the input data:
        * all vehicle fields should be mandatory
        * field <code>validTill</code> should be at least a future date

##### Frontend Part

The customer wants you to create a proof of concept for a nice JavaScript driven frontend admin console to manage users
and vehicles. There are no detailed or technical specifications given except:

* It should look nice
* Intuitive to use
* All implemented API functionality should be covered in the frontend
    * Display all vehicles
        * Insert new vehicle
    * Display all users
        * Provide search by last name functionality
        * Show details of specific user

3. Create a nice and intuitive frontend application as proof of concept that covers the given API functionality.
Technically you are completely free, just choose an adequate tool stack.

    * Angular, Vue, or React are quite popular, but any other frontend framework is fine, too.
    * Talk to the provided API endpoints and find intuitive ways to display the data and a small navigation
    * Single page application is preferred
    * Focus on usability in views
    * (Optional) Include frontend input validation
    * (Optional) Focus on modularity in architecture

Some Audi colors:

    $black:                  #000;
    $gray-darker:            #394249;
    $gray-dark:              #434C53;
    $gray:                   #6D7579;
    $gray-light:             #B0B6B8;
    $gray-lighter:           #D5D9D8;

    $audi-red:               #CC0033;
    $audi-dark-red:          #AA142D;

There is a placeholder html page for your implementation at:

[http://localhost:8080/admin/index.html](http://localhost:8080/admin/index.html)

The file is located under <code>src/main/resources/static/admin/index.html</code> for the Java stack and 
<code>static/admin/index.html</code> for the Node.js stack respectively.

### Happy coding!
