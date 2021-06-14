const http = require('http')

// Create server object
http.createServer((req, res) => {
  // Write response
  res.write('Hello, world')
  res.end()
}).listen(4000, () => console.log("Server is up.."))