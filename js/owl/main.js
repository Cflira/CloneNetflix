$('.owl-carousel').owlCarousel({
    loop:true, /*Faz passar as imagens sem fim, se colocar false ela ai até a última */
    margin:10, /** Margem entre os posts */
    nav:false, /**Desabilita as setinhas de navegação < > */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})