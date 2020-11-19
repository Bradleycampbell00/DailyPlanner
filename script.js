let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));
let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));

for (let i = 9; i < 18; i++) {
  $(".container").append(buildTimeSlot(i));
}

function buildTimeSlot(hour) {
  const $timeSlot = $("<div>")
    .attr("id", "hour-" + hour)
    .attr("class", "row time-block hour");

  const $timeLabel = $("<div>").attr("class", "col-md-1");
  if (hour > 12) {
    $timeLabel.text(hour - 12 + "PM");
  } else if (hour === 12){
    $timeLabel.text(hour + "PM");
  } else {
    $timeLabel.text(hour + "AM");
  }

  const $textArea = $("<textarea>").attr("class", "col-md-10 description");

  const $btn = $("<button>")
    .attr("class", "btn saveBtn col-md-1")
    .append($("<i>").attr("class", "fas fa-save"));

  $timeSlot.append($timeLabel, $textArea, $btn);

  return $timeSlot;
}

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
    localStorage.getItem(i + "", "log into zoom")
}



// listens for the save button to be clicked on
$(".row").on("click", function(e){
    // only functions on click for the save button
    // if (!e.target.matches(".saveBtn"))return;
    var data = $("textarea").val();
    var time = 
    // for (let i = 9; i < 18; i++){
    //     let currentKey  = notes[i - 9]
    //     localStorage.setItem(currentKey, JSON.stringify(data))
    //     console.log(currentKey)
    // }
})
                                              

