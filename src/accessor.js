var Promise = require('promise');

var Accessor = function(config, single, plural){
  var zdrequest = require('./zdrequest.js')(config)

  return {
    list: function(){
      return new Promise(function(fufill, reject){
        zdrequest.get('/' + plural + '.json').then(function(data){
          fufill(data[plural])
        }, function(err){
          reject(err)
        })
      })
    },

    show: function(id){
      return new Promise(function(fufill, reject){
        zdrequest.get('/' + plural + '/' + id + '.json').then(function(data){
          fufill(data[single])
        }, function(err){
          reject(err)
        })
      })
    },

    create: function(data){
      var createData = {}
      createData[single] = data
      return new Promise(function(fufill, reject){
        zdrequest.post('/' + plural + '.json', createData).then(function(data){
          fufill(data)
        }, function(err){
          reject(err)
        })
      })
    },

    update: function(id, data){
      var createData = {}
      createData[single] = data;
      return new Promise(function(fufill, reject){
        zdrequest.put('/' + plural + '/' + id + '.json', createData).then(function(data){
          fufill(data)
        }, function(err){
          reject(err)
        })
      })
    },

    delete: function(id){
      return new Promise(function(fufill, reject){
        zdrequest.delete('/' + plural + '/' + id + '.json').then(function(){
          fufill(true)
        }, function(err){
          reject(err)
        })
      })
    }
  }
}

module.exports = Accessor
