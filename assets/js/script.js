$(document).ready(function() {

    var savedSchedule = [];

    var scheduleEightAm = $("#scheduleEight");
    var scheduleNineAm = $("#scheduleNine");

    var saveSchedule = function() {
        localStorage.setItem("savedSchedule", JSON.stringify(savedSchedule));
    };

    var loadSchedule = function() {
         //populate today's date
    var today = moment().format("ddd, MMM Do");
    console.log(today);
    $("#currentDay").replaceWith(today).addClass("time-block");

        //pull data from localStorage to populate schedule
    savedSchedule = JSON.parse(localStorage.getItem("savedSchedule"));
    textEight = savedSchedule[0];
    console.log(textEight);
   scheduleEightAm = textEight;
   console.log(scheduleEightAm);
    
   
    //if nothing in localStorage, create a new array to track schedule
    if (!savedSchedule) {
        savedSchedule = [];   
    }
    // else {
    //     scheduleEightAm.val(savedSchedule[0]);
    //     scheduleNineAm = savedSchedule[1];
    // };
    saveSchedule();
    };

    // when schedule box is clicked, it becomes editable
$(".schedule-box").on("click", function () {
    //debugger;
    event.preventDefault();

    var text = $(this).text().trim();
    console.log(text);

    var textInput = $("<textarea>").val(text).addClass("col-8 future description schedule-box");

    $(this).replaceWith(textInput)
//     //textInput.trigger("focus");
 
});

//save button is clicked
$("#saveEight").click(function() {

 var id = $(this).closest(".row").attr("id");
 console.log(id);
 var text = $(this).prev().val();
 console.log(text);

savedSchedule[0] = text;

   saveSchedule();
});

$("#saveNine").click(function() {

var id = $(this).closest(".row").attr("id");
 console.log(id);
 var text = $(this).prev().val();
 console.log(text);

 savedSchedule[1] = text;

saveSchedule();
});

$("#saveTen").click(function() {

   var id = $(this).closest(".row").attr("id");
 console.log(id);
 var text = $(this).prev().val();
 console.log(text);
   
savedSchedule[2] = text;
   
   saveSchedule();
   });

   $("#saveEleven").click(function() {

    var id = $(this).closest(".row").attr("id");
 console.log(id);
 var text = $(this).prev().val();
 console.log(text);
   
    savedSchedule[3] = text;
   
   saveSchedule();
   });

   $("#saveTwelve").click(function() {

    var id = $(this).closest(".row").attr("id");
    console.log(id);
    var text = $(this).prev().val();
    console.log(text);
   
    savedSchedule[4] = text;
   
   saveSchedule();
   });

   $("#saveOne").click(function() {

    var id = $(this).closest(".row").attr("id");
    console.log(id);
    var text = $(this).prev().val();
    console.log(text);
   
    savedSchedule[5] = text;
   
   saveSchedule();
   });

   $("#saveTwo").click(function() {

    var id = $(this).closest(".row").attr("id");
 console.log(id);
 var text = $(this).prev().val();
 console.log(text);
   
    savedSchedule[6] = text;
   
   saveSchedule();
   });

   $("#saveThree").click(function() {

    var id = $(this).closest(".row").attr("id");
    console.log(id);
    var text = $(this).prev().val();
    console.log(text);
   
    savedSchedule[7] = text;
   
   saveSchedule();
   });

   $("#saveFour").click(function() {

    var id = $(this).closest(".row").attr("id");
 console.log(id);
 var text = $(this).prev().val();
 console.log(text);
   
    savedSchedule[8] = text;
   
   saveSchedule();
   });

   $("#saveFive").click(function() {

    var id = $(this).closest(".row").attr("id");
    console.log(id);
    var text = $(this).prev().val();
    console.log(text);
   
    savedSchedule[9] = text;
   
   saveSchedule();
   });
    //     var scheduleEight = $(this).prev();
    //     console.log(scheduleEight);
    //     var scheduleEightText = scheduleEight.value;
    //     console.log(scheduleEightText);

    //     if ($("#saveEight")) {
    //         savedSchedule[0] = scheduleEightAm.value;
    //     }
    //     else if ($("saveNine")) {
    //         savedSchedule[1].text = scheduleNineAm;
    //     }

    // console.log(savedSchedule);
        // debugger;
        // var itemId = $(this).attr("id").replace("save", "");
        // console.log(itemId);
        // var scheduleItemId = ("schedule" + itemId);
        // console.log(scheduleItemId);
        // var scheduleItemText = $("textarea").attr("id", scheduleItemId).val().trim();
        // console.log(scheduleItemText);

        // savedSchedule[scheduleItemId].push ({
        //     text: scheduleItemText
        //     });

        // $(scheduleItemId.text).replaceWith(scheduleItemText);
    //     saveSchedule();

    // });

loadSchedule();
});
//     var savedEightAmSchedule = localStorage.getItem("eightAmSchedule") || "";

//     var eightAmSchedule = $("#scheduleEight");
//     var nineAmSchedule = $("#scheduleNine");

//     var eightAmButton = $("#saveEight");
//     var nineAmButton = $("#saveNine");

//     eightAmSchedule.val(savedEightAmSchedule);

//     function saveTextEight() {
//         eightAmInput = eightAmSchedule.val();
//         console.log(eightAmInput);
//         localStorage.setItem("eightAmSchedule", JSON.stringify(eightAmInput));
//     }

//     eightAmButton.click(saveTextEight);

// });

// var schedule = {};

// // var timeSlotEight = $("#schedule-8");
// // var timeSlotNine = $("schedule-9").val();

// var loadSchedule = function () {
//     //populate today's date
//     var today = moment().format("ddd, MMM Do");
//     console.log(today);
//     $("#currentDay").replaceWith(today).addClass("time-block");

//     //debugger;
//     //pull data from localStorage to populate schedule
//     schedule = JSON.parse(localStorage.getItem("schedule"));


//     //if nothing in localStorage, create a new array to track schedule
//     if (!schedule) {
//         schedule = 
//             timeSlotEight = [],
//             timeSlotNine = []  
//     };   
//     };

// //     $.each(schedule, function(list, arr) {

// //         console.log(list, arr);
// //         arr.forEach(function(schedule) {
// //             console.log(schedule.text, schedule.id, list);
// //             setSchedule(schedule.text, schedule.id, list);
// //     });
// //  });
// // };

// var setSchedule = function(scheduleText, scheduleId, scheduleList) {
//     //debugger;
//     console.log(scheduleText, scheduleId, scheduleList);
//     var id = $("div").closest(".row").attr("id");
//     var index = 0;
//     var scheduleBox = $("<div>").addClass("col-8 future description schedule-box").text(schedule[id].text);

//     console.log(scheduleBox);
//     $("#test").replaceWith(scheduleBox);
// };

//     //save data to localStorage
// var saveSchedule = function () {
//     localStorage.setItem("schedule", JSON.stringify(schedule));
// };

// // when schedule box is clicked, it becomes editable
// $(".schedule-box").on("click", "p", function () {
//     //debugger;
//     event.preventDefault();

//     var text = $(this).text().trim();
//     console.log(text);

//     var textInput = $("<textarea>").val(text).addClass("col-8 future description schedule-box");

//     $(this).replaceWith(textInput)
// //     //textInput.trigger("focus");
 
// });
// //save button is clicked
// $(".saveBtn").click(function() {
//     // $("save8").click(function() {
//     //     scheduleAtEight = timeSlotEight.val().trim();
//     //     console.log(scheduleAtEight);
//     // })
//     // timeSlotEight = $("#scheduleEight").val().trim();
//     // console.log(timeSlotEight);
//     // localStorage.setItem("timeSlotEight", JSON.stringify(timeSlotEight));
//     // var row = 
//     // debugger;
//     // var row = $(this).closest("div").attr(".row");
//     // console.log(row);

//     //get the parent div's id attribute
//     var id = $(event.target).closest(".row").attr("id");
//     console.log(id);
//     // var textAreaText = $(id).find("textarea").val();
//     var textIdNumber = id.replace("time", "");
//     var textId = ("schedule" + textIdNumber);
//     console.log(textId);
//     // var pId = ('"' + '#p' + textIdNumber + '"');
//     // console.log(pId);
//     // console.log(textAreaText);
//     var text = $(textId).val();
    
// //     // iv" id).find("p").val();
//     console.log(text);
   
    
// //     // schedule[id].push({
// //     //     text: text
// //     // });

// // //    saveSchedule();
// });

// loadSchedule();

// });
