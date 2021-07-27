let navbarLinks = document.getElementById('navigationlinksid');
let toggleButton = document.getElementById('burgerwrapperid');

toggleButton.addEventListener('click', function(){
    navbarLinks.classList.toggle('activeresponsive');
});

document.getElementById('message').addEventListener('keydown', function (event){
    if (event.which === 13) {
        alert ('YOU PRESSED ENTER');
    } else {
        console.log('EVERYTHING IS OK');
    }
})
