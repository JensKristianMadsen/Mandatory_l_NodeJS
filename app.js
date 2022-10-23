import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));




app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/frontpagePage.html"));
});

app.get("/introduction", function(req, res){
  res.render();
});






const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server is running on port", server.address().port);
});