const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./pages/";

  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, "utf-8", (err, content) => {
    if (err) console.log(err);
    res.end(content);
  });
});

server.listen(8080, "localhost", () =>
  console.log("Listening on port 8080...")
);
