/*
Author: Emad Bin Abid
Started: Thursday, June 28' 2018
*/

//Application dependencies
const server = require('./server');
const connection = require('./connection.mongoose');
const login = require('./login.mongoose');
const userModel = require('./models/user.mongoose');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

/*Http Requests*/

//userModel
userModel.addUser(app);
userModel.getUser(app);
userModel.getAllUsers(app);


//Validating User and generating JWT if User is valid.
login.validateUser(app, jwt, userModel.UserModel);

//Running the server
server.run(app, 3000);