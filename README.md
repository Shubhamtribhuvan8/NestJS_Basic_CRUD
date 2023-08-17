<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## This API allows you to manage tasks using basic CRUD operations. It is built using NestJS and MongoDB as the database

# Endpoints:

## Get All Tasks
# Endpoints
```
1. Get All Tasks
GET http://localhost:3000/tasks
Returns a list of all tasks available in the system.
Response:
Status: 200 OK
Response: [
  {
    "_id": "64dcd46ab3038da1301794d4",
    "title": "Hello world 2",
    "description": "hello world this is nestJS",
    "status": "OPEN",
    "__v": 0
  }
]
```

```
2. Create a New Task
POST http://localhost:3000/tasks
Create a new task with the provided data.
Request Body:
{
  "title": "Hello world 3",
  "description": "hello world3 this is nestJS",
  "status": "OPEN"
}

Response:
Status: 200 OK
Response: [
  {
    "_id": "64dcd46ab3038da1301794d4",
    "title": "Hello world 2",
    "description": "hello world this is nestJS",
    "status": "OPEN",
    "__v": 0
  }
]
```

```
3. Update a Task
PUT http://localhost:3000/tasks/64dcd46ab3038da1301794d4
Update the task with the provided ID.
Request Body:
{
  "title": "Hello world 3",
  "description": "hello world3 this is nestJS",
  "status": "OPEN"
}
Response (Success):
Status: 200 OK
Response: [
  {
    "_id": "64dcd46ab3038da1301794d4",
    "title": "Hello world 3",
    "description": "hello world3 this is nestJS",
    "status": "OPEN",
    "__v": 0
  }
]
Response (Error - Task Not Found):
Status: 404 NOT FOUND
Response: {
  "message": "Task with ID 64dcd46ab3038da1301794d4 not found",
  "error": "Not Found",
  "statusCode": 404
}
```

```
4. Delete a Task
DELETE http://localhost:3000/tasks/64dcd46ab3038da1301794d4
Delete the task with the provided ID.
Response (Success):

Status: 200 OK
Response: []

Response (Error - Task Not Found):
Status: 404 NOT FOUND
Response: {
  "message": "Task with ID 64dcd46ab3038da1301794d4 not found",
  "error": "Not Found",
  "statusCode": 404
}
```
