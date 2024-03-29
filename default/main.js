// Get Json
var get_json_developer = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function () {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};

// Developer
get_json_developer('https://asifulmamun.github.io/data/default/main.json', function (err, developer) {
    // If json data found
    if (err != null) {
        console.error(err);
    } else {

        console.log(developer.Company.CEO.UserName)

    }
});

// Create Element
function developer(){
    let developerDiv = document.createElement('div');
    developerDiv.setAttribute('id', 'developer');
    document.body.appendChild(developerDiv);


    let developer = document.getElementById('developer');

    developer.innerHTML = '<small>Developed by <a href="https://asifulmamun.info">www.asifulmamun.info</a></small>';
}
developer();