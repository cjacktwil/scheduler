//create function to make schedule editable and save to local storage
//color code blocks for current, past and future times

var schedule = {};

var loadSchedule = function () {
    //populate today's date
    var today = moment().format("ddd, MMM Do");
    console.log(today);
    $("#currentDay").replaceWith(today).addClass("time-block");

    //debugger;
    //pull data from localStorage to populate schedule
    schedule = JSON.parse(localStorage.getItem("schedule"));


    //if nothing in localStorage, create a new array to track schedule
    if (!schedule) {
        schedule = {
            time8: [],
            time9: []
        };   
    }

    $.each(schedule, function(list, arr) {

        // console.log(list, arr);
        // list.forEach(function(schedule) {
        var newBox = $("<p>").attr("id", "test").text(schedule.text);
        $("#test").replaceWith(newBox);
    });
    //     var newBox = $("<div>").addClass("col-8 future description schedule-box");
    //    $("#schedule-box").replaceWith(schedule.text).append(newBox);
        // popSchedule.addClass("col-8 future description schedule-box");
        //console.log(arr.text);
     

        // arr.forEach(setSchedule(schedule));
        // });
    //});
};

    //save data to localStorage
var saveSchedule = function () {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

//when schedule box is clicked, it becomes editable
$("#schedule-box").on("click", function () {
    //debugger;
    event.preventDefault();

    var text = $(this).text().trim();
    console.log(text);

    var textInput = $("<textarea>").val(text).addClass("col-8 future description schedule-box");

    $(this).replaceWith(textInput)
    //textInput.trigger("focus");
 
});

//saved data populates schedule
// var setSchedule = function(scheduleText) {
//     $("#schedule-box").replaceWith(scheduleText).addClass("col-8 future description schedule-box");
//        // var id = $("div").closest(".row").attr("id").replace("-", "");

//     // schedule.id.push({
//     //     text: scheduleBoxText
//     //});
//     console.log(schedule);
//     saveSchedule();
// };

// var setSchedule = function(scheduleText, scheduleId) {
//     var scheduleDiv = $("<div>").addClass("col-8 future description schedule-box").attr("id", scheduleId).text(scheduleText);
//     $(schedule).append(scheduleDiv);    
// };
// // var setSchedule = function(scheduleText, scheduleId) {
// // $("div").attr(".schedule-box").text = scheduleText;
// // //scheduleItem.append(scheduleText);
// // var scheduleItemId = $("div").closest(".row").attr(".time");
// // // scheduleItem.append(scheduleItemId);
// // console.log(scheduleText, scheduleId, scheduleItem);

// };

//save button is clicked
$(".saveBtn").click(function() {
    debugger;
    console.log(schedule);
    var text = $("textarea").val();
    console.log(text);
    //get the parent div's id attribute
    var id = $("div").closest(".row").attr("id");
    console.log(id);

    schedule[id].push({
        text: text
    });

   saveSchedule();
});

loadSchedule();


