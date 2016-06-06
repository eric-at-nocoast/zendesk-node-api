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
  }
}

module.exports = TicketFields
