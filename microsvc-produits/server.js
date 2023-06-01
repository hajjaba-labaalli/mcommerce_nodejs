const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const products = require('./routes/api/products');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());

const db = require('./src/data').mongoURI;

mongoose
        .connect(db)
        .then(() => console.log('Database Connected :) ...'))
        .catch( err => console.log(err));

app.use('/api/products', products);


const port = process.env.PORT || 5000;

app.listen(port , ()=> console.log('Server started on port ', port));