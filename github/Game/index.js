let canvas = document.querySelector(`#canvasss`);
let context = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let padigHeight = 10;
let padigWidth = 75;
let brickHeight = 20;
let brickWight = 75;
let marginRight = 10;
let marginTop = 20;
let ballX = width/2;
let ballRadius = padigHeight*2;
let ballY = height - padigHeight- padigHeight*2;
let speedX = 2;
let speedY = 2;

function balls(x,y,color,radius) {


context.beginPath();
context.arc(x, y, radius, 0, Math.PI*2);
context.fillStyle = color;
context.fill();
context.closePath();
}

balls(ballX,ballY,"black",ballRadius);

function  rectangle(x,y,height,width,color){
    context.fillStyle = color;
   context.fillRect(x,y,height,width,color);
}
//
// rectangle((canvas.width/2)/2,500,300,50,"red");
//


function drawBricks() {
    for (let i=0; i < canvas.width; i+= padigWidth + marginRight){
        for (let j=0; j < canvas.height/3; j+= padigHeight + marginTop){
            rectangle(i,j,brickWight,brickHeight,"red");
        }
    }
}



rectangle(width/2-padigWidth/2,height - padigHeight,80,20,'blue')

function move() {
    ballX += speedX;
     ballY -= speedY;
    if (ballX > width - ballRadius) {
        speedX = -speedX
    }else if(ballX < ballRadius){
        speedX =- speedX
    }


        if (ballY < ballRadius){
        // ballX -= speedX;
        speedY =- speedY

    } else if(ballY > height- padigHeight - ballRadius){
    speedY =- speedY
}



context.clearRect(0,0,canvas.width,canvas.height)


}

function startSpeedBall() {
    setInterval(function () {
        move()
        drawGame()

    },1000/60)

}
startSpeedBall()


function drawGame() {
    drawBricks()
    rectangle(width/2-padigWidth/2,height - padigHeight,80,20,'blue')
    balls(ballX,ballY,"black",ballRadius);

}

