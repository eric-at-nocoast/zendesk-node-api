var Zendesk = require('./src/zendesk.js');

var zendesk = new Zendesk({
  url: 'https://z3n3310.zendesk.com',
  email: 'agray@zendesk.com',
  token: 'hyjCGMknQUmlvOWChLoitKZFUVdsnfSUBn4DnxPd'
});

zendesk.tickets.update(193, {
  comment: {
    body: 'Updated this ticket using the zendesk-node-api'
  }
}).then(function(){
  console.log('Ticket updated');
})
