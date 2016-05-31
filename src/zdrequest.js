var request = require('request');

var ZDRequest = function(config){
  return {
    get: function(uri){
      var options = {
        url: config.url + '/api/v2/' + uri,
        headers: {
          Authorization: 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64')
        }
      }

      return new Promise(function(fufill, reject){
        request(options, function(err, res, body){
          if (err) { reject(err); }
          fufill(body);
        });
      })
    }
  }
}

module.exports = ZDRequest
