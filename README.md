# Zendesk NodeJS API
A wrapper library for Zendesk using NodeJS

## Getting started
Create a new instance of Zendesk, passing in your Zendesk URL, email and API token.

```
var zendesk = new Zendesk({
    url: [YOUR_ZENDESK_URL],
    email: [YOUR_ZENDESK_EMAIL],
    token: [YOUR_ZENDESK_API_TOKEN]
});
```

## Tickets
These methods allow you to interact with tickets within Zendesk

### List tickets
Returns a promise containing a JSON object of all tickets in your Zendesk

```
zendesk.tickets.list().then(function(tickets){
    // Do something with tickets
});
```

### Show a ticket
Returns a promise containing a JSON object of a specific ticket

```
zendesk.tickets.show(TICKET_ID).then(function(ticket){
    // Do something with ticket
});
```

### Create a ticket
Create a ticket inside Zendesk

```
zendesk.tickets.create({
    subject: 'A new ticket'
    comment: {
        body: 'A ticket created with zendesk-node-api'
    }
}).then(function(){
    console.log('Ticket created');
});
```

### Update a ticket
Update a ticket inside Zendesk

```
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

```
zendesk.tickets.delete(TICKET_ID).then(function(){
    console.log('Ticket deleted');
});
```
