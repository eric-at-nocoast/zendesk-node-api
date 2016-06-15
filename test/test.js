var should = require('chai').should();
var expect = require('chai').expect;

var Zendesk = require('../index.js');
var zendesk = new Zendesk({
  url: process.env.ZENDESK_URL,
  email: process.env.ZENDESK_EMAIL,
  token: process.env.ZENDESK_API_KEY
});

describe('Zendesk', function(){
  describe('tickets', function(){
    require('./models/tickets.js')(zendesk);
  });

  describe('ticket fields', function(){
    require('./models/ticketfields.js')(zendesk);
  });

  describe('users', function(){
    require('./models/users.js')(zendesk);
  });

  describe('user fields', function(){
    require('./models/userfields.js')(zendesk);
  });
});
