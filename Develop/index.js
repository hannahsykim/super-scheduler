var container = document.querySelector(".container");
var blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var date = new Date();

function isCurrentPastorFuture(hour) {
  if (date.getHours() === hour) {
    return 1; //present
  } else if (date.getHours() > hour) {
    return 2; //past
  } else {
    return 3; //future
  }
}


for (var i = 0; i < blocks.length; i++) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "row time-block");
  if (isCurrentPastorFuture(blocks[i]) === 1) {
    wrapper.classList.add("present");
  } else if (isCurrentPastorFuture(blocks[i]) === 2) {
    wrapper.classList.add("past");
  } else {
    wrapper.classList.add("future");
  }

  var url = "https://cdn-icons-png.flaticon.com/512/2874/2874091.png";
    $(document).ready(function() {
        var image = new Image();
        image.src = url;
        image.style.width = '20px';
        image.style.height = 'auto';
        image.style.position = 'absolute';
    
        $(".saveBtn").append(image);   

        $(".saveBtn").mouseover(function() {
            $(this).css("background-color","#154c79")
          }).mouseout(function() {
            $(this).css("background-color","#06aed5")
          });

        $(".saveBtn").on("click", function () {
            var value = $(this).siblings(".description").val();
            var time = $(this).siblings(".hour").val();
        
            
            localStorage.setItem(time, value);
        
            $(".notification").addClass("show");
            
            setTimeout(function () {
              $(".notification").removeClass("show");
            }, 5000);

            localStorage.getItem(time, value);
                console.log(localStorage);
          });
    });
}
