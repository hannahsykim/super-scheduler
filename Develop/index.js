//When the page loads
$(document).ready(function () {
  var $timeBlocks = $(".time-block");
  var currentDate = moment().format("dddd, MMMM Do");
  var currentHour = moment().format("H");
  var todos = [];

  function saveSchedule() {
    todos = [];
    //for every block
    $timeBlocks.each(function () {
      var $thisBlock = $(this);
      var blockHour = parseInt($thisBlock.attr("current-hour"));
      //console.log($thisBlock);
      var textArea = $thisBlock.children("textarea");
      //console.log(textArea);
      var list = {
        hour: blockHour,
        text: textArea.val(),
      };
      todos.push(list);
    });

    console.log(todos);

    //set item to localstorage
    localStorage.setItem("listOfThings", JSON.stringify(todos));
  }

  // color code past/present/future based on the hour
  function colorCodeTimeBlocks() {
    $timeBlocks.each(function () {
      var $thisBlock = $(this);
      var blockHour = parseInt($thisBlock.attr("current-hour"));

      if (blockHour === currentHour) {
        $thisBlock.addClass("present").removeClass("past future");
      } else if (blockHour < currentHour) {
        $thisBlock.addClass("past").removeClass("present future");
      } else {
        $thisBlock.addClass("future").removeClass("present past");
      }
    });
  }

  function renderSchedule() {
    var toDoItems = JSON.parse(localStorage.getItem("listOfThings"));

    //loop thru array then assign the text to the timeBlock with data-hour equal to hour.
    for (var i = 0; i < toDoItems.length; i++) {
      var itemHour = toDoItems[i].hour;
      var itemText = toDoItems[i].text;
      //plug it into a variable
      $(itemHour).val(itemText);
    }
    console.log(toDoItems);
  }

  // TODO - recover all todos from localStorage on page is loaded, and show in UI 
  renderSchedule();

  //show timeblocks depending on time
  colorCodeTimeBlocks();

  var interval = setInterval(colorCodeTimeBlocks, 15000);

  //display current date
  $("#currentDay").text(currentDate);
  
  //when the schedule is saved, show notification and remove it
  $(".saveBtn").on("click", function () {
    //save local storage for every block after each btn click
    saveSchedule();
    
    // this shows the notification and removes it after 5 seconds
    $(".notification").addClass("show"),
      setTimeout(function () {
        $(".notification").removeClass("show");
      }, 5000);
  });

  

});
