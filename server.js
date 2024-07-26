var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var requestListener = function(req, res) {
  var defaultHeaders = {
    "Content-Type": "text/plain"
  };

  var uri = url.parse(req.url).pathname
    if (path.normalize(decodeURI(uri)) !== decodeURI(uri)) {
        res.statusCode = 403;
        res.end();
        return;
    }
  uri = uri == '/' ? 'index.html' : uri;

  var fileName = path.join(process.cwd(), uri);
  var fileExt, fileContent;

  fs.exists(fileName, function(exist) {
    if (!exist) {
      console.log("error finding file");
      res.writeHead(404, defaultHeaders);
      res.end("error finding file");

      return;
    }

    var fileContent = fs.readFile(fileName, 'utf8', function(err, data) {
      var headers = defaultHeaders;

      fileExt = getFileExtension(fileName);
      headers["Content-Type"] = getContentType(fileExt);
      headers["Content-Length"] = data.length;
      res.writeHead(200, headers);

      res.end(data);
    });
  });
}

var port = process.env.PORT || 8124;
var server = http.createServer(requestListener).listen(port);

console.log("server running on port " + port);

var getFileExtension = function(path) {
  var pathChunks = path.split(".");
  var extension = pathChunks[pathChunks.length-1];

  return extension;
}

var getContentType = function(extension) {
  var mimeTypes = {
    'css' : 'text/css',
    'html': 'text/html',
    'ico' : 'image/ico',
    'js'  : 'text/javascript'
  }

  var contentType = mimeTypes[extension] || 'text/html';
  return contentType;
}

