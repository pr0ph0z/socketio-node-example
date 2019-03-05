var io = require('socket.io-client')
var socket = io('http://localhost:3000');
var stdin = process.openStdin();

process.stdout.write('Your message: ')
stdin.addListener("data", function(d) {
    process.stdout.write('Your message: ')
    socket.emit('chat message', d.toString().trim())
});