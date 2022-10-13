[![Maintainability](https://api.codeclimate.com/v1/badges/08d9a491857b1935000e/maintainability)](https://codeclimate.com/github/key-joshua/neotechsolutions-backend-assignment/maintainability)
[![CircleCI](https://circleci.com/gh/key-joshua/neotechsolutions-backend-assignment/tree/develop.svg?style=svg)](https://circleci.com/gh/key-joshua/neotechsolutions-backend-assignment/tree/develop)
[![Coverage Status](https://coveralls.io/repos/github/key-joshua/neotechsolutions-backend-assignment/badge.svg?branch=develop)](https://coveralls.io/github/key-joshua/neotechsolutions-backend-assignment?branch=develop)
[![codecov](https://codecov.io/gh/key-joshua/neotechsolutions-backend-assignment/branch/develop/graph/badge.svg?token=7ZU0CSQJQD)](https://codecov.io/gh/key-joshua/neotechsolutions-backend-assignment)

# BACKEND CHALLEGE
- This Backend Challenge

#### This is the Hosted link of the backend challenge
https://heritage-backend-app.herokuapp.com

#### This is the Hosted link of Swagger Documentation
Postman: [Swagger Collection APIs](https://heritage-backend-app.herokuapp.com/api/v1/documentation).

#### This is the Hosted link of Postman Documentation
Postman: [Postman Collection APIs](https://interstellar-desert-862691.postman.co/workspace/My-Workspace~0028d5b2-458b-4efa-8593-0c34605468d0/collection/23512770-c5b1c659-624d-404b-9f50-8fa96e6605ac?action=share&creator=23512770).

#### This is Task description documentation 1
Task Description 1: [Task Description Documentation 1](https://docs.google.com/document/d/1irDSyhrj_JJ-R_zZ1I6YhlFZfrK6v0uChE7GVJFoeCs/edit?usp=sharing).

#### This is Task description documentation 2
Task Description 2: [Task Description Documentation 2](https://docs.google.com/document/d/1irDSyhrj_JJ-R_zZ1I6YhlFZfrK6v0uChE7GVJFoeCs/edit#:~:text=https%3A//docs.google.com/document/d/e/2PACX%2D1vTt7_AyRMR13_du6T%2D7Wj0liLvP14ZT034fvdpbyyXH4d2oWdKHSe75A0FrPqqzxGcEllZkqsnxMmmN/pub).

#### This is the Github Repository link of the backend repo 
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
- Version API using URL versioning starting with https://heritage-backend-app.herokuapp.com/api/v1  


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
- Linting Library: [ESLint](https://eslint.org/).
- Documentation 1: [Swagger](https://swagger.io/).
- Documentation 2: [Postman](https://www.postman.com/).

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
