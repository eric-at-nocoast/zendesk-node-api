var TicketFields = function(config){
  var zdrequest = require('./zdrequest.js')(config)

  return {
    list: function(){
      return new Promise(function(fufill, reject){
        zdrequest.get('/ticket_fields.json').then(function(data){
          fufill(data.ticket_fields)
        }, function(){
          reject()
        })
      })
    },

    show: function(id){
      return new Promise(function(fufill, reject){
        zdrequest.get('/ticket_fields/' + id + '.json').then(function(data){
          fufill(data.ticket_field)
        }, function(){
          reject()
        })
      })
    },

    create: function(data){
      return zdrequest.post('/ticket_fields.json', {ticket_field: data})
    },

    update: function(id, data){
      return zdrequest.put('/ticket_fields/' + id + '.json', {ticket_field: data})
    },

    delete: function(id){
      return zdrequest.delete('/ticket_fields/' + id + '.json')
    }
  }
}

module.exports = TicketFields
