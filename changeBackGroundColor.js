function getRandomColor() {
  var digits = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += digits[Math.floor(Math.random() * 16)];
  }
  return color;
}

var usedColorsArray = [];

function changeBackground() {
  var newColor = getRandomColor();
  while (usedColorsArray.indexOf(newColor) >= 0) {
    newColor = getRandomColor();
  }
  document.body.style.backgroundColor = newColor;
  document.body.style.transition = "all 1s ease-in-out";
  usedColorsArray.push(newColor);
}

for (var i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(changeBackground, j * 1000)
  })(i)
}
