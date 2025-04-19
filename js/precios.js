$(document).ready(function () {
    $(".plan").hover(
      function () {
        $(this).addClass("hover-activo");
      },
      function () {
        $(this).removeClass("hover-activo");
      }
    );

    // Extra: Si querés que al hacer click se quede marcado:
    $(".plan").on("click", function () {
      $(".plan").removeClass("hover-activo"); // quita de los demás
      $(this).addClass("hover-activo"); // marca el seleccionado
    });
  });

  /*INICIALIZADOR*/
  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });