# Creating the virtual teaching interface API

This API communicates between the MVP of the project and a database. It allows users to log into the MVP securely and stores variables like users login credentials, chat messages, connected rooms, etc.

## software requirements
- NodeJS

## Installation and usage

The API uses several npm modules to work. These are:
- Express
- Mongoose
- DotENV

To install the required modules run:

```bash
npm install
```
The API runs on port 3000.

## Functions

The API has the following endpoints:
- Get all rooms
- Get one room
- Post one room
- Patch one room
- Put one room
- Delete one room
- Get all users
- Get one user
- Post one user
- Patch one user
- Delete one user

## Contributors
- Jordi Franssen