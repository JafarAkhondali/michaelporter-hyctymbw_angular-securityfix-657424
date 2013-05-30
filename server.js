var http = require('http');
var fs = require('fs');

var requestListener = function(req, res) {
  var fileName = "." + (req.url == '/' ? '/index.html' : req.url);

  var headers = getContentType(getFileExtension(fileName));
  res.writeHead(200, headers);

  var fileContent = fs.readFileSync(fileName);
  res.write(fileContent);

  res.end();
}



var port = process.env.PORT || 8124;
var server = http.createServer(requestListener).listen(port);

console.log("server running");

var getFileExtension = function(path) {
  var pathChunks = path.split(".");
  var extension = pathChunks[pathChunks.length-1];

  return "." + extension;
}

var getContentType = function(extension) {
  var contentType;

  switch(extension) {
    case '.js':
      contentType = 'text/javascript'; 
      break;
    case '.html':
      contentType = 'text/html';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    default:
      contentType = 'text/html';
  }

  return { 'content-type': contentType };
}
