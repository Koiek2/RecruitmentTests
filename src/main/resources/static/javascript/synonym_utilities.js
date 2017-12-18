var API_KEY = "zIMDuZ7p64bFa47Qa63a";
var WS_BASE = "http://thesaurus.altervista.org/thesaurus/v1";



function lookForSynonym(word) {
    $.ajax({
        url: WS_BASE,
        data: {
            word: word,
            language: "en_US",
            output: "json",
            key: API_KEY
        },
        success: processResult,
        error: function (errorMessage) {
            console.log(errorMessage);
        }
    });
}

function processResult(data) {
    var list = document.createElement("ul");
    var body = document.getElementsByTagName("body")[0];
    var array = data.response;
    var length = data.response.length;
    if (length > 3) length = 3;
    for (var i=0; i < length; i++) {
        var entry = document.createElement("li");
        var node = document.createTextNode(array[i].list.synonyms);
        entry.appendChild(node);
        list.appendChild(entry);
        body.appendChild(list);
    }


    console.log(data);
}