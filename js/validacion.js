$(document).ready(function(){
    $('#form-nuevousuario').validate({
        debug: true,
        lang:'es',
        rules: {
            idNombreCompleto: {
                required: true,
                minlength: 5,
                maxlength: 10
            },
            idEdad: {
                number : true,
                minlength: 1,
                maxlength: 2
            },
            idnickName: {
                required: true,
                minlength: 5,
                maxlength: 15 
            },
            idContraseña: "required",
            idReContraseña: {
                equalTo: "#idContraseña"
            }
        }
    });
    $('#form-eliminar').validate({
        debug: true,
        lang:'es',
        rules: {
            idnickName: "requiered",
            idnickName: {
                equalTo: "#iidnickName"
            }
        }
    })
});