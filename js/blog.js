$(document).ready(function () {
    $('input[name="categoria"]').on('change', function () {
      const categoria = $(this).attr('id');

      if (categoria === 'todos') {
        $('.blog-grid .card').show();
      } else {
        $('.blog-grid .card').hide().filter('.' + categoria).show();
      }
    });
  });

  $('.blog-grid .card').fadeOut(200).filter('.' + categoria).fadeIn(400);


  /*Comentario*/
  $(document).ready(function () {
    // Botón DESTACAR: agrega fondo amarillo
    $('.comentarios').on('click', '.btn-destacar', function () {
      $(this).closest('.comentario').toggleClass('destacado');
    });

    // Botón RESPONDER: agrega input de respuesta
    $('.comentarios').on('click', '.btn-responder', function () {
      const parent = $(this).closest('.comentario');
      if (parent.find('.respuesta-input').length === 0) {
        parent.append(`
          <div class="respuesta">
            <input type="text" class="respuesta-input" placeholder="Escribe tu respuesta">
            <button class="btn-enviar-respuesta">Enviar</button>
          </div>
        `);
      }
    });

    // Enviar respuesta: mostrar debajo del comentario
    $('.comentarios').on('click', '.btn-enviar-respuesta', function () {
      const input = $(this).siblings('.respuesta-input');
      const respuesta = input.val().trim();
      if (respuesta !== "") {
        $(this).closest('.comentario').append(`<div class="respuesta-mensaje"><em>${respuesta}</em></div>`);
        $(this).parent('.respuesta').remove(); // eliminar el input
      }
    });
  });

  /*AOS*/
  AOS.init({
    duration: 1000, // duración de la animación en ms
    once: true      // si solo se anima una vez
  });
