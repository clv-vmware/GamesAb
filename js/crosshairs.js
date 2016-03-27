function drawVerticalLine(canvas ,position ) {
  console.log("drawVerticalLine y ", position.y);
  var ctx = canvas.getContext('2d');
  var x = position.x,
      y = position.y;

  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(w, y);
  ctx.strokeStyle = "#d4d4d4";
  ctx.stroke();
}

function drawHorizontalLine( canvas ,position ) {
  console.log("drawHorizontalLine x ", position.x);
  var ctx = canvas.getContext('2d');
  var x = position.x,
      y = position.y,
      w = canvas.width,
      h = canvas.height;

  ctx.lineWidth = 0.5;
  ctx.strokeStyle = "#d4d4d4";
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, h);
  ctx.stroke();
}

function showPosition(e ) {

  var bbox = e.target.getBoundingClientRect();
  var positionStr = "e.client  : (" + e.clientX + " , " + e.clientY + "  )";
  positionStr += "</br> e.screen : ( "+ e.screenX + " , " + e.screenY + " )";
  positionStr += "</br> e.page : ( "+ e.pageX + " , " + e.pageY + " )";
  positionStr += "</br> body.scroll : ( "+ bbox.left + " , " +  bbox.top + " )";
  document.getElementById('position').innerHTML = positionStr;
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: (evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width,
    y: (evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height
  };
}

function clear(canvas) {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height );
}
