const db = require("../models");

const User = db.users;

const updateUser = async (req, res) => {
  try {
    const { email, columnName, columnValue } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      await User.update(
        { [columnName]: columnValue },
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
    return res.sendStatus(500);
  }
};

module.exports = updateUser;
