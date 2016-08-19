var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(zendesk){
  var USER_ID = require('./config.js').USER_ID;

  it('should get all users', function(done){
    this.timeout(20000);
    zendesk.users.list().then(function(users){
      expect(users).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should get an admin user (Testing URL params)', function(done){
    this.timeout(20000);
    zendesk.users.list('role=admin').then(function(users){
      expect(users).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should show a user by id', function(done){
    this.timeout(20000);
    zendesk.users.show(USER_ID).then(function(user){
      expect(user).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should create a user', function(done){
    this.timeout(20000);
    var testString = Math.random().toString(36).substring(7)
    var testEmail = testString + '@zendesknodeapi.com';
    zendesk.users.create({
      name: testString,
      email: testEmail
    }).then(function(data){
      expect(data).to.exist;
      expect(data.user.email).to.equal(testEmail);
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should update a user', function(done){
    this.timeout(20000);
    var testString = Math.random().toString(36).substring(7)
    zendesk.users.update(USER_ID, {
      name: testString
    }).then(function(data){
      expect(data).to.exist;
      expect(data.user.name).to.equal(testString);
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should delete a user', function(done){
    this.timeout(20000);
    var testString = Math.random().toString(36).substring(7)
    var testEmail = testString + '@zendesknodeapi.com';
    zendesk.users.create({
      name: 'API User to be deleted',
      email: testEmail
    }).then(function(data){
      zendesk.users.delete(data.user.id).then(function(result){
        expect(result).to.be.true;
        done();
      });
    }).catch(function(err){
      done(err);
    });
  });
}
