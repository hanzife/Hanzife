$(document).ready(function () {
  

$.getJSON( "../public/data/Articles.json", function( data ) {
  // now data is JSON converted to an object / array for you to use.
  $('#created_at').text(data[0].created_at);
  $('#articleHeader').text(data[0].atricle_title);
  $('#content').text(data[0].html);
 
});

});

 



