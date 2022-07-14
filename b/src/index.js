const express = require("express");

const setup = (app) => {
  app.use(express.json());
  return app;
};

module.exports = setup;
