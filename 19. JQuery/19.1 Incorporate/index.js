$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
$("button");

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});
})