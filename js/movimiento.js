$(document).ready(function(){
    // IR A LOS ELEMENTOS DEL MENU
    $('#btn-precios').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 2200
    }, 500);
    })

    $('#btn-contacto').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 3500
    }, 500);
    })
});