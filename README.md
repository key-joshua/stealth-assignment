[![Maintainability](https://api.codeclimate.com/v1/badges/08d9a491857b1935000e/maintainability)](https://codeclimate.com/github/key-joshua/neotechsolutions-backend-assignment/maintainability)
[![CircleCI](https://circleci.com/gh/key-joshua/neotechsolutions-backend-assignment/tree/develop.svg?style=svg)](https://circleci.com/gh/key-joshua/neotechsolutions-backend-assignment/tree/develop)
[![Coverage Status](https://coveralls.io/repos/github/key-joshua/neotechsolutions-backend-assignment/badge.svg?branch=develop)](https://coveralls.io/github/key-joshua/neotechsolutions-backend-assignment?branch=develop)
[![codecov](https://codecov.io/gh/key-joshua/neotechsolutions-backend-assignment/branch/develop/graph/badge.svg?token=7ZU0CSQJQD)](https://codecov.io/gh/key-joshua/neotechsolutions-backend-assignment)

# BACKEND CHALLEGE

- This Backend Challenge

#### This is the Hosted link of the backend challenge [Access endpoint Direct]

http://localhost:3000

#### This is the Github repository link of the backend repo 

https://github.com/key-joshua/stealth-assignment

<br>

## Features

- Register a user account.
- Verify a user account.
- Resend a verification link.
- Login a user into verified account.
- Logout a user.
- Add a movie.
- View a movie.
- View all movies.
- View favorite movies.
- Edit a movie.
- Delete a movie.

## Backend Assignment APIs

Before we get started Remember to take  :coffee:   :pizza:  and :dancer:   When You Are coding, come on Dude it all about relax

## Backend tools

 - All Neccessary libraries.
 - Express JS.
 - NodeJs.


#### TABLE OF API ENDPOINTS SPECIFICATION AND DESCRIPTION

- Version API using URL versioning starting with http://localhost:3000/api/v1  


|NO  | VERBS  |                    ENDPOINTS                       |    STATUS    |   ACCESS |              DESCRIPTION                     |
|----|--------|----------------------------------------------------|--------------|----------|----------------------------------------------|
| 1  | POST   | /auth/register-user                                | 201 CREATED  | public   | create a user with email and password        |
| 2  | GET    | /auth//verify-user-account/:session                | 200 OK       | private  | verify user account through emailed link     |
| 3  | GET    | /auth/resend-verification-link/:action/:yourEmail  | 200 OK       | public   | resend link through user email               |
| 4  | POST   | /auth/login-user                                   | 200 OK       | public   | login a user with email and password         |
| 4  | GET    | /auth/logout-user                                  | 200 OK       | public   | logout a user with session                   |
| 4  | POST   | /movie/add-movie                                   | 201 OK       | private  | add movie with session in header             |
| 4  | GET    | /movie/view-movie/:id                              | 200 OK       | private  | view movie with session in header            |
| 4  | GET    | /movie/view-all-movies                             | 200 OK       | private  | view all movie with session in header        |
| 4  | GET    | /movie/view-favorite-movies                        | 200 OK       | private  | view favorite movies with session in header  |
| 4  | PATCH  | /movie/edit-movie/:id                              | 200 OK       | private  | edit movie with session in header            |
| 4  | DELETE | /movie/delete-movie/:id                            | 200 OK       | private  | delete movie with session in header          |


#### Other Tools

Other tools and technologies used in development of this application are;
- Hosting: [Heroku](https://heroku.com/).
- Compiler: [Babel](https://babeljs.io/).
- Style Guide: [Airbnb](https://airbnb.io/projects/javascript/).
- Framework: [ExpressJS](http://expressjs.com/).
- Documentation: [Swagger](https://swagger.io/).
- Linting Library: [ESLint](https://eslint.org/).
- API Testing environment: [Postman](https://www.getpostman.com).
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/).
- Text Editor: [VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com/).

## GETTING START WITH PROJECT

- Install the required dependencies found in package.json by running this command:
 ```
npm install
 ```
- And then to start running  this project on your machine , run this command:
 ```
npm run start
 ```
