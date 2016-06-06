# Zendesk NodeJS API
A wrapper library for Zendesk using NodeJS

* [Tickets](https://github.com/dashedstripes/zendesk-node-api#tickets)
* [Ticket Fields](https://github.com/dashedstripes/zendesk-node-api#ticket-fields)
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

## Tickets
These methods allow you to interact with tickets within Zendesk

### List tickets
Returns a promise containing an array of all tickets in your Zendesk

```javascript
zendesk.tickets.list().then(function(tickets){
  // Do something with tickets
});
```

### Show a ticket
Returns a promise containing an object of a specific ticket

```javascript
zendesk.tickets.show(TICKET_ID).then(function(ticket){
  // Do something with ticket
});
```

### Create a ticket
Create a ticket inside Zendesk

https://developer.zendesk.com/rest_api/docs/core/tickets#create-ticket

```javascript
zendesk.tickets.create({
  subject: 'A new ticket',
  comment: {
    body: 'A ticket created with zendesk-node-api'
  }
}).then(function(){
  console.log('Ticket created');
});
```

### Update a ticket
Update a ticket inside Zendesk

https://developer.zendesk.com/rest_api/docs/core/tickets#update-ticket

```javascript
zendesk.tickets.update(TICKET_ID, {
  comment: {
    body: 'Updated this ticket with zendesk-node-api'
  }
}).then(function(){
  console.log('Ticket updated');
});
```

### Delete a ticket
Delete a ticket inside Zendesk

```javascript
zendesk.tickets.delete(TICKET_ID).then(function(){
  console.log('Ticket deleted');
});
```

## Ticket Fields
These methods allow you to interact with ticket fields within Zendesk

### List ticket fields
Returns a promise containing an array of all ticket fields in your Zendesk

```javascript
zendesk.ticketFields.list().then(function(ticketFields){
  // Do something with ticketFields
});
```

### Show a ticket field
Returns a promise containing an object of a specific ticket field

```javascript
zendesk.ticketFields.show(TICKET_FIELD_ID).then(function(ticketField){
  // Do something with ticketField
});
```

### Create a ticket field
Create a ticket field inside Zendesk

https://developer.zendesk.com/rest_api/docs/core/ticket_fields#create-ticket-fields

```javascript
zendesk.ticketFields.create({
  type: 'text',
  title: 'Title for the Ticket Field'
}).then(function(){
  console.log('Ticket field created!');
});
```

### Update a ticket field
Update a ticket field inside Zendesk

https://developer.zendesk.com/rest_api/docs/core/ticket_fields#update-ticket-fields

```javascript
zendesk.ticketFields.update(TICKET_FIELD_ID, {
  type: 'text',
  title: 'Updated Ticket Field Title'
}).then(function(){
  console.log('Ticket field updated!');
});
```

### Delete a ticket field
Delete a ticket field inside Zendesk

```javascript
zendesk.ticketFields.delete(TICKET_FIELD_ID).then(function(){
  console.log('Ticket field deleted');
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
These methods allow you to interact with ticket fields within Zendesk

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
  // Do something with ticketField
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
