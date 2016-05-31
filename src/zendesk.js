function Zendesk(config){
  return {
    tickets: require('./ticket.js')(config),
    users: require('./user.js')(config)
  };
}

module.exports = Zendesk
