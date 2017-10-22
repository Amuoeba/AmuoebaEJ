  console.clear();
  console.log("ScrollMagic v%s loaded", ScrollMagic.version);

// init
  var controller = new ScrollMagic.Controller();

// define movement of panels
  var wipeAnimation = new TimelineMax()
      .to("section.panel.One .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content      
      .fromTo("section.panel.Two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
      .to("section.panel.Two .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content
      .fromTo("section.panel.Three",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .to("section.panel.Three .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content
      .fromTo("section.panel.Four", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
      .to("section.panel.Four .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content
      .fromTo("section.panel.Five",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .to("section.panel.Five .additionalContent", 1, {y: "-100%", ease: Linear.easeNone});
      

  // create scene to pin and link animation
  new ScrollMagic.Scene({
          triggerElement: "#pinContainer",
          triggerHook: "onLeave",
          duration: "600%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)      
      .addTo(controller);