$(function(){
    $('#login').on('click', function(){
      // Perform some login actions...
      // ...
      // Then update the login status image
      $('#login-state').attr('src', 'images/loggedin.png');
    });
  });