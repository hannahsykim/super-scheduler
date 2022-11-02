//When the page loads
$(document).ready(function () {
  console.log("ready!");
  var $timeBlocks = $(".time-block");
  var currentDate = moment().format("dddd, MMMM Do");
  var currentHour = moment().format("H");

  //when the schedule is saved, show notification and remove it
  $(".saveBtn").on("click", function () {
    //save local storage for every block after each btn click

    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

    // this shows the notification and removes it after 5 seconds
    $(".notification").addClass("show"),
      setTimeout(function () {
        $(".notification").removeClass("show");
      }, 5000);
  });

  //display current date
  $("#currentDay").text(currentDate);

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
  //show timeblocks depending on time
  colorCodeTimeBlocks();
  var interval = setInterval(colorCodeTimeBlocks, 15000);

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  console.log(localStorage);
});
