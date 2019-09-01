/**
 * Created by Koi on 1/14/2018.
 */

function loadAndFillTests() {

    let editorId = 0; //TODO add editors id based on login
    let element = document.getElementById("testsDropdown");

    let testNamesAndId = [];
    let request = new XMLHttpRequest();
    request.open('GET', '/getTestsNames?editorId=' + editorId, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            testNamesAndId = JSON.parse(request.responseText);
            for (let i = 0; i < testNamesAndId.length; i++) {
                let listItem = document.createElement("li");
                let itemText = document.createTextNode(testNamesAndId[i].id + " - "+ testNamesAndId[i].testName);
                listItem.appendChild(itemText);
                listItem.onclick = function () {
                    startTestFromTemplate(testNamesAndId[i].id, true)
                    window.location.reload();
                };
                element.appendChild(listItem);
            }
        }
    };
    request.send();



}
function startTestFromTemplate(id, toReplace){


    let templateQuestions = [];
    let request = new XMLHttpRequest();
    if (toReplace){
        request.open('GET', '/getTest?id='+id, true);

    }
    else{
        request.open('GET', '/getTemplate?id='+id, true);

    }

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            templateQuestions = JSON.parse(request.responseText);
            if(toReplace){
                startTest(templateQuestions.questions, id, templateQuestions.testName);

            }
            else{
                startTest(templateQuestions);

            }
        }
    };
    request.send();




}
function startTest(templateQuestions = null, toReplaceId = -1, name = null) {
    let testQuestions = [];

    if (templateQuestions != null && templateQuestions.length > 0) {
        testQuestions = templateQuestions;
    }
    let testName = name === null ? document.getElementById("testName").value : name;




// Put the object into storage
    window.localStorage.setItem('testQuestions', JSON.stringify(testQuestions));
    window.localStorage.setItem('testName', JSON.stringify(testName));
    window.localStorage.setItem('testId', JSON.stringify(toReplaceId));

    document.getElementById("testMessage").innerHTML = "On test: " + window.localStorage.getItem('testName');
}

if(document.getElementById("testMessage")!=null) {
    document.getElementById("testMessage").innerHTML = "On test: " + window.localStorage.getItem('testName') +
        ", " + JSON.parse(window.localStorage.getItem('testQuestions')).length + " questions.";
}
function validateToken(){

    let token = localStorage.getItem('token');

    $.ajax({
        type: 'GET',
        url: '/authentication/validateTokenUser?token='+token,
        success: function (resp) {
            if(resp===true){}
            else if (resp===false){
                window.location.href = "loginpage.html";

            }


        },

        error: function () {

        }
    });
}

function logOut(){
    localStorage.setItem('token',"null");
    validateToken();
}

validateToken();
