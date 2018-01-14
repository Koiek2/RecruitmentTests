function toggleChoiceExample() {
    let x = document.getElementById("choiceExampleArea");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
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
            console.log(templateQuestions);
            if(toReplace){
                startTest(templateQuestions, id);

            }
            else{
                startTest(templateQuestions);

            }
        }
    };
    request.send();




}
function loadAndFillTemplates() {

    let element = document.getElementById("templateDropdown");

    let templateNamesAndIds = [];
    let request = new XMLHttpRequest();
    request.open('GET', '/getTemplatesNames', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            templateNamesAndIds = JSON.parse(request.responseText);
            for (let i = 0; i < templateNamesAndIds.length; i++) {
                let listItem = document.createElement("li");
                let itemText = document.createTextNode(templateNamesAndIds[i].id + " - "+ templateNamesAndIds[i].testName);
                listItem.appendChild(itemText);
                listItem.onclick = function () {
                    startTestFromTemplate(templateNamesAndIds[i].id, false)
                };
                element.appendChild(listItem);
            }

        }
    };
    request.send();



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

function addTestToDB() {



    let data = {
        "id": window.localStorage.getItem("testId"),
        "testName": window.localStorage.getItem('testName'),
        "questions": JSON.parse(localStorage.getItem('testQuestions')),

    };
    let request = new XMLHttpRequest();
    let url = "/addTest";


    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}


function startTest(templateQuestions = null, toReplaceId = -1) {
    let testQuestions = [];
    console.log(templateQuestions);
    if (templateQuestions != null && templateQuestions.length > 0) {
        testQuestions = templateQuestions;
    }
    let testName = document.getElementById("testName").value;


// Put the object into storage
    window.localStorage.setItem('testQuestions', JSON.stringify(testQuestions));
    window.localStorage.setItem('testName', JSON.stringify(testName));
    window.localStorage.setItem('testId', JSON.stringify(toReplaceId));

    document.getElementById("testMessage").innerHTML = "Editing: " + window.localStorage.getItem('testName');
}
if(document.getElementById("testMessage")!=null) {
    document.getElementById("testMessage").innerHTML = "Editing: " + window.localStorage.getItem('testName') +
        ", " + JSON.parse(window.localStorage.getItem('testQuestions')).length + " questions.";
}


function addQuestionToTest(type) {

    let retrievedString = window.localStorage.getItem('testQuestions');
    let retrievedObject = JSON.parse(retrievedString);
    let data = {
        "question": document.getElementById("question").value,
    };
    document.getElementById("question").value = "";

    switch (type) {
        case "CHOICE":
            data.extraData = document.getElementById("choiceBox").value;
            document.getElementById("choiceBox").value = "";
            break;
        case "SCALE":
            data.extraData = document.getElementById("leftText").value + " || " + document.getElementById("rightText").value;
            document.getElementById("leftText").value = "";
            document.getElementById("rightText").value = "";

            break;
        default:
            data.extraData = "";
            break;
    }
    data.type = type;
    retrievedObject.push(data);
    window.localStorage.setItem('testQuestions', JSON.stringify(retrievedObject));
    console.log('retrievedObject: ', retrievedObject);
    document.getElementById("testMessage").innerHTML = "Editing: " + window.localStorage.getItem('testName') +
        ", " + JSON.parse(window.localStorage.getItem('testQuestions')).length + " questions.";

}
