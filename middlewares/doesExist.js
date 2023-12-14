const db = require("../models");

const User = db.users;

// Function to check if email already exist in the database
const doesExist = async (req, res, next) => {
  try {
    const emailCheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (emailCheck) {
      return res.status(401).send("Email already registered");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = doesExist;
