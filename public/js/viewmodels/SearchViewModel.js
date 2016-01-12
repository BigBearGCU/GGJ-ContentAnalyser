function SearchViewModel(){
  var self=this;

  self.query= ko.observable("");
  self.since = ko.observable("");
  self.until=ko.observable("");
  self.searchResults=ko.observable();

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
      type:"GET",
      data:jsonData,
      contentType:"application/json",
      dataType:"json",
      xhrFields:{withCreditionals:true},
      sucess:function(data){
        //populate results
        console.log("Success ",data);
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
