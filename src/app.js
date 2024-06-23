require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
// const path = require('path');
app.use(bodyParser.json());

// app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, 'views'));

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//questions
// 1. what is bcrypt
// 2. what is hashing password
// 3. what is the difference b/w app.use(bodyParser.json()); and app.use(express.json());
