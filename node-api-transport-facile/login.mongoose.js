/*
Author: Emad Bin Abid
Started: Thursday, June 28' 2018
*/

const config = require('./config');

//Dependencies

//Validating User on /loginUser request.
/*
method: validateUser(expressInstance, jwtInstance, userModelInstance)
url: domain/loginUser
request object: expects a json object of type { "user": object }
response object: sends a json object of type { "user": object, "token": token }. If error, then sends "Unauthorized"
*/
exports.validateUser = function(expressInstance, jwtInstance, userModelInstance)
{
    //Validating User.
    expressInstance.post('/loginUser', (req, res) => 
    {
        userModelInstance.findOne(req.body.user, (err, dbObject) => 
        {
            if(err)
            {
                res.status(401).send('Unauthorized');
            }
            else
            {
                if(dbObject === null)
                {
                    res.status(401).send('Unauthorized');
                }
                else
                {
                    const signObject = { "user": dbObject };
                    jwtInstance.sign(signObject, config.jwt_key, (err, token) => 
                    {
                        if(err)
                        {
                            res.status(401).send('Unauthorized');
                        }
                        else
                        {
                            res.json({"user": dbObject, "token": token});
                        }
                    });
                }
            }
        });
    });
}

//Validating Admin on /loginAdmin request.
/*
method: validateAdmin(expressInstance, jwtInstance, adminModelInstance)
url: domain/loginAdmin
request object: expects a json object of type { "admin": object }
response object: sends a json object of type { "admin": object, "token": token }. If error, then sends "Unauthorized"
*/
exports.validateAdmin = function(expressInstance, jwtInstance, adminModelInstance)
{
    //Validating Admin.
    expressInstance.post('/loginAdmin', (req, res) => 
    {
        adminModelInstance.findOne(req.body.admin, (err, dbObject) => 
        {
            if(err)
            {
                res.status(401).send('Unauthorized');
            }
            else
            {
                if(dbObject === null)
                {
                    res.status(401).send('Unauthorized');
                }
                else
                {
                    const signObject = { "admin": dbObject };
                    jwtInstance.sign(signObject, config.jwt_key, (err, token) => 
                    {
                        if(err)
                        {
                            res.status(401).send('Unauthorized');
                        }
                        else
                        {
                            res.json({"admin": dbObject, "token": token});
                        }
                    });
                }
            }
        });
    });
}

//Verifying the token.
exports.verifyToken = function(req, res, next)
{
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined')
    {
        const token = bearerHeader.split(' ')[1];
        req.token = token;
        next();
    }
    else
    {
        res.status(401).send('Unauthorized');
    }
}