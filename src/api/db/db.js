const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))
const races = require(path.join(__dirname, 'races.json'))

server.use(jsonServer.defaults())

// custom routes
server.use(
  jsonServer.rewriter({
    '/races/:id': '/races?id=:id',
  })
)

// routers
server.get('/races', jsonServer.router(races))
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
