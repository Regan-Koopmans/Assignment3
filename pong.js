var MAXSCORE = 5;

var player1_y = 150;
var player2_y = 150;

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

function IdIsValid( IDNumber )
{
	console.log(IDNumber.substr(0,2));
	console.log(IDNumber.substr(2,2));
	console.log(IDNumber.substr(4,2));

	var today = new Date();

	if (IDNumber.length == 13)
	{
		if (!isNaN(IDNumber))
		{
			if (Number(IDNumber.substr(0,2)) >= 20 && Number(IDNumber.substr(0,2)) <= 97)
			{
				if (Number(IDNumber.substr(2,2)) >= 1 && Number(IDNumber.substr(2,2)) <= 12)
				{
					if (Number(IDNumber.substr(4,2)) >= 1 && Number(IDNumber.substr(4,2)) <= 31)
					{
						var age;
						if (Number(IDNumber.substr(2,2) < today.getMonth()))
						{
							age = today.getFullYear() - Number("19" + IDNumber.substr(0,2));
						}
						else age = today.getFullYear() - Number("19" + IDNumber.substr(0,2)) -1;
						alert("You are " + age + " years old.");
						return true;
					}
					else
					{
						return false;
					}
				}
				else
				{
					return false;
				}
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}

function savePlayer2()
{
	localStorage.removeItem("player2");
	var ID = document.getElementsByName("IDNumber")[0].value;
	if (IdIsValid(ID) == true)
	{

		player2Name = document.getElementsByName("playerID")[0].value;
		localStorage.setItem("player2",player2Name);
		document.getElementById("loginForm").action = "Pong.html";
		document.getElementById("loginForm").submit();

	}
	else document.getElementById("output").innerHTML = "ID is not valid! Please enter a valid ID address.";
}

function play()
{
	document.getElementById("player1Score").innerHTML = localStorage.getItem("player1") + " : " + player1Score;
	document.getElementById("player2Score").innerHTML = localStorage.getItem("player2") + " : " + player2Score;
	player1Score = 0;
	player2Score = 0;
	window.addEventListener('keydown',doKeyDown,true);
	window.addEventListener('keyup',doKeyUp,true);
	setInterval(update,16);
}

function update()
{
	var canvas = document.getElementById("gameBoard");
	var context = canvas.getContext('2d');
	context.font = '30pt Calibri';

	if (player1Score >= MAXSCORE)
	{
		context.fillText(localStorage.getItem("player1")  + " has won!",0,100);
		console.log(JSON.stringify())
	}
	else if (player2Score >= MAXSCORE)
	{
		context.fillText(localStorage.getItem("player2")  + " has won!",0,100);
	}
	else
	{

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

	if (ballX > 600)
	{
		ballX = 300;
		ballY = 150;
		ball_x_direction = Boolean(Math.round(Math.random()));
		ball_y_direction = Boolean(Math.round(Math.random()));
		player1Score++;
	}

	if (ballX < 0)
	{
		ballX = 300;
		ballY = 150;
		ball_x_direction = Boolean(Math.round(Math.random()));
		ball_y_direction = Boolean(Math.round(Math.random()));
		player2Score++;
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

	context.strokeStyle="#3A943A";
	context.setLineDash([5,15]);
	context.beginPath();
	context.moveTo(300,0);
	context.lineTo(300,300);
	context.stroke();

	context.fillRect(0,player1_y,10,50);
	context.fillRect(590,player2_y,10,50);
	context.fillRect(ballX,ballY,10,10);
	document.getElementById("player1Score").innerHTML = localStorage.getItem("player1") + "<br> : <b>" + player1Score + "</b>";
	document.getElementById("player2Score").innerHTML = localStorage.getItem("player2") + "<br> : <b>" + player2Score + "</b>";
	}
}

function prepare()
{
	var canvas = document.getElementById("gameBoard");
	var context = canvas.getContext('2d');
	player1Score = 0;
	player2Score = 0;
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
