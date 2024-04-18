import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/style.css';

function Create() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    photo: null,
    age: '',
    dob: '',
    phone: '',
    email: '',
    socialMedia: '',
    aboutMe: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/create', formData);
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error:', error); // Handle error
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="create-mai">
            <div className="create-containe">
              <h2 className="animated-text">Blog Hub</h2>
              <h1>Create Your Profile</h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="middleName">Middle Name:</label>
                  <input type="text" className="form-control" id="middleName" name="middleName" placeholder="Enter your middle name" value={formData.middleName} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="photo">Profile Photo:</label>
                  <input type="file" className="form-control-file" id="photo" name="photo" accept="image/*" style={{ borderRadius: '0px' }} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input type="number" className="form-control" id="age" name="age" min="13" max="120" placeholder="Enter your age" value={formData.age} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="dob">Date of Birth:</label>
                  <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email ID:</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="socialMedia">Social Media Links (Optional):</label>
                  <textarea className="form-control" id="socialMedia" name="socialMedia" rows="3" placeholder="Paste links to your social media profiles (one per line)" value={formData.socialMedia} onChange={handleChange}></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="aboutMe">About Me:</label>
                  <textarea className="form-control" id="aboutMe" name="aboutMe" rows="5" placeholder="Tell us a little about yourself and your interests" value={formData.aboutMe} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Create Profile</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
