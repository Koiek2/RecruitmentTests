function printCurrentTest() {

    let questions = JSON.parse(localStorage.getItem('testQuestions'));
    let element = document.getElementById("questionsDiv");
    document.getElementById("testName").value = window.localStorage.getItem("testName");
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode(window.localStorage.getItem("testName"));
    h3.appendChild(h3Text);
    element.appendChild(h3);

    let newline = document.createElement("br");
    element.appendChild(newline);

    let studentdata1 = document.createElement("p");
    let studentdata2 = document.createElement("p");
    let studentdata3 = document.createElement("p");

    let studentdata1txt = document.createTextNode("Name: _______________ ");
    let studentdata2txt = document.createTextNode("Surname: _______________  ");
    let studentdata3txt = document.createTextNode("ID number: _______________  ");

    studentdata1.appendChild(studentdata1txt);
    studentdata2.appendChild(studentdata2txt);
    studentdata3.appendChild(studentdata3txt);

    element.appendChild(studentdata1);
    element.appendChild(studentdata2);
    element.appendChild(studentdata3);

    let newline2 = document.createElement("br");
    element.appendChild(newline2);

    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];

        let para = document.createElement("p");
        para.setAttribute("style", "clear: both");

        let newQuestionLine = document.createElement("p");
        //let newQuestionLineTXT = document.createTextNode("____________________________________________________________________________");
        let newQuestionLineTXT = document.createTextNode(" ");
        newQuestionLine.appendChild(newQuestionLineTXT);

        element.appendChild(newQuestionLine);

        let node = document.createTextNode(i + 1 + ". " + question.question);
        para.appendChild(node);
        element.appendChild(para);

        switch (question.type) {
            case "CHOICE":
                let info = document.createElement("p");
                let infotxt = document.createTextNode("     (Underline correct answer)");
                info.appendChild(infotxt);
                element.appendChild(info);
                let choiceDivPara = document.createElement("div");
                let possibleInputs = question.extraData.split(">");
                let list  = document.createElement("ul");
                list.setAttribute("type", "circle");
                for (let j = 1; j < possibleInputs.length; j++) {
                    let li = document.createElement("li");
                    let inp = document.createTextNode(possibleInputs[j]);
                    li.appendChild(inp);
                    list.appendChild(li);
                }
                choiceDivPara.appendChild(list);
                element.appendChild(choiceDivPara);
                break;
            case "SCALE":
                let scaleDivParra = document.createElement("div");
                let Text = document.createElement("p");
                Text.appendChild(document.createTextNode("On a scale: "));
                Text.appendChild(document.createTextNode(question.extraData.split("||")[0]));
                Text.appendChild(document.createTextNode(" ---> "));
                Text.appendChild(document.createTextNode(question.extraData.split("||")[1]));

                let Answ = document.createElement("p");
                Answ.appendChild(document.createTextNode("Your answer: ............................................................................/"));

                scaleDivParra.appendChild(Text);
                scaleDivParra.appendChild(Answ);
                element.appendChild(scaleDivParra);
                break;
            case "OPEN":
                let para = document.createElement("p");
                para.setAttribute("style", "clear: both");
                let node = document.createTextNode("................................................................................................................../");
                para.appendChild(node);
                let br = document.createElement("br");
                para.appendChild(br);
                let node2 = document.createTextNode("................................................................................................................../");
                para.appendChild(node2);
                let br2 = document.createElement("br");
                para.appendChild(br2);
                let node3 = document.createTextNode("................................................................................................................../");
                para.appendChild(node3);
                let br3 = document.createElement("br");
                para.appendChild(br3);

                element.appendChild(para);
                break;
        }
    }
}


function makeHeader(){
    let element = document.getElementById("printHeader");
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("Print Preview of " + window.localStorage.getItem("testName") + ":");
    h3.appendChild(h3Text);
    element.appendChild(h3);
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("-------------------------------------------------------------------"))
    element.appendChild(h2);
}

function makeFooter(){
    let element = document.getElementById("printFooter");
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("-------------------------------------------------------------------"))
    element.appendChild(h2);
}
