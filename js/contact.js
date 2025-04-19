/*FORMULARIO*/
$("#formulario input, #formulario textarea").on("input", function () {
  const input = $(this);
  if (this.checkValidity()) {
    input.removeClass("is-invalid").addClass("is-valid");
  } else {
    input.removeClass("is-valid").addClass("is-invalid");
  }
});

/*SPINNER*/
$("#spinner").fadeIn(); // Muestra
setTimeout(() => {
  $("#spinner").fadeOut();
  $("#modalConfirmacion").modal("show");
  form.reset();
}, 2000);


/*FORMULARIO*/
const form = $("#formulario");
  const spinner = $("#spinner");

  form.on("submit", function (e) {
    e.preventDefault();

    // Mostrar el spinner con efecto
    spinner.fadeIn();

    // Simular envío con retraso
    setTimeout(() => {
      spinner.fadeOut(); // Ocultar con efecto
      $("#modalConfirmacion").modal("show"); // Mostrar modal Bootstrap (si lo tenés)
      form[0].reset(); // Resetear formulario
      $(".is-valid, .is-invalid").removeClass("is-valid is-invalid"); // Limpiar validaciones
    }, 2000);
  });

  $("#modalConfirmacion").modal("show");


/*Para el FORMULARIO*/
$(document).ready(function () {
  function validarCampo(input, validacionFn) {
    if (validacionFn(input.val())) {
      input.removeClass("is-invalid").addClass("is-valid");
    } else {
      input.removeClass("is-valid").addClass("is-invalid");
    }
  }

  $("#nombre").on("input", function () {
    validarCampo($(this), (val) => val.trim().length >= 2);
  });

  $("#email").on("input", function () {
    validarCampo($(this), (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val));
  });

  $("#telefono").on("input", function () {
    validarCampo($(this), (val) => /^[0-9]{9,}$/.test(val));
  });

  $("#mensaje").on("input", function () {
    validarCampo($(this), (val) => val.trim().length >= 10);
  });
});