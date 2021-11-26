
window.sr=ScrollReveal({
    reset:true // add this line to reset animations when scrolling
});
//Take an element class or id and assign an animation
sr.reveal('.navbar',{
    duration: 2500, //duration of animation in ms
    origin: 'top' // specify from where side of the screen comes the element
});

sr.reveal('.header__content__left',{
    duration: 2500,
    origin: 'top',
    distance: '250px' //define the distance of the side from origin animation
});

sr.reveal('.header__content__right',{
    duration: 2500,
    origin: 'right',
    distance: '250px'
});

sr.reveal('#customers',{
    duration: 1000,
    origin: 'bottom',
    distance: '250px'
});


sr.reveal('.info__main__content__left',{
    duration: 2500,
    origin: 'top',
    distance: '250px'
});

sr.reveal('.info__main__content__right',{
    duration: 2500,
    origin: 'right',
    distance: '250px'
});

sr.reveal('.info__secondary',{
    duration: 1000,
    origin: 'bottom',
    distance: '250px'
});

sr.reveal('#contact',{
    duration: 1000,
    origin: 'top',
    distance: '250px'
});