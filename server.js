const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/message", (req, res) => {
  res.send("This is a secret message from the back-end");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log("Changessssssss");
