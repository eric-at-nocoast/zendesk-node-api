var Ticket = function(config){
  var zdrequest = require('./zdrequest.js')(config);

  return {
    list: function(){
      return zdrequest.get('/tickets.json')
    },

    show: function(id){
      return zdrequest.get('/tickets/' + id + '.json')
    },

    create: function(data){
      return zdrequest.post('/tickets.json', {ticket: data})
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
