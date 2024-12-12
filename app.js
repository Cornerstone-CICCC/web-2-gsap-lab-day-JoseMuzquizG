gsap.registerPlugin(ScrollTrigger);

const blueSection = gsap.timeline()
const redSection = gsap.timeline()
const greenSection = gsap.timeline()
const lastSection = gsap.timeline()

blueSection
  .from('.content div h1 span:last-child', {x: "100vw", duration: 1})
  .from('.content div h1 span:first-child', {x: "-100vw", duration: 1}, "<")
  .from('.content div p', {transformOrigin: "left", rotation: 90, opacity: 0, duration: .5})
  .from('.content img', {y: "100vh", duration: .5})