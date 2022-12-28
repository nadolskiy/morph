document.addEventListener("DOMContentLoaded", function(event) { 
  bulmaAccordion.attach();
  
  // click to the dropdown
  document.getElementById("language-dropbox").onclick = function(event){
    event.stopPropagation();
  
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
    } else {
      this.classList.add('is-active');
    }

  };

  // hide menu when click out of the menu
  document.body.onclick = function(){
    document.getElementById("language-dropbox").classList.remove('is-active');
  };

    

 // Get all "navbar-burger" elements
 const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

 // Check if there are any navbar burgers
 if ($navbarBurgers.length > 0) {

   // Add a click event on each of them
   $navbarBurgers.forEach( el => {
     el.addEventListener('click', () => {

       // Get the target from the "data-target" attribute
       const target = el.dataset.target;
       const $target = document.getElementById(target);

       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
       el.classList.toggle('is-active');
       $target.classList.toggle('is-active');

     });
   });
 }

});
