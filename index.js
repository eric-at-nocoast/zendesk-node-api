var Zendesk = require('./src/zendesk.js');

var zendesk = new Zendesk({
  url: 'https://z3n3310.zendesk.com',
  email: 'agray@zendesk.com',
  token: 'hyjCGMknQUmlvOWChLoitKZFUVdsnfSUBn4DnxPd'
});

zendesk.users.create({
  name: 'Test guy',
  email: 'testguy@adngdoijgao.com'
}).then(function(){
  console.log('User created');
})
