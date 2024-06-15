import express from "express";
import "dotenv/config.js";
const app = express();

const port = process.env.PORT || 8888;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", (req, res) => {
  res.send("Server On");
});
app.listen(port, (req, res) => {
  console.log(`Server on port ${port}`);
});
