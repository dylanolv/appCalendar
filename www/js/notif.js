var notif = {
    send: function(title, text = null, image = null) {
        cordova.plugins.notification.local.schedule({
            title: title,
            text: text,
            foreground: true,
            attachments: [image],
            actions: [
                {
                    id: 'show',
                    title: 'Voir',
                    launch: true
                },
                {
                    id: 'answer',
                    type: 'input',
                    title: 'Contacter',
                    emptyText: 'Votre message',
                },
                {
                    id: 'later',
                    title: 'Plus tard'
                },
            ]
        });
    },
    init: function () {
        cordova.plugins.notification.local.setDefaults({
            led: { color: '#FF00FF', on: 500, off: 500 },
            vibrate: true
        });
    }
};