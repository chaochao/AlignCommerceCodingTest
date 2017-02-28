var BackGroundChangerMaker = function() {
  this.usedColorsTable = {};
}

BackGroundChangerMaker.prototype.getRandomColor = function() {
  var digits = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += digits[Math.floor(Math.random() * 16)];
  }
  return color;
}
BackGroundChangerMaker.prototype.changeBackground = function() {
  var newColor = this.getRandomColor();
  while (this.usedColorsTable[newColor]) {
    newColor = this.getRandomColor();
  }
  document.body.style.backgroundColor = newColor;
  document.body.style.transition = "all 1s ease-in-out";
  this.usedColorsTable[newColor] = true;
}

var BGChangerOne = new BackGroundChangerMaker();

function backgroundLoop(interval, loops) {
  for (var i = 0; i < loops; i++) {
    (function(j) {
      setTimeout(BGChangerOne.changeBackground.bind(BGChangerOne), j * interval)
    })(i)
  }
}

var interval = 1000;
var loops = 10

backgroundLoop(interval, loops);