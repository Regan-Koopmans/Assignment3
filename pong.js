/*function saveToFile() {
    document.getElementById('output').innerHTML = "Saved to file.";
}
*/

var player1_x = 0;
var player2_x = 0;
var ball_x_direction=1;
var ball_y_direction=1;


function saveToFile(filename)
{
    
    document.getElementById("output").innerHTML = document.getElementsByName("playerID")[0].value;

}

function play()
{
    setInterval('update()',1000);
}

function update() {
    
    document.getElementsByClassName("paddle")[0].top = player1_x;
    
    

    
}