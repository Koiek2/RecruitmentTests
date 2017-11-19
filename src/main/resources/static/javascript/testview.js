function viewCurrentTest() {


    let questions = JSON.parse(localStorage.getItem('testQuestions'));
    let element = document.getElementById("questionsDiv");
    document.getElementById("testName").value = window.localStorage.getItem("testName");
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("Viewing test: "+window.localStorage.getItem("testName"));
    h3.appendChild(h3Text);
    element.appendChild(h3);
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];
        let para = document.createElement("p");
        let node = document.createTextNode(i+1 +". " + question.question);
        para.appendChild(node);
        element.appendChild(para);

        switch (question.type) {
            case "CHOICE":
                let choiceDivPara = document.createElement("div");
                let possibleInputs = question.extraData.split(">");
                for (let j = 1; j < possibleInputs.length; j++) {
                    let div = document.createElement("div");
                    div.setAttribute("class", "radio");

                    let inputRadio = document.createElement("input");
                    inputRadio.setAttribute("type","radio");
                    inputRadio.setAttribute("name","optradio");

                    let para = document.createElement("label");
                    para.appendChild(inputRadio);
                    let node = document.createTextNode(possibleInputs[j]);
                    para.appendChild(node);

                    div.appendChild(para);
                    choiceDivPara.appendChild(div);
                }
                element.appendChild(choiceDivPara);
                break;
            case "SCALE":
                let leftText = document.createElement("p");
                let rightText = document.createElement("p");
                leftText.setAttribute("style","float: left");
                leftText.appendChild(document.createTextNode(question.extraData.split("||")[0]));
                rightText.appendChild(document.createTextNode(question.extraData.split("||")[1]));

                let sliderDiv = document.createElement("div");
                sliderDiv.setAttribute("style","float: left; margin: 10px;");
                let sliderInput = document.createElement("input");
                sliderInput.setAttribute("type","range");
                sliderInput.setAttribute("value","50");
                sliderDiv.appendChild(sliderInput);
                element.appendChild(leftText);
                element.appendChild(sliderDiv);
                element.appendChild(rightText);


                break;
            case "OPEN":
                let textBox = document.createElement("textarea");
                textBox.setAttribute("class", "form-control");
                textBox.setAttribute("rows", "2");
                element.appendChild(textBox);

                break;
        }
    }
}