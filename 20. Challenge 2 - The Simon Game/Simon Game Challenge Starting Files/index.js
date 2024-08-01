var pattern = [];
var playPattern = [];
var game = true;

function addRandom(){
    randomNumber = Math.floor((Math.random() * 4) + 1);
    switch(randomNumber){

        case 1:
            pattern.push("green");
            break;

        case 2:
            pattern.push("red");
            break;
        
        case 3:
            pattern.push("yellow");
            break;
        
        case 4:
            pattern.push("blue");
            break;
        
        default:
            console.log(randomNumber);
    }
    console.log(pattern);
}

function animationLevelUp() {
        color = pattern[pattern.length-1];
        $("#" + color).addClass("selected");
        setTimeout(function(){
            $("#" + color).removeClass("selected");
        },200);

        switch(color){
            case "blue":
                var blue = new Audio("./sounds/blue.mp3");
                blue.play();
            break;

            case "red":
                var red = new Audio("./sounds/red.mp3");
                red.play();
            break;

            case "yellow":
                var yellow = new Audio("./sounds/yellow.mp3");
                yellow.play();
            break;

            case "green":
                var green = new Audio("./sounds/green.mp3");
                green.play();
            break;

            default:
                console.log($(this));
    }

}


function userTurn() {
    //add next color 
    $(".btn").click(function(){
    playPattern.push(($(this).attr("id")));
    //create animation
    $(this).addClass("pressed");
    setTimeout(function() {
        $(".btn").removeClass("pressed");
    }, 100);
    console.log(playPattern);

});

}

function sound() {
    $(".btn").on("click", function() {
        switch($(this).attr("id")){

            case "blue":
                var blue = new Audio("./sounds/blue.mp3");
                blue.play();
            break;

            case "red":
                var red = new Audio("./sounds/red.mp3");
                red.play();
            break;

            case "yellow":
                var yellow = new Audio("./sounds/yellow.mp3");
                yellow.play();
            break;

            case "green":
                var green = new Audio("./sounds/green.mp3");
                green.play();
            break;

            default:
                console.log($(this));

        }

    })
}

function verify(){
    var level = 1;
    for(i = 0; i < pattern.length; i++){
        if(pattern[i] === playPattern[i]){
            $("h1").text("Level " + ++level);
            return true;
        } else {
            $("h1").text("Game Over, Press Any Key to Restart");
            
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 300);

            var gameOverSound = new Audio("./sounds/wrong.mp3");
            gameOverSound.play();
            return false;
        }
    }    
}


while(game === true){
        



    
}
   
    $(document).on("keydown", function(){
    $("h1").text("Level 1");
    sound();
    addRandom();
    animationLevelUp();
    userTurn();
    if(pattern.length === playPattern.length){
        verify();
    } else {
        userTurn();
    }
    });
    



