'use strict'

module.exports.helloWorld = function helloWorld(req, res, next) {
  const name = req.data.value.name;
  if (name) {
    res.status(200).send("Hello " + name);
  } else {
    res.status(405).send("Invalid input");
  }
};