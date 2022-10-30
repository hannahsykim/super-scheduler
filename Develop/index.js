var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $writingarea = $(".schedule");
var todos = [];
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");   




//looping through timeblocks.
function initializeSchedule() {
    
    $timeBlocks.each(function () {
        var $thisBlock = $(this);
        var blockHour = parseInt($thisBlock.attr("current-hour"));

        var list = {
            hour: blockHour,
            text: "",
        }

    todos.push(list);
    }); 

  localStorage.setItem("listOfThings", JSON.stringify(todos));
  console.log(todos);
}


// colr code past/present/future based on the hour
function colorCodeTimeBlocks() {
   
    $timeBlocks.each(function() {
        var $thisBlock = $(this);
        var blockHour = parseInt($thisBlock.attr("current-hour"));

        if (blockHour == currentHour) {
            $thisBlock.addClass("present").removeClass("past future");
        }
        else if (blockHour < currentHour) {
            $thisBlock.addClass("past").removeClass("present future");
        } 
        else {
            $thisBlock.addClass("future").removeClass("present past");
        }  
    });
}

function renderLocalStorage() {
   
    for (var i = 0; i < todos.length; i++) {
        var everyHour = todos[i].hour;
        var everyText = todos[i].text;

        $("[current-hour=" + everyHour + "]").children("textarea").val(everyText);
    };
    console.log(todos);
    
}

function init() {
    var storedTodos = JSON.parse(localStorage.getItem("listofThings"));
    
    if (storedTodos !== null) {
        document.getElementById("save-hour") = storedTodos;
      }

    renderLocalStorage();
}

function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

$(document).ready(function () {
    colorCodeTimeBlocks();
    
    $('#currentDay').text(currentDate);
 

    $("button").on("click", function () {
            
            $(".notification").addClass( "show"),

        setTimeout(function () {
            $(".notification").removeClass("show");
        }, 5000);
    });

});

init()