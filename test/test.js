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
    require('./models/ticket.js')(zendesk);
  });
});
