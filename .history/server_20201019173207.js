const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url = '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(`
        
        `)
    }

})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => { console.log(`Server is up on port ${PORT}`) })

<h3