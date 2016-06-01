var Zendesk = require('./src/zendesk.js');

var zendesk = new Zendesk({
  url: 'https://z3n3310.zendesk.com',
  email: 'agray@zendesk.com',
  token: 'hyjCGMknQUmlvOWChLoitKZFUVdsnfSUBn4DnxPd'
});

zendesk.users.delete(2814976665).then(function(){
  console.log('User deleted');
})
