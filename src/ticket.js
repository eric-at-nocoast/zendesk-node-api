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
      return zdrequest.put('/tickets/' + id + '.json', {ticket: data})
    },

    delete: function(id){
      console.log('Will delete ticket with id', id);
    }
  }
}

module.exports = Ticket;
