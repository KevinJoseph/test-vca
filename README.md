# Node.js Typescript - Technical Test VCA

This project implements an apiREST part of technical test VCA.

## Features

- Typescript
- MongoDB
- Supports ES2015 syntax + features (`export`, `import`, `async`, `await`, `Promise`, ...)
- Integrates nicely with [`serverless-offline`](https://github.com/dherault/serverless-offline)

# Installation
- Clone the repository
```
git clone https://github.com/KevinJoseph/test-vca.git
```
- Install dependencies
```
cd test-vca
npm install
npm run dev
```

## Documentation POSTMAN
https://documenter.getpostman.com/view/5768800/2s8YsnYwx2

# Getting started


## Step1 : Register
Send a POST request to `http://localhost:3000/api/signup`
with the following payload ** :
```json
{
    "username":"kevin",
    "email":"kevin@gmail.com",
    "password":"qwerty"
}
```
You should get a JWT token in the response :
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdlODk0YzRhNTI3NTAwNWRhZjZmOWUiLCJpYXQiOjE2NjkyMzcwNjgsImV4cCI6MTY2OTMyMzQ2OH0.c8pk8PN2joEqnL08vX8IpZ7525krR6m-G_wfQc9EfeY"
}
```

## Step2 : Login
Send a POST request to `http://localhost:3000/api/signin`
with the following payload ** :
```json
{
{
    "email":"kevin@gmail.com",
    "password":"qwerty"
}
}
```
You should get a JWT token in the response :
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdlODk0YzRhNTI3NTAwNWRhZjZmOWUiLCJpYXQiOjE2NjkyMzcwNjgsImV4cCI6MTY2OTMyMzQ2OH0.c8pk8PN2joEqnL08vX8IpZ7525krR6m-G_wfQc9EfeY"
}
```


## Step3 : Send Options
## First:
```
Add the JWT token to the API KEY :
```http
Key: authorization
Value:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lMiIsImlhdCI6MTU1MDU4MTA4NH0.WN5D-BFLypnuklvO3VFQ5ucDjBT68R2Yc-gj8AlkRAs
```

Send a POST request to `http://localhost:3000/api/option`
with the following payload :
```json
{
    "itemRandom": {
        "name": "Kevin",
        "percentage": 50
    },
    "inputArray": [
        {
            "name": "Kevin",
            "percentage": 50
        },
        {
            "name": "Ramos",
            "percentage": 50
        }
    ]
}
```
You should get an authorization **denied** !
```json
{
  "error": "Invalid Token"
}
