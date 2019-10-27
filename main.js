var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColorIndex = Math.floor(Math.random() * colors.length); //random number between 0 and array.length -1
var pickedColor = colors[pickedColorIndex];
console.log(pickedColor);

var colorDisplay = document.querySelector("#currentColorDisplay");
colorDisplay.textContent = pickedColor.substring(3);

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    //ADD CLICK LISTener
    squares[i].addEventListener("click", function(){
        //grab color of square
        var chosenColor = this.style.background;

        //compare color
        if(chosenColor == pickedColor)
        {
            alert("you won!");
        }
    })


}