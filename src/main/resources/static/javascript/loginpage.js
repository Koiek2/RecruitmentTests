

function issueToken(userId){


    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let credentialdata = {
        "username": username,
        "password": password
    };
let URL = userId === 0 ? '/authentication/validateuser' : '/authentication/validateEditor';
    let request = new XMLHttpRequest();
    request.open('POST', URL, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            let resp = request.responseText;
            if (resp.length > 6) {

                localStorage.setItem('token', resp);
                window.location.href = userId === 0 ? "MainUserPage.html" : "MainPage.html";
            }
        }
    };
    request.send(JSON.stringify(credentialdata));
}

function loadAndFillTests() {

    let editorId = 0; //TODO add editors id based on login
    let element = document.getElementById("testsDropdown");

    let testNamesAndId = [];
    let request = new XMLHttpRequest();
    request.open('GET', '/getTestsNames?editorId=' + editorId, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            testNamesAndId = JSON.parse(request.responseText);
        }
    };
    request.send();

    for (let i = 0; i < testNamesAndId.length; i++) {
        let listItem = document.createElement("li");
        let itemText = document.createTextNode(testNamesAndId[i].id + " - "+ testNamesAndId[i].testName);
        listItem.appendChild(itemText);
        listItem.onclick = function () {
            startTestFromTemplate(testNamesAndId[i].id, true)
        };
        element.appendChild(listItem);
    }

}

