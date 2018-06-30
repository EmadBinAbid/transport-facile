/*
Author: Emad Bin Abid
Started: Sunday, July 01' 2018
*/

//Dependencies
const mongoose = require('mongoose');
const config = require('../config');

//Post Schema
const responseSchema = mongoose.Schema(
    {
        //postId --> auto-generated

        userId: 
        {
            type: String,
            required: true
        },
        postId: 
        {
            type: String,
            required: true
        },
        
        earlyService:
        {
            type: Boolean,
            required: true
        },
        lateService:
        {
            type: Boolean,
            required: true
        },
        createdOn:
        {
            type: Date,
            default: Date.now,
            required: true
        }
    }
);

const ResponseModel = exports.ResponseModel = mongoose.model('ResponseModel', responseSchema);

/*Functions to handle Http Requests*/

//addResponse
/*
method: addResponse(expressInstance, jwtInstance, verifyToken)
url: domain/response
request object: expects a json object of type { "response": object }
response object: sends a json object of type { "response": object }. If error, then sends "Not Acceptable"
*/
exports.addResponse = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.post('/response', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const newResponse = {
                    "userId": userData.user._id,
                    "postId": req.body.response.postId,
                    "lateService": req.body.response.lateService,
                    "earlyService": req.body.response.earlyService
                };

                ResponseModel.create(newResponse, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(406).send("Not Acceptable");
                    }
                    else
                    {
                        res.json({ "response": dbObject });
                    }
                });
            }
        });
    });
}

//updateResponse
/*
method: updateResponse(expressInstance, jwtInstance, verifyToken)
url: domain/response?responseId
request object: expects a query string with key = responseId and a json object of type { response: object }
response object: sends a json object of type { "response": object }. If error, then sends "Unauthorized"
*/
exports.updateResponse = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.put('/response', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const options = {"new": true};
                ResponseModel.findOneAndUpdate({ "userId": userData.user._id, "_id": req.query._id }, req.body.post, options, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json( { "response": dbObject } );
                    }
                });
            }
        });
    });
}

//deleteResponse
/*
method: deleteResponse(expressInstance, jwtInstance, verifyToken)
url: domain/response?responseId
request object: expects a query string with key = responseId
response object: sends a json object of type { "response": object }. If error, then sends "Unauthorized"
*/
exports.deletePost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.delete('/response', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                ResponseModel.remove( { "userId": userData.user._id, "_id": req.query._id }, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json( {"response": dbObject} );
                    }
                } );
            }
        });
    });
}

//getResponse
/*
method: getResponse(expressInstance, jwtInstance, verifyToken)
url: domain/response?responseId
request object: expects a query string with key = responseId
response object: sends a json object of type { "response": object }. If error, then sends "Unauthorized"
*/
exports.getResponse = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.get('/response', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                ResponseModel.findOne( { "userId": userData.user._id, "_id": req.query._id }, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json({ "response": dbObject });
                    }
                } );
            }
        });
    });
}

//getAllResponses
/*
method: getAllResponses(expressInstance, jwtInstance, verifyToken)
url: domain/response/all-responses
request object: null
response object: sends a json object of type { "response": array_of_objects }. If error, then sends "Unauthorized"
*/
exports.getAllResponses = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.get('/response/all-responses', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                ResponseModel.find( (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json({ "response": dbObject });
                    }
                } );
            }
        });
    });
}

//getResponseByPostId
/*
method: getResponseByPostId(expressInstance)
url: domain/response/responseByPostId?postId
request object: null
response object: sends a json object of type { "response": array_of_objects }. If error, then sends "Unauthorized"
*/
exports.getAllPublicPosts = function (expressInstance) 
{
    expressInstance.get('/response/responseByPostId', (req, res) => 
    {
        ResponseModel.find( { "postId": req.query.postId } , (err, dbObject) => 
        {
            if (err)
            {
                res.status(401).send("Unauthorized");
            }
            else 
            {
                res.json({ "post": dbObject });
            }
        });
    });
}