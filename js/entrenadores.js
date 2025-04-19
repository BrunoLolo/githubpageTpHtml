$(document).ready(function () {
    $('.barra .nivel').each(function () {
      const porcentaje = $(this).css('width');
      $(this).css('width', '0');
      $(this).animate({ width: porcentaje }, 1000);
    });
  });
//ESTRELLAS
  $('.estrellas label').on('click', function () {
    const radioId = $(this).attr('for');
    $('#' + radioId).prop('checked', true);
  });