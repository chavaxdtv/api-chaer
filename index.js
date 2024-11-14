require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//va el puerto del cluster entre ('')
const uri = 'mongodb+srv://CHAER:1234@chaer.m67s1.mongodb.net/?retryWrites=true&w=majority&appName=CHAER';
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
}

run();

// Import routes

const CarroController = require('./routes/formulario-routes');

//use routes
app.use('/formulario', CarroController);

//debe ser el puerto por defecto el (4000) y va entre comillas paradas (`)
app.listen(9000, () => {
    console.log(`Server running at http://localhost:${9000}`);
  });