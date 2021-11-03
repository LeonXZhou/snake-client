// const net = require("net");
// establishes a connection with the game server
const {connect} = require("./client")

console.log("Connecting ...");
const conn = connect();
conn.on('connect', () => console.log('connected'));
conn.on('data', (data) => console.log(data)); 
