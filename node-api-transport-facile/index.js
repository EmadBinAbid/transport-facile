/*
Author: Emad Bin Abid
Started: Thursday, June 28' 2018
*/

//Application dependencies
const server = require('./server');
const connection = require('./connection.mongoose');
const login = require('./login.mongoose');
const userModel = require('./models/user.mongoose');
const adminModel = require('./models/admin.mongoose');
const postModel = require('./models/post.mongoose');
const responseModel = require('./models/response.mongoose');

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

//adminModel
adminModel.addAdmin(app);
adminModel.getAdmin(app);
adminModel.getAllAdmins(app);

//postModel
postModel.addPost(app, jwt, login.verifyToken);
postModel.updatePost(app, jwt, login.verifyToken);
postModel.deletePost(app, jwt, login.verifyToken);
postModel.getPost(app, jwt, login.verifyToken);
postModel.getAllPosts(app, jwt, login.verifyToken);
postModel.getAllPublicPosts(app);

//responseModel
responseModel.addResponse(app, jwt, login.verifyToken);
responseModel.getResponseByPostId(app);


//Validating User and generating JWT if User is valid.
login.validateUser(app, jwt, userModel.UserModel);

//Validating Admin and generating JWT if Admin is valid.
login.validateAdmin(app, jwt, adminModel.AdminModel);

//Running the server
server.run(app, 3000);