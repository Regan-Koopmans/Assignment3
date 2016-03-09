/*function saveToFile() {
    document.getElementById('output').innerHTML = "Saved to file.";
}
*/

var player1_x = 0;
var player2_x = 0;

function saveToFile(filename)
{
    
    document.getElementById("output").innerHTML = document.getElementsByName("playerID")[0].value;

}

function play()
{
    document.getElementsByClassName("paddle")[0].left = 0px;
    document.getElementsByClassName("paddle")[1].left = 490px;
    setInterval('update()',1000);
}

function update() {
    
    document.getElementsByClassName("paddle")[0].top = player1_x;
    
}