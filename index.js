const http = require("http");
const { add } = require("./app");
http.createServer((req, res) => res.end(`2+3=${add(2, 3)}\n`)).listen(3000);