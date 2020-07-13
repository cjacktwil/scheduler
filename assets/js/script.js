var schedule;
var time = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"];

var containerEl = $(".container");

var auditTime = function () {

    todayTime = 11;
    //moment().format("HH");

    //iterate through time array to determine if schedule time is past, present or future
    for (i = 0; i < time.length; i++) {

        scheduleTime = parseInt(time[i]);
        todayTimeParse = parseInt(todayTime);

        //if time on schedule is in the future
        if (scheduleTime > todayTimeParse) {
            console.log(scheduleTime);

            if (scheduleTime === 08) {
                $("#scheduleEight").addClass("future")
            }
            if (scheduleTime === 09) {
                $("#scheduleNine").addCLass("future")
            }
            if (scheduleTime === 10) {
                $("#scheduleTen").addCLass("future")
            }
            if (scheduleTime === 11) {
                $("#scheduleEleven").addClass("future")
            }
            if (scheduleTime === 12) {
                $("#scheduleTwelve").addClass("future")
            }
            if (scheduleTime === 13) {
                $("#scheduleOne").addClass("future")
            }
            if (scheduleTime === 14) {
                $("#scheduleTwo").addClass("future")
            }
            if (scheduleTime === 15) {
                $("#scheduleThree").addClass("future")
            }
            if (scheduleTime === 16) {
                $("#scheduleFour").addClass("future")
            }
            if (scheduleTime === 17) {
                $("#scheduleFive").addClass("future")
            }
        }

        //if schedule time is in the past
        else if (scheduleTime < todayTimeParse) {

            if (scheduleTime === 08) {
                $("#scheduleEight").addClass("past")
            }
            if (scheduleTime === 09) {
                $("#scheduleNine").addClass("past")
            }
            if (scheduleTime === 10) {
                $("#scheduleTen").addClass("past")
            }
            if (scheduleTime === 11) {
                $("#scheduleEleven").addClass("past")
            }
            if (scheduleTime === 12) {
                $("#scheduleTwelve").addClass("past")
            }
            if (scheduleTime === 13) {
                $("#scheduleOne").addClass("past")
            }
            if (scheduleTime === 14) {
                $("#scheduleTwo").addClass("past")
            }
            if (scheduleTime === 15) {
                $("#scheduleThree").addClass("past")
            }
            if (scheduleTime === 16) {
                $("#scheduleFour").addClass("past")
            }
            if (scheduleTime === 17) {
                $("#scheduleFive").addClass("past")
            }
        }

        //if schedule time is present time
        else {
            if (scheduleTime === 08) {
                $("#scheduleEight").addClass("present")
            }
            if (scheduleTime === 09) {
                $("#scheduleNine").addClass("present")
            }
            if (scheduleTime === 10) {
                $("#scheduleTen").addClass("present")
            }
            if (scheduleTime === 11) {
                $("#scheduleEleven").addClass("present")
            }
            if (scheduleTime === 12) {
                $("#scheduleTwelve").addClass("present")
            }
            if (scheduleTime === 13) {
                $("#scheduleOne").addClass("present")
            }
            if (scheduleTime === 14) {
                $("#scheduleTwo").addClass("present")
            }
            if (scheduleTime === 15) {
                $("#scheduleThree").addClass("present")
            }
            if (scheduleTime === 16) {
                $("#scheduleFour").addClass("present")
            }
            if (scheduleTime === 17) {
                $("#scheduleFive").addClass("present")
            }
        }
    }
};

var loadSchedule = function () {
    //populate today's date
    var today = moment().format("ddd, MMM Do");

    $("#currentDay").replaceWith(today).addClass("time-block");

    //Load text from local storage
    savedScheduleEight = JSON.parse(localStorage.getItem("saveEight"));
    var scheduleEightEl = $("#scheduleEight")
    scheduleEightEl.append(savedScheduleEight);
    var timeBlockEight = "08"

    savedScheduleNine = JSON.parse(localStorage.getItem("saveNine"));
    var scheduleNineEl = $("#scheduleNine")
    scheduleNineEl.append(savedScheduleNine);
    var timeBlockNine = "09"

    savedScheduleTen = JSON.parse(localStorage.getItem("saveTen"));
    var scheduleTenEl = $("#scheduleTen")
    scheduleTenEl.append(savedScheduleTen);
    timeBlockTen = "10"

    savedScheduleEleven = JSON.parse(localStorage.getItem("saveEleven"));
    var scheduleElevenEl = $("#scheduleEleven")
    scheduleElevenEl.append(savedScheduleEleven);

    savedScheduleTwelve = JSON.parse(localStorage.getItem("saveTwelve"));
    var scheduleTwelveEl = $("#scheduleTwelve")
    scheduleTwelveEl.append(savedScheduleTwelve);

    savedScheduleOne = JSON.parse(localStorage.getItem("saveOne"));
    var scheduleOneEl = $("#scheduleOne")
    scheduleOneEl.append(savedScheduleOne);

    savedScheduleTwo = JSON.parse(localStorage.getItem("saveTwo"));
    var scheduleTwoEl = $("#scheduleTwo")
    scheduleTwoEl.append(savedScheduleTwo);

    savedScheduleThree = JSON.parse(localStorage.getItem("saveThree"));
    var scheduleThreeEl = $("#scheduleThree")
    scheduleThreeEl.append(savedScheduleThree);

    savedScheduleFour = JSON.parse(localStorage.getItem("saveFour"));
    var scheduleFourEl = $("#scheduleFour")
    scheduleFourEl.append(savedScheduleFour);

    savedScheduleFive = JSON.parse(localStorage.getItem("saveFive"));
    var scheduleFiveEl = $("#scheduleFive")
    scheduleFiveEl.append(savedScheduleFive);

    auditTime();

};

loadSchedule();


//save information to local storage when click save button 
$(".saveBtn").on("click", function () {
    auditTime();
    var saveButton = event.currentTarget;
    var saveButtonId = $(saveButton).attr("id");
    var text = $(saveButton).prev().val();
    schedule = text;
    id = saveButtonId;

    localStorage.setItem(id, JSON.stringify(schedule));
});

