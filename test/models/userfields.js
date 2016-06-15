var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(zendesk){
  var USER_FIELD_ID = require('./config.js').USER_FIELD_ID;

  it('should get all user fields', function(done){
    this.timeout(20000);
    zendesk.userFields.list().then(function(userFields){
      expect(userFields).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should show a user field by id', function(done){
    this.timeout(20000);
    zendesk.userFields.show(USER_FIELD_ID).then(function(userField){
      expect(userField).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should create a user field', function(done){
    this.timeout(20000);
    var testString = Math.random().toString(36).substring(7);
    zendesk.userFields.create({
      type: 'text',
      key: testString,
      title: testString
    }).then(function(data){
      expect(data.user_field.title).to.equal(testString);
      expect(data).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should update a user field', function(done){
    this.timeout(20000);
    var testString = Math.random().toString(36).substring(7);
    zendesk.userFields.update(USER_FIELD_ID, {
      description: testString
    }).then(function(data){
      expect(data).to.exist;
      expect(data.user_field.description).to.equal(testString);
      done();
    }).catch(function(err){
      done(err);
    });
  });


  it('should delete a user field', function(done){
    this.timeout(20000);
    zendesk.userFields.create({
      type: 'text',
      key: 'test_user_field_to_be_deleted',
      title: 'Test user field to be deleted'
    }).then(function(data){
      zendesk.userFields.delete(data.user_field.id).then(function(result){
        expect(result).to.be.true;
        done();
      });
    }).catch(function(err){
      done(err);
    });;
  });
}
