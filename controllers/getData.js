const db = require("../models");

const User = db.users;

const getData = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(201).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

module.exports = getData;
