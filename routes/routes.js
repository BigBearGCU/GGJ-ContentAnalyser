var path    = require('path');

module.exports = function(app){

    app.get('/', function(req, res){
        //res.send("Home Page")
        //redirect to public
        res.sendFile(path.resolve('public/index.html'));
    });

    app.post('/login',function(req,res)
    {
      //res.send("Login Page")
    });

    app.post('/register',function(req,res)
    {
      //res.send("Login Page")
    });

    app.post('/searchTweets',function(req,res)
    {

    });

    //other routes..
}
