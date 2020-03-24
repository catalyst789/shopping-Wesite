var tl = new TimelineMax();
tl.fromTo('nav', 2,
    {
        y: '-100',
        opacity: 0,
        ease: Expo.easeOut
    },
    {
        y: '0',
        opacity: 1,
        ease: Expo.easeOut
    })
.fromTo('#left', 1.5, {
    width: 0,
    ease: Expo.easeOut
}, {         
    width: '35%',
    ease: Expo.easeOut
}, '-=1.4')
.fromTo('#left h1', 2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeOut
}, {
    y: 0,
    opacity: 1,
    ease: Expo.easeOut
})
.fromTo('#left #report', 2, {
    opacity: 0,
    y: 20,
    ease: Expo.easeOut
}, {
    opacity: 1,
    y: 0,
    ease: Expo.easeOut
}, '-=1')
.fromTo('#right', 1, {
    width: 0,
    opacity: 0,
    ease: Expo.easeOut
}, {
    width: '65%',
    opacity: 1,
    ease: Expo.easeOut
}, '-=3')
.fromTo('#right #rightContent', 2, {
    opacity: 0,
    y: 50,
    ease: Expo.easeOut
}, {
    opacity: 1,
    y: -70,
    ease: Expo.easeOut
}, '-=1.6')


