$(document).ready(function() {
  $('.pages li a').each(function(index, value) {
    var $link = $(this);
    
    $link.on('click', function(event) {
      // console.log($link.attr('href'));
      // console.log(this.href);
      var $notify = $('#notify');

      $('#main').load(this.href + ' #main *', function( data, status ) {
        if ( status === 'success') {
          $notify.text('Me sukses o Gur');
        } else {
          $notify.text('U ngul diku o Gur');
        }
      });

      $notify
        .slideDown()
        .delay(2000)
        .slideUp();
    
      // return false;
      event.preventDefault();
    });
  });
});

$(document).ready(function() {

  $('.pages li a').each(function() {

    var url = this.href + " #main *";
    // var feedUrl = "http://blog.jquery.com/feed/";

    var $link = $(this);

    $link.on('mousedown', function() {
      $('#main').load(this.href + " #main *");

      $.ajax({
        url: url,
        cache: false,
        // data: {
        //   term: term
        // }
        dataType: 'html',
        // type: 'POST'
        success: function (data, status, xhr) {
          alert("me sukses");
          $('#main').html(data);

          // data.each(function (index, value) {
          //   console.log(value);
          // })
        },
        error: function (xhr, status, error) {
          alert(error);
        }
      });
    });
  });
});