const db = require("../models");

const User = db.users;

const deleteUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.destroy({
      where: {
        email: email,
        password: password,
      },
    });

    // TODO - How to handle failed request?

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

module.exports = deleteUser;
