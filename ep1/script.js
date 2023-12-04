// gsap.to("#box", {
//     x:700,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.5,
// })

// gsap.from("#box", {
//     x:700,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.5,
// })

// gsap.to("h1", {
//     x:600,
//     color:"orange",
//     duration:2,
//     delay:1,
// })

// gsap.to("h2", {
//     x:600,
//     color:"salmon",
//     duration:2,
//     delay:3,
// })

// gsap.to("h3", {
//     x:600,
//     color:"black",
//     duration:2,
//     delay:5,
// })

// gsap.to("h1",{
//     x:600,
//     duration:1,
//     delay:0.5,
//     // stagger:1  // Used to play animation on same element after 1 second
//     repeat:-1, // -1 is used to play animation INFINITE
//     yoyo:true
// })

var tl = gsap.timeline();

tl.to("h1", {
    x:600,
    duration:1,
})

tl.to("h2", {
    x:700,
    duration:1,
})

tl.to("h3", {
    x:800,
    duration:1,
})