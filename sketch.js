var sliders = [];

var angulo = 0;

function setup() {
  noCanvas();
  //createCanvas (200, 200);
  for (var i = 0; i < 100; i++) {
    sliders[i] = createSlider(0, 255, 50);
  }

  sliders[0].input(ajustarSliders);
}

function ajustarSliders() {
  for (var i = 1; i < sliders.length; i++) {
    sliders[i].value(sliders[0].value());
  }
}
