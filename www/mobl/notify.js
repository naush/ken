mobl.provides('mobl.notify');
mobl.provides('mobl.notify');
mobl.provides('mobl');
(function(__ns) {
mobl.notify.notify = function(message, title) {
                       function requestPermission ( callback ) {
                         window.webkitNotifications.requestPermission(callback);
                       }
                       function showNotification ( ) {
                         if(window.webkitNotifications.checkPermission() > 0)
                         {
                           requestPermission(showNotification);
                         }
                         else
                         {
                           window.webkitNotifications.createNotification(mobl.icon, title, message).show();
                         }
                       }
                       if(window.webkitNotifications)
                       {
                         showNotification();
                       }
                       else
                       {
                         $.jGrowl(message);
                       }
                     };
}(mobl.notify));