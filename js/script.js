
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
    var picUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + streetVal + ", " +cityVal;
    console.log(picUrl);

    // YOUR CODE GOES HERE!
    $body.append('<img class="bgimg" src="' + picUrl + ' "/>');
    return false;
}

$('#form-container').submit(loadData);
