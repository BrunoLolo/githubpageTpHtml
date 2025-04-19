//Video Overload
$(document).ready(function () {
    // Fade in del overlay
    $(".hero-overlay").fadeTo(1500, 1);
  
    // Animación de texto
    $(".animated-text").delay(500).fadeTo(1500, 1);
  });

  //Card - Contador - Carrusel
  $(document).ready(function () {
    // Animación de las cards al hacer hover
    $(".card").hover(
      function () {
        $(this).animate({ marginTop: "-10px" }, 300);
      },
      function () {
        $(this).animate({ marginTop: "0" }, 300);
      }
    );
  
    // Contador animado
    let contador = 0;
    let final = 500;
    let velocidad = 10;
    let $numero = $(".numero");

    let interval = setInterval(function () {
      if (contador < final) {
        contador += 5;
        $numero.text(contador + "+");
      } else {
        clearInterval(interval);
      }
    }, velocidad);

  
    // Carrusel de testimonios: ejemplo básico de fade
    // Carrusel de testimonios automático
    let testimonios = $(".testimonio");
    let index = 0;

    function mostrarSiguiente() {
      testimonios.removeClass("activo");
      index = (index + 1) % testimonios.length;
      testimonios.eq(index).addClass("activo");
    }

    testimonios.eq(0).addClass("activo");
    setInterval(mostrarSiguiente, 4000);

  });

  // Validación de formulario + spinner en botón
$(".newsletter").on("submit", function (e) {
  e.preventDefault();
  const form = this;

  if (form.checkValidity() === false) {
    e.stopPropagation();
    $(form).addClass("was-validated");
  } else {
    // Activar spinner
    const button = $(form).find("button");
    button.prop("disabled", true);
    button.find(".spinner-border").removeClass("d-none");
    button.find(".btn-text").text("Enviando...");

    // Simular envío (como si fuera al servidor)
    setTimeout(() => {
      alert("¡Gracias por suscribirte!");
      button.prop("disabled", false);
      button.find(".spinner-border").addClass("d-none");
      button.find(".btn-text").text("Suscribirse");
      form.reset();
      $(form).removeClass("was-validated");
    }, 2000);
  }
});

  