# Zendesk NodeJS API
A wrapper library for Zendesk using NodeJS

* [users](https://github.com/dashedstripes/zendesk-node-api#users)
* [user Fields](https://github.com/dashedstripes/zendesk-node-api#user-fields)
* [Users](https://github.com/dashedstripes/zendesk-node-api#users)
* [User Fields](https://github.com/dashedstripes/zendesk-node-api#user-fields)

## Getting started
Install the package via npm

```bash
$ npm install zendesk-node-api
```

Create a new instance of Zendesk, passing in your Zendesk URL, email and API token.

```javascript
var Zendesk = require('zendesk-node-api');

var zendesk = new Zendesk({
  url: YOUR_ZENDESK_URL, // https://example.zendesk.com
  email: YOUR_ZENDESK_EMAIL, // me@example.com
  token: YOUR_ZENDESK_API_TOKEN // hfkUny3vgHCcV3UfuqMFZWDrLKms4z3W2f6ftjPT
});
```

## users
These methods allow you to interact with users within Zendesk

### List users
Returns a promise containing an array of all users in your Zendesk

```javascript
zendesk.users.list().then(function(users){
  // Do something with users
});
```

### Show a user
Returns a promise containing an object of a specific user

```javascript
zendesk.users.show(user_ID).then(function(user){
  // Do something with user
});
```

### Create a user
Create a user inside Zendesk

```javascript
zendesk.users.create({
  subject: 'A new user',
  comment: {
      body: 'A user created with zendesk-node-api'
  }
}).then(function(){
  console.log('user created');
});
```

### Update a user
Update a user inside Zendesk

```javascript
zendesk.users.update(user_ID, {
  comment: {
    body: 'Updated this user with zendesk-node-api'
  }
}).then(function(){
  console.log('user updated');
});
```

### Delete a user
Delete a user inside Zendesk

```javascript
zendesk.users.delete(user_ID).then(function(){
  console.log('user deleted');
});
```

## user Fields
These methods allow you to interact with user fields within Zendesk

### List user fields
Returns a promise containing an array of all user fields in your Zendesk

```javascript
zendesk.userFields.list().then(function(userFields){
  // Do something with userFields
});
```

### Show a user field
Returns a promise containing an object of a specific user field

```javascript
zendesk.userFields.show(user_FIELD_ID).then(function(userField){
  // Do something with userField
});
```

### Create a user field
Create a user field inside Zendesk

```javascript
zendesk.userFields.create({
  type: 'text',
  title: 'Title for the user Field'
}).then(function(){
  console.log('user field created!');
});
```

### Update a user field
Update a user field inside Zendesk

```javascript
zendesk.userFields.update(user_FIELD_ID, {
  type: 'text',
  title: 'Updated user Field Title'
}).then(function(){
  console.log('user field updated!');
});
```

### Delete a user field
Delete a user field inside Zendesk

```javascript
zendesk.userFields.delete(user_FIELD_ID).then(function(){
  console.log('user field deleted');
});
```

## Users
These methods allow you to interact with users within Zendesk

### List Users
Returns a promise containing an array of all users in your Zendesk

```javascript
zendesk.users.list().then(function(users){
  // Do something with users
});
```

### Show a user
Returns a promise containing an object of a specific user

```javascript
zendesk.users.show(USER_ID).then(function(user){
  // Do something with user
});
```

### Create a user
Create a user inside Zendesk

```javascript
zendesk.users.create({
  name: 'API User',
  email: 'user@zendesknodeapi.com'
}).then(function(){
  console.log('User created');
});
```

### Update a user
Update a user inside Zendesk

```javascript
zendesk.users.update(USER_ID, {
  email: 'updatedemail@zendesknodeapi.com'
}).then(function(){
  console.log('User updated');
});
```

### Delete a user
Delete a user inside Zendesk

```javascript
zendesk.users.delete(USER_ID).then(function(){
  console.log('User deleted');
});
```

## User Fields
These methods allow you to interact with user fields within Zendesk

### List user fields
Returns a promise containing an array of all user fields in your Zendesk

```javascript
zendesk.userFields.list().then(function(userFields){
  // Do something with userFields
});
```

### Show a user field
Returns a promise containing an object of a specific user field

```javascript
zendesk.userFields.show(USER_FIELD_ID).then(function(userField){
  // Do something with userField
});
```

### Create a user field
Create a user field inside Zendesk

```javascript
zendesk.userFields.create({
  type: 'text',
  title: 'User field',
  key: 'user_field'
}).then(function(){
  console.log('User field created!');
});
```

### Update a user field
Update a user field inside Zendesk

```javascript
zendesk.userFields.update(USER_FIELD_ID, {
  title: 'Updated User field title',
}).then(function(){
  console.log('User field updated!');
});
```

### Delete a user field
Delete a user field inside Zendesk

```javascript
zendesk.userFields.delete(USER_FIELD_ID).then(function(){
  console.log('User field deleted');
});
```
