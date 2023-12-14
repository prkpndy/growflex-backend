const db = require("../models");

const User = db.users;

const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      gender,
      dob,
      country,
      state,
      city,
      zip,
      areaOfInterest,
      password,
      profilePictureName,
    } = req.body;

    const data = {
      firstName,
      lastName,
      email,
      gender,
      dob,
      country,
      state,
      city,
      zip,
      areaOfInterest,
      password,
      profilePicturePath: profilePictureName,
    };

    const user = await User.create(data);

    if (user) {
      console.log(`User created - ${user.email}`);
      return res.status(201).send(user);
    } else {
      console.log("Sorry, cannot create user");
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

module.exports = signup;
