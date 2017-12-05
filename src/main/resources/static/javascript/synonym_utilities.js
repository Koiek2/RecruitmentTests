var API_KEY = "zIMDuZ7p64bFa47Qa63a";
var WS_BASE = "http://thesaurus.altervista.org/thesaurus/v1";

$.ajax({
   url: WS_BASE,
   data: {
        word: "envelope",
        language: "en_US",
        output: "json",
        key: API_KEY
    },
   success: processResult,
   error: function (errorMessage) {
       console.log(errorMessage);
   }
});



function processResult(data) {
    console.log(data);
}