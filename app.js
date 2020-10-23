console.log("Hello Word");

const express = require('express')
const server = express()

/* final catch-all route to index.html defined last */
server.get('/*', (req, res) => {
  res.send("It's Working!");
})

const port = 3000;
server.listen(port, function() {
  console.log('server listening on port ' + port)
})