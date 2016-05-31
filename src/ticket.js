var request = require('request');

var Ticket = function(config){
  return {
    list: function(){
      console.log('Will list all tickets');
      return new Promise(function(fufill, reject){
        request('http://google.com', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            fufill(body);
          }
          reject();
        })
      })
    },

    show: function(id){
      console.log('Will show ticket with id of', id);
    },

    create: function(data){
      var data = {ticket: data};
      console.log('Will create ticket with body', data);
    },

    update: function(id, data){
      var data = {ticket: data}
      console.log('Will update ticket with id', id, 'and body', data);
    },

    delete: function(id){
      console.log('Will delete ticket with id', id);
    }
  }
}

module.exports = Ticket;
