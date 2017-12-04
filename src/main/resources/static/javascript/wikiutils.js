$(document).ready(function () {
    $("#searchBtn").click(function () {
        lang = $("#lang")[0].value;
        $.ajax({
            url: "http://" + lang + ".wikipedia.org/w/api.php",
            data: {action: 'query', list: 'search', srsearch: $("input[name=Wikipedia]").val(), format: 'json'},
            dataType: "jsonp",
            success: selectBestResult,
            error: function (errorMessage) {
                console.log(errorMessage);
            }
        });

    });
});
var lang;
function selectBestResult(apiResult) {
    //select first result
    if(apiResult.query.search.length) {
        bestResult = apiResult.query.search[0].title;

        url = "http://" + lang + ".wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + bestResult + "&callback=?";

        $.ajax({
            url: url,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            async: true,
            dataType: 'jsonp',
            success: showBestResult,
            error: function (errorMessage) {
                console.log(errorMessage);
            }
        });
        
    } else {
        noResultP = document.createElement("p");
        noResultNode = document.createTextNode("No result found for this search");
        noResultP.appendChild(noResultNode)

        $("#article")[0].appendChild(noResultP)
    }

}

function showBestResult(data, textStatus, jqXHR) {
    var markup = data.parse.text["*"];
    var blurb = $('<div></div>').html(markup);
    i_en = markup.indexOf("may refer to");
    i_es = markup.indexOf("puede referirse:");
    i_pl = markup.indexOf("strona ujednoznaczniająca");
    if(i_en+i_es+i_pl >= 0) {

        blurb.find('li').each(function(){$(this).html();})
        $('#article').html($(blurb).find('ul'));
    }
    else {
        // remove links as they will not work
        blurb.find('a').each(function () {
            if ($(this).html().indexOf("img") < 0) $(this).replaceWith($(this).html());
            else $(this).replaceWith("");
        });

        // remove any references
        blurb.find('sup').remove();

        //remove info from information cards
        blurb.find('.infobox').remove();

        // remove cite error
        blurb.find('.mw-ext-cite-error').remove();
        $('#article').html($(blurb).find('p'));
        //$('#article').html($(blurb).find('ul'));
    }
}