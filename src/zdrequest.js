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
          fufill(JSON.parse(body));
        });
      })
    },

    post: function(uri, data){
      var options = {
        url: config.url + '/api/v2/' + uri,
        headers: {
          Authorization: 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64')
        },
        form: data
      }

      return new Promise(function(fufill, reject){
        request.post(options, function(err, res, body){
          if (err) { reject(err); }
          fufill(JSON.parse(body));
        });
      })
    },

    put: function(uri, data){
      var options = {
        url: config.url + '/api/v2/' + uri,
        method: 'PUT',
        headers: {
          Authorization: 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64')
        },
        form: data
      }

      return new Promise(function(fufill, reject){
        request(options, function(err, res, body){
          if (err) { reject(err); }
          fufill(JSON.parse(body));
        });
      })
    },

    delete: function(uri, data){
      var options = {
        url: config.url + '/api/v2/' + uri,
        headers: {
          Authorization: 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64')
        }
      }

      return new Promise(function(fufill, reject){
        request.delete(options, function(err, res, body){
          if (err) { reject(err); }
          fufill();
        });
      })
    }
  }
}

module.exports = ZDRequest
