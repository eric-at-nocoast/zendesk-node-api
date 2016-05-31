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
      var data = {user: data};
      console.log('Will create user with body', data);
    },

    update: function(id, data){
      var data = {user: data}
      console.log('Will update user with id', id, 'and body', data);
    },

    delete: function(id){
      console.log('Will delete user with id', id);
    }
  }
}

module.exports = User;
