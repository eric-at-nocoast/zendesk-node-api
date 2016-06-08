var should = require('chai').should();

var Zendesk = require('../index.js');

var zendesk = new Zendesk({
  url: process.env.ZENDESK_URL,
  email: process.env.ZENDESK_EMAIL,
  token: process.env.ZENDESK_API_KEY
});

var TEST_TICKET_ID = 212;

describe('Zendesk', function(){
  describe('tickets', function(){
    it('should get all tickets', function(){
      zendesk.tickets.list().then(function(tickets){
        expect(tickets).to.be.instanceOf(Object);
      });
    });

    it('should get ticket by id', function(){
      zendesk.tickets.show(TEST_TICKET_ID).then(function(ticket){
        expect(ticket).to.be.instanceOf(Object);
      });
    });
  });
});
