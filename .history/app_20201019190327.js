// Import the server code
const server = require('./minimal-dynamic-http-server');
/** 
 * Handlers 
 */
// handler for '/api/abc' dynamic path
const abcHandler = (responseData, callback) => {
  // Code goes here...
  //Pass statusCode and response to the callback function.
  callback(200, '{"foo":"bar"}');
}
// handler for '/api/def' dynamic path
const defHandler = (responseData, callback) => {
  // Code goes here...
  callback(200, '{"message":"Have a nice day!"}');
}
// Define the dynamic paths and handlers
const paths = {
  '/api/abc': abcHandler,
  '/api/def': defHandler
};
// Set the dynamic paths
server.setAllowedPaths(paths);
// Start the server
server.init(3500);