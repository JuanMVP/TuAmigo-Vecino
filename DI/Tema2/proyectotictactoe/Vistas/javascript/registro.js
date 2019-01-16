window.onload = function () {

    var boton = document.getElementById("boton");

    boton.onclick = () => {

        var txtNombre = document.getElementById('name').value;
        var txtApellido = document.getElementById('last_name').value;
        var txtCorreo = document.getElementById('email').value;


        //Test campo obligatorio
        if (txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)) {
            alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
            return false;
        }

        if (txtApellido == null || txtApellido.length == 0 || /^\s+$/.test(txtApellido)) {
            alert('ERROR: El campo apellido no debe ir vacío o lleno de solamente espacios en blanco');
            return false;
        }

        //Test correo
        if (!(/\S+@\S+\.\S+/.test(txtCorreo))) {
            alert('ERROR: Debe escribir un correo válido');
            return false;
        }

    }
}