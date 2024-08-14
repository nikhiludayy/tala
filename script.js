var menu = document.querySelector("#ic ");
var fulscr = document.querySelector("#full-scr-nav");
var flag = 0;
menu.addEventListener("click", function () {

    if (flag == 0) {
        fulscr.style.top = "0%";
        document.querySelector("#nav h3").style.color = "#222";
        document.querySelector("#nav h4").style.color = "#222";
        document.querySelector("#nav i").style.color = "#222";
        document.querySelector("#nav .ri-menu-line").style.display = "none";
        document.querySelector("#nav .ri-arrow-up-line").style.display = "block";
        document.querySelector("#nav .ri-arrow-up-line").style.color = "#222";
        flag = 1;
    }
    else {
        fulscr.style.top = "-100%";
        document.querySelector("#nav h3").style.color = "#dadada";
        document.querySelector("#nav h4").style.color = "#dadada";
        document.querySelector("#nav i").style.color = "#dadada";
        document.querySelector("#nav .ri-menu-line").style.color = "#dadada";
        document.querySelector("#nav .ri-menu-line").style.display = "block";
        document.querySelector("#nav .ri-arrow-up-line").style.display = "none";
        flag = 0;

    }

})

var tl = gsap.timeline();
tl.from("#page1 h1", {
    y: 60,
    duration: 0.6,
    opacity: 0

})
tl.from("#page1 h2", {
    y: 60,
    duration: 0.6,
    opacity: 0,
    delay: -0.1
})
tl.from("#page1 h3", {
    y: 60,
    duration: 0.6,
    opacity: 0,
    delay: -0.09
})

gsap.to("#page2 img", {

    scale: 1,
    scrollTrigger: {
        trigger: "#page2 img",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 0%",
        scrub: 2
    }
})
gsap.to("#nav ", {

    fontSize: "1vw",
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "body",
        // markers: true,
        start: "top 20%",
        end: "top 0%",
        scrub: .1
    }
})

gsap.to("#page2 h1", {
    duration: 1,
    opacity: 1,
    rotateX: 0,
    scrollTrigger: {
        trigger: "#h11",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 35%",
        scrub: 2
    }
})

var growth = 0;
setInterval(function () {
    document.querySelector("#smile").style.transform = `rotate(${growth++}deg)`
    growth <360 ? true:growth=0;

}, 10)

var slide1h1=document.querySelectorAll("#main #page6 .slide1h1 h1");
slide1h1.forEach(function(elem){
    gsap.to(
        elem,{
            transform:'translateX(-96%)',
            // ease:'linear',
            duration:4,
            scrollTrigger:{
                trigger: "#page6 ",
                scroller:"body",

                scrub:10

            }

        }
    )
})
var slide2h1=document.querySelectorAll("#main #page6 .slide2h1 h1");
slide2h1.forEach(function(elem){
    gsap.to(
        elem,{
            transform:"translateX(0%)",
            // ease: "linear",
            duration:4,
            scrollTrigger:{
                trigger: "#page6 ",
                scroller:"body",

                scrub:10

            }

        }
    )
})


document.querySelector(".yes").addEventListener("mousemove",function(dets){
    document.querySelector(".yes img").style.opacity = 1;
     document.querySelector(".yes img").style.left = `${dets.x }px`;
     document.querySelector(".yes img").style.top = `${dets.y }px`;

})
document.querySelector(".no ").addEventListener("mousemove",function(dets){
    document.querySelector(".no img").style.opacity = 1;
    document.querySelector(".no img").style.left = `${dets.x }px`;
    document.querySelector(".no img").style.top = `${dets.y }px`;
    
    
})
document.querySelector(".yes ").addEventListener("mouseleave",function(dets){
    document.querySelector(".yes img").style.opacity = 0;

})
document.querySelector(".no ").addEventListener("mouseleave",function(dets){
    document.querySelector(".no img").style.opacity = 0;

    
})
