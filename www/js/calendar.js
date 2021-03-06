$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'today',
            center: 'prev,next,title', // buttons for switching between views
            right: 'month,agendaWeek,agendaDay',
        },
        defaultView: 'agendaDay',
        contentHeight: 'auto',
        businessHours: {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            dow: [1, 2, 3, 4], // Monday - Thursday

            start: '09:00', // a start time (10am in this example)
            end: '19:00', // an end time (6pm in this example)
        },
        views: {},
        events: function (start, end, timezone, callback) {
            // let data = getCalendarData();
            // {
            //     $.ajax({
            //         type: "GET",
            //         contentType: "application/json; charset=utf-8",
            //         url: "http://swiv.outofpluto.com:8082/api/lecture/lecture/",
            //         dataType: 'json',
            //         success: function (data) {
            //             var events = [];
            //             data.forEach(function(item, index) {
            //                 events.push({
            //                     title: item.title,
            //                     start: item.date + "T" + item.start_time,
            //                     end: item.date + "T" + item.end_time
            //                 });
            //             });
            //             callback(events);
            //         },
            //         error: function (xhr, err) {
            //             alert("ERROR! - readyState: " + xhr.readyState + "<br/>status: " + xhr.status + "<br/>responseText: " + xhr.responseText);
            //         }
            //     });

            // }

            let data = getCalendarData();
            // console.log("data :", data);

            let events = [];

            data.forEach(function(item, index) {
                events.push({
                    title: item.title,
                    start: item.date + "T" + item.start_time,
                    end: item.date + "T" + item.end_time
                });
            });
            callback(events);

            // console.log("events :", events);
        }
    });

});

function onSuccess(msg) {
  alert('Calendar success: ' + JSON.stringify(msg));
}

function onError(msg) {
  alert('Calendar error: ' + JSON.stringify(msg));
}
document.getElementById('addToCalendar').addEventListener('click', function () {
  var title = 'My Event Title';
  var loc = 'My Event Location';
  var notes = 'My interesting Event notes.';
  var startDate = new Date();
  var endDate = new Date();

  // clean up the dates a bit
  startDate.setMinutes(0);
  endDate.setMinutes(0);
  startDate.setSeconds(0);
  endDate.setSeconds(0);

  // add a few hours to the dates, JS will automatically update the date (+1 day) if necessary
  startDate.setHours(startDate.getHours() + 2);
  endDate.setHours(endDate.getHours() + 3);
  window.plugins.calendar.requestWritePermission();
  window.plugins.calendar.requestReadPermission();
  window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate, onSuccess, onError);

  //console.log(getCalendarData());
  /*var data = getCalendarData();
  for (var i = 0; i < data.length; i++) {

    console.log(i);

    var startDate = new Date();
    var endDate = new Date();

    startDate.setMinutes(0);
    endDate.setMinutes(0);
    startDate.setSeconds(0);
    endDate.setSeconds(0);

    startDate.setHours(startDate.getHours() + 2);
    endDate.setHours(endDate.getHours() + 3);

  }*/
});