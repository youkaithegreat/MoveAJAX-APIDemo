function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $city = $('#city');
    var $street = $('#street');
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetVal = $street.val();
    var cityVal = $city.val();

    // load streetview
    var picUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + streetVal + ", " + cityVal;
    console.log(picUrl);

    var nytURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + streetVal + ", " + cityVal + "&api-key=74cce60d8b5f70ebab13fa0b5a80f113:5:59978738";
    // YOUR CODE GOES HERE!
    $body.append('<img class="bgimg" src="' + picUrl + ' "/>');

    $.getJSON(nytURL, function (data) {

        console.log(data);
        var items = data.response.docs;

        for(var i = 0; i < items.length; i++){
            var item = items[i];
            $nytElem.append('<li class ="article">' + '<a href="' + item.web_url + '">' + item.headline.main + '</a>' + '<p>' + item.snippet + '</p>' + '</li>');
        }
        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });

    return false;
}

$('#form-container').submit(loadData);
