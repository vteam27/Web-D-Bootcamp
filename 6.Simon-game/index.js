//("js loaded");
var keyPressCount = 0;
var colorClasses = [".green", ".red", ".yellow", ".blue"];
var gameOrder = new Array();
var level = 1;
var clickedColor;
var levelCLickCounter = 0;
clickedArray = new Array();

//audio
var red=new Audio("Assets/red.mp3");
var green=new Audio("Assets/green.mp3");
var yellow=new Audio("Assets/yellow.mp3");
var blue=new Audio("Assets/blue.mp3");
var wrong=new Audio("Assets/wrong.mp3");

//Generate a random color
function rando() {
    var Random1 = Math.floor(Math.random() * 4);
    var RandomColorClass = colorClasses[Random1];
    return RandomColorClass;
}

//First Time KeyPress
$(document).on("keypress", function (e) {
    if (keyPressCount === 0) {
        $("body").css("background-color", "rgb(5, 23, 69");
        //("first keypress detected");
        $("h1").text("Level 1");
        gameOrder[0] = rando();
        //(gameOrder);
        $(gameOrder[0])
            .animate({ opacity: 0.4 }, 500)
            .animate({ opacity: 1 }, 500);
            var colorName=gameOrder[0].slice(1);
            playAudio(colorName);
    } else {
        //("Not first keypress detected");
        //Ignore
    }
    keyPressCount++;
});

//Register clicked colorClass
function register() {
    //("register called");
    $(".box").on("click", function () {
        levelCLickCounter++;
        var classNames = this.className;
        //(classNames);
        classesArr = this.className.split(" ");
        var colorRegistered = classesArr[0];
        clickedColor = "." + colorRegistered;
        //(clickedColor);
        //(gameOrder[level - 1]);
        $(clickedColor)
            .animate({ opacity: 0.4 }, 100)
            .animate({ opacity: 1 }, 100);
            colorName=clickedColor.slice(1);
            playAudio(colorName);
        clickedArray[levelCLickCounter - 1] = clickedColor;
        //(clickedArray);
        for (var j = 0; j < levelCLickCounter; j++) {
            var isfalse = 0;
            if (clickedArray[j] === gameOrder[j]) {
                //("hmm");
            } else {
                isfalse++;
            }
        }
        if (isfalse === 0 && levelCLickCounter === level) {
            level++;
            setTimeout(()=>{$("h1").text("Level " + level);},1000)
            levelCLickCounter = 0;
            GenerateGameBox();
        } else if (isfalse > 0) {
            endgame();
        }
    });
}
register();

function GenerateGameBox() {
    gameOrder[level - 1] = rando();
    //(gameOrder);
    setTimeout(() => {
        $(gameOrder[level - 1])
            .animate({ opacity: 0.4 }, 500)
            .animate({ opacity: 1 }, 500);
            colorName=gameOrder[level-1].slice(1);
            playAudio(colorName);
    }, 1000);
 
}

function endgame() {
    wrong.play();
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("wrong");
    setTimeout(()=>{$("body").removeClass("wrong");},500);
    keyPressCount = 0;
    levelCLickCounter = 0;
    level = 1;
}

function playAudio(nameOfColor)
{
    if(nameOfColor==="red")
    red.play();
    else if(nameOfColor==="yellow")
    yellow.play();
    else if(nameOfColor==="green")
    green.play();
    else if(nameOfColor==="blue")
    blue.play();
}
