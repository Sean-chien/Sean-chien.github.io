$(document).ready(function() {
    $('.navbar-nav a').click(function(){
        $('.navbar-nav a').removeClass('active');
        $(this).addClass('active');
    })
    $("nav").click(function(){
        $("#wea").toggle("slow");
        });
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
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
        if(!d.getElementById(id)){
            js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js,fjs);
        }}(document,'script','weatherwidget-io-js');

});


