function initCanvas(canvas, args) {
  var DOT_RADIUS = 4;
  const ctx = canvas.getContext('2d', {alpha: false});
  for (var i = 0; i < COLORS.length; i++) {
    ctx.fillStyle = (i == 1) ? orangeFill : COLORS[i];
    ctx.beginPath();
    ctx.arc(DOT_RADIUS-1, DOT_RADIUS, DOT_RADIUS-2, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
    sprites[i] = ctx.getImageData(0, 0, DOT_RADIUS*2, DOT_RADIUS*2);
  }
}

function drawCanvas(canvas, args) {
  var DOT_RADIUS = 4;
  const ctx = canvas.getContext('2d', {alpha: false});
  if (sprites.length < 1) {initSprites()}
  console.log('he')
  if (last < performance.now() - FRAMELENGTH || buttonPushed) {
    buttonPushed = false;
    last = performance.now();
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var matrix = (last % 2000) < 1000 ? kern("About") : emptyMatrix();
    console.log((last % 2000) < 1000)
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        ctx.putImageData(sprites[matrix[i][j]], (DOT_RADIUS-1)*2*j, DOT_RADIUS*2*i);
      }
    }
  }
  window.requestAnimationFrame(()=>{drawCanvas(canvas)});
}
