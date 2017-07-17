$(document).ready(function(){

  $.get('https://www.reddit.com/r/naturepics/.json?limit=10').done(function(json) {
    var payload = json.data.children;
    appendToContent(payload);
    console.log(payload);
  });

  function appendToContent(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      var date = new Date(data[i].data.created_utc * 1000);
      console.log(data[i].data.created_utc)
      console.log(date);
      $('.content').append('<div class="created-entry"><img src="' + data[i].data.thumbnail + '"/><p>' + data[i].data.title + '</p><p> -- ' + data[i].data.author + '</p><p>' + date + '</p></div>');
    }
  }

});
