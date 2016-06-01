var User = function(config){
  var zdrequest = require('./zdrequest.js')(config);

  return {
    list: function(){
      return zdrequest.get('/users.json')
    },

    show: function(id){
      return zdrequest.get('/users/' + id + '.json')
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
