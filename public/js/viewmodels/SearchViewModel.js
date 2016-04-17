function SearchViewModel(){
  var self=this;

  self.query= ko.observable("");
  self.since = ko.observable("");
  self.until=ko.observable("");
  self.count=ko.observable("20");
  self.max_id=ko.observable("0");
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
        self.max_id=data.searchResults[data.searchResults.length-1].id;
        console.log("Success ",ko.toJSON(self));
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

  self.onSave=function()
  {
    var jsonData = ko.toJSON(self);
    console.log("Search ",jsonData);

    $.ajax({
      url:requestURL+saveURL,
      type:"POST",
      data:jsonData,
      contentType:"application/json",
      dataType:"json",
      xhrFields:{withCreditionals:true},

      success:function(data){
          self.searchResults.removeAll();
          console.log("Save Complete");
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
