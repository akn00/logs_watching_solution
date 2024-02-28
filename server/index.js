const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const logFilePath = './log/app.log'; 


  const sendLogFileContent = () => {
    fs.readFile(logFilePath, 'utf8', (err, data) => {
      if (err) {
        res.write(`data: Error reading log file\n\n`);
        console.error('Error reading log file:', err);
      } else {
        res.write(`data: ${data.replace(/\n/g, '\ndata: ')}\n\n`);
        console.log('Sent log data to client:', data); 
      }
    });
  };


  let timeout;
  const debouncedSendLogFileContent = () => {
    clearTimeout(timeout);
    timeout = setTimeout(sendLogFileContent, 1000);
  };

  sendLogFileContent();

  fs.watch(logFilePath, (event, filename) => {
    if (event === 'change' && filename) {
      debouncedSendLogFileContent();
    }
  });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
