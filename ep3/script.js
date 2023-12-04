// gsap.to("#box", {
//     x:1500,
//     duration:2,
//     rotate:360,
//     backgroundColor: "red",
//     delay:1,
// })

gsap.from("#page1 #box", {
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
})

gsap.from("#page2 #box", {
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger: { //Used to play animation when scroll triggers a certain point
        trigger:"#page2 #box", //Used to target element
        scroller:"body", // Used to consider parent element for scroll
        markers:true, // Used to change view marker
        start: "top 60%", // Used to change start marker
        end: "top 30%", // Used to change end marker
        scrub:5, // Used to play animation every time on scroll up and down
    }
})