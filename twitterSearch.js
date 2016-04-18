

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


      var actualSearch={}
      if (search.max_id>0)
      {
        actualSearch={q: searchTerm, count:search.count, lang:"en", max_id:search.max_id}
      }
      else {
        actualSearch={q: searchTerm, count:search.count, lang:"en"}
      }
      console.log("Search Term ",searchTerm);



      T.get('search/tweets', actualSearch, function(err, data, response) {
      var results=search;
      results.searchResults= new Array();
      for(var i = 0; i < data.statuses.length; i++) {
          var obj = data.statuses[i];
          var searchResult={id:obj.id_str,screenName:obj.user.screen_name,text:obj.text,date:obj.created_at,
          url:"https://twitter.com/"+obj.user.screen_name+"/status/"+obj.id_str,save:true};
          //console.log(searchResult);
          results["searchResults"].push(searchResult);
      }
      results["searchResults"].reverse();
      //results.max_id=results.searchResults[0].id_str;
      res.end(JSON.stringify(results));
      console.log('Response Sent');
    });
  }
}
