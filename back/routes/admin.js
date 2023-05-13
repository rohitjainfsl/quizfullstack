import express from "express"
import bcrypt from "bcrypt"
import Admin from "../models/Admin.js"
import session from "express-session"

const router = express.Router()

router.use(session({
  secret: 'abcdef1234567890',
  resave: false,
  saveUninitialized: true
}));

// GET /admin/signup
router.get('/signup', (req, res) => {
  res.render('admin/signup');
});

// POST /admin/signup
router.post('/signup', async (req, res) => {
  const { name, email, username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new admin instance
  const admin = new Admin({
    name,
    email,
    username,
    password: hashedPassword
  });

  // Save the admin to the database
  try {
    await admin.save();
    res.redirect('/admin/login');
  } catch (err) {
    console.log(err);
    res.render('admin/signup', { error: 'An error occurred. Please try again.' });
  }
});

// GET /admin/login
router.get('/login', (req, res) => {
  res.render('admin/login');
});

// POST /admin/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the admin by username
  const admin = await Admin.findOne({ username });

  if (admin) {
    // Compare the password
    const match = await bcrypt.compare(password, admin.password);

    if (match) {
      console.log(username)
      // Store the username in session
      req.session.username = username;
      res.redirect('/admin/dashboard');
    } else {
      res.render('admin/login', { error: 'Invalid credentials' });
    }
  } else {
    res.render('admin/login', { error: 'Invalid credentials' });
  }
});

// GET /admin/logout
router.get('/logout', (req, res) => {
  // Clear the session
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/admin/login');
  });
});

// GET /admin/dashboard
router.get('/dashboard', (req, res) => {
  // Check if the admin is logged in
  if (req.session.username) {
    res.render('admin/dashboard');
  } else {
    res.redirect('/admin/login');
  }
});

// GET /admin/questions
router.get('/questions', (req, res) => {
  // Check if the admin is logged in
  if (req.session.username) {
    res.render('admin/questions');
  } else {
    res.redirect('/admin/login');
  }
});

// POST /admin/questions
router.post('/questions', (req, res) => {
  // Add the question to the database
  res.redirect('/admin/questions');
});

// GET /admin/users
router.get('/users', (req, res) => {
  // Check if the admin is logged in
  if (req.session.username) {
    res.render('admin/users');
  } else {
    res.redirect('/admin/login');
  }
});

// DELETE /admin/users/:id
router.delete('/users/:id', (req, res) => {
  // Delete the user from the database
  res.sendStatus(200);
});

export default router;