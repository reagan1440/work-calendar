$(function () {
  var currentDay = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDay);

  var past = "past"; 
  var present = "present";
  var future = "future";
  var userInput = $(".description");

  var currentHour = dayjs().hour();

  var workHours = [
    (hour8El = $("#hour-8")),
    (hour9El = $("#hour-9")),
    (hour10El = $("#hour-10")),
    (hour11El = $("#hour-11")),
    (hour12El = $("#hour-12")),
    (hour13El = $("#hour-13")),
    (hour14El = $("#hour-14")),
    (hour15El = $("#hour-15")),
    (hour16El = $("#hour-16")),
  ];

  for (var i = 9; i < 18; i++) { 
    var colorKey = "";
    if (i < currentHour) {
      colorKey = past;
    } else if (i === currentHour) {
      colorKey = present;
    } else {
      colorKey = future;
    }

    var hourInput = localStorage.getItem('hour-' + i);
    $('#hour-' + i + ' .description').val(hourInput);
    $('#hour-' + i).addClass(colorKey);
  }


  $(".saveBtn").on ("click", function (event) {
    event.preventDefault()
    localStorage.setItem(
      this.parentElement.id,
      this.previousElementSibling.value
    );
  });

  function textAreaFill() {
    for (var i = 0; i < userInput.length; i++) {
      userInput[i].value = (localStorage.getItem(userInput[i].parentElement.id))
    }
     
  }

  function colorRows() {
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  function textAreaFill() {
    for (var i = 0; i < userInput.length; i++) {
      userInput[i].value = (localStorage.getItem(userInput[i].parentElement.id))
    }
     
  }

  textAreaFill();
  colorRows();
  displayDate();
});


