const db = require("../models");

const User = db.users;

const login = async (req, res) => {
  console.log("Login request");
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (user) {
      console.log(`User found - ${user.email}`);
      return res.status(201).send(user);
    } else {
      console.log("User not found");
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
