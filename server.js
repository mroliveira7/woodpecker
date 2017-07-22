const express = require('express')
const app = express()
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'gMAwT2qYnuzKotGot96HKYSnX',
  consumer_secret: 'oUwvhNEjfm2f0cFOMmnqw11Ds4bEa8zCzMQHlCj33acdEQcteV',
  access_token_key: '2389533348-I1jUbrhXhy0KDETq35m9naY1cm9pFettUlxdX4p',
  access_token_secret: 'Nid0fRRb5Ff54IMHyXPsF4uoyFQ8spjWuKNTH7LZYr3mj'
})

var term = 'a';

client.stream('statuses/filter', {'locations':'-180,-90,180,90'}, function(stream) {
  stream.on('data', function(tweet) {
    if (!!tweet.coordinates) {
      var data = {
        "tweet": tweet.text,
        "lat": tweet.coordinates.coordinates[0],
        "lng": tweet.coordinates.coordinates[1]
      };

      console.log(data);
    }
  })

  stream.on('error', function(error) {
    throw error;
  });
});




