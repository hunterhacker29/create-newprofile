// server.js
const express = require('express');
const mongoose = require('mongoose');
const response = await axios.post('http://localhost:3000/create', formData);

const app = express();
const PORT = process.env.PORT || 3001;

// Define MongoDB schema
const profileSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  photo: String, // Assuming the photo will be stored as a URL
  age: Number,
  dob: Date,
  phone: String,
  email: String,
  socialMedia: String,
  aboutMe: String
});

// Create MongoDB model
const Profile = mongoose.model('Profile', profileSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Profile/data', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware to parse JSON bodies
app.use(express.json());

// Define route to handle form submission
app.post('/create', async (req, res) => {
  try {
    // Handle form submission
    const profileData = req.body; // Assuming the request body contains profile data
    const newProfile = new Profile(profileData);
    await newProfile.save();

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
