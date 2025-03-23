$(document).ready(function () {
	let controller = new 
    ScrollMagic.Controller();

    $('.project').each(function(){
            let first_scene = new ScrollMagic.Scene({
                triggerElement:".project1",
                duration:300,
                triggerHook:0.3
        })
        
        .setClassToggle(".project1", 'fade-in')
        .addIndicators()
        .addTo(controller);
    });

    let pinHeaderScene = new ScrollMagic.Scene({
        triggerElement:'header',
        duration:'1%',
        triggerHook:0
    })
    .setPin('.header',{pushFollowers:false})
    .addTo(controller)
    .addIndicators();


    let pinHeaderScene2 = new ScrollMagic.Scene({
        triggerElement:'.project1',
        triggerHook:0.3
    })

    .setPin('.header',{pushFollowers:false})
    .addTo(controller)
    .addIndicators();


    setPin('.header')

    $('.project').each(function(){
        let first_scene = new ScrollMagic.Scene({
            triggerElement:".project2",
            duration:300,
            triggerHook:0.3
    })

        .setClassToggle(".project2", 'fade-in')
        .addIndicators()
        .addTo(controller);
    })


    
    $('.project').each(function(){
        let first_scene = new ScrollMagic.Scene({
            triggerElement:".project3",
            duration:300,
            triggerHook:0.3
    })

        .setClassToggle(".project3", 'fade-in')
        .addIndicators()
        .addTo(controller);
    })



    
    $('.project').each(function(){
        let first_scene = new ScrollMagic.Scene({
            triggerElement:".project4",
            duration:300,
            triggerHook:0.3
    })

        .setClassToggle(".project4", 'fade-in')
        .addIndicators()
        .addTo(controller);
    })

});