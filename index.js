const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const Property = require("./models/properties")
const app = express();
require("./db/connect");
const registerUser = require("./models/registerUsers");
const { log } = require('console');
const viewsPath = path.join(__dirname, "./public/html/");

app.set("view engine", "hbs");
app.set("views", viewsPath)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 let intialPath = path.join(__dirname, "public");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "/html/login.html"));
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(intialPath, "/html/register.html"));
})

app.get('/list', (req, res) => {
  res.sendFile(path.join(intialPath, "/html/list.html"));
});
app.get('/buyform', async (req, res) => {
  const queryVar = req.query.id;
  const findProperty =await  Property.findOne({_id:queryVar});
  console.log(findProperty);
  res.render("buyform",{findProperty});
});

app.get('/rentform', async (req, res) => {
  const queryVar = req.query.id;
  const findProperty =await  Property.findOne({_id:queryVar});
  console.log(findProperty);
  res.render("rentform",{findProperty});
});

app.get('/delete', (req, res) => {
  res.sendFile(path.join(intialPath, "/html/buy-properties.hbs"));
})

app.post('/register-user', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).send('Passwords do not match');
    }
    // Create a new user document and save it to MongoDB using Mongoose
    const user = new registerUser({
      name,
      email,
      password,
      confirmPassword,
    });
    await user.save();

    res.status(201).redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

  app.post("/login-user", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const user = await registerUser.findOne({ email: email });
      if (!user) {
        res.status(401).send("Invalid credentials");
      } else if (user.password !== password) {
        res.status(401).send("Invalid credentials");
      } else {
        res.status(200).redirect("/html/home.html");
      }
    } catch (error) {
      res.status(400).send("Error logging in");
      console.log(error);
    }
  });





app.get('/forgot-password', (req, res) => {
  res.sendFile(path.join(intialPath, "/html/forgotpassword.html"));
})

app.post('/forgot-password', async (req, res) => {
  const { email, password } = req.body;

  try {
    const filter = { email:email };
const update = { password: password };

const updatedUser = await registerUser.findOneAndUpdate(filter, update);

    if (!updatedUser) {
      return res.status(400).json({ message: 'User not found' });
    }

    
    
    res.redirect("/html/login.html");
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/submit-listing', async (req, res) => {
  try {
      const { location, status, type, value } = req.body;

      // Create a new property document using the Property model
      const property = new Property({
          location: location,
          status: status,
          type: type,
          value: value
      });

      // Save the property document to the MongoDB database
      await property.save();

      // Redirect to the same page with a success query parameter
      res.redirect('/html/home.html?success=true');
  } catch (error) {
      console.error('Error submitting property listing', error);
      res.status(500).send('Error submitting property listing');
  }
});

app.get('/buy', async (req, res) => {
  try {
      // Fetch all properties from the database where the 'type' is 'buy'
      const buyProperties = await Property.find({ status: 'buy' });

      // Render the 'buy-properties' view with the list of 'buy' properties
      res.render('buy-properties', { properties: buyProperties });
  } catch (error) {
      console.error('Error fetching buy properties', error);
      res.status(500).send('Error fetching buy properties');
  }
});

app.get('/rent', async (req, res) => {
  try {
      // Fetch all properties from the database where the 'type' is 'buy'
      const rentProperties = await Property.find({ status: 'rent' });

      // Render the 'rent-properties' view with the list of 'buy' properties
      res.render('rent-properties', { properties: rentProperties });
  } catch (error) {
      console.error('Error fetching buy properties', error);
      res.status(500).send('Error fetching rent properties');
  }
});
app.post('/delete-property', async (req, res) => {
  try {
    const { name, mobile, email, paymentMethod } = req.body;
    const deleteID = req.query.id;
    // Find and delete the property by its ID
    const deletedProperty = await Property.findByIdAndRemove(deleteID);

    if (!deletedProperty) {
      return res.status(404).send('Property not found');
    }

    // Optionally, you can perform other actions with the form data (e.g., save it to another collection)

    res.status(200).send('Property deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});


app.listen(3000)
