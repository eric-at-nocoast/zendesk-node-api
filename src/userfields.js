var UserFields = function(config){
  var zdrequest = require('./zdrequest.js')(config)

  return {
    list: function(){
      return new Promise(function(fufill, reject){
        zdrequest.get('/user_fields.json').then(function(data){
          fufill(data.user_fields)
        }, function(){
          reject()
        })
      })
    },

    show: function(id){
      return new Promise(function(fufill, reject){
        zdrequest.get('/user_fields/' + id + '.json').then(function(data){
          fufill(data.user_field)
        }, function(){
          reject()
        })
      })
    },

    create: function(data){
      return zdrequest.post('/user_fields.json', {user_field: data})
    },

    update: function(id, data){
      return zdrequest.put('/user_fields/' + id + '.json', {user_field: data})
    },

    delete: function(id){
      return zdrequest.delete('/user_fields/' + id + '.json')
    }
  }
}

module.exports = UserFields
