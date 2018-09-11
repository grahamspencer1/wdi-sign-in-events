document.addEventListener('DOMContentLoaded', function(){

  var logOn = document.querySelector('.signin');
  var displayModal = document.querySelector('.modal');
  var hideModal = document.querySelector('.close');
  var addError = document.querySelector('.submit');
  var username = document.querySelector('#user');
  var password = document.querySelector('#pass');

  logOn.addEventListener('click', function() {
    displayModal.style.display = 'block';
  });

  hideModal.addEventListener('click', function() {
    displayModal.style.display = 'none';
  });

  addError.addEventListener('click', function() {
    username.classList.add('error');
    password.classList.add('error');
  });

});
