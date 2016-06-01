var Zendesk = require('./src/zendesk.js');

var zendesk = new Zendesk({
  url: 'https://z3n3310.zendesk.com',
  email: 'agray@zendesk.com',
  token: 'hyjCGMknQUmlvOWChLoitKZFUVdsnfSUBn4DnxPd'
});

zendesk.users.update(2744920225, {
  name: 'Node api test user'
}).then(function(){
  console.log('User updated');
})
