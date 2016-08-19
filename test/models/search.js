var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(zendesk){
  it('should get a customer user', function(done){
    this.timeout(20000);
    zendesk.search.list('query=type:user "Customer"').then(function(results){
      expect(results).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should get the open tickets', function(done){
    this.timeout(20000);
    zendesk.search.list('query=type:ticket status:open').then(function(results){
      expect(results).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });
}
