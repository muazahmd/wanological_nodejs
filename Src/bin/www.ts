#!/usr/bin/env node

/**
 * Module dependencies.
 */
import  app from "../app";
const http = require("http");


import connectToDB from '../config/connection/MongoDB';
connectToDB();
 
/**
 * Get port from environment and store in Express.
 */
app.set("port", 3000);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */


server.listen(3000,"localhost");
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  console.log(
    `Server is listening on http://${server.address().address}:${
      server.address().port
    }`
  );
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(err:any) {
  console.error(err.message);
  process.exit(1);
}


// module.exports = server;
