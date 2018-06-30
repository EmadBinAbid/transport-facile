/*
Author: Emad Bin Abid
Started: Saturday, June 30' 2018
*/

//Dependencies
const mongoose = require('mongoose');
const config = require('../config');

//Post Schema
const postSchema = mongoose.Schema(
    {
        //postId --> auto-generated

        adminId: 
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
        earlyTime:
        {
            type: Date
        },
        lateTime:
        {
            type: Date
        },
        event:
        {
            type: String,
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

const PostModel = exports.PostModel = mongoose.model('PostModel', postSchema);

/*Functions to handle Http Requests*/

//addPost
/*
method: addPost(expressInstance, jwtInstance, verifyToken)
url: domain/post
request object: expects a json object of type { "post": object }
response object: sends a json object of type { "post": object }. If error, then sends "Not Acceptable"
*/
exports.addPost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.post('/post', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, adminData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const newPost = {
                    "adminId": adminData.admin._id,
                    "earlyService": req.body.post.earlyService,
                    "lateService": req.body.post.lateService,
                    "event": req.body.post.event
                };

                if(req.body.post.earlyTime)
                {
                    newPost["earlyTime"] = req.body.post.earlyTime;
                }

                if(req.body.post.lateTime)
                {
                    newPost["lateTime"] = req.body.post.lateTime;
                }

                PostModel.create(newPost, (err, dbObject) => 
                {
                    console.log(adminData);
                    if(err)
                    {
                        res.status(406).send("Not Acceptable");
                    }
                    else
                    {
                        res.json({ "post": dbObject });
                    }
                });
            }
        });
    });
}

//updatePost
/*
method: updatePost(expressInstance, jwtInstance, verifyToken)
url: domain/post?postId
request object: expects a query string with key = postId and a json object of type { post: object }
response object: sends a json object of type { "post": object }. If error, then sends "Unauthorized"
*/
exports.updatePost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.put('/post', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, adminData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const options = {"new": true};
                PostModel.findOneAndUpdate({ "adminId": adminData.admin._id, "_id": req.query.postId }, req.body.post, options, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json( { "post": dbObject } );
                    }
                });
            }
        });
    });
}

//deletePost
/*
method: deletePost(expressInstance, jwtInstance, verifyToken)
url: domain/post?postId
request object: expects a query string with key = postId
response object: sends a json object of type { "post": object }. If error, then sends "Unauthorized"
*/
exports.deletePost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.delete('/post', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, adminData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                PostModel.remove( { "adminId": adminData.admin._id, "_id": req.query.postId }, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json( {"post": dbObject} );
                    }
                } );
            }
        });
    });
}

//getPost
/*
method: getPost(expressInstance, jwtInstance, verifyToken)
url: domain/post?postId
request object: expects a query string with key = postId
response object: sends a json object of type { "post": object }. If error, then sends "Unauthorized"
*/
exports.getPost = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.get('/post', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, adminData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                PostModel.findOne( { "adminId": adminData.admin._id, "_id": req.query.postId }, (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json({ "post": dbObject });
                    }
                } );
            }
        });
    });
}

//getAllPosts
/*
method: getAllPosts(expressInstance, jwtInstance, verifyToken)
url: domain/post/all-posts
request object: null
response object: sends a json object of type { "post": array_of_objects }. If error, then sends "Unauthorized"
*/
exports.getAllPosts = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.get('/post/all-posts', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, adminData) => 
        {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                PostModel.find( (err, dbObject) => 
                {
                    if(err)
                    {
                        res.status(401).send("Unauthorized");
                    }
                    else
                    {
                        res.json({ "post": dbObject });
                    }
                } );
            }
        });
    });
}

//getAllPublicPosts
/*
method: getAllPublicPosts(expressInstance)
url: domain/post/all-public-posts
request object: null
response object: sends a json object of type { "post": array_of_objects }. If error, then sends "Unauthorized"
*/
exports.getAllPublicPosts = function (expressInstance) 
{
    expressInstance.get('/post/all-public-posts', (req, res) => 
    {
        PostModel.find((err, dbObject) => 
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