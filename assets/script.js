$(document).ready(function () {
    $(".savebutton").on("click", function () {
        //run the saveTodo function and then displayTodo funciton 
        var todoTask = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, todoTask);
    });

    // var tasks = [];

    var currentDay = document.getElementById("currentDay");
    currentDay.innerHTML = moment().toString();
    console.log(currentDay);

    var updateHour = function () {
        var currentHour = moment().hours();
        $(".time-block").each(function () {
            var blockHour = $(this).attr("id");
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    };

    updateHour();

    // var interval = setInterval(updateHour, 15000);

    var interval = function () {
        setInterval(updateHour, 15000);
    };

    interval();


    $("#eight-block .description").val(localStorage.getItem("eight-block"));
    $("#nine-block .description").val(localStorage.getItem("nine-block"));
    $("#ten-block .description").val(localStorage.getItem("ten-block"));
    $("#eleven-block .description").val(localStorage.getItem("eleven-block"));
    $("#twelve-block .description").val(localStorage.getItem("twelve-block"));
    $("#one-block .description").val(localStorage.getItem("one-block"));
    $("#two-block .description").val(localStorage.getItem("two-block"));
    $("#three-block .description").val(localStorage.getItem("three-block"));
    $("#four-block .description").val(localStorage.getItem("four-block"));
    $("#five-block .description").val(localStorage.getItem("five-block"));
    $("#six-block .description").val(localStorage.getItem("six-block"));

});


// var textField = document.getElementById("todo");



// var focusInput = function() {
//     //this function should allow the user to click and type into the textfield
//     var text = $(this)
//     .text()
//     .trim();

//     var textInput = $("<span>")
//     .addClass("form-input")
//     .val(text);

//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");

//     //recreate p element
//     var taskP = $("<p>")
//     addClass("task-1")
//     .text(text);

//     //repalce span with p element
//     $(this).replaceWith(taskP);
// };

// //modal was triggered
// $("#").on("", function () {
//     //clear values 
//     $("#").val("");
// });

// //modal fully visiable
// $("#").on("", function () {
//     //highlight textarea
//     $("#").trigger("focus");
// });

//save button in modal was clicked 
// $("#").click(function () {
//     //get values
//     var taskText = $("#").val();

//     if (taskText) {
//         saveTodo(taskText, "");

//         //close the modal
//         $("#").modal("hide");

//         //save in tasks array 
//         tasks.push({
//             text: taskText
//         });


//     }

// });




// var saveTodo = function () {
//     //this function needs to save the input from the user in the textarea and in local storage 
// };

// var displayTodo = function () {
//     //this function gets the value of the input from local storage and displays it in the field
// };

// textField.addEventListener("click", focusInput);