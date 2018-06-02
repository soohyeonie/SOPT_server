const http = require('http');
const request = require('request');

const server = http.createServer(function(req,res){
  let option = {
    uri : 'http://13.125.118.111:3000/test',
    method : 'GET'
  };

  request(option, function(err,response, body) {
    if(err) {
      console.log('Request module error : ' + err);
      res.writeHead(500, {"Content-Type" : "text/plain"});
      res.end("Request module error!");
    } else {
      let bodyParsed = JSON.parse(body);
    }
  });
}).listen(3000,function(){
  console.log('connected 3000 port!!');
});
