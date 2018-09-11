document.addEventListener('DOMContentLoaded', function(){

  var logOn = document.querySelector('.signin');
  var displayModal = document.querySelector('.modal');
  var hideModal = document.querySelector('.close')

  logOn.addEventListener('click', function() {
    displayModal.style.display = 'block';
  });

  hideModal.addEventListener('click', function() {
    displayModal.style.display = 'none';
  });

});
