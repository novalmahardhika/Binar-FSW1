# Binar: Challenge 03

Welcome to my Binar Challenge chapter 3 about create Resful Api Using Express.js .

## Tech stack

- [`Node Js (v18.17.1)`](https://nodejs.org/en)

  > As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.

- [`Express Js (Web Server)`](https://expressjs.com/)

  > Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- [`Nodemon`](https://www.npmjs.com/package/nodemon)

  > nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Tools

- [`vsCode (Code Editor)`](https://code.visualstudio.com/)

  > Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.

- [`GIT (Version Control)`](https://git-scm.com/)

  > Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

- [`Postman `](https://www.postman.com/)

  > Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

## Feature

### Get all Cars

> this features is to get all data cars via API. How to get that data ?
>
> - Open Postman
> - Add Request
> - Choose Method 'GET'
> - Enter URL `http://localhost:8888/cars`
> - Send Req

### Detail Car

> this features is to get data cars by id . How to get that data ?
>
> - Open Postman
> - Add Request
> - Choose Method 'GET'
> - Enter URL `http://localhost:8888/cars/:id` example `http://localhost:8888/cars/8262f0e3-04ea-4494-8cee-b7daa086b031`
> - Send Req

### Create Car

> this features is to Create new Data car . How to Create new data ?
>
> - Open Postman
> - Add Request
> - Choose Method 'POST'
> - Enter URL `http://localhost:8888/cars`
> - Enter menu `Body` > `raw` & change dropdown `Text` to `JSON`
> - Write Object and should include properties like Code Below :

```Json

  {
    "model"  : "Ferrari",
    "image" : "../../image.jpg",
    "capacity" : 2,
    "rentPerDay" : 9000000,
    "availableAt" : "2022-03-23T15:49:05.563Z",
    "description" : "This is exotic car from italy"
}

```

> - Send Req

### Update Car

> this features is to get data cars by id . How to update that data ?
>
> - Open Postman
> - Add Request
> - Choose Method 'GET'
> - Enter URL `http://localhost:8888/cars/:id` example `http://localhost:8888/cars/8262f0e3-04ea-4494-8cee-b7daa086b031`
> - Enter menu `Body` > `raw` & change dropdown `Text` to `JSON`
> - Write Properties what u want update and should include properties like Code Below :

```Json

// You don't need to write the whole thing, just select the properties what you want to update

  {
    "model"  : "Ferrari",
    "image" : "../../image.jpg",
    "capacity" : 2,
    "rentPerDay" : 9000000,
    "availableAt" : "2022-03-23T15:49:05.563Z",
    "description" : "This is exotic car from italy"
}

```

> - Send Req

### Delete Car

> this features is to delete data cars by id . How to Delete that data ?
>
> - Open Postman
> - Add Request
> - Choose Method 'DELETE'
> - Enter URL `http://localhost:8888/cars/:id` example `http://localhost:8888/cars/8262f0e3-04ea-4494-8cee-b7daa086b031`
> - Send Req

## How To Start ?

```
- Clone https://github.com/novalmahardhika/Binar-FSW1.git
- cd Binar-FSW1
- cd challenge-03
- code .
- open terminal and write 'npm i or install'
- open terminal and write 'npm run dev'
- next u can hit endpoint using postman with 'features' above
```
