kaboom();

function myFunction() {
  document.body.style.background = "#f3f3f3 url('/PNG/BG_01/BG_01.png')";
}

// load a sprite "bean" from an image
loadSprite("slime", "assets/sprites/slime.png");

// add something to screen
add([sprite("slime"), pos(80, 40)]);