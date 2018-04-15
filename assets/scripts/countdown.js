"use strict";

var update_with_date = function(){};

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
function before_event(now, element, event_start) {
	element.title = "Konwent zacznie się " + event_start;
	countdown_to("Konwent rozpocznie się za:<br />",
		now, event_start, element);
}
function after_event(now, element) {
	element.innerHTML = "Konwent już się zakończył. Do zobaczenia wkrótce!";
}
function during_event(now, element, event_end) {
	element.title = "Konwent skończy się " + event_end;
	countdown_to("Konwent zakończy się za:<br />",
		now, event_end, element);
}
function update(event_start, event_end) {
  var element = document.getElementById("countdown_timer");
  var now = new Date();
  if (now > event_end) after_event(now, element);
  else if (now < event_start) before_event(now, element, event_start);
  else during_event(now, element, event_end);
}
function init_countdown(event_start, event_end) {
	update_with_date = function() {
		update(event_start, event_end);
	};
	update_with_date();
	setInterval("update_with_date();", 1000);
}

init_countdown();