if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

var DOT_RADIUS = 20;
const ROWS = 20;
const COLUMNS = 50;
const COLORS = [
  // '#262626',
  '#332100',
  'orange',
  'red'
];

var FRAMELENGTH = 200;

var scrollStart;

function DotMatrixDisplay() {
  this.content = [];
  this.canvas = document.getElementById('canvas');
  this.ctx = canvas.getContext('2d', {alpha: false});
  this.width = 6;
  this.height = 6;
  this.canvas.width = (DOT_RADIUS+3) * 2 * this.width - 6;
  this.canvas.height = (DOT_RADIUS+3) * 2 * this.height - 6;
  this.orangeFill = this.ctx.createRadialGradient(DOT_RADIUS, DOT_RADIUS, 2, DOT_RADIUS, DOT_RADIUS, DOT_RADIUS);
  this.orangeFill.addColorStop(0, "orange");
  this.orangeFill.addColorStop(1, "#b36200");

  this.dotShape = 'square';
  this.sprites = [];

  this.state = 0;
}

DotMatrixDisplay.prototype.initSprites = function() {
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  for (var i = 0; i < COLORS.length; i++) {
    this.ctx.fillStyle = (i == 1) ? this.orangeFill : COLORS[i];
    this.ctx.beginPath();
    switch(this.dotShape) {
      case 'circle':
        this.ctx.arc(DOT_RADIUS-1, DOT_RADIUS, DOT_RADIUS-5, 0, 2*Math.PI);
        break;
      case 'square':
        this.ctx.rect(0, 0, DOT_RADIUS*2, DOT_RADIUS*2);
        break;
    }
    this.ctx.closePath();
    this.ctx.fill();
    this.sprites[i] = this.ctx.getImageData(0, 0, DOT_RADIUS*2, DOT_RADIUS*2);
  }
}

DotMatrixDisplay.prototype.draw = function() {
  if (this.sprites.length < 1) {this.initSprites()}
  if (last < performance.now() - FRAMELENGTH || buttonPushed) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    buttonPushed = false;
    // state = (state + 1) % 2;
    this.matrix = frames[this.state];
    // this.matrix = lines()
    this.state = (this.state+1)%frames.length;
    last = performance.now();
    this.ctx.fillStyle = '#1a1a1a';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.matrix.length; i++) {
      for (var j = 0; j < this.matrix[i].length; j++) {
        this.ctx.putImageData(this.sprites[this.matrix[i][j]], (DOT_RADIUS+3)*2*j, (DOT_RADIUS+3)*2*i);
      }
    }
  }
  window.requestAnimationFrame(()=>{this.draw()});
}

DotMatrixDisplay.prototype.randomNoise = function() {
  // var matrix = Array(40).fill().map(()=>Array(width).fill(Math.floor(Math.random()*2)));
  var matrix = Array(40).fill().map(()=>Array(this.width).fill().map(()=>((Math.random() < (performance.now() - startTime) % 4500 / 1500) ? 1 : 0)));

  return matrix;
}

var canvasRect = this.canvas.getBoundingClientRect();


var times = [];

var last = performance.now();
var state = 0;


var display = new DotMatrixDisplay();
window.requestAnimationFrame(()=>{display.draw()});

const startTime = performance.now();
const TIMES = {screws: 4000, cable: 4500, noise: 6500};

function screwIn() {
  var time = performance.now() - startTime;
  if (time >= TIMES.screws) {
    window.requestAnimationFrame(cableLight);
    return;
  }
  var i = Math.floor(time / 1000);
  document.querySelectorAll("#screws > line")[i].setAttribute("transform", "rotate(" + Math.min(((time % 1000) / 1000) * 720, 720) + ")");
  window.requestAnimationFrame(screwIn);
}
// window.requestAnimationFrame(screwIn);

function cableLight() {
  var time = performance.now() - startTime;
  if (time >= TIMES.cable) {
    window.requestAnimationFrame(draw);
    return;
  }
  document.querySelector("#cables").style.opacity = Math.min(1, (time % TIMES.screws) / 300);
  window.requestAnimationFrame(cableLight);
}


// window.requestAnimationFrame(draw);

