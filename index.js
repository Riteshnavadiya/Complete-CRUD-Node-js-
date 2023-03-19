const express = require("express");

const app = express();
const product = require("./mongo");
app.use(express.json());

app.get("/", async (req, resp) => {
  let result = await product.find();
  resp.send(result);
});

app.post("/", async (req, resp) => {
  let data = await product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

app.put("/data/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.updateOne(req.params, { $set: req.body });

  resp.send(data);
});

app.delete("/data/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.deleteOne(req.params);

  resp.send(data);
});

app.listen(3000);
