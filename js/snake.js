var originSnakePosition = { x: 0.5 + 2 * gridSize, y: 0.5 + 3 * gridSize };
function drawSnake(ctx, pos) {

  ctx.fillStyle = 'black';
  ctx.fillRect(pos.x, pos.y, 2* gridSize, gridSize);
}
function clearSnake(ctx, pos) {
  ctx.clearRect(pos.x, pos.y, 2*gridSize, gridSize);
}
function moveSnake(pos, dire) {
  clearSnake(ctx, pos);

  if(dire === 'up')pos.y -= gridSize;
  else if(dire === 'down')pos.y += gridSize;
  else if(dire === 'left')pos.x -= gridSize;
  else if(dire === 'right')pos.x += gridSize;

  if(pos.x > width)dire = 'down';
    else if(pos.x < 0.5) dire = 'up';

  if(pos.y < 0.5) dire = 'right';
    else if(pos.y > height )dire = 'left';

  drawSnake(ctx, pos);
  setTimeout(function() {
    moveSnake(pos, dire);
  }, 400);
}
drawSnake(ctx, originSnakePosition);
moveSnake(originSnakePosition, 'right');
