const db = require("../models");

const User = db.users;

const changePassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      await User.update(
        { password: password },
        {
          where: {
            email: email,
          },
        }
      );

      return res.sendStatus(201);
    } else {
      console.log("User not found");
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = changePassword;
