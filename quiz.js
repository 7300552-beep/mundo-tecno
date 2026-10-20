// Evalúa la respuesta en cuanto el usuario hace clic
function verificarRespuesta(idPregunta, respuestaCorrecta, elementoLabel) {
  const bloquePregunta = document.getElementById(idPregunta);
  
  // Evita responder más de una vez la misma pregunta
  if (bloquePregunta.classList.contains('respondida')) return;
  bloquePregunta.classList.add('respondida');

  // Selecciona el radio button dentro del label presionado
  const inputRadio = elementoLabel.querySelector('input');
  inputRadio.checked = true;

  const valorSeleccionado = inputRadio.value;

  // Si la respuesta es correcta
  if (valorSeleccionado === respuestaCorrecta) {
    elementoLabel.classList.add('correcta');
  } else {
    // Si la respuesta es incorrecta
    elementoLabel.classList.add('incorrecta');

    // Marca la correcta automáticamente en verde para enseñarle al usuario
    const todasLasOpciones = bloquePregunta.querySelectorAll('.option');
    todasLasOpciones.forEach(op => {
      const radio = op.querySelector('input');
      if (radio.value === respuestaCorrecta) {
        op.classList.add('correcta');
      }
    });
  }
}