var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        notif.init();
        setTimeout(function (params) {
            getCalendarNotification().forEach(element => {
                notif.send(new Date(element.time).toDateString(), element.message);
            });
        }, 2000);
    }
};

app.initialize();
