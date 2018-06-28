/*
Author: Emad Bin Abid
Started: Thursday, June 28' 2018
*/

//Dependencies
const mongoose = require('mongoose');

//User Schema
const userSchema = mongoose.Schema(
    {
        //userId --> auto-generated

        firstName: 
        {
            type: String,
            required: true
        },
        lastName: 
        {
            type: String,
            required: true
        },
        studentId:
        {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true
        },
        batch:
        {
            type: String,
            required: true
        },
        contactNumber:
        {
            type: String,
            required: true
        },
        dropoffPoint:
        {
            type: String,
            required: true
        },
        password:
        {
            type: String,
            required: true
        }
    }
);

const UserModel = exports.UserModel = mongoose.model('UserModel', userSchema);

/*Functions to handle Http Requests*/

/*
method: addUser(expressInstance)
url: domain/user
response type: sends a json object of type { "user": object } if it doesn't exist already. Else sends "Unauthorized"
*/
exports.addUser = function(expressInstance)
{
    expressInstance.post('/user', (req, res) => {

        //Checking User already exists.
        UserModel.findOne( { "studentId": req.body.studentId },  (err, dbObjectFind) => 
        {
            if(err)
            {
                res.status(400).send("Bad Request");
            }
            else
            {
                if(dbObjectFind === null)
                {
                    //Adding User if it doesn't exist.
                    UserModel.create(req.body.user, (err, dbObject) => 
                    {
                        if(err)
                        {
                            res.status(400).send("Bad Request");
                        }
                        else
                        {
                            res.json( { "user":dbObject } );
                        }
                    });
                }
                else
                {
                    res.status(401).send("Unauthorized");
                }
            }
        });
    });
}

//updateUser
exports.updateUser = function(expressInstance)
{
    expressInstance.put('/user', (req, res) => {
        //Needs implementation
    });
}

//deleteUser
exports.deleteUser = function(expressInstance)
{
    expressInstance.delete('/user', (req, res) => {
        //Needs implementation
    });
}

/*
method: getUser(expressInstance)
url: domain/user?studentId
response type: sends a json object of type { "user": object } if it exists. Else sends { "user": null }
*/
exports.getUser = function(expressInstance)
{
    expressInstance.get('/user', (req, res) => {
        UserModel.findOne( { "studentId": req.query.studentId },  (err, dbObject) => 
        {
            if(err)
            {
                res.status(400).send("Bad Request");
            }
            else
            {
                res.json( { "user": dbObject } );
            }
        });
    });
}

/*
method: getAllUsers(expressInstance)
url: domain/user
response type: sends a json object of type { "user": array_of_objects } if it exists. Else sends "Bad Request"
*/
exports.getAllUsers = function(expressInstance)
{
    expressInstance.get('/user/all-users', (req, res) => {
        UserModel.find( (err, dbObject) => 
        {
            if(err)
            {
                res.status(400).send("Bad Request");
            }
            else
            {
                res.json( { "user": dbObject } );
            }
        });
    });
}