jQuery(function ($) {
    var controller = new ScrollMagic.Controller({
    globalSceneOptions: {triggerHook: "onEnter", duration"200%"}
});

new Scrollmagic.Scene({
triggerElement: "#parallax",
})
    .setTween("#parallax", {y:"80%", ease: Linear.easeNone})
    .addIndicators();
    .addTo(controller);
    
});
