var Promise = require('promise');

var Accessor = function(config, single, plural){
  var zdrequest = require('./zdrequest.js')(config)

  return {
    list: function(){
      return new Promise(function(fufill, reject){
        zdrequest.get('/' + plural + '.json').then(function(data){
          fufill(data[plural])
        }, function(){
          reject()
        })
      })
    },

    show: function(id){
      return new Promise(function(fufill, reject){
        zdrequest.get('/' + plural + '/' + id + '.json').then(function(data){
          fufill(data[single])
        }, function(){
          reject()
        })
      })
    },

    create: function(data){
      var createData = {}
      createData[single] = data;
      return zdrequest.post('/' + plural + '.json', createData)
    },

    update: function(id, data){
      var createData = {}
      createData[single] = data;
      return zdrequest.put('/' + plural + '/' + id + '.json', createData)
    },

    delete: function(id){
      return zdrequest.delete('/' + plural + '/' + id + '.json')
    }
  }
}

module.exports = Accessor
