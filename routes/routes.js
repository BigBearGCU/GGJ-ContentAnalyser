var path    = require('path');
var twitterSearch =require('../twitterSearch');

module.exports = function(app){

  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
    //app.get('/', function(req, res){
        //res.send("Home Page")
        //redirect to public
        //res.sendFile(path.resolve('public/index.html'));
  //  });

    app.post('/login',function(req,res)
    {
      //res.send("Login Page")
      console.log('Login ',req.body);
    });

    app.post('/register',function(req,res)
    {
      //res.send("Login Page")
    });

    app.get('/searchTweet',function(req,res)
    {
      console.log('Search Tweet ',req.body);
      res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
      res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
      twitterSearch.search(req.body,res);
         //res.sendStatus(20);
        //res.end();
    });

    //other routes..
}
