let https = require('https');

const server = https.createServer(options, (req,res)=>{
    res.write('Hello welcome to https site');
    res.end();
});

server.listen(3000);