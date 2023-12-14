const express = require("express");
const multer = require("multer");

const login = require("../controllers/login");
const signup = require("../controllers/signup");
const deleteUser = require("../controllers/deleteUser");
const changePassword = require("../controllers/changePassword");
const doesExist = require("../middlewares/doesExist");
const getData = require("../controllers/getData");
const updateUser = require("../controllers/updateUser");

const router = express.Router();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
  },
  filename: async (req, file, cb) => {
    const fileName = new Date().toISOString() + "-" + file.originalname;
    req.newFileName = fileName;

    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// image
router.post(
  "/imageUpload",
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"),
  (req, res) => {
    res.json({ name: req.newFileName });
  }
);

// home
router.get("/", async (req, res) => {
  res.status(200).send("Welcome to Groflex API");
});

// signup
router.post("/signup", doesExist, signup);

// login
router.post("/login", login);

// deleteUser
router.put("/deleteUser", deleteUser);

// changePassword
router.put("/changePassword", changePassword);

// getData
router.get("/getData", getData);

// updateUser
router.put("/updateUser", updateUser);

module.exports = router;
