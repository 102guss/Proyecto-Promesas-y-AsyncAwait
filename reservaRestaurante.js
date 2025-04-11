// Simulando una base de datos de mesas
let mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`¡Sí hay mesas disponibles! Reservando ${mesasSolicitadas} mesa(s)...`);
      } else {
        reject("Lo sentimos, no hay suficientes mesas disponibles.");
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.2;  // 80% de probabilidad de éxito
      if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    mesasDisponibles -= mesasSolicitadas;  // Se descuentan las mesas reservadas

    console.log("Enviando correo de confirmación...");
    const correo = await enviarConfirmacionReserva(nombreCliente);
    console.log(correo);

    console.log(`✅ Reserva confirmada para ${nombreCliente}. 🎉`);
    console.log(`Mesas restantes: ${mesasDisponibles}`);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// Llamadas de prueba
hacerReserva("Juan Pérez", 4);
// Puedes probar también esto:
// hacerReserva("Ana Gómez", 4);  // Falla por falta de mesas
