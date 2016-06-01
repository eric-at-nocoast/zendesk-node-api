var Zendesk = require('./src/zendesk.js');

var zendesk = new Zendesk({
  url: 'https://z3n3310.zendesk.com',
  email: 'agray@zendesk.com',
  token: 'hyjCGMknQUmlvOWChLoitKZFUVdsnfSUBn4DnxPd'
});

zendesk.tickets.update(190, {
  comment: {
    body: 'This is being updated with the api client'
  }
}).then(function(){
  console.log('Ticket updated');
})
