//script for scheduler
//create function to populate today's date with moment
//create function to make schedule editable and save to local storage
//color code blocks for current, past and future times

var schedule = {}

// var creatTask = function(taskText, taskTime, taskDate) {
//     var 
// }

// var loadTask = function() {

// }

var saveTask = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

$(".schedule-box").on("click", function() {
    event.preventDefault();

    var text = $(this)
    .text()
    .trim();
    console.log(text);
  
  var textInput = $("<textarea>").addClass("col-8 future description").val(text);
  
  $(this).replaceWith(textInput)
  //textInput.trigger("focus");
  });
  
  $(".schedule").on("blur", "textarea", function() {
    
//get the textarea's current value/text
    var text = $(this).val().trim();
    // console.log(text);
  
    //get the parent div's id attribute
    var time = $(this).closest(".row").attr("class", "hour")
  
    // //get the tasks's position in the list of other li elements
    // var index = $(this).closest(".list-group-item").index();
  
    schedule[time].text = text;
    saveTask();
  
//     //recreate p element
var taskP = $("<p>").addClass("m-1").text(text);
  
//     //replace textarea with a p element
 $(this).replaceWith(taskP);
  });

  $(".saveBtn").click(function() {
      var scheduleText = $("#schedule-box").val();
      saveTask();

  })


  