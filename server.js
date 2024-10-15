import http from 'http';


const host = 'localhost'

const port = 9000

const requireListerner = function (req,res){
    res.setHeader("Content-type","text/html")
    res.write("<h1> Welcome to my website</h1>",    )
    res.end()
}

const server = http.createServer(requireListerner)

server.listen(port,host, ()=> console.log(`Server is running on port ${host}:${port}`));

