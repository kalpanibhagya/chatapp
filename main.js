var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
    socket.on('chat', function(msg){
        io.emit('chat',msg);
    });
});
io.on('disconnect', function(){
    console.log('User is disconnected');
});

http.listen(3000, function(){
    console.log('Listening on localhost:3000');
});


