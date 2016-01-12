

module.exports={

  search:function(search,res)
  {
    //https://github.com/ttezel/twit
      var Twit = require('twit')

      var T = new Twit({
          consumer_key:         'wTCG21thlTVxtIpjKs6GGmNPr'
        , consumer_secret:      'HyjNgR9ePQX1dEBXwX34zU3fYnoSyCqKUTJhJOaxV0LQKEQUmy'
        , access_token:         '19904136-36lnArgSj3dJiWeDwbnloFjPsBDsEzgQFLblYxdHn'
        , access_token_secret:  'j9nPpAUyHjstyG8vZvTy1p5O1FeZzNoXfkN3Lj2wVCOUW'
      })
      //
      //  search twitter for all tweets containing the word 'banana' since Nov. 11, 2011
      //
      var searchTerm=search.query+" since:"+search.since+" until:"+search.until;
      console.log("Search Term ",searchTerm);

      //var searchTerm=
      T.get('search/tweets', { q: searchTerm}, function(err, data, response) {
      //console.log(data);
      //parse tweets here
      //res.send()
      var results=search;
      results.searchResults= new Array();
      for(var i = 0; i < data.statuses.length; i++) {
          var obj = data.statuses[i];
          var searchResult={screenName:obj.user.screen_name,text:obj.text};
          //console.log(searchResult);
          results["searchResults"].push(searchResult);
      }
      var response = {
        status  : 200,
        success : 'Updated Successfully'
      }
      //console.log(results);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.send(200, JSON.stringify(response));
      //res.jsonp(response);
      res.end();
      console.log('Response Sent');
      //res.send("Hello");
    });
  }
}
