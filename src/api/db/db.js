const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))
const races = require(path.join(__dirname, 'races.json'))
const backgrounds = require(path.join(__dirname, 'backgrounds.json'))
const monsters = require(path.join(__dirname, 'monsters.json'))
const classes = require(path.join(__dirname, 'classes.json'))

server.use(jsonServer.defaults())

// custom routes
server.use(
  jsonServer.rewriter({
    '/races/:id': '/races?id=:id',
    '/classes/:id': '/classes?id=:id',
    '/backgrounds/:id': '/backgrounds?id=:id',
    '/monsters/:id': '/monsters?id=:id',
  })
)

// routers
server.get('/races', jsonServer.router(races))
server.get('/classes', jsonServer.router(classes))
server.get('/backgrounds', jsonServer.router(backgrounds))
server.get('/monsters', jsonServer.router(monsters))
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
