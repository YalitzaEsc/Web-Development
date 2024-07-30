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


function userTurn() {
    $(".btn").click(function(){
    playPattern.push(($(this).attr("id")));
    console.log(playPattern);
});

}

function verify(pattern, playPattern){
    for(i = 0; i < pattern.length; i++){
        if(pattern[i] === playPattern[i]){
            $("h1").text("Level " + (i+1));
        } else {
            $("h1").text("Game Over, Press Any Key to Restart");
        }
    }
        
}

function animation(){
    for(i = 0; i < pattern.length; i++){
        button = pattern[i];

    }
}

