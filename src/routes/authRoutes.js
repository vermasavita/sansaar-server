const express = require("express");

const { signup, login } = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

// router.get('/login', (req, res) => {
//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   res.render('signup');
// });

router.post("/signup", signup);
router.post("/login", login);
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});

module.exports = router;

// router.post('/login', (req, res) => {
//   if(req.body.email === '')
//     return res.status(400).send('Email is required');
//   if(req.body.password === '')
//     return res.status(400).send('Password is required');
//   res.send('Login successful');
// });

// router.post('/signup', (req, res) => {
//   if(req.body.name === '')
//     return res.status(400).send('Name is required');
//   if(req.body.email === '')
//     return res.status(400).send('Email is required');
//   if(req.body.password === '')
//     return res.status(400).send('Password is required');
//   res.send('Signup successful');
// });

// router.get('/protected', authenticateToken, (req, res) => {
//   res.send('This is a protected route');
// });
