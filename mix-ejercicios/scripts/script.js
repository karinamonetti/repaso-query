$(document).ready(function () {
  /* ____________________________________________________________

                     Ejercicio 1             
    ____________________________________________________________*/

  /* Evento BTN Ej1 */
  $("#ej1").click(function () {
    // > Agrego contenido dentro de la lista
    $("#lista").append(`
        <p>Lista 1</p>
        <ul>
          <li class="borrar-item">Tortilla</li>
          <li class="borrar-item">Jamón</li>
          <li class="borrar-item">Queso</li>
        </ul>
        <p>Lista 2</p>
        <ul>
          <li class="borrar-item">Coca Cola</li>
          <li class="borrar-item">Leche</li>
          <li class="borrar-item">Té</li>
        </ul>
      `);
  });

  /* Evento en elemento de lista */
  $("#lista").on("click", ".borrar-item", function () {
    $(this).remove();
  });

  /* ____________________________________________________________
  
                     Ejercicio 2             
    ____________________________________________________________*/

  /* Evento BTN Ej2 */
  $("#ej2").click(function () {
    // > Obtener el valor del input
    let texto = $("#input-texto").val().trim(); // .trim() elimina espacios en blanco

    // > Validar si hay texto ingresado
    if (texto !== "") {
      $("#h1-ej2").text($("#input-texto").val()); // Si hay texto, lo agregamos al h1
    } else {
      alert("Por favor, ingresa algún texto antes de continuar.");
    }
  });

  /* ____________________________________________________________
  
                     Ejercicio 3             
    ____________________________________________________________*/
  /* Evento BTN Ej3 */
  $("#ej3").click(function () {
    // > Antes de crear los nuevos divs, limpiamos los anteriores
    $("#contenedor-divs").empty();

    // > Creamos 5 divs
    for (let i = 0; i < 5; i++) {
      // >> Generamos posiciones aleatorias dentro del área visible del navegador
      let posX = Math.floor(Math.random() * ($(window).width() - 100));
      let posY = Math.floor(Math.random() * ($(window).height() - 100));

      // >> Crear el div con clases para estilos y posición aleatoria
      let nuevoDiv = $("<div></div>")
        .addClass("random-div")
        .css({
          top: posY + "px",
          left: posX + "px",
          position: "absolute",
        });

      // >> Agregar el div al contenedor
      $("#contenedor-divs").append(nuevoDiv);
    }
  });

  /* Evento sobre DIVS */
  $("#contenedor-divs").on("click", ".random-div", function () {
    $(this).remove();
  });

  /* ____________________________________________________________
  
                     Ejercicio 4             
    ____________________________________________________________*/

  /* Evento BTN Ej4 */
  $("#ej4").click(function () {
    // > Antes de crear los nuevos divs, limpiamos los anteriores
    $("#contenedor-divs-4").empty();

    // > Creamos 5 divs
    for (let i = 0; i < 5; i++) {
      // >> Generamos posiciones aleatorias dentro del área visible del navegador
      let posX = Math.floor(Math.random() * ($(window).width() - 100));
      let posY = Math.floor(Math.random() * ($(window).height() - 100));

      // >> Tamaños aleatorios (ancho entre 50 y 200 px, alto entre 50 y 200 px)
      let width = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
      let height = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

      // >> Crear el div con clases para estilos y posición aleatoria
      let nuevoDiv = $("<div></div>")
        .addClass("random-div div-4")
        .css({
          top: posY + "px",
          left: posX + "px",
          position: "absolute",
          width: width + "px",
          height: height + "px",
        });

      // >> Agregar el div al contenedor
      $("#contenedor-divs-4").append(nuevoDiv);
    }
  });

  /* Evento sobre DIVS */
  $("#contenedor-divs-4").on("click", ".div-4", function () {
    $(this).append(`<p>${$(this).width()} x ${$(this).height()}</p>`);
  });

  /* ____________________________________________________________
  
                     Ejercicio 5             
    ____________________________________________________________*/

  $("#adelante").click(function () {
    let nombre = $("#nombre").val();
    let telefono = $("#telefono").val();
    let edad = $("#edad").val();

    if (nombre && telefono && edad) {
      $("#tbody").prepend(`
            <tr>
              <td>${nombre}</td>
              <td>${telefono}</td>
              <td>${edad}</td>
            </tr>
          `);
    }
  });

  $("#atras").click(function () {
    let nombre = $("#nombre").val();
    let telefono = $("#telefono").val();
    let edad = $("#edad").val();
    if (nombre && telefono && edad) {
      $("#tbody").append(`
            <tr>
              <td>${nombre}</td>
              <td>${telefono}</td>
              <td>${edad}</td>
            </tr>
          `);
    }
  });
});
