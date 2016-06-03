# Zendesk NodeJS API
A wrapper library for Zendesk using NodeJS

* [Tickets](https://github.com/dashedstripes/zendesk-node-api#tickets)
* [Users](https://github.com/dashedstripes/zendesk-node-api#users)

## Getting started
Create a new instance of Zendesk, passing in your Zendesk URL, email and API token.

```javascript
var zendesk = new Zendesk({
  url: YOUR_ZENDESK_URL,
  email: YOUR_ZENDESK_EMAIL,
  token: YOUR_ZENDESK_API_TOKEN
});
```

## Tickets
These methods allow you to interact with tickets within Zendesk

### List tickets
Returns a promise containing an object of all tickets in your Zendesk

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

## Users
These methods allow you to interact with users within Zendesk

### List Users
Returns a promise containing a JSON object of all users in your Zendesk

```javascript
zendesk.users.list().then(function(users){
  // Do something with users
});
```

### Show a user
Returns a promise containing a JSON object of a specific user

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
