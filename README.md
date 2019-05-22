# RESTful-Node.js
**This is my Node API practice for Expense & Income App.**
## User :busts_in_silhouette:
- Controller -> UserController.js
    - createNewUser [Register](https://github.com/giantjeaks/RESTful-Node.js/blob/master/README.md#1-create-user) 
    - login [Authen Login](https://github.com/giantjeaks/RESTful-Node.js/blob/master/README.md#3-login)
    - findUser [Getuser information by ID](https://github.com/giantjeaks/RESTful-Node.js/blob/master/README.md#2-get-user-information)

## Transaction :page_facing_up:
- Controller -> UserController.js 
    - createTrans  [Add new transaction](https://github.com/giantjeaks/RESTful-Node.js/blob/master/README.md#4-create-new-transaction)
    - getTrans [Get Transactions by user](https://github.com/giantjeaks/RESTful-Node.js/blob/master/README.md#5-get-transaction-by-user-id)
    - updateTrans [Update Transaction by id](https://github.com/giantjeaks/RESTful-Node.js/blob/master/README.md#6-update-transaction-by-id)
    - deleteTrans [Delete Transactins by id](https://github.com/giantjeaks/RESTful-Node.js/blob/master/README.md#7-delete-transaction)



# Testing and Expected Result
**First of all you need to register a new user**
## 1. Create User
- `POST` /users 
- signup new user with username and password

Body:
```
{
  "username": String,
  "password": String
}
```
**Example**: `POST` /users
Body:
```
{
  "username": "TestUser",
  "password": "12345678"
}
```
#### Response Data:
```
{
    "_id": "5ce4e91730fa960d7023d8f9",
    "username": "TestUser",
    "password": "$2b$08$OkWTa4xPnJJXtFGGdker2.b30JrHwno4JRWFK5p2iTKVo58rMRozC"
}
```
## 2. Get user information

`GET` /users/:id 
- get user information by user ID

**Example:** `GET` /users/5c39f8e9d7f40f00a448a97e 
- get user information that user ID is equal 5c39f8e9d7f40f00a448a97e

#### Response Data:
```
{
  "_id": "5c39f8e9d7f40f00a448a97e",
  "username": "myname",
  "password": "mypassword"
}
```
## 3. Login
`POST` /users/login - login with username and password 
Body:
```
{
  "username": String,
  "password": String
}
```
**Example:** `POST` /users/login

Body:
```
{
  "username": "myname",
  "password": "mypassword"
}
```
**Response Data:**
```
{
  "_id": "5c39f8e9d7f40f00a448a97e",
  "username": "myname",
  "password": "mypassword"
}
```
## 4. Create new transaction
`POST` /transactions

Body:
```
{
  "user": userID,
  "amount": Number,
  "type": enum["income", "expense"],
  "remark": String,
  "date": Date
}
```
**Example:** `POST` /transactions 
- add new transaction

Body:
{
  "user": "5c39f8e9d7f40f00a448a97e",
  "amount": 100,
  "type": "expense",
  "remark": "employing cost",
  "date": "2019-01-12T21:35:11+07:00"
}

**Can check data in mongo client.

## 5. Get transaction by user ID
`GET` /transactions?user=:user 
- get transactions of some user

**Example:** `GET` /transactions?user=5c39f8e9d7f40f00a448a97e 
- get transactions of user which equals 5c39f8e9d7f40f00a448a97e

#### Response Data:
```
[
  {
    "_id": "5c39fb3991d29e00d406d3f1",
    "user": "5c39f8e9d7f40f00a448a97e",
    "amount": 200,
    "type": "expense",
    "remark": "employing cost",
    "date": "2019-01-12T14:35:11.000Z"
  }
]
```

## 6. Update transaction by ID
`PUT` /transactions/:id 
- update transaction by transaction ID

Body:
```
{
  "user": userID,
  "amount": Number,
  "type": enum["income", "expense"],
  "remark": String,
  "date": Date
}
```
**Example:** `PUT` /transactions/5c39fb3991d29e00d406d3f1 
- update transaction that transaction ID is equal 5c39fb3991d29e00d406d3f1

Body:
```
{
  "user": "5c39f8e9d7f40f00a448a97e",
  "amount": 100,
  "type": "expense",
  "remark": "employing cost",
  "date": "2019-01-12T21:35:11+07:00"
}
```
## 7. Delete transaction
`DELETE` /transactions/:id 
- delete transaction by transaction ID

**Example:** `DELETE` /transactions/5c39fb3991d29e00d406d3f1 
- delete transaction which ID equals 5c39fb3991d29e00d406d3f1
