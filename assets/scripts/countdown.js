"use strict";

var event_start = new Date("2017-10-06 12:00:00");
var event_end   = new Date("2017-10-08 12:00:00");

function countdown_to(prefix, now, when, element) {
    var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
    var distance = when - now;
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

	element.innerHTML = prefix + days + " dni, " + hours + "h, " + minutes + "min i " + seconds + "s";
}
function before_event(now, element) {
	element.title = event_start;
	countdown_to("",
		now, event_start, element);
}
function after_event(now, element) {
	element.innerHTML = "???";
}
function during_event(now, element) {
	element.title = "Konwent skończy się " + event_end;
	countdown_to("Konwent zakończy się za:<br />",
		now, event_end, element);
}
function update() {
  var element = document.getElementById("countdown_timer");
  var now = new Date();
  if (now > event_end) after_event(now, element);
  else if (now < event_start) before_event(now, element);
  else during_event(now, element);
}
function init_countdown() {
	update();
	setInterval("update();", 1000);
}

init_countdown();