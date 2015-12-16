/**
 * Created by lukas on 13.12.2015.
 */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var expanded = true;

var toggleMenu = function () {
    $(document).on('click', '#moreBtn', function (e) {
        expanded = !expanded;
        if (expanded === true) {
            $("#arrow").removeClass(" glyphicon-triangle-top").addClass(" glyphicon-triangle-bottom");
            $(this).collapse('hide');
        } else {
            $("#arrow").removeClass(" glyphicon-triangle-bottom").addClass(" glyphicon-triangle-top");
        }
    });
}