function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco();

var main = document.querySelector("#main");
var img = document.querySelector("#page1>img");

main.addEventListener("mousemove", function (dets) {
  img.style.top = 1 - dets.y * 0.05 + "px"
  img.style.left = 1 - dets.x * 0.05 + "px"
})

gsap.from("#page2 h6", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: "#page2 h6",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 80%",
    scrub:1
  }
})
gsap.from("#page2 h1", {
  opacity: 0,
  x: -100,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 80%",
    scrub:1

  }
})
gsap.from("#page2 h5", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: "#page2 h5",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top 80%",
    scrub:1

  }
})
gsap.from("#page3 h6", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: "#page3 h6",
    scroller: "#main",
    // markers : true,
    start: "top 90%",
    end: "top 80%",
    scrub:1

  }
})
gsap.from("#page3 h1", {
  opacity: 0,
  x: 100,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "#main",
    // markers : true,
    start: "top 70%",
    end: "top 80%",
    scrub:3

  }
})

gsap.from("#page6 #logo", {
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: "#page6 #logo",
    scroller: "#main",
    // markers : true,
    start: "top 70%",
    end: "top 80%",
    scrub:1

  }
})
gsap.from("#load2>img", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  delay: 1,
  scrub:1

})

gsap.to("#page1 h1", {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    // markers: true,
    start: "top 10%",
    end: "top 70%",
    scrub:1
    
  }
})

gsap.from("#nav", {
  y: -100,
  opacity: 0,
  stagger: 1,
  scrub:1

})

gsap.from("#page1 h1", {
  z: 100,
  scale:0,
  opacity: 0,
  stagger: 1,
  scrub:1

})

gsap.from("#page3 #imgA",{
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 #imgA",
    scroller: "#main",
    // markers: true,
    start: "top 40%",
    end: "top 80%",
    scrub:3

  }
})

gsap.from("#page3 #imgB",{
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 #imgB",
    scroller: "#main",
    // markers: true,
    start: "top 40%",
    end: "top 80%",
    scrub:3

  }
})

gsap.from("#page4 h1",{
  scale:0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top 80%",
    scrub:3

  }
})

gsap.from("#page5 h1",{
  scale:0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5 h1",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top 80%",
    scrub:3

  }
})

gsap.from("#page4 h6",{
  // scale:0,
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4 h6",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top 80%",
    scrub:3

  }
})

gsap.from("#page5 h6",{
  x: -100,
  // scale:0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5 h6",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top 80%",
    scrub:3

  }
})

gsap.from("#jon",{
  scale:0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#jon",
    scroller: "#main",
    // markers: true,
    start: "top 30%",
    end: "top 80%",
    scrub:3
  }
})

gsap.from("#leigh",{
  scale:0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#leigh",
    scroller: "#main",
    // markers: true,
    start: "top 30%",
    end: "top 80%",
    scrub:3
  }
})


