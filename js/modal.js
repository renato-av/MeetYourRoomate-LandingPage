$(document).ready(function () {

  $('.imagen-proyecto').on('click', function () {

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal" id="modal"><div class="contenedor-modal"><img src="'+ rutaImagen  +'" alt=""><div class="textos-modal"><h2>Conoce</h2><p>Encuentra tu roommate indicado y divide los costos</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

    $('#proyectos').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal').remove();
    })
  })
  $('.imagen-proyecto2').on('click', function () {

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal" id="modal"><div class="contenedor-modal"><img src="'+ rutaImagen  +'" alt=""><div class="textos-modal"><h2>Publica</h2><p>Muestra tu inmueble al público indicado</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

    $('#proyectos').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal').remove();
    })
  })
  $('.imagen-proyecto3').on('click', function () {

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal" id="modal"><div class="contenedor-modal"><img src="'+ rutaImagen  +'" alt=""><div class="textos-modal"><h2>Alquila</h2><p>Obté una mejor comunicación entre arrendatario y arrendador</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

    $('#proyectos').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal').remove();
    })
  })

  $(document).on('keyup', function (e) {
    if (e.which==27) {
      $('#modal').remove();
    }
  })

});
