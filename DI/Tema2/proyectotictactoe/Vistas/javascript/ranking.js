$(document).ready(function () {

    var token = localStorage.getItem('token');
    var i = 0;

    $.ajax({
        method: "GET",
        url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/user/ranking",
        dataType: "json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        }
    })
    .done(function( resp ) {
        resp.forEach(usuario => {
            i++;
            $("#tabla-comentarios").append(`<tr><td>${i}</td><td>${usuario.username}</td><td>${usuario.points}</td><td>${usuario.time}</td></tr>`);
        });
    })
    .fail(function( resp ) {
        console.log('ERROR RESPUESTA');
        console.log(resp);
    });

    $("#btn-logout").click(function(e){

        localStorage.removeItem('token');
        localStorage.removeItem('email');
        location.replace("loginAndRegister.html");
    
    })
    
});