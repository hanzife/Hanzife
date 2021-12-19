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
    });