$(document).ready(function() {

  $.get('https://www.reddit.com/r/naturepics/.json?limit=10').done(function(json) {
    var payload = json.data.children;
    appendToContent(payload);
  });

  function appendToContent(data) {

    for (var i = 0; i < data.length; i++) {
      var date = new Date(data[i].data.created_utc * 1000);

      $('.content').append('<div class="created-entry"><img src="' + data[i].data.thumbnail + '"/><div class="title-container"><p class="title">' + data[i].data.title + '</p></div><p class="author"> -- ' + data[i].data.author + '</p><p class="date">' + date + '</p></div>');

      $('.created-entry').animate({
        margin: '30px',
        padding: '12px'
      }, 2000);
      
    }

  }
});
