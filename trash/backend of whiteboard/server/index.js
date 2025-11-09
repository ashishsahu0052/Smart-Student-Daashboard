const WebSocket = require("ws");

const wss = new WebSocket.Server({Port: 9161});

wss.on("connection",ws =>{
  console.log("new client connected");

  ws.on("close", () =>{
    console.log('client has disconnected');

  });

});