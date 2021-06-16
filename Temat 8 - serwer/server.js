"use strict";
exports.__esModule = true;
var http = require("http");
var websocket = require("ws");
var server = http.createServer();
var socket = new websocket.Server({ server: server });
socket.on("connection", function connection(ws) {
    //nowy klient podpiął się pod serwer
    ws.on("message", function incoming(message) {
        // wyślij wiadomość dalej
        broadcast(message.toString()); // rozgłoś wiadomość
        console.log("received: %s", message);
    });
});
function broadcast(data) {
    socket.clients.forEach(function (client) {
        client.send(data); // wyślij do wszystkich połaćzonych
    });
}
console.log("Server listen on port 8080.");
server.listen(8080);
