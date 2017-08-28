[![Build Status](https://travis-ci.org/dashedstripes/zendesk-node-api.svg?branch=master)](https://travis-ci.org/dashedstripes/zendesk-node-api)

# Zendesk NodeJS API
A wrapper library for Zendesk using NodeJS

## Getting started
Install the package via npm

```bash
$ npm install zendesk-node-api
```

Create a new instance of Zendesk passing in your Zendesk URL, email and API token.

```javascript
var Zendesk = require('zendesk-node-api');

var zendesk = new Zendesk({
  url: YOUR_ZENDESK_URL, // https://example.zendesk.com
  email: YOUR_ZENDESK_EMAIL, // me@example.com
  token: YOUR_ZENDESK_API_TOKEN // hfkUny3vgHCcV3UfuqMFZWDrLKms4z3W2f6ftjPT
});
```

You can also use a OAuth2 authentication to get the token, then you need to create a new instance of Zendesk like this:

```javascript
var Zendesk = require('zendesk-node-api');

var zendesk = new Zendesk({
  url: YOUR_ZENDESK_URL, // https://example.zendesk.com
  token: YOUR_ZENDESK_OAUTH_TOKEN // hfkUny3vgHCcV3UfuqMFZWDrLKms4z3W2f6ftjPT,
  oauth: true
});
```
Please note that when using OAuth token you won't need an e-mail.

According to the Zendesk documentation OAuth2 token will never expire, so no need to refresh it. 
More information about it you can find [here](https://support.zendesk.com/hc/en-us/articles/203663836-Using-OAuth-authentication-with-your-application#topic_kcn_23s_qk).

## Available objects
- ```tickets```
- ```ticketFields```
- ```users```
- ```userFields```
- ```macros```
- ```search``` - Only `.list(/* URL params */)` method.

I'll be adding more objects, I'm aiming for 100% test coverage so it may take a little time.

## List
Return an array of all items in the object

``` javascript
zendesk.objects.list(
  // (Optional) URL params available for each object.
  // https://developer.zendesk.com/rest_api/docs/core/
).then(function(result){
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

  // List all tickets and sort by status and order descendent
  // https://developer.zendesk.com/rest_api/docs/core/tickets#list-tickets

  zendesk.tickets.list('sort_by=status&sort_order=desc').then(function(tickets){
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

  // List all open tickets

  zendesk.search.list('query=type:ticket status:open').then(function(results){
    console.log(results);
  });

```

## Develop

1. Rename `.env.example` to `.env` and add your Zendesk URL, email and API token.
2. Rename `test/models/config.js.example` to `/test/models/config.js`.
3. Run `npm test`, some of the tests will fail, don't worry about it for now.
4. Update `/test/models/config.js` using IDs found from CURL. (see example below)
5. Run `npm test`, if your configuration is set correctly, there should be no failing tests.

### Using CURL to get configuration IDs

```bash
# Tickets
curl https://{subdomain}.zendesk.com/api/v2/tickets.json -v -u {email_address}:{password}

# Users
curl https://{subdomain}.zendesk.com/api/v2/users.json -v -u {email_address}:{password}

# User fields
curl https://{subdomain}.zendesk.com/api/v2/user_fields.json -v -u {email_address}:{password}

# Macros
curl https://{subdomain}.zendesk.com/api/v2/macros.json -v -u {email_address}:{password}
```
