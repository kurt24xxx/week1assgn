
const http = require("http");
const fs = require("fs").promises;
const requestListener = function(req, res) {
  if (req.url === "/") {
    fs.readFile(__dirname + "/pagex.html").then(contents => {
      res.setHeader("Content-Type", "text/html; charset(UTF-8");
      res.writeHead(200);
      res.end(contents);
    }
                                              );
  }
  else {
    fs.readFile(__dirname + "/datax.json").then(contents => {
      res.setHeader("Content-Type", "application/json; charset(UTF-8");
      res.writeHead(200);
      res.end(contents);
    });
  }
    };
  
  


const serverx = http.createServer( requestListener);

  const host = "0.0.0.0";
const port = "8080";

serverx.listen(port,host, () => {
  console.log("running");
});