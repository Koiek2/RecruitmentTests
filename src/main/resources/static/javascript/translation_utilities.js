var API_KEY = "trnsl.1.1.20171224T173814Z.e03e87eb4fc74815.61caf2156cbdf93fcf35b2f284d8ec43011c367a";
var WS_BASE_URL = "https://translate.yandex.net/api/v1.5/tr.json/translate";

function translateText(text) {
    lang_in = $("#lang_in")[0].value;
    lang_out = $("#lang_out")[0].value;
    $.ajax({
        url: WS_BASE_URL,
        data: {
            key: API_KEY,
            text: text,
            lang: lang_in + "-" + lang_out
        },
        success: printTranslation,
        error: handleError
    });
}

function printTranslation(data) {
    var div = document.getElementById("translation");
    div.innerHTML = "";
    var p = document.createElement("p");
    var txt = document.createTextNode(data["text"][0]);
    p.appendChild(txt);
    div.appendChild(p);
}

function handleError(errorMessage) {
    var div = document.getElementById("translation");
    var p = document.createElement("p");
    var msg = document.createTextNode("The entered word might not exist. If it does, check your internet connection.");
    p.style.color = "red";
    p.appendChild(msg);
    div.appendChild(p);
    console.log(errorMessage);
}