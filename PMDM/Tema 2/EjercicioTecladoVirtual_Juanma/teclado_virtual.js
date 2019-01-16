//Declaracion de variables
    let  pulsaciones=0;


function isAlphanumericKey(keycode) {
    return (keycode >= 48) && (keycode <= 90);
}






$(document).keydown(function (e) {
    if (isAlphanumericKey(e.which)) {
        var myID = "#key-" + String.fromCharCode(e.which);
        $(myID).trigger("mousedown").addClass('active-style');
    }
});


$(document).keyup(function (e) {
    if (isAlphanumericKey(e.which)) {
        var myID = "#key-" + String.fromCharCode(e.which);
        $(myID).trigger("mouseup").removeClass('active-style');
    }    
});



$(document).ready(function () {
    $("input").keypress(function(){
        $("#contador").text(pulsaciones += 1);
    });
});




