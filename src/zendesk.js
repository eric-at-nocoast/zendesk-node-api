function Zendesk(config){
  return {
    tickets: require('./ticket.js')(config),
    ticketFields: require('./ticketfields.js')(config),
    users: require('./user.js')(config),
    userFields: require('./userfields.js')(config)
  };
}

module.exports = Zendesk
