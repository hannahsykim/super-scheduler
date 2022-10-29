var container = document.querySelector(".container");
var blocks = [9,10,11,12,13,14,15,16,17]
var date = new Date();



 function isCurrentPastorFuture(hour) {
    if (date.getHours() === hour) {
        return 1 //present
    } else if (date.getHours() > hour) {
        return 2 //past
    } else {
        return 3 //future
    }
 }

 for (var i = 0; i < blocks.length; i++) {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row timeblock");
    if (isCurrentPastorFuture(blocks[i]) === 1) {
        wrapper.classList.add("present");
    } else if (isCurrentPastorFuture(blocks[i]) === 2) {
        wrapper.classList.add("past");
    } else {
        wrapper.classList.add("future");
    }
    var block = document.createElement("div");
    var textbox = document.createElement("textarea");
    var savebutton = document.createElement("finalsave");
    savebutton.setAttribute("class", ".saveBtn, btn");
        $('.saveBtn').on('click', function () {
            var value = $(this).siblings('.description').val();
            var time = $(this).parent().attr('id');

            localStorage.setItem(time,value);

            $('.notification').addClass('show');
            setTimeout(function () {
                $('.notification').removeClass('show');
            }, 5000);
        });
    textbox.setAttribute("class", "description col-md-10");
    block.setAttribute("class", "hour");
    textbox.setAttribute("style", "flex-grow: 1; height: 100px;");
    block.textContent = moment(blocks[i], 'HH').format('h a');
    wrapper.appendChild(block);
    wrapper.appendChild(textbox);
    container.appendChild(wrapper);   
    wrapper.appendChild(savebutton);
    savebutton.textContent= "save"
 }
