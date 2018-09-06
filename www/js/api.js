function getCalendarData()
{
    var res = undefined;
    var lectureURL = "http://swiv.outofpluto.com:8082/api/lecture/lecture/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange  = function() {
        if (this.readyState == 4 && this.status == 200) {
             res = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", lectureURL, false);
    xmlhttp.send();
    return res;
}

function getCalendarNotification()
{
    var res = undefined;
    var lectureURL = "http://swiv.outofpluto.com:8082/api/lecture/notification/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange  = function() {
        if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", lectureURL, false);
    xmlhttp.send();
    return res
}

function getCalendarById(id) {
    var res = undefined;
    var lectureURL = "http://swiv.outofpluto.com:8082/api/lecture/lecture/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange  = function() {
        if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(this.responseText);
            for (var e of res)
            {
                if (e['id']==id)
                {
                    res = e;
                }
            }
        }
    };
    xmlhttp.open("GET", lectureURL, false);
    xmlhttp.send();
    return res;
}