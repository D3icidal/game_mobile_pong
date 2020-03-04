randomize_Parameters();

createBricks();
drawBricks();

createNeonBall(ballRGB[0], ballRGB[1], ballRGB[2]);

if(this.game.device.desktop) {
    moveText = 'Arrow keys or WASD to move';
    shootText = 'X or Space to shoot';
}
else {
    moveText = 'Tap and hold to move';
    shootText = 'Tap to shoot';
}


}
