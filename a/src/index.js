const express = require("express");
const setup = require("b");

const app = setup(express());

app.post("/", (req, res) => {
  const body = req.body;

  if (!body || typeof body !== "object" || !body.name || typeof body.name !== "string") {
    res.status(400).send({ error: "Invalid request" })
    return
  }

  res.send({ message: `Hello ${body.name}!` })
});

app.listen(process.env.PORT ?? 3000, () => console.log("server ready"));
