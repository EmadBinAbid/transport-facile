/*
Author: Emad Bin Abid
Started: Thursday, June 28' 2018
*/

//Creating a node server

exports.run = function(expressInstance, port)
{
    expressInstance.listen(port, () => {
        console.log(`Node server listening on port ${port}...`);
    });
}