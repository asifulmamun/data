alert('Hello');

// Developer
getJSON('./main.json', function (err, developer) {
    // If json data found
    if (err != null) {
        console.error(err);
    } else {

        console.log(developer.Company.CEO.UserName)

    }
});