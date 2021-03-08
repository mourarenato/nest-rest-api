<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>


# Project information

This project is Rest API for register of users. Here is used the Nest.js, Postgres database and Docker.


# Installation

Steps to run this project:

1. Copy `.env.example` to `.env` 
2. Copy `docker-compose.yml.example` to `docker-compose.yml`
3. Edit the `docker-compose.yml` with your Docker information
4. Setup database settings inside `.env` file
4. Run `docker-compose up --build` command

## Running the app

```bash
# up
$ docker-commpose up -d

# down
$ docker-compose down

# watch mode
$ docker logs --timestamps nest-rest --follow
```

# Using the project

- `[POST]` (auth/signup) - To create `ADMIN` type user: 

```bash
#request:

  {
      "email": "myuseradmin@email.com",
      "name": "User admin",
      "password": "123456",
      "passwordConfirmation": "123456"
  }

#response:

  {
      "message": "Successful registration"
  }
```

- `[POST]` (/auth/signin) - To login with `ADMIN` user: 

```bash
#request:

  {
      "email": "myuseradmin@email.com",
      "password" : "123456"
  }

#response:

  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0MGRkZDZjLTdjZTYtNDIyNy1hMjk3LTg0ZThiOGUxYzAyMSIsImlhdCI6MTYxNTA3NzQwNSwiZXhwIjoxNjE1MDk1NDA1fQ.ilWWuZQA2AhrJJTWfNJfnVKvHr9At2o7hns4fU_gBR8"
  }
```

- `[GET]` (/auth/me) - To get data of `ADMIN` user:

```bash
#bearer token (ADMIN):

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0MGRkZDZ
jLTdjZTYtNDIyNy1hMjk3LTg0ZThiOGUxYzAyMSIsImlhdCI6MTYxNTA3NzQwNSwiZXhwI
joxNjE1MDk1NDA1fQ.ilWWuZQA2AhrJJTWfNJfnVKvHr9At2o7hns4fU_gBR8"

#response:

{
    "email": "myuseradmin@email.com",
    "name": "User admin",
    "role": "ADMIN",
    "status": true
}
```

- `[POST]` (/users) - To register an `USER` type user:

```bash
#bearer token (ADMIN):

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0MGRkZDZ
jLTdjZTYtNDIyNy1hMjk3LTg0ZThiOGUxYzAyMSIsImlhdCI6MTYxNTA3NzQwNSwiZXhwI
joxNjE1MDk1NDA1fQ.ilWWuZQA2AhrJJTWfNJfnVKvHr9At2o7hns4fU_gBR8"

#request:

{
    "email": "myuserone@email.com",
    "name": "User one",
    "password": "123456",
    "passwordConfirmation": "123456"
}

#response:

{
    "user": {
        "email": "myuserone@email.com",
        "name": "User one",
        "role": "USER",
        "status": true,
        "confirmationToken": "82ed39b8b4547b4efcf49bbe2f37d24ec954140e33da89b561e505dd74d9e608",
        "recoverToken": null,
        "id": "08da5084-28ad-4fe5-8e36-7b5af3bf7f45",
        "createdAt": "2021-03-07T01:41:05.290Z",
        "updatedAt": "2021-03-07T01:41:05.290Z"
    },
    "message": "User successfully registered"
}
```

- `[GET]` (/users/:id) - To get an user:

```bash
#bearer token (ADMIN):

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0MGRkZDZ
jLTdjZTYtNDIyNy1hMjk3LTg0ZThiOGUxYzAyMSIsImlhdCI6MTYxNTA3NzQwNSwiZXhwI
joxNjE1MDk1NDA1fQ.ilWWuZQA2AhrJJTWfNJfnVKvHr9At2o7hns4fU_gBR8"

#path variables (in postman):

key -> id
value -> 08da5084-28ad-4fe5-8e36-7b5af3bf7f45

#response:

{
    "user": {
        "id": "2a21e104-7eda-47ff-9128-21520f19edb8",
        "email": "myuserone@email.com",
        "name": "User one",
        "role": "USER"
    },
    "message": "User found"
}
```

- `[PATCH]` (/users/:id)  - To alter data of user

```bash
#bearer token (ADMIN):

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0MGRkZDZ
jLTdjZTYtNDIyNy1hMjk3LTg0ZThiOGUxYzAyMSIsImlhdCI6MTYxNTA3NzQwNSwiZXhwI
joxNjE1MDk1NDA1fQ.ilWWuZQA2AhrJJTWfNJfnVKvHr9At2o7hns4fU_gBR8"

#path variables (in postman):

key -> id
value -> 08da5084-28ad-4fe5-8e36-7b5af3bf7f45

#request:

{
    "email": "myusertwo@email.com",
    "name": "User two"
}

#response:

{
    "id": "2a21e104-7eda-47ff-9128-21520f19edb8",
    "email": "myusertwo@email.com",
    "name": "User two",
    "role": "USER",
    "confirmationToken": null,
    "recoverToken": null,
    "updatedAt": "2021-03-07T03:03:05.878Z"
}
```

- `[DELETE]` (/users/:id)  - To delete an user

```bash
#bearer token (ADMIN):

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0MGRkZDZ
jLTdjZTYtNDIyNy1hMjk3LTg0ZThiOGUxYzAyMSIsImlhdCI6MTYxNTA3NzQwNSwiZXhwI
joxNjE1MDk1NDA1fQ.ilWWuZQA2AhrJJTWfNJfnVKvHr9At2o7hns4fU_gBR8"

#path variables (in postman):

key -> id
value -> 08da5084-28ad-4fe5-8e36-7b5af3bf7f45

#request:

{
    "email": "myusertwo@email.com",
    "name": "User two"
}

#response:

{
    "message": "User removed successfully"
}
```