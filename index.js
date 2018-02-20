const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

serverStaticFile = (response, path, contentType, responseCode) => {
  if (!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("500 - Internal Error");
    } else {
      response.writeHead(responseCode, { "Content-Type": contentType });
      response.end(data);
    }
  });
};

const server = http.createServer((request, response) => {
  let path = request.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      serverStaticFile(response, "./home", "text/html");
      break;
      case "/about":
        serverStaticFile(response, "./about", "text/html");
        break;
        case "/image":
          serverStaticFile(response, "/image", "text/html");
          break;
    default:
      serverStaticFile(response, "/404.html", "text/html", 404);
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(
    `Server started on http://${hostname}:${port}/; press Ctrl-C to terminate....`
  );
});