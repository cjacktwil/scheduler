//script for scheduler
//create function to populate today's date with moment
//create function to make schedule editable and save to local storage
//color code blocks for current, past and future times

var schedule = {};

// var creatTask = function(taskText, taskTime, taskDate) {
//     var 
// }

var loadSchedule = function () {
    schedule = JSON.parse(localStorage.getItem("schedule"));


    //if nothing in localStorage, create a new array to track schedule
    if (!schedule) {
        schedule = {
            //time8: []
            // time9: [],
            // time10: []
            // 11: [],
            // 12: [],
            // 1: [],
            // 2: [],
            // 3: [],
            // 4: [],
            // 5:[]
        }
    }
        // else {
        //     setSchedule();
        // }
};

var saveSchedule = function () {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

$(".schedule-box").on("click", function () {
    //event.preventDefault();

    var text = $(this)
        .text()
        .trim();
    console.log(text);

    var textInput = $("<textarea>").addClass("col-8 future description").val(text);

    $(this).replaceWith(textInput)
    //textInput.trigger("focus");
 
});

// $(".schedule").on("blur", "textarea", function () {

//     //get the textarea's current value/text
//     var text = $(this).val().trim();
//     // console.log(text);

//     //get the parent div's id attribute
//     var time = $(this).closest(".row").attr("id").replace("time-", "");

//     //get the tasks's position in the list of other li elements
//     var index = $(this).closest("#time").index();

//     schedule[time][index].text = text;
//     saveSchedule();

//     //     //recreate p element
//     var taskP = $("<p>").addClass("m-1").text(text);

//     //     //replace textarea with a p element
//     $(this).replaceWith(taskP);
// });

// var setSchedule = function() {
//     var scheduleBoxText = $("textarea").val();
//     console.log(scheduleBoxText);

//     var id = $("div").closest(".row").attr("id").replace("-", "");

//     schedule.id.push({
//         text: scheduleBoxText
//     });
//     console.log(schedule);
//     saveSchedule();
// };

$(".saveBtn").click(function() {
//     setSchedule();
// });

// loadSchedule();
    //get the textarea's current value/text
    //debugger;
    var text = $("textarea").val();
    // console.log(text);
    console.log(text);

    //var scheduleText = [];
    //get the parent div's id attribute
    var id = $("div").closest(".row").attr("id").replace("-", "");
    console.log(id);
    //get the tasks's position in the list of other li elements
    //var index = $("div").closest(".time").index();
//console.log(index);
    schedule[id].text = text;
    // saveSchedule();

    schedule.id.push({
        text: text,
        id: id
    });

        //recreate p element
    var scheduleDiv = $("<div>").addClass("col-8 future description schedule-box").text(text);

        //replace textarea with a p element
$("textarea").replaceWith(scheduleDiv);
    saveSchedule();
    console.log(schedule[id].text);

});

loadSchedule();


