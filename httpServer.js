const http = require('http')

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-type': 'text/html; charset=utf-8'
    // })
    // res.end('<h1>Hello world</h1>')

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })

    if(req.url === '/users') {
        return res.end(JSON.stringify([
            {id: 1, name: 'Zhannur king developers'}
        ]))
    }
    if(req.url === '/posts') {
        return res.end('POSTS')
    }

    // res.end(req.url)
})

server.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))