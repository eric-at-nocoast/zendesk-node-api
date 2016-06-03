var User = function(config){
  var zdrequest = require('./zdrequest.js')(config);

  return {
    list: function(){
      return new Promise(function(fufill, reject){
        zdrequest.get('/users.json').then(function(data){
          fufill(data.users)
        }, function(){
          reject()
        })
      })
    },

    show: function(id){
      return new Promise(function(fufill, reject){
        zdrequest.get('/users/' + id + '.json').then(function(data){
          fufill(data.user)
        }, function(){
          reject()
        })
      })
    },

    create: function(data){
      return zdrequest.post('/users.json', {user: data})
    },

    update: function(id, data){
      return zdrequest.put('/users/' + id + '.json', {user: data})
    },

    delete: function(id){
      return zdrequest.delete('/users/' + id + '.json')
    }
  }
}

module.exports = User;
