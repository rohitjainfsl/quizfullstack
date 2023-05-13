import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { config } from "dotenv"
config()

const router = express.Router()

// User signup page
router.get('/signup', (req, res) => {
  res.render('user/signup');
});

router.post('/signup', async (req, res) => {
  
  const { name, email, username, password } = req.body;
  const user = new User({
    name,
    email,
    username,
    password: await bcrypt.hash(password, 9),
  });

  try {
    const savedUser = await user.save();
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).send('Well Done')
    // res.redirect('/user/quiz');
  } catch (error) {
    console.log(error);
    res.redirect('/user/signup');
  }
});

// User login page
router.get('/login', (req, res) => {
  res.render('user/login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      // res.render('user/login', { error: 'Invalid credentials' });
      res.status(401).json({'error': 'Invalid credentials'})
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({'error': 'Invalid credentials'})
      // res.render('user/login', { error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).send('All Good')
    // res.redirect('/user/quiz');
  } catch (error) {
    console.log(error);
    res.redirect('/user/login');
  }
});

// User logout
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/user/login');
});

// User quiz page
router.get('/quiz', (req, res) => {
  // Check if user is authenticated
  const token = req.cookies.token;
  if (!token) {
    res.redirect('/user/login');
    return;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    // Render the quiz page
    res.render('user/quiz');
  } catch (error) {
    console.log(error);
    res.redirect('/user/login');
  }
});

export default router;