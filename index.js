var Zendesk = require('./src/zendesk.js');

var zendesk = new Zendesk({
  url: 'https://z3n3310.zendesk.com',
  email: 'agray@zendesk.com',
  token: 'hyjCGMknQUmlvOWChLoitKZFUVdsnfSUBn4DnxPd'
});

zendesk.tickets.create({
  subject: "Node api test ticket",
  comment: {
    body: "Body for my test ticket"
  }
}).then(function(){
  console.log('Ticket created');
})
