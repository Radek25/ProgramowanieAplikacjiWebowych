import * as http from "http";
import * as websocket from "ws";

const server = http.createServer();
const socket = new websocket.Server({ server });

socket.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    broadcast(message.toString()); 
    console.log("received: %s", message);
  });
});

function broadcast(data: string): void {
  socket.clients.forEach((client) => {
    client.send(data); 
  });
}

console.log("Server listen on port 8080.");
server.listen(8080);
