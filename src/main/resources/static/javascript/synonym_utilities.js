var API_KEY = "zIMDuZ7p64bFa47Qa63a";
var WS_BASE = "http://thesaurus.altervista.org/thesaurus/v1";



function lookForSynonym(word) {
    lang = $("#lang")[0].value;
    $.ajax({
        url: WS_BASE,
        data: {
            word: word,
            language: lang,
            output: "json",
            key: API_KEY
        },
        success: processResult,
        error: function (errorMessage) {
            var results = document.getElementById("results");
            var p = document.createElement("p");
            var msg = document.createTextNode("The entered word might not exist. If it does, check your internet connection.");
            p.style.color = "red";
            p.appendChild(msg);
            results.appendChild(p);
            console.log(errorMessage);
        }
    });
}

function processResult(data) {
    var list = document.createElement("ul");
    var results = document.getElementById("results");
    results.innerHTML = "";
    var array = data.response;
    var length = data.response.length;
    if (length > 3) length = 3;
    for (var i=0; i < length; i++) {
        var entry = document.createElement("li");
        var syns = array[i].list.synonyms
            .split("|")
            .slice(0, 3)
            .join(", ");
        var node;
        if (syns.length > 3)
        node = document.createTextNode(syns);
        entry.appendChild(node);
        list.appendChild(entry);
        results.appendChild(list);
    }


    console.log(data);
}