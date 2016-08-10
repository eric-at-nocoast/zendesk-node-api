[![Build Status](https://travis-ci.org/dashedstripes/zendesk-node-api.svg?branch=master)](https://travis-ci.org/dashedstripes/zendesk-node-api)

# Zendesk NodeJS API
A wrapper library for Zendesk using NodeJS

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

## Available objects
- ```tickets```
- ```ticketFields```
- ```users```
- ```userFields```
- ```macros```

I'll be adding more objects, I'm aiming for 100% test coverage so it may take a little time.

## List
Return an array of all items in the object

``` javascript
zendesk.objects.list().then(function(result){
    console.log(result);
});
```

## Show
Return an item from an ID

``` javascript
zendesk.objects.show(OBJECT_ID).then(function(result){
    console.log(result);
});
```

## Create
Create an item using keys and values from the [Zendesk documentation](https://developer.zendesk.com/rest_api/docs/core/).

``` javascript
zendesk.objects.create({
    // keys and values from the zendesk docs
    // https://developer.zendesk.com/rest_api/docs/core/
}).then(function(result){
  // result == true
})
```

## Update
Update an item from and ID using keys and values from the [Zendesk documentation](https://developer.zendesk.com/rest_api/docs/core/).

``` javascript
zendesk.objects.update(OBJECT_ID, {
    // keys and values from the zendesk docs
    // https://developer.zendesk.com/rest_api/docs/core/
}).then(function(result){
    console.log(result);
})
```

## Delete
Delete an item from ID

``` javascript
zendesk.objects.delete(OBJECT_ID).then(function(result){
    // result == true
});
```

## Example

``` javascript
  // List all tickets

  zendesk.tickets.list().then(function(tickets){
    console.log(tickets);
  });

  // Show a single ticket

  zendesk.tickets.show(TICKET_ID).then(function(ticket){
    console.log(ticket);
  });

  // Create a ticket

  zendesk.tickets.create({
    subject: 'A new ticket',
    comment: {
      body: 'A ticket created with zendesk-node-api'
    }
  }).then(function(result){
    console.log(result);
  });

  // Update a ticket

  zendesk.tickets.update(TICKET_ID, {
    subject: 'An updated subject'
  }).then(function(result){
    console.log(result);
  });

  // Delete a ticket

  zendesk.tickets.delete(TICKET_ID).then(function(result){
    // result == true
  });

```
