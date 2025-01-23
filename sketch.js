var sliders = [];
var angulo = 0;

function setup() {
  noCanvas();

  for (var i = 0; i < 250; i++) {
    sliders[i] = createSlider(0, 255, 50);
    sliders[i].style("width", "200px"); // Ajusta el tamaño del slider
  }
}

function draw() {
  var offset = 0;
  for (var i = 0; i < sliders.length; i++) {
    var x = map(sin(angulo + offset), -1, 1, 0, 255);
    sliders[i].value(x);

    // Cambia el color de fondo del slider según su valor
    var colorValue = `rgb(${x}, ${255 - x}, 150)`; // Genera un color dinámico
    sliders[i].style("background", colorValue);

    offset += 0.01;
  }
  angulo += 0.1;
}
