// SCROLL REVEALS COMMAND
// SCROLL REVEALS COMMAND
// SCROLL REVEALS COMMAND
// SCROLL REVEALS COMMAND
// SCROLL REVEALS COMMAND
// SCROLL REVEALS COMMAND

window.sr = ScrollReveal();
    sr.reveal('.header', {
        duration: 1000,
        origin: 'bottom',
        distance: '-100px',
    });
    
    sr.reveal('.img-text-home', {
        duration: 2000,
        origin: 'top',
        distance: '-100px',
        delay: 500
    });

    sr.reveal('.home-text', {
        duration: 2000,
        origin: 'top',
        distance: '-100px',
        delay: 500
    });

    sr.reveal('.reveal', {
        duration: 2000,
        origin: 'top',
        distance: '-100px'
    });

    sr.reveal('.part-one', {
        duration: 1000,
        origin: 'top',
        distance: '-100px',
        delay: 1200
    });

    sr.reveal('.part-two', {
        duration: 1000,
        origin: 'top',
        distance: '-100px',
        delay: 1200
    });

    sr.reveal('.part-three', {
        duration: 1000,
        origin: 'top',
        distance: '-100px',
        delay: 1200
    });





    // SMOOTH SCROLL COMMAND
    // SMOOTH SCROLL COMMAND
    // SMOOTH SCROLL COMMAND
    // SMOOTH SCROLL COMMAND
    // SMOOTH SCROLL COMMAND
    // SMOOTH SCROLL COMMAND
    // SMOOTH SCROLL COMMAND


$(document).ready(function() {
    var ir_a = $(".desplazar");

    ir_a.click(function(e){
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top,
            }, 1000
        );
    })
});



