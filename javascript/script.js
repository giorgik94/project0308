let navbarLinks = document.getElementById('navigationlinksid');
let toggleButton = document.getElementById('burgerwrapperid');

toggleButton.addEventListener('click', function(){
    navbarLinks.classList.toggle('activeresponsive');
});