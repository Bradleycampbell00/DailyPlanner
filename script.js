let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));
let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));
console.log(currentTime)
for (let i = 9; i < 18; i++) {
  $(".container").append(buildTimeSlot(i));
}
// how to create the individual time slots
function buildTimeSlot(hour) {
  const $timeSlot = $("<div>")
    .attr("id", hour)
    .attr("class", "row time-block hour");
  // sets the hour for each time block
  const $timeLabel = $("<div>").attr("class", "col-md-1");
  if (hour > 12) {
    $timeLabel.text(hour - 12 + "PM");
  } else if (hour === 12){
    $timeLabel.text(hour + "PM");
  } else {
    $timeLabel.text(hour + "AM");
  }
  // creates the box to write in
  const $textArea = $("<textarea>").attr("class", "col-md-10 description");
  // creates the button to be able to save the contents
  const $btn = $("<button>")
  .attr("class", "btn saveBtn col-md-1")
  .append($("<i>").attr("class", "fas fa-save"));
  
  $timeSlot.append($timeLabel, $textArea, $btn);
  if (hour < currentTime){
  $timeSlot.addClass("past")
  }else if ( hour === currentTime){
   $timeSlot.addClass("present")
  }else if  ( hour > currentTime) {
   $timeSlot.addClass("future")
  }
  
  return $timeSlot;
}
// place to store local values
const notes = {
    9:"",
    10:"",
    11:"",
    12:"",
    13:"",
    14:"",
    15:"",
    16:"",
    17:"",
}


// localStorage.setItem("user",JSON.stringify(notes))


for (let i = 9; i < 18; i++) {
  $(`#${i} .description`).val(localStorage.getItem(i));
}



// listens for the save button to be clicked on
$(".saveBtn").on("click", function(e){
    // only functions on click for the save button
    // if (!e.target.matches(".saveBtn"))return;
    var data = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
    // for (let i = 9; i < 18; i++){
    //     let currentKey  = notes[i - 9]
        localStorage.setItem(time, data)
    //     console.log(currentKey)
    // }
})

// sets the color for the time blocks
// function timeColor(){
//   $(".row").forEach(function(){
// });
// }

// var refresh = setInterval(timeColor, 1000)

