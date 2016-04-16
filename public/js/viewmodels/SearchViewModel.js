function SearchViewModel(){
  var self=this;

  self.query= ko.observable("");
  self.since = ko.observable("");
  self.until=ko.observable("");
  self.searchResults=ko.observableArray();

  self.onSubmit=function()
  {
    var jsonData = ko.toJSON(self);
    console.log("Search ",jsonData);
    //$.post(requestURL+searchURL,jsonData,function(searchResults)
    //{
    //    self.searchResults=response;
    //})
    $.ajax({
      url:requestURL+searchURL,
      type:"POST",
      data:jsonData,
      contentType:"application/json",
      dataType:"json",
      xhrFields:{withCreditionals:true},
      success:function(data){
        //populate results
        for(var i = 0; i < data.searchResults.length; i++) {
          self.searchResults.push(data.searchResults[i]);
        }
        console.log("Success ",searchViewModel);
      },
      error: function(jqXHR, textStatus, errorThrown ) {
        console.log("Error ",textStatus);
      },
      complete: function () {
        // Handle the complete event
        console.log("Complete")
      }
    })
  }

};
