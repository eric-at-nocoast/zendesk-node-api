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

## List
Return an array of all items in the object

```
zendesk.objects.list().then(function(result){
    console.log(result);
});
```

## Show
Return an item from an ID

```
zendesk.objects.show(OBJECT_ID).then(function(result){
    console.log(result);
});
```

## Create
Create an item using keys and values from the [Zendesk documentation](https://developer.zendesk.com/rest_api/docs/core/).

```
zendesk.objects.create({
    // keys and values from the zendesk docs
    // https://developer.zendesk.com/rest_api/docs/core/
}).then(function(result){
  // result == true
})
```

## Update
Update an item from and ID using keys and values from the [Zendesk documentation](https://developer.zendesk.com/rest_api/docs/core/).

```
zendesk.objects.update(OBJECT_ID, {
    // keys and values from the zendesk docs
    // https://developer.zendesk.com/rest_api/docs/core/
}).then(function(result){
    console.log(result);
})
```

## Delete
Delete an item from ID

```
zendesk.objects.delete(OBJECT_ID).then(function(result){
    // result == true
});
```
