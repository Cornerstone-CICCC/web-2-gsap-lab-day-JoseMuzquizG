gsap.registerPlugin(ScrollTrigger);

const blueSection = gsap.timeline()
const redSection = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "top 20%",
        // markers: true
    }
})
const greenSection = gsap.timeline()
const lastSection = gsap.timeline()

blueSection
  .from('.content div h1 span:last-child', {x: "100vw", duration: 1})
  .from('.content div h1 span:first-child', {x: "-100vw", duration: 1}, "<")
  .from('.content div p', {transformOrigin: "left", rotation: "90deg", opacity: 0, duration: .5})
  .from('.content img', {y: "100vh", duration: .5})

redSection
  .from('.section2 h2 span', {y: "-100vh", stagger: .3, duration: .5})
  .from('.section2 p', {duration: 1, rotationY: 90, opacity: 0});