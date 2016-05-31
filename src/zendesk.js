function Zendesk(config){
  return {
    tickets: require('./tickets.js')(config),
    users: require('./users.js')(config)
  };
}

module.exports = Zendesk
