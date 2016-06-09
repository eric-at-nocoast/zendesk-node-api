var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(zendesk){
  var TICKET_FIELD_ID = 26197019;

  it('should get all ticket fields', function(done){
    zendesk.ticketFields.list().then(function(ticketFields){
      expect(ticketFields).to.exist;
      done();
    });
  });

  it('should show a ticket field by id', function(done){
    zendesk.ticketFields.show(TICKET_FIELD_ID).then(function(ticketField){
      expect(ticketField).to.exist;
      done();
    });
  });

  it('should create a ticket field', function(done){
    zendesk.ticketFields.create({
      type: 'text',
      title: 'Test ticket field for zendesk-node-api'
    }).then(function(){
      done();
    });
  });

  it('should update a ticket field', function(done){
    zendesk.ticketFields.update(TICKET_FIELD_ID, {
      type: 'text',
      title: 'Updated Ticket Field Title'
    }).then(function(){
      done();
    });
  });

  it('should delete a ticket', function(done){
    zendesk.ticketFields.create({
      type: 'text',
      title: 'Test ticket field for zendesk-node-api'
    }).then(function(data){
      zendesk.ticketFields.delete(data.ticket_field.id).then(function(result){
        done();
      });
    });
  });
}
