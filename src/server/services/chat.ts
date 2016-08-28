import * as socketio from 'socket.io';

export function ChatConfig (server: any) {
    var io = socketio(server);
    io.set("origins", "*:*");
    io.on('connection', function(socket){
      socket.on('newMessage', function (data) {
        console.log(data);
        var msg = data.userName ? data.userName + ': ' + data.text : data.text;
        socket.emit('chatUpdate',msg);
        socket.broadcast.emit('chatUpdate',msg);
      });
      socket.on('newUser', function (data) {
        console.log("New user registered - " + data );
        socket.emit('userLogged',
          {'userName': data, 'logged': true});
        socket.emit('chatUpdate', data+' has entered the room');
        socket.broadcast.emit('chatUpdate', data +' has entered the room');
      });
    });
}
