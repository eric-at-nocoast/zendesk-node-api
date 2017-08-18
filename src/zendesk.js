function Zendesk(config){
  config.authorization = 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64');

  if (config.oauth) {
    config.authorization = 'Bearer ' + config.token;
  }
  return {
    tickets: require('./accessor.js')(config, 'ticket', 'tickets'),
    ticketFields: require('./accessor.js')(config, 'ticket_field', 'ticket_fields'),

    organizations: require('./accessor.js')(config, 'organization', 'organizations'),
    
    users: require('./accessor.js')(config, 'user', 'users'),
    userFields: require('./accessor.js')(config, 'user_field', 'user_fields'),

    macros: require('./accessor.js')(config, 'macro', 'macros'),
    search: require('./accessor.js')(config, 'search', 'search')
  };
}

module.exports = Zendesk
