// Express server
// To run in production
const setup = require('./setup')
const http = require('http')
const favicon = require('express-favicon')
const express = require('express')
const path = require('path')
const app = express()

app.use(favicon(setup.path + setup.favicon))
app.use(express.static(setup.path))
app.use(express.static(path.join(setup.path, setup.public)))
app.get(setup.request, (request, response) =>
{
    response.sendFile(path.join(setup.path, setup.public, setup.file))
})

// Start Serve
const server = http.createServer(app)
server.listen(setup.port, () =>
    console.log(`${ setup.banner } in port ${ setup.port }`)
)
