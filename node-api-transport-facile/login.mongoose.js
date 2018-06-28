/*
Author: Emad Bin Abid
Started: Thursday, June 28' 2018
*/

const config = require('./config');

//Dependencies

//Validating User on /login request.
/*
method: validateUser(expressInstance, jwtInstance, userModelInstance)
url: domain/login
request object: expects a json object of type { "user": object }
response object: sends a json object of type { "user": object, "token": token }. If error, then sends "Unauthorized"
*/
exports.validateUser = function(expressInstance, jwtInstance, userModelInstance)
{
    //Validating User.
    expressInstance.post('/login', (req, res) => 
    {
        userModelInstance.findOne(req.body.user, (err, dbObject) => 
        {
            if(err)
            {
                res.status(401).send('Unauthorized');
            }
            else
            {
                if(!dbObject.firstName)
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