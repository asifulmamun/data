// Get Json
var getJSON = function (url, callback) {
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
getJSON('./default/main.json', function (err, developer) {
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

    developer.innerHTML = '<small>asifulmamun.info</small>';
}
developer();