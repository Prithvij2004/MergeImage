const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const image = new Image();

mergeImages(["./body.png", "./eyes.png", "./mouth.png"], {
  Canvas: Canvas,
  Image: Image,
}).then((b64) => (image.src = b64));
