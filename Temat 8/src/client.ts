export class Client {
  private socket: WebSocket = null;
  public init() {
    this.socket = new WebSocket("ws://localhost:8080");
    this.socket.onopen = function (e) { //przy połączeniu zaczętym
    };

    this.socket.onmessage = function (event) { // kiedy otrzymam event message z serwera
      const messages = document.querySelector("#messages");
      const item = document.createElement("div");
      item.innerText = event.data;
      messages?.appendChild(item);
    };
  }

  public sendMessage = (msg: string)=> {
    this.socket.send(msg);
  } 
}
