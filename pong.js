var player1_y = 0;
var player2_y = 0;

var ball_x_direction = true;
var ball_y_direction = true;
var ballX = 300;
var ballY = 150;

var player1Score = 0;
var player2Score = 0;

var player1KeyDown = false;
var player1KeyUp = false;

var player2KeyDown = false;
var player2KeyUp = false;

var speed = 5;

function savePlayer1()
{
	localStorage.removeItem("player1");
	player1Name = document.getElementsByName("playerID")[0].value;
	localStorage.setItem("player1",player1Name);
}

function savePlayer2()
{
	localStorage.removeItem("player2");
	player2Name = document.getElementsByName("playerID")[0].value;
	localStorage.setItem("player2",player2Name);
}

function play()
{
    document.getElementById("player1_score").innerHTML = localStorage.getItem("player1") + " : " + player1Score;
	document.getElementById("player2_score").innerHTML = localStorage.getItem("player2") + " : " + player2Score;
	
}

function update() 
{
	var canvas = document.getElementById("gameBoard");
	var context = canvas.getContext('2d');
	context.clearRect(0,0,canvas.width,canvas.height);
	context.fillStyle="#3A943A";
	if (player1KeyUp)
	{
		if (player1_y >= 10)
			player1_y -= speed;
	}
	if (player1KeyDown)
	{
		if (player1_y < 250)
			player1_y += speed;
	}
	if (player2KeyUp)
	{
		if (player2_y >= 10)
			player2_y -= speed;
	}
	if (player2KeyDown)
	{
		if (player2_y < 250)
			player2_y += speed;
	}
	
	if (ballX >=0 && ballX <= 10 && ballY >=  player1_y && ballY <= player1_y + 50)
	{
		ball_x_direction = true;
		
	}
	if (ballX <= 600 && ballX >= 580 && ballY >=  player2_y && ballY <= player2_y + 50)
	{
		ball_x_direction = false;
	
	}
		
	if (ballY >= 280) 
		ball_y_direction = false;
	if (ballY <= 20) 
		ball_y_direction = true;
	
	if (ball_x_direction)
	{
		ballX += 3;		
	}
	else 
	{
		ballX -= 3;
	}
	
	if (ball_y_direction)
	{
		ballY += 3;		
	}
	else
	{
		ballY -= 3;
	}
	
	context.fillRect(0,player1_y,10,50);
	context.fillRect(590,player2_y,10,50);
	context.fillRect(ballX,ballY,10,10);
}


function prepare()
{
	var canvas = document.getElementById("gameBoard");
	var context = canvas.getContext('2d');
	context.fillStyle="#3A943A";
	context.fillRect(0,player1_y,10,50);
	context.fillRect(590,player2_y,10,50);
}

function doKeyDown(e)
{
	var keyCode = e.keyCode;
	if (keyCode == 65)
	{	
		player1KeyUp = true;
	}
	if (keyCode == 90)
	{
		player1KeyDown = true;
	}
	if (keyCode == 77)
	{
		player2KeyDown = true;
	}
	if (keyCode == 75)
	{
		player2KeyUp = true;
	}
}

function doKeyUp(e)
{
	var keyCode = e.keyCode;
	if (keyCode == 65)
	{	
		player1KeyUp = false;
	}
	if (keyCode == 90)
	{
		player1KeyDown = false;
	}
	if (keyCode == 77)
	{
		player2KeyDown = false;
	}
	if (keyCode == 75)
	{
		player2KeyUp = false;
	}
}
