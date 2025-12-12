const http = require('http');
const fs = require('fs');
const path = require('path');

const basePort = parseInt(process.env.PORT, 10) || 5000;
let port = basePort;
const root = path.join(__dirname);

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.json': 'application/json',
  '.txt': 'text/plain'
};

function send404(res){
  res.statusCode = 404;
  res.end('Not found');
}

const server = http.createServer((req,res)=>{
  try{
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if(reqPath === '/') reqPath = '/index.html';
    const filePath = path.join(root, reqPath);
    if(!filePath.startsWith(root)) return send404(res);
    fs.stat(filePath, (err, stat)=>{
      if(err || !stat.isFile()) return send404(res);
      const ext = path.extname(filePath).toLowerCase();
      res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
      res.setHeader('Cache-Control', 'no-cache');
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
      stream.on('error', ()=> send404(res));
    });
  }catch(e){
    send404(res);
  }
});

function tryListen(p){
  server.listen(p, ()=>{
    console.log(`Static server running at http://localhost:${p}/`);
  }).on('error', (err)=>{
    if(err.code === 'EADDRINUSE'){
      console.warn(`Port ${p} in use, trying ${p+1}`);
      port = p+1;
      tryListen(port);
    } else {
      console.error(err);
      process.exit(1);
    }
  });
}

tryListen(port);
