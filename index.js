const http = require('http')
const { response } = require('express')

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  res.end('Hello World from LERN')
})

const PORT = process.env.PORT ?? 3001
const PORT = process.env.PORT || 5000

app.listen(PORT, () => `Server running on port ${PORT}`)
