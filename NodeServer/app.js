const http = require('http');
const querystring = require('querystring')

const server = http.createServer((req , res) =>{
  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=utf-8',//不加这个会返回乱码，因为下面返回的数据是中文
    'Access-Control-Allow-Origin': 'http://192.168.3.25:8080'
})
   console.log(req.method);
   const url = req.url
   req.query = querystring.parse(url.split('?')[1])
   res.end(JSON.stringify(req.query))
})

server.listen(8088);
console.log('OK');


