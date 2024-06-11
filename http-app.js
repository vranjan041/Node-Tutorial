const http = require('http')
const {readFileSync} = require('fs')
const homePage = readFileSync('./navbar/index.html')
const homeStyles = readFileSync('./navbar/styles.css')
const homeImage = readFileSync('./navbar/logo.svg')
const homeLogic = readFileSync('./navbar/browser-app.js')

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)
    if (url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
        console.log(200)
    }

    else if (url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
        console.log(200)
    }
    else if (url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
        console.log(200)
    }
    else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
        console.log(200)
    }
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Not found</h1>')
        res.end()
        console.log(404)
    }    
})

server.listen(5000)