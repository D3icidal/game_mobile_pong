//
//
//    RENDERING
//
//
function draw() {
  offscreenCtx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPaddle();
  drawScore();
  drawLives();
  drawBall(x,y);
  // drawBricks();
  ctx.drawImage(canvas.offscreenCanvas , 0, 0);
  // drawNeonBall();
  var brickCollisionType = brickCollisionDetection();
    // score++;
    // if(score == brickRowCount*brickColumnCount) {
    //   // alert("YOU WIN, CONGRATS!");
    //   document.location.reload();
    // }

  paddleCollisionDetection([x,y,dx,dy],[paddleX, paddleY, paddleWidth, paddleHeight])

  if(this.cursors.left.isDown || this.keyLeft.isDown) {
      console.log("MOVEMENT LEFT")
  }
  else if(this.cursors.right.isDown || this.keyRight.isDown) {
      console.log("MOVEMENT RIGHT")
  }
  if(this.cursors.up.isDown || this.keyUp.isDown) {
      console.log("MOVEMENT UP")
  }
  else if(this.cursors.down.isDown || this.keyDown.isDown) {
      console.log("MOVEMENT DOWN")
  }

  // if(rightPressed && paddleX < canvas.width-paddleWidth) {
  //   paddleX += 7;
  // }
  // else if(leftPressed && paddleX > 0) {
  //   paddleX -= 7;
  // }


  x += dx;
  y += dy;

  // return[Math.floor(x),Math.floor(y)]
  // requestAnimationFrame(step);

  // if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  //   dx = -dx;
  // }
  // if(y + dy < ballRadius) {
  //   dy = -dy;
  // }  else if(y + dy > paddleY) {
  //   if(x > paddleX && x < paddleX + paddleWidth) {
  //     dy = -dy;
  //   }
  //   else if(y + dy > canvas.height - ballRadius ) {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     lives--;
  //     if(!lives) {
  //       triggerModal()
  //     }
  //     else {
  //       x = canvas.width/2;
  //       y = canvas.height-30;
  //       dx = 3;
  //       dy = -3;
  //       // paddleX = (canvas.width-paddleWidth)/2;
  //     }
  //   }
  // }




}