function kern(text) {
  var matrix = [[],[],[],[],[],[],[]];
  if (text.split('').last() == "†" && state == 1) {
    for (var k = 0; k < 7; k++) {
      matrix[k] = matrix[k].concat('0'.repeat(width).split(''));
    }
    return matrix;
  }
  for (var i = 0; i < text.length; i++) {
    if (text[i] == '†') {
      var rest = kern(text.slice(i+1));
      var space = width - (rest[0].length + matrix[0].length);
      for (var k = 0; k < 7; k++) {
        matrix[k] = matrix[k].concat('0'.repeat(Math.max(0, space)).split('')).concat(rest[k]);
      }
      break;
    }
    if (text[i] == '¥') {
      var lengthsofar = matrix[0].length;
      for (var k = 0; k < 7; k++) {
        matrix[k] = matrix[k].concat('0'.repeat((5*7) - lengthsofar).split(''));
      }
      continue;
    }
    if (!Object.keys(CHARS).includes(text[i])) {console.log(text[i]); text = text.replace(text[i], '-')}
    var gap = false;
    if (i < 1) {
      gap = false;
    }
    else if (text[i-1] != '†' && text[i-1] != '¥'){
      for (var j = 0; j < 7; j++) {
        if (CHARS[text[i-1]][j].last() > 0 && (CHARS[text[i]][j][0] > 0 ||
                                              (CHARS[text[i]][j-1] && CHARS[text[i]][j-1][0] > 0) ||
                                              (CHARS[text[i]][j+1] && CHARS[text[i]][j+1][0] > 0))) {
          gap = true;
          break;
        }
      }
    }
    for (var k = 0; k < 7; k++) {
      matrix[k] = matrix[k].concat(gap ? [0] : []).concat(CHARS[text[i]][k]);
    }
  }
  return matrix;
}

function addLineSpacing(line) {
  return ['0'.repeat(line[0].length).split('')].concat(line);
}

function matrixify(lines) {
  var matrix = [];
  for (var i = 0; i < lines.length; i++) {
    matrix = matrix.concat(addLineSpacing(kern(lines[i])));
  }
  if (lines.length < 5) {
    for (var i = 0; i < (5 - lines.length) * 8; i++) {
      matrix = matrix.concat(['0'.repeat(width).split('')]);
    }
  }
  return matrix;
}

var sn = {x:10, y:10, len: 4, pastpos: [], direction: {x: 1, y: 0}, applePos: {x: 15, y: 15}};

function emptyMatrix() {
  var matrix = Array(40).fill().map(()=>Array(width).fill(0));

  return matrix;
}

function snake() {
  var matrix = Array(40).fill().map(()=>Array(width).fill(0));

  sn.x += sn.direction.x;
  sn.y += sn.direction.y;
  sn.pastpos.push({x: sn.x, y:sn.y});
  if (sn.x == sn.applePos.x && sn.y == sn.applePos.y) {
    sn.len++;
    sn.applePos.x = Math.floor(Math.random() * 40);
    sn.applePos.y = Math.floor(Math.random() * 40);
  }
  if (sn.pastpos.length >= sn.len) {
    sn.pastpos = sn.pastpos.slice(1);
  };
  for (var i = 0; i < sn.pastpos.length; i++) {
    matrix[sn.pastpos[i].y][sn.pastpos[i].x] = 1;
  }
  matrix[sn.applePos.y][sn.applePos.x] = 2;

  return matrix;
}

const DIRS = {37: {x: -1, y: 0}, 38: {x: 0, y: -1}, 39: {x: 1, y: 0}, 40: {x: 0, y: 1}};

var buttonPushed = false;
document.onkeydown = function(e) {
  if (e.keyCode >= 37 && e.keyCode <= 40) {
    e.preventDefault();
    if (DIRS[e.keyCode].x * sn.direction.x == 0 && DIRS[e.keyCode].y * sn.direction.y == 0) {
      sn.direction = DIRS[e.keyCode];
      buttonPushed = true;
    }
  }
};

var layers = 0;

function closingBorder() {
  layers = (layers + 1) % height;

  var bit = layers < height/2 ? 0 : 1;
  var matrix = Array(height).fill().map(()=>Array(width).fill(bit));
  bit = (bit + 1) % 2;

  for (var i = 0; i < layers % (height/2) + 1; i++) {
    for (var x = 0; x < width; x++) {
      matrix[i][x] = bit;
      matrix[height-i-1][x] = bit;
    }
    for (var y = 0; y < height; y++) {
      matrix[y][i] = bit;
      matrix[y][width-i-1] = bit;
    }
  }

  return matrix;
}

var bouncingMatrix;
bouncingPos = {x: 0, y: 0, dir: {x: 1, y: 1}}
function bouncingLine() {
  if (!bouncingMatrix) {
    bouncingMatrix = Array(height).fill().map(()=>Array(width).fill(0));
    bouncingMatrix[0][0] = 1;
  }
  bouncingPos.x += bouncingPos.dir.x;
  bouncingPos.y += bouncingPos.dir.y;
  bouncingMatrix[bouncingPos.y][bouncingPos.x] = 1;

  if (bouncingPos.x == 0) {
    bouncingPos.dir.x = 1;
  }
  else if (bouncingPos.x == width - 1) {
    bouncingPos.dir.x = -1;
  }
  if (bouncingPos.y == 0) {
    bouncingPos.dir.y = 1;
  }
  else if (bouncingPos.y == height - 1) {
    bouncingPos.dir.y = -1;
  }

  return bouncingMatrix;
}

