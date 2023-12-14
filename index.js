const dotenv = require("dotenv").config();
const express = require("express");

const db = require("./models");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 8080;

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("---> DB re-synced <---");
// });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
