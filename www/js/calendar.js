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
        views: {}
    });

});