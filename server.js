const app = require('express')();
const Twitter = require('twitter');
const nunjucks = require('nunjucks');
const http = require('http').Server(app);
const io = require('socket.io').listen(http);


var PORT = process.env.PORT || 8080;


app.set('views', 'views/');
app.engine('html', nunjucks.render);

var client = new Twitter({
  consumer_key: 'gMAwT2qYnuzKotGot96HKYSnX',
  consumer_secret: 'oUwvhNEjfm2f0cFOMmnqw11Ds4bEa8zCzMQHlCj33acdEQcteV',
  access_token_key: '2389533348-I1jUbrhXhy0KDETq35m9naY1cm9pFettUlxdX4p',
  access_token_secret: 'Nid0fRRb5Ff54IMHyXPsF4uoyFQ8spjWuKNTH7LZYr3mj'
})

var nunjucksEnv = nunjucks.configure('views/', {
  autoscape: true,
  express: app
});

app.get('/', function(req, res) {
  return res.render('index.html');
});

io.on('connection', function(socket){
  socket.on('get tweets', function(hashtag) {
    console.log(hashtag);
    var params = {
      track: hashtag
    };
    client.stream('statuses/filter', params, function(stream) {
      stream.on('data', function(tweet) {
        if (!!tweet.coordinates) {
          var data = {
            "tweet": tweet.text,
            "lat": tweet.coordinates.coordinates[0],
            "lng": tweet.coordinates.coordinates[1]
          };

          socket.emit("tweets", tweet.text);
        }
      })

      stream.on('error', function(error) {
        throw error;
      });

    });
  })
});

http.listen(PORT, () => console.log('server running in '+ PORT));
