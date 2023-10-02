const  ws  =  new  WebSocket("ws://localhost:9003"); 
// const  ws  =  new  WebSocket("wss://socketsbay.com/wss/v2/1/demo/"); 

ws.onopen = function(openEvent){
    console.log(`websocket is open with ${ws.protocol} protocol`)
}

ws.onmessage = function(messageEvent){
    console.log(messageEvent.data);
}

ws.onclose = function(closeEvent){
    console.log(`Websocket has been closed`);
}