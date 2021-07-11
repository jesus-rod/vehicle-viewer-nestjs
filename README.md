## ABI Developer Interview Project

###

Welcome to the developer interview project of the Audi Business Innovation GmbH.
This file will give you a brief introduction to the technologies and software needed for this project.
In the getting started paragraph there are the instructions to build and run the code.

---

#### Prerequisites

- Either Java Development Kit >= 1.8 or Node.JS >= 10
- IDE or editor of your choice

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

- [x] Implement a new method in the <code>UserService</code> class that returns users by a given name
- [x] Extend the existing API to expose the new functionality

2. The customer wants to be able to insert new vehicles into the system via the API
   - [x] Implement an appropriate extension of the vehicle controller with suitable REST endpoint
   - [x] Persist new data
   - [x] (Optional) Validate the input data:
   - [x] all vehicle fields should be mandatory
   - [x] field <code>validTill</code> should be at least a future date

##### Frontend Part

The customer wants you to create a proof of concept for a nice JavaScript driven frontend admin console to manage users
and vehicles. There are no detailed or technical specifications given except:

- [x] It should look nice
- [x] Intuitive to use
- [x] All implemented API functionality should be covered in the frontend
- [x] Display all vehicles
- [x] Insert new vehicle
- [x] Display all users
- [x] Provide search by last name functionality

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [ABI Developer Interview Project](#abi-developer-interview-project)
  - [](#)
    - [Prerequisites](#prerequisites)
    - [Technologies](#technologies)
    - [Functionality](#functionality)
    - [Tasks](#tasks)
      - [Backend Part](#backend-part)
      - [Frontend Part](#frontend-part)
  - [Happy coding!](#happy-coding)
  - [Developer Notes](#developer-notes)
- [Possible improvements](#possible-improvements)

<!-- /code_chunk_output -->

Show details of specific user

3.  Create a nice and intuitive frontend application as proof of concept that covers the given API functionality.
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

### Developer Notes

1.  Running the app (frontend)
    Go to the folder admin-frontend on root level and run the start script
    `bash # $ yarn start `

        Visit localhost:3000 to see the app running

## Possible improvements

1. - Adding tests
     -- Unit tests
     -- UI tests
     -- e2e tests e.g cypress
2. Better error handling (at the moment I am worrying for the app not to crash and to have the most type safety as possible but the next step would be to retry failed requests and give the user some feedback about it)
3. Put strings in one place to make localization easier
