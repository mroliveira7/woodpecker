const Twitter = require('twitter');
const websocket = require('websocket');

var client = new Twitter({
  consumer_key: 'gMAwT2qYnuzKotGot96HKYSnX',
  consumer_secret: 'oUwvhNEjfm2f0cFOMmnqw11Ds4bEa8zCzMQHlCj33acdEQcteV',
  access_token_key: '2389533348-I1jUbrhXhy0KDETq35m9naY1cm9pFettUlxdX4p',
  access_token_secret: 'Nid0fRRb5Ff54IMHyXPsF4uoyFQ8spjWuKNTH7LZYr3mj'
})

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
});

var PORT = process.env.PORT || 1608;

server.listen(PORT, function() {
  console.log('Server running in ' + PORT);
});

wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('data', function(request) {
  console.log(request);
  console.log("aqui: " + request);
  var connection = request.accept(null, request.origin);

  connection.on('message', function(message) {
    client.stream('statuses/filter', {'locations':'-180,-90,180,90'}, function(stream) {
      var streaming = true;
      stream.on('data', function(tweet) {
        if (!!tweet.coordinates) {
          var data = {
            "tweet": tweet.text,
            "lat": tweet.geo.coordinates[0],
            "lng": tweet.geo.coordinates[1]
          };

          connection.sendUTF(JSON.stringify(data));
        }
      })
    })
  });

  connection.on('close', function(connection) {
  });
});


