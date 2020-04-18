$('.tab-link').on('click', function() {
    if($(this).text() == 'TICKET') {
        $('.section-footer-detail').css('display', 'block')
        $('.line-detail').css('display', 'none')
        $('#colDetail').addClass('col-md-8')
        $('#colDetail').removeClass('col-md-10')
    } else {
        $('.section-footer-detail').css('display', 'none')    
        $('#colDetail').addClass('col-md-10')
        $('#colDetail').removeClass('col-md-8')
        $('.line-detail').css('display', 'block')
    }
})

$('.navbar-toggler').on('click', function() {    
    setTimeout(() => {
        if($(this).hasClass('collapsed')) {
            $('nav').css('background-color', '#1c222c')
        } else {
            $('nav').css('background-color', '#475FFF')
        }
    }, 50)
})