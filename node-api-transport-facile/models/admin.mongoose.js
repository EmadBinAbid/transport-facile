/*
Author: Emad Bin Abid
Started: Thursday, June 28' 2018
*/

//Dependencies
const mongoose = require('mongoose');

//User Schema
const adminSchema = mongoose.Schema(
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
        adminId:
        {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true
        },
        designation:
        {
            type: String,
            required: true
        },
        contactNumber:
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

const AdminModel = exports.AdminModel = mongoose.model('AdminModel', adminSchema);

/*Functions to handle Http Requests*/

/*
method: addUser(expressInstance)
url: domain/admin
response type: sends a json object of type { "admin": object } if it doesn't exist already. Else sends "Unauthorized"
*/
exports.addAdmin = function(expressInstance)
{
    expressInstance.post('/admin', (req, res) => {

        //Checking User already exists.
        AdminModel.findOne( { "adminId": req.body.admin.adminId },  (err, dbObjectFind) => 
        {
            if(err)
            {
                res.status(400).send("Bad Request");
            }
            else
            {
                console.log(dbObjectFind);
                if(dbObjectFind === null)
                {
                    //Adding User if it doesn't exist.
                    AdminModel.create(req.body.admin, (err, dbObject) => 
                    {
                        if(err)
                        {
                            res.status(400).send("Bad Request");
                        }
                        else
                        {
                            res.json( { "admin":dbObject } );
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

//updateAdmin
exports.updateAdmin = function(expressInstance)
{
    expressInstance.put('/admin', (req, res) => {
        //Needs implementation
    });
}

//deleteAdmin
exports.deleteAdmin = function(expressInstance)
{
    expressInstance.delete('/admin', (req, res) => {
        //Needs implementation
    });
}

/*
method: getAdmin(expressInstance)
url: domain/admin?adminId
response type: sends a json object of type { "admin": object } if it exists. Else sends { "admin": null }
*/
exports.getAdmin = function(expressInstance)
{
    expressInstance.get('/admin', (req, res) => {
        AdminModel.findOne( { "adminId": req.query.adminId },  (err, dbObject) => 
        {
            if(err)
            {
                res.status(400).send("Bad Request");
            }
            else
            {
                res.json( { "admin": dbObject } );
            }
        });
    });
}

/*
method: getAllAdmins(expressInstance)
url: domain/admin/all-admins
response type: sends a json object of type { "admin": array_of_objects } if it exists. Else sends "Bad Request"
*/
exports.getAllAdmins = function(expressInstance)
{
    expressInstance.get('/admin/all-admins', (req, res) => {
        AdminModel.find( (err, dbObject) => 
        {
            if(err)
            {
                res.status(400).send("Bad Request");
            }
            else
            {
                res.json( { "admin": dbObject } );
            }
        });
    });
}