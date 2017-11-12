/**
 * Created by Koi on 10/29/2017.
 */



function toggleChoiceExample() {
    let x = document.getElementById("choiceExampleArea");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function addTestToDB() {

    let data = {
        "id": 123, //TODO get biggest id in db and add '1'
        "testName": window.localStorage.getItem('testName'),
        "questions": JSON.parse(localStorage.getItem('testQuestions')),

    };
    let request = new XMLHttpRequest();
    let url = "/addTest";


    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}


function startTest() {
    let testQuestions = [];
    let testName = document.getElementById("testName").value;


// Put the object into storage
    window.localStorage.setItem('testQuestions', JSON.stringify(testQuestions));
    window.localStorage.setItem('testName', JSON.stringify(testName));

    document.getElementById("testMessage").innerHTML = "Currently editing test: " + window.localStorage.getItem('testName');
}

document.getElementById("testMessage").innerHTML = "Currently editing test: " + window.localStorage.getItem('testName') +
    ", questions in test: " + JSON.parse(window.localStorage.getItem('testQuestions')).length;


function addQuestionToTest(type) {

    let retrievedString = window.localStorage.getItem('testQuestions');
    let retrievedObject = JSON.parse(retrievedString);
    let data = {
        "question": document.getElementById("question").value,
    };

    switch (type) {
        case "CHOICE":
            data.extraData = document.getElementById("choiceBox").value;
            break;
        case "SCALE":
            data.extraData = document.getElementById("leftText").value + " || " + document.getElementById("rightText").value;
            break;
        default:
            data.extraData = "";
            break;
    }
    data.type = type;
    retrievedObject.push(data);
    window.localStorage.setItem('testQuestions', JSON.stringify(retrievedObject));
    console.log('retrievedObject: ', retrievedObject);
    document.getElementById("testMessage").innerHTML = "Currently editing test: " + window.localStorage.getItem('testName') +
        ", questions in test: " + JSON.parse(window.localStorage.getItem('testQuestions')).length;

}
