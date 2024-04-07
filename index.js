import { registrar, leer } from "./operaciones.js";

const [, , operacion, nombre, edad, tipo, color, enfermedad] = process.argv

const validacionesEntrada = () => {
    if (!operacion) {
        console.log(`
                      ***ERROR****
                      Intenta las operaciones "leer" para revisar citas agendadas o "registrar" para agregar una nueva cita.      
                      use el comando "ayuda" para mas informacion.
                    `)
        return      }
    if (operacion === "ayuda") {
        console.info(`
                        INSTRUCCCIONES PARA "Agregar" o "Leer" Citas.
                        -----------------------------------------------
                        Agregar cita
                        ----------------
                          Ejecutar el siguiente comando en consola.
                            c:\veterinariaJS>node index registrar  y sus agumentos

                          ver a continuación :
                          c:\veterinariaJS>node index registrar nombre edad tipo color enfermedad
                          EJEMPLO: node index registrar Azabache "20 años" Caballo Alazan Resfrio

                        Leer citas agendadas
                        ------------------------
                          Se ejecuta el comando.
                          c:\veterinariaJS>node leer
                      `);
          return;
      }

    if (operacion === 'registrar') {
        registrar(nombre, edad, tipo, color, enfermedad)
        return
    }

    if (operacion === 'leer') { leer() } else { 
      console.log(`
                  ERROR: La operacion "${operacion}" no es valida
                    Las operaciones son :
                    "leer" para revisar citas agendadas.
                    "registrar" para agregar una nueva cita.
                    o
                    "ayuda" para mas informacion.
                  `)
    }
}
validacionesEntrada()