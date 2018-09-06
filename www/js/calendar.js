$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'today',
            center: 'prev,next,title', // buttons for switching between views
            right: 'month,agendaWeek,agendaDay',
        },
        defaultView: 'agendaDay',
        contentHeight: 'auto',
        views: {
        }

    });
});