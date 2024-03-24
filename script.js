const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = form.querySelector('input[type="text"]').value.toLowerCase();
    getInformation(username);
})

function getInformation(username) {
    const requestURL = 'https://api.github.com/users/' + username;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);
    xhr.onload = function () {
        console.log(this.responseText);
        generateCard(JSON.parse(this.responseText))
    }

    xhr.send();
}

function generateCard(obj) {

    if(obj.message !== 'Not Found') {

        // Hiding message if not hidden

        hideNotFoundMessage()
        // Image
        document.querySelector('.user-image').src = obj["avatar_url"];

        // Name
        if(obj["name"]) {
            document.querySelector('.user-name').innerText = obj["name"];
        } else {
            document.querySelector('.user-name').innerText = obj["login"];
        }

        // Bio
        if(obj["name"]) {
            document.querySelector('.bio').innerText = obj["bio"];
        } else {
            document.querySelector('.bio').innerText = 'Bio not found';
        }

        // Number Of Repositories
        document.querySelector('.repo-count').innerText = obj["public_repos"];

        // Number Of Followers
        document.querySelector('.followers-count').innerText = obj["followers"];

        // Number Of Followings
        document.querySelector('.following-count').innerText = obj["following"];

        // Show Card
        showCard()
    } else {
        printNotFoundMessage();
        hideCard();
    }
}

function printNotFoundMessage() {
    document.querySelector('.message').style.display = 'block';
}

function hideNotFoundMessage() {
    document.querySelector('.message').style.display = 'none';
}

function hideCard() {
    document.querySelector('.card').style.display = 'none';
}

function showCard() {
    document.querySelector('.card').style.display = 'flex';
}