$(document).ready(function () {
    //Hover state on Projects Grid
$( ".GridProject" ).each(function(index) {

        $(this).hover( function(){
            // What ?
            $(this).children('.gridOverlay').show();
            
            // $(".gridOverlay").css("display", "block");          
        });

        $(this).mouseleave(function(){
            $(this).children('.gridOverlay').hide();
        });
            
        });

        
        /* ******* */
  /* Works Page */
  /* Sticky Services Menu */
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $('.ServicesMenu').fadeIn();
    } else {
      $('.ServicesMenu').fadeOut();
    }
  });
        
  // dropdown menu - toggle menu on mobile
  const btn = document.querySelector(".mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });


  mobile-menu
// End JQuery
});

    

  

   