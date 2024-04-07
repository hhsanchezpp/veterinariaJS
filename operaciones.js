import fs from "fs"

let citasAgendadas = []

export const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const nuevaCita = {
        Nombre: nombre,
        Edad: edad,
        Tipo: tipo,
        Color: color,
        Enfermedad: enfermedad
    }
    if (fs.existsSync("citas.json")) 
    {
        const arrayCitasJson = JSON.parse(fs.readFileSync("citas.json", "utf8"))
        citasAgendadas = [...arrayCitasJson, nuevaCita]
        fs.writeFileSync('citas.json', JSON.stringify(citasAgendadas))
        console.log("*** CITA AGENDADA ***"),
        console.table(nuevaCita)
    }
     else 
    { 
        fs.writeFileSync('citas.json', JSON.stringify([...citasAgendadas, nuevaCita]))
    }
};

export const leer = () => {
    const citasAgendadas = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    if (Array.isArray(citasAgendadas) && !citasAgendadas.length) {
        console.info("*** No tines  CITAS ***"),
        console.info("ver a continuación c:\veterinariaJS>node index registrar nombre edad tipo color enfermedad")
        console.info("EJEMPLO: node index registrar Azabache '20 años' Caballo Alazan Resfrio")
    } else {
        console.log("Cargando...")
        console.log("*** CITAS en Agenda ***"),
        console.log("                      "),
            citasAgendadas.forEach((cita, index) => { 
                                                        console.log(`Cita #${index + 1}`)
                                                        console.table(cita) 
            })
    }
};