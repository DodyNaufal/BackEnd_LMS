const express = require("express");
const router = express.Router();
const {
  register,
  login,
  loginAdmin,
  forgotPassword,
  resetPassword,
  updatePassword,
  // updateProfilePicture,
} = require("../controllers/UsersControllers");
const db = require("../config/db");

// // Multer setup untuk upload foto profil
// const storage = multer.diskStorage({
//   destination: "./public/uploads/foto_profile",
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, "user_" + Date.now() + ext);
//   },
// });

// const upload = multer({ storage });

router.post("/register", register);
router.post("/login", login);
router.post("/login-admin", loginAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/update-password", updatePassword);
router.get("/reset-password/:token", resetPassword);

// // ✅ Route upload foto profil
// router.post(
//   "/users/update-profile-picture",
//   upload.single("foto"),
//   updateProfilePicture
// );

module.exports = router;
