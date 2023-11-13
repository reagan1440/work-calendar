$(function () {
$(document).ready(function () {
  var currentDay = time().format("dddd, MMMM, YYYY");
  $("#curentDay").text(currentDay);

var past = document.querySelector(".past")
var present = document.querySelector(".present")
var future = document.querySelector(".future")

var currentHour = time().hours();
for (var i = 9; i < 17; i++) {
var colorKey = "";
if  (i < currentHour) {
  colorKey = past;
} else if (i === currentHour) {
  colorKey = present;
} else {
  colorKey = future;
}

hourInput8 = localStorage.getItem('hour-8');
$('#hour-8 .description').val(hourInput8);
hourInput9 = localStorage.getItem('hour-9');
$('#hour-9 .description').val(hourInput9);
hourInput10 = localStorage.getItem('hour-10');
$('#hour-10 .description').val(hourInput10);
hourInput11 = localStorage.getItem('hour-11');
$('#hour-11 .description').val(hourInput11);
hourInput12 = localStorage.getItem('hour-12');
$('#hour-12 .description').val(hourInput12);
hourInput13 = localStorage.getItem('hour-13');
$('#hour-13 .description').val(hourInput8);
hourInput14 = localStorage.getItem('hour-14');
$('#hour-14 .description').val(hourInput14);
hourInput15 = localStorage.getItem('hour-15');
$('#hour-15 .description').val(hourInput15);
hourInput16 = localStorage.getItem('hour-16');
$('#hour-16 .description').val(hourInput16);
hourInput17 = localStorage.getItem('hour-17');
$('#hour-17 .description').val(hourInput17);
     //Create the rows. 
     var rowEl = $("<div>").addClass("row time-block").attr("id", i);
      
     //Create the hour, text, and save button elements for the rows. 
     var hourEl = $("<div>").addClass("col-2 hour").text(hourDisplay);
     var textAreaEl = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(i));
     //Saves the hour and text entry to local storage on save button click.
     var button = $("<button>").addClass("col-2 saveBtn").attr("id", i).click(function () { 
         var hourKey = $(this).attr("id");
         var activity = $(this).siblings(".description").val();
         localStorage.setItem(hourKey, activity);
     });

     //Font Awesome save disk icon.
     var icon = $("<i>").addClass("fas fa-save");
     $(".container").append(rowEl.append(hourEl, textAreaEl, button.append(icon)));
 
}})

      
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
