var express = require('express');
var app = express();
var affirmations = [
                    'Be happy',
                    'Life is beautiful. Life is fulfilling. I love life.',
                    'I can and I will.',
                    'I am blessed with an incredible family and wonderful friends.',
                    'Though these times are difficult, they are only a short phase of life.',
                    'Creative energy surges through me and leads me to new and brilliant ideas.',
                    'My body is healthy; my mind is brilliant; my soul is tranquil.',
                    'Today, I am brimming with energy and overflowing with joy.' ];

app.use(express.static(__dirname + "/public"));

app.get('/api/affirmations', function (req, res){
  res.send(affirmations)

  });

 app.get('/api/random-affirmation',function(req, res){
   res.send(affirmations[Math.floor(Math.random()* affirmations.length)]);

 });

//...starting sevrer
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
