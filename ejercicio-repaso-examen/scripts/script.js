// Se ejecutarán los scripts cuando se cargue el documento.
$(document).ready(function () {
  /* Crear el SLIDER */
  $("#opacity-slider").slider({
    min: 0,
    max: 1,
    step: 0.1,
    value: 1,
    slide: function (event, ui) {
      // > Selecciono el texto de opacidad y le asigno el valor del slider en ese momento.
      $("#opacity-value").text(ui.value);

      /* > Aplicar la opacidad en tiempo real al círculo
      $('#circle').css('opacity', ui.value); */
    },
  });

  /* Lista ordenable */
  $("#positions").sortable();

  /* Botones */
  $("#start, #stop").button();

  /* Evento CLICK en BTN Iniciar */
  $("#start").click(function () {
    /* Detener la animación en curso y empezar de nuevo con valores actuales*/
    $("#circle").stop(true, false);

    // > Opacidad del circulo
    let opacidad = $("#opacity-value").text();

    // > Recoger valores DATA-POS
    // >> Creo variable que alojará el dato
    let positions = $("#positions li")
      // >> .map() recorre una lista de elementos y ejecuta una acción x c/u
      .map(function () {
        return $(this).data("pos"); // Retorna el valor dentro del atributo data-pos
      })
      .get(); // Y lo convierte en un array simple;

    // > Selecciono el circulo para aplicarle la opacidad solo en la 1ra animación, y el movimiento en left
    $("#circle")
      .animate(
        {
          opacity: opacidad,
          left: positions[0],
        },
        2000
      )
      .animate(
        {
          left: positions[1],
        },
        2000
      )
      .animate(
        {
          left: positions[2],
        },
        2000
      );
  });

  /* Evento CLICK en BTN Stop */
  $("#stop").click(function () {
    $("#circle").stop(true, false);
  });
});
