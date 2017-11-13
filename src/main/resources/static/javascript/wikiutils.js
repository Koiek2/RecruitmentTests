$(document).ready(function () {
    $("#searchBtn").click(function () {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            data: { action: 'query', list: 'search', srsearch: $("input[name=Wikipedia]").val(), format: 'json'},
            dataType: "jsonp",
            success: selectBestResult
        });
    });
});

function selectBestResult(apiResult) {
    //select first result
    bestResult = apiResult.query.search[0].title;

    url = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+ bestResult +"&callback=?";

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

}

function showBestResult(data, textStatus, jqXHR) {
    var markup = data.parse.text["*"];
    var blurb = $('<div></div>').html(markup);

    // remove links as they will not work
    blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });

    // remove any references
    blurb.find('sup').remove();

    // remove cite error
    blurb.find('.mw-ext-cite-error').remove();
    $('#article').html($(blurb).find('p'));
}