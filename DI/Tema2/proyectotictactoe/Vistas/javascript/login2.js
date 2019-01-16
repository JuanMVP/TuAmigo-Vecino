$(document).ready(function () {


    $('#btn-login').click(function (e) {
        e.preventDefault();
        let em = $('#correo').val();
        let pwd = $('#contraseya').val();

        $.ajax({
            method: "POST",
            url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/auth/login",
            dataType: "json",
            data: { email: em, password: pwd }
        }).done(function (resp) {
            console.log('done');
            localStorage.setItem('token', resp.token);
            localStorage.setItem('username', resp.username);
            localStorage.setItem('email', resp.email);
            location.replace('index.html');
        }).fail(function (resp) {
            console.log('ERROR RESPUESTA');
            console.log(resp);
        });

    });
});