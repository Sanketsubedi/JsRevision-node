const http = require('http');

var server = http.createServer(function(request,reponse){
console.log('connected');
});

server.listen(9090,function(err,done){
    if(err){
        console.log('Failed to listen to port');
    }
    else{
        console.log('server listening at 9090');
        console.log('press CTRL + C to exit');
    }
});