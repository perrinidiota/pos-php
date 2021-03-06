/*==================================
EDITAR EPS
==================================*/

$(document).on("click", ".btnEditarEps", function() {

    var idEps = $(this).attr("idEps");

    var datos = new FormData();
    datos.append("idEps", idEps);

    $.ajax({

        url: "ajax/eps.ajax.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function(respuesta) {

            $("#editarNombre").val(respuesta["nombre"]);
            $("#editarCodigo").val(respuesta["codigo"]);
            $("#editarNit").val(respuesta["nit"]);
            $("#editarDireccion").val(respuesta["direccion"]);
        }
    });

})


/*==================================
ACTIVAR EPS
==================================*/

$(document).on("click", ".btnActivarEps", function() {

    var idEps = $(this).attr("idEps");
    var estadoEps = $(this).attr("estadoEps");

    //console.log("idEps", idEps);

    var datos = new FormData();
    datos.append("activarId", idEps);
    datos.append("activarEps", estadoEps);

    $.ajax({

        url: "ajax/eps.ajax.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        success: function(respuesta) {

            if (window.matchMedia("(max-width:767px)").matches) {

                swal({
                    title: "La EPS ha sido actualizada",
                    type: "success",
                    confirmButtonText: "¡Cerrar!"
                }).then(function(result) {
                    if (result.value) {
                        window.location = "eps";
                    }
                });

            }

        }

    })

    if (estadoEps == 0) {

        $(this).removeClass('btn-success');
        $(this).addClass('btn-danger');
        $(this).html('Desactivado');
        $(this).attr('estadoEps', 1);

    } else {

        $(this).addClass('btn-success');
        $(this).removeClass('btn-danger');
        $(this).html('Activado');
        $(this).attr('estadoEps', 0);

    }

})

/*==================================
REVISAR SI EXISTE CODIGO EPS
==================================*/

$("#nuevoCodigo").change(function() {

    $(".alert").remove();

    var codigo = $(this).val();

    var datos = new FormData();
    datos.append("validarCodigo", codigo);

    $.ajax({
        url: "ajax/eps.ajax.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function(respuesta) {

            if (respuesta) {

                $("#nuevoCodigo").parent().after('<div class="alert alert-warning">Este Codigo ya existe en la base de datos</div>');

                $("#nuevoCodigo").val("");

            }

        }

    })
})


/*==================================
ELIMINAR EPS
==================================*/

$(document).on("click", ".btnEliminarEps", function() {

    var idEps = $(this).attr("idEps");
    var codigo = $(this).attr("codigo");

    swal({
        title: '¿Está seguro de borrar la EPS?',
        text: "¡Si no lo está puede cancelar la accíón!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, borrar EPS!'
    }).then(function(result) {

        if (result.value) {

            window.location = "index.php?ruta=eps&idEps=" + idEps + "&codigo=" + codigo;

        }

    })

})