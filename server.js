require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');

const app = express();


connectDB();


const User = mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
}));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname);


app.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.render('index', { users, editUser: null });
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.post('/add', async (req, res) => {
  try {
    await User.create({
      name: req.body.name,          
      email: req.body.email,
      phone: req.body.phone
    });
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get('/edit/:id', async (req, res) => {
  try {
    const editUser = await User.findById(req.params.id);
    const users = await User.find();
    res.render('index', { users, editUser });
  } catch (err) {
    res.redirect('/');
  }
});


app.post('/update/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get('/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));