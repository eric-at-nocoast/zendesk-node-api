var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(zendesk){
  var MACRO_ID = require('./config.js').MACRO_ID;

  it('should get all macros', function(done){
    this.timeout(20000);
    zendesk.macros.list().then(function(macros){
      expect(macros).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should show a macro by id', function(done){
    this.timeout(20000);
    zendesk.macros.show(MACRO_ID).then(function(macro){
      expect(macro).to.exist;
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should create a macro', function(done){
    this.timeout(20000);
    var macroData = {
      title: 'A new macro',
      actions: [
        {field: 'current_tags', value: 'stupid_test_macro'}
      ]
    }

    zendesk.macros.create(macroData).then(function(data){
      expect(data).to.exist;
      expect(data.macro.title).to.equal('A new macro');
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should update a macro', function(done){
    this.timeout(20000);
    var testString = Math.random().toString(36).substring(7)
    zendesk.macros.update(MACRO_ID, {
      title: testString
    }).then(function(data){
      expect(data).to.exist;
      expect(data.macro.title).to.equal(testString);
      done();
    }).catch(function(err){
      done(err);
    });
  });

  it('should delete a macro', function(done){
    this.timeout(20000);
    zendesk.macros.create({
      title: 'A new macro to be deleted',
      actions: [
        {field: 'status', value: 'solved'}
      ]
    }).then(function(data){
      zendesk.macros.delete(data.macro.id).then(function(result){
        expect(result).to.be.true;
        done();
      });
    }).catch(function(err){
      done(err);
    });
  });
}
