let mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesas disponibles.");
      } else {
        reject("No hay suficientes mesas disponibles.");
      }
    }, 2000);
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const enviadoConExito = Math.random() > 0.3; // 70% de éxito
      if (enviadoConExito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }
    }, 1500);
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = "Procesando reserva...";

  try {
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    resultadoDiv.textContent = disponibilidad;

    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    resultadoDiv.textContent = confirmacion;

    mesasDisponibles -= mesasSolicitadas;
  } catch (error) {
    resultadoDiv.textContent = "Error: " + error;
  }
}

function manejarReserva() {
  const nombre = document.getElementById("nombre").value;
  const mesas = parseInt(document.getElementById("mesas").value);

  if (!nombre || isNaN(mesas) || mesas < 1) {
    document.getElementById("resultado").textContent = "Por favor, ingresa datos válidos.";
    return;
  }

  hacerReserva(nombre, mesas);
}
