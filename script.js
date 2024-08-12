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

var tl=gsap.timeline();
tl.from("#page1 h1",{
    y:60,
    duration:0.6,
    opacity:0
    
})
tl.from("#page1 h2",{
    y:60,
    duration:0.6,
    opacity:0,
    delay: -0.1
})
tl.from("#page1 h3",{
    y:60,
    duration:0.6,
    opacity:0,
    delay: -0.09
})

gsap.to("#page2 img",{

    scale:1,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"body",
        start:"top 70%",
        end:"top 0%",
        scrub:2
    }
})

gsap.from("#page2 h1",{
    rotateX:"90deg",
    scrollTrigger:{
        trigger:"#h11",
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        scrub:2
    }
})
