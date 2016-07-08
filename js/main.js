$(document).ready(function(){
    startSquare();
});
   
function startSquare(){
    $("#container").empty();
    var width = prompt("# squares? ");
    for (var x = 0; x < width; x += 1) {
        for (var y = 0; y < width; y += 1) {
            var unit = $("<div class='unit' onclick='changeColor()'></div>");
            unit.appendTo("#container");
        }
    }
    $('.unit').css('height',400/width);
    $('.unit').css('width',400/width);
};

function clearSquare(){
    $(".unit").css("background-color","white");
}

function changeColor() {
    var color = prompt("what color - red, blue, purple, orange, green, or black, or hex code?")
    $('.unit').hover(function(){
        $('.unit:hover').css("background-color", color);
    })
};

function trailing(){
    $('.unit').mouseenter(function(){
        $(this).fadeTo(100,0);
    });
    $('.unit').mouseleave(function(){
        $(this).fadeTo(400,1);
    });
}

function randomColor() {
    var colors = ['red','orange','yellow','green','blue','indigo','violet'];
    $('.unit').hover(function(){
        var rand = colors[Math.floor(Math.random()*colors.length)];
        $('.unit:hover').css("background-color",rand);
    })
}

function opacity() {
    $('.unit').hover(function(){
        var temp = $(this).css('opacity');
        if (temp > 0){
            $(this).css('opacity', temp - 0.1);
        }
    });
}