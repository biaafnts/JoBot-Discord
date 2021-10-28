const express = require("express");
const app = express();
const port = 4010;

const conect = require( "./src/discord");

app.get("/", (req, res) => {
  res.send(` <h1> 🛠  Server JOBOT 🚀 </h1>`);
});

try{
  conect.connectDiscord();
} catch(err) {
  console.log("Erro ao conectar no servidor discord: ", err );

}

app.listen(port, () => {
  console.log(`
              🛠  Server JOBOT 🚀  http://localhost:${port} 
              `);
});