function lines() {
  var s = Math.floor(performance.now() / 200);
  var matrix = Array(6).fill().map(()=>Array(6).fill(0));
  for (var x = 0; x < 6; x++) {
    for (var y = 0; y < 6; y++) {
      // matrix[x][y] = !(x-5+(y%(s%6+1))) ? 1 : 0;
      // matrix[y][x] = (Math.round(Math.sqrt(Math.pow(x-0, 2)+Math.pow(y-0, 2))) == s%7 ||
      //                 Math.round(Math.sqrt(Math.pow(x-5, 2)+Math.pow(y-0, 2))) == s%7 ||
      //                 Math.round(Math.sqrt(Math.pow(x-0, 2)+Math.pow(y-5, 2))) == s%7 ||
      //                 Math.round(Math.sqrt(Math.pow(x-5, 2)+Math.pow(y-5, 2))) == s%7) ? 1 : 0;
      matrix[y][x] = (Math.round(Math.sqrt(Math.pow(x-(s%6), 2)+Math.pow(y-0, 2))) == 2 ||
                      Math.round(Math.sqrt(Math.pow(x-(5-(s%6)), 2)+Math.pow(y-0, 2))) == 3 ||
                      Math.round(Math.sqrt(Math.pow(x-(s%6), 2)+Math.pow(y-5, 2))) == 3 ||
                      Math.round(Math.sqrt(Math.pow(x-(5-(s%6)), 2)+Math.pow(y-5, 2))) == 2) ? 1 : 0;

    }
  }

  return matrix;
}

function front() {
  var bit = performance.now() - startTime > 7000 ? 0 : 1;
  var matrix = Array(height).fill().map(()=>Array(width).fill(bit));

  for (var i = 0; i < CHARS['dbond09'].length; i++) {
    for (var j = 0; j < CHARS['dbond09'][0].length; j++) {
      matrix[i+1][j+1] = (CHARS['dbond09'][i][j] + bit) % 2;
    }
  }

  // if (state == 1) {
  //   for (var i = 0; i < 9; i++) {
  //     for (var j = 0; j < 13; j++) {
  //       matrix[i][j+30] = (matrix[i][j+30] + 1) % 2;
  //       // matrix[i+6][j+37] = 1;
  //     }
  //   }
  // }

  return matrix;
}

frames = [[[1,0,0,0,0,1],[0,1,0,0,1,0],[0,1,0,0,1,0],[0,1,0,0,1,0],[0,1,0,0,1,0],[1,0,0,0,0,1]],[[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1]],[[1,1,0,0,1,1],[1,0,0,0,0,1],[0,0,0,0,0,0],[0,0,0,0,0,0],[1,0,0,0,0,1],[1,1,0,0,1,1]],[[1,1,1,1,1,1],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[1,1,1,1,1,1]],[[1,0,0,0,0,1],[0,1,1,1,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,1,1,1,1,0],[1,0,0,0,0,1]],[[1,0,0,0,0,1],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[1,0,0,0,0,1]]];
// for (var i = 0; i < 4; i++) {
//   frames.push(Array(6).fill().map(()=>Array(6).fill(0)));
// }

// frames[0][0][0] = 1;

function initFrames() {
  var editorDiv = document.querySelector("#editor");
  editorDiv.innerHTML = '';

  for (var i = 0; i < frames.length; i++) {
    var frameDiv = document.createElement("div");
    frameDiv.classList = "frame";

    var table = document.createElement('table');
    var tb = document.createElement('tbody');
    for (var x = 0; x < 6; x++) {
      var tr = document.createElement('tr');
      for (var y = 0; y < 6; y++) {
        var td = document.createElement('td');
        if (frames[i][x][y]) {
          td.className = 'on';
        }
        td.dataset.i = i;
        td.dataset.x = x;
        td.dataset.y = y;
        td.onclick = (e) => {
          var i = e.currentTarget.dataset.i;
          var x = e.currentTarget.dataset.x;
          var y = e.currentTarget.dataset.y;
          e.currentTarget.className = e.currentTarget.className == 'on' ? '' : 'on';
          frames[i][x][y] = (frames[i][x][y] + 1) % 2;
        }
        tr.appendChild(td);
      }
      tb.appendChild(tr);
    }

    table.appendChild(tb);
    frameDiv.appendChild(table);

    editorDiv.appendChild(frameDiv);
  }
}
initFrames();

function addFrame() {
  frames.push(Array(6).fill().map(()=>Array(6).fill(0)));
  initFrames();
}

function removeFrame() {
  display.state = 0;
  if (frames.length == 1)   {
    frames[0] = Array(6).fill().map(()=>Array(6).fill(0));
  }
  else {
    frames.pop();
  }
  initFrames();
}

function save() {
  console.log(JSON.stringify(frames));
  document.querySelector("#export").innerText = JSON.stringify(frames);
  scrollStart = performance.now();
  window.requestAnimationFrame(scrollToExport);
}

function scrollToExport() {
  var elapsed = performance.now() - scrollStart;
  window.scrollTo(0, window.innerHeight * (elapsed / 500));
  if (elapsed < 500) {
    window.requestAnimationFrame(scrollToExport);
  }
}
