  console.clear();
  console.log("ScrollMagic v%s loaded", ScrollMagic.version);

// init
  var controller = new ScrollMagic.Controller();

// define movement of panels
  var wipeAnimation = new TimelineMax()
      .to("section.panel.one .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content      
      .fromTo("section.panel.two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
      .to("section.panel.two .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content
      .fromTo("section.panel.three",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .to("section.panel.three .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content
      .fromTo("section.panel.four", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
      .to("section.panel.four .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content
      .fromTo("section.panel.five",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .to("section.panel.five .additionalContent", 1, {y: "-100%", ease: Linear.easeNone});
      

  // create scene to pin and link animation
  new ScrollMagic.Scene({
          triggerElement: "#pinContainer",
          triggerHook: "onLeave",
          duration: "600%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)      
      .addTo(controller);