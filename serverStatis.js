var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<center><a href=/home><button> Home </button></a> <a href=/about><button> About </button></a> <a href=/profile><button> Profile </button></a></center>"
    );

    var url = req.url;

    if (url === "/") {
      res.write("<center>This is main page</center>");
      res.end();
    } else if (url === "/home") {
      fs.readFile("ujiCobaHome.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/profile") {
      fs.readFile("ujiCobaProfile.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/about") {
      fs.readFile("ujiCobaAbout.html", function (err, data) {
        res.end(data);
      });
    } else {
      res.write("<center>404 Not Found</center>");
      res.end();
    }
  })
  .listen(996, function () {
    console.log("server running on http://localhost:996");
  });
