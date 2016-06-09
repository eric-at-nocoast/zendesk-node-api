var should = require('chai').should();
var expect = require('chai').expect;

var Zendesk = require('../index.js');
var zendesk = new Zendesk({
  url: process.env.ZENDESK_URL,
  email: process.env.ZENDESK_EMAIL,
  token: process.env.ZENDESK_API_KEY
});

var TICKET_ID = 212;

describe('Zendesk', function(){
  describe('tickets', function(){
    it('should get all tickets', function(done){
      zendesk.tickets.list().then(function(tickets){
        expect(tickets).to.exist;
        done();
      });
    });

    it('should show a ticket by id', function(done){
      zendesk.tickets.show(TICKET_ID).then(function(ticket){
        expect(ticket).to.exist;
        done();
      });
    });

    it('should create a ticket', function(done){
      zendesk.tickets.create({
        subject: 'A new ticket',
        comment: {
          body: 'A ticket created with zendesk-node-api'
        }
      }).then(function(data){
        expect(data).to.exist;
        expect(data.ticket.subject).to.equal('A new ticket');
        done();
      });
    });

    it('should update a ticket', function(done){
      zendesk.tickets.update(TICKET_ID, {
        subject: 'Updated ticket'
      }).then(function(data){
        expect(data).to.exist;
        expect(data.ticket.subject).to.equal('Updated ticket');
        done();
      });
    });

    it('should delete a ticket', function(done){
      this.timeout(10000);
      zendesk.tickets.create({
        subject: 'This will be deleted',
        comment: {
          body: 'A ticket that will be deleted'
        }
      }).then(function(data){
        zendesk.tickets.delete(data.ticket.id).then(function(result){
          done();
        });
      });
    });
  });
});
