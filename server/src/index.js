 const http = require("http")

const characters = require("./utils/data");

const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const url = req.url.split("/");
  const param1 = url[1];
  const param2 = url[2];
  const param3 = url[3];

  if (param1 === "rickendmorty" && param2 === "characters") {
    res.writeHead(200, { "Content-type": "application/json" });
    return res.end(JSON.stringify(characters));
  }

  if (param1 === "rickendmorty" && param2 === "character") {
    const character = characters.find((ch) => {
      return ch.id == Number(param3);
    });

    if (character) {
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(character));
    }
  }

  return res.writeHead(404, { "Content-type": "text/plain" }).end("not found");
}).listen(PORT, () => {
  console.log("Server is running at http://localhost:3001");
});
