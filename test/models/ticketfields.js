var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(zendesk){
  var TICKET_FIELD_ID = 27368485;

  it('should get all ticket fields', function(done){
    this.timeout(20000);
    zendesk.ticketFields.list().then(function(ticketFields){
      expect(ticketFields).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should show a ticket field by id', function(done){
    this.timeout(20000);
    zendesk.ticketFields.show(TICKET_FIELD_ID).then(function(ticketField){
      expect(ticketField).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should create a ticket field', function(done){
    this.timeout(20000);
    zendesk.ticketFields.create({
      type: 'text',
      title: 'Test ticket field for zendesk-node-api'
    }).then(function(data){
      expect(data).to.exist;
      expect(data.ticket_field.title).to.equal('Test ticket field for zendesk-node-api');
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should update a ticket field', function(done){
    this.timeout(20000);
    var testString = Math.random().toString(36).substring(7);
    zendesk.ticketFields.update(TICKET_FIELD_ID, {
      description: testString
    }).then(function(data){
      expect(data).to.exist;
      expect(data.ticket_field.description).to.equal(testString);
      done();
    }).catch(function(err){
      done(err);
    });
  });


  it('should delete a ticket field', function(done){
    this.timeout(20000);
    zendesk.ticketFields.create({
      type: 'text',
      title: 'Test ticket field to be deleted'
    }).then(function(data){
      zendesk.ticketFields.delete(data.ticket_field.id).then(function(result){
        expect(result).to.be.true;
        done();
      });
    }).catch(function(err){
      done(err);
    });;
  });
}
