$(document).ready(function() {
    $('.navbar-nav a').click(function(){
        $('.navbar-nav a').removeClass('active');
        $(this).addClass('active');
    })
    new TypeIt('#visiting', {
        strings: ["I'm looking forward to hearing from you!"],
        speed: 50,
        waitUntilVisible: true
    }).go();

    new TypeIt('#project-sean', { 
        speed: 50,
        waitUntilVisible: true
    }).go();

    new TypeIt('#main-text-centered',{
        
        strings: ['HELLO WORLD!', 'Hi I am SEAN CHIEN!'],
        speed: 50,
        waitUntilVisible: true
    }).go();

});


