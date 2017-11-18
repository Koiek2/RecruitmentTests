function viewCurrentTest() {


    let questions = JSON.parse(localStorage.getItem('testQuestions'));
    document.getElementById("testName").value = window.localStorage.getItem("testName");

    let element = document.getElementById("questionsDiv");
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];
        switch (question.type) {
            case "CHOICE":

                let choiceDivPara = document.createElement("div");
                let possibleInputs = question.extraData.split(">");
                for (let j = 0; j < possibleInputs.length; j++) {
                    let para = document.createElement("radio");
                    let node = document.createTextNode(possibleInputs[j]);
                    para.appendChild(node);
                    choiceDivPara.appendChild(para);
                }


                element.appendChild(choiceDivPara);
                break;
            case "SCALE":

                break;
            case "OPEN":
                let para = document.createElement("p");
                let node = document.createTextNode(question.question);
                para.appendChild(node);

                element.appendChild(para);
                break;
        }
    }
}