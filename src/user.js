var User = function(config){
  return {
    list: function(){
      console.log('Will list all users');
    },

    show: function(id){
      console.log('Will show user with id of', id);
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
