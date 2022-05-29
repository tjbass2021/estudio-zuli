
$(document).ready(function(){
    let controle = false

    $('.menu-hamburguer').on('click', function(){
        if(! controle){
            $('.menu-oculto').addClass('visivel');
            $('.exit').addClass('exit-vivsivel');
            $(this).addClass('menu-hamburguer-none');
            controle = true;
        }
    })

    $('.exit').on('click', function(){
        if(controle) {
            $('.menu-oculto').removeClass('visivel');
            $('.menu-hamburguer').removeClass('menu-hamburguer-none');
            $(this).removeClass('exit-vivsivel');
            controle = false;
        }
    })
})
