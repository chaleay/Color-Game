//globals for improperness
var difficulty = 6;
var gameFinished = false;
var timesWon = 0;
//colors on page array
var colors = ChooseRandomColors(difficulty);
var pickedColor = PickRandomColor();
var defaultColor = "#4682b4";

//pickers
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var colorDisplay = document.querySelector("#currentColorDisplay");
var msgDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var timesWonDisplay = document.querySelector("#timesWon");

//eventListener for new colors button
resetButton.addEventListener("click", function(){
    Reset();
    Game();

});

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    difficulty = 3;
    if(!gameFinished){
        Reset();
        Game();
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    difficulty = 6;
    if(!gameFinished){
        Reset();
        Game();
    }
     
});


Game();

function Game(){
    //update stuff on new game session (reset)
    colorDisplay.textContent = pickedColor.substring(3);
    msgDisplay.textContent = '';
    h1.style.background = defaultColor;
    
    SetupSquares();
   
}

function changeColors(color){
    //loop all squares, change color to chosen
    for(var i = 0; i < difficulty; i++){
        squares[i].style.background = color;
    }
}

function PickRandomColor(){
    var pickedColorIndex = Math.floor(Math.random() * colors.length); //random number between 0 and array.length -1
    return colors[pickedColorIndex];
}

function ChooseRandomColors(difficulty)
{
    var colorList = [];
    for(i = 0; i < difficulty; i++){
        colorList[i] = RandomColor();
    }
    console.log(colorList);
    return colorList;
}

function RandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //spaces are important for string comparison
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function SetupSquares(){
    if(gameFinished)
        return;
    
        for(var i = 0; i < squares.length; i++)
        {
            if(colors[i])
            {
                //if current square display set to none, need to make it visible again
                squares[i].style.display = "block";
                
                squares[i].style.background = colors[i];
                //ADD CLICK LISTener
                squares[i].addEventListener("click", function(){
                //grab color of square
                var chosenColor = this.style.background;
                //console.log(chosenColor, pickedColor);
                //compare color
                if(chosenColor === pickedColor)
                {
                    
                    //win
                    if(gameFinished) return; //dont registerclicks if current game done

                    msgDisplay.textContent = 'Correct!';
                    h1.style.background = chosenColor;
                    changeColors(chosenColor);
                    resetButton.textContent = "Play Again";
                    gameFinished = true;
                    timesWon++;
                    timesWonDisplay.textContent = "Times Won: " + timesWon;
                }
                else{
                    this.style.background = "#232323";
                    msgDisplay.textContent = 'Try Again'
                }
                
                });
        
             }
             else{
                 squares[i].style.display = "none";
             }

    }
}

function Reset(){
    gameFinished = false;
    //gen new colors, pick random color, change colors of squares
    colors = ChooseRandomColors(difficulty);
    //pick random color, update msg display
    pickedColor = PickRandomColor();
}