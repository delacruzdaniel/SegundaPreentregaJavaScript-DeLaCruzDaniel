// Inicio de bloque: Clases, objetos y arrays de los doctores y sus respectivas especialidades

class doctor {
    constructor (nombre, horarios, arancel) {
        this.nombre = nombre;
        this.horarios = horarios;
        this.arancel = arancel;
    }
}

const doctores = [
    new doctor("Blanca Paez", ["10:00", "11:00", "12:00", "13:00"], 10000),
    new doctor("Leonardo Morales", ["11:00", "12:00", "13:00", "14:00"], 12000),
    new doctor("Juliana Garcia", ["08:00", "10:00", "13:00"], 6000),
    new doctor("Santiago Martinez", ["09:30", "11:30", "14:30"], 6500),
    new doctor("Camila Rojas", ["10:00", "12:00", "15:00"], 5000),
    new doctor("Mateo Guzman", ["08:30", "11:30", "13:30"], 7800),
    new doctor("Isabella Rios", ["11:00", "13:00", "16:00"], 8000),
    new doctor("Martin Diaz", ["09:00", "12:00", "14:00"], 6700),
    new doctor("Benjamin Ortiz", ["09:30", "11:30", "15:30"], 9000),
    new doctor("Luciana Alvarez", ["09:30", "11:30", "15:30"], 8400)
];



const psiquiatria = [doctores[0], doctores[1]];
const medicinaFamiliar = [doctores[2], doctores[3]];
const cardiologia = [doctores[4], doctores[5]];
const dermatologia = [doctores[6], doctores[7]];
const endocrinologia = [doctores[8], doctores[9]];

const doctoresPorEspecialidad = {
    psiquiatria,
    medicinaFamiliar,
    cardiologia,
    dermatologia,
    endocrinologia,
}
// Finaliza bloque: Clases, objetos y arrays de los doctores y sus respectivas especialidades

// Almacenamiento vacio de Array a llenar
const usuarios = [];

let opcionValida = false;

// Acceso del usuario (Registro o inicio)
const registroUsuario = () => {
    const usuarios = []; // Array para almacenar los usuarios registrados
    
    while (true) {
        alert("¡Bienvenido a Mediconnect! La plataforma donde encontrarás a los mejores doctores y cuidaremos de tu salud juntos");

        const ingresoUsuario = Number(prompt("Por favor, marque lo que corresponda:\n1 - Estoy registrado\n2 - Quiero registrarme"));

        if (ingresoUsuario === 1) {
            prompt("Ingrese con su Dirección de correo electrónico");
            break;
        } else if (ingresoUsuario === 2) {
            let continuarRegistro = true; // Variable para controlar si el usuario desea continuar registrando

            while (continuarRegistro) { // Bucle para registrar usuarios
                const usuario = {
                    nombre: prompt("Ingrese su nombre y apellido:"),
                    edad: prompt("Ingrese su edad:"),
                    correo: prompt("Ingrese su correo electrónico:")
                };
                
                usuarios.push(usuario);

                alert(`¡Registro exitoso! Gracias por registrarte con el correo: ${usuario.correo}`);
                
                // Preguntar al usuario si desea continuar registrando
                continuarRegistro = confirm("¿Desea registrar otro usuario?");
            }
            break; // Salir del bucle principal una vez finalizado el registro de usuarios
        } else {
            alert("Opción inválida. Por favor, seleccione '1' si está registrado o '2' si quiere registrarse.");
        }
    }
};

//Fin Bloque: Acceso del usuario

//Inicio de Bloque: Busqueda, y elecciòn de especialidad/turno
//funciones para cada opcion de busqueda

const reservarTurno = (doctor, horario) => {
    
    const turnoReservado = {
        doctor: doctor.nombre,
        horario: horario,
        precio: doctor.arancel
    };

    // Simular el envío de la confirmación por correo electrónico
    const mensajeCorreo = `¡Turno reservado con éxito!\n\nDetalles del turno:\nDoctor: ${turnoReservado.doctor}\nHorario: ${turnoReservado.horario}\nPrecio: $${turnoReservado.precio}`;
    

    alert("Turno reservado con éxito. Se ha enviado la confirmación al correo electrónico.");
};



const buscarPorEspecialidad = () => {
    const especialidadElegida = prompt("Ingrese el nombre de la especialidad médica para la cual desea reservar un turno:");
    const especialidadEncontrada = Object.entries(doctoresPorEspecialidad).find(([especialidad, doctores]) => especialidad.toLowerCase() === especialidadElegida.toLowerCase());

    if (especialidadEncontrada) {
        const doctoresDisponibles = especialidadEncontrada[1];
        let mensajeDoctores = "Doctores disponibles:\n";
        doctoresDisponibles.forEach((doctor, index) => {
            mensajeDoctores += `${index + 1}. ${doctor.nombre}\n`;
        });

        alert("Especialidad encontrada: " + especialidadEncontrada[0] + "\n" + mensajeDoctores);

        const nombreDoctorElegido = prompt("Ingrese el nombre o apellido del doctor con el que desea reservar un turno:");
        const doctoresElegidos = doctoresDisponibles.filter(doctor => doctor.nombre.toLowerCase().includes(nombreDoctorElegido.toLowerCase()));

        if (doctoresElegidos.length > 0) {
            let mensajeDoctoresEncontrados = "Doctores encontrados:\n";
            doctoresElegidos.forEach((doctor, index) => {
                mensajeDoctoresEncontrados += `${index + 1}. ${doctor.nombre}\n`;
                mensajeDoctoresEncontrados += "Horarios disponibles: " + doctor.horarios.join(", ") + "\n";
                mensajeDoctoresEncontrados += "Precio por consulta: $ " + doctor.arancel + "\n";
                mensajeDoctoresEncontrados += "-----------------------\n";
            });

            const indiceDoctorElegido = parseInt(prompt("Doctores encontrados:\n" + mensajeDoctoresEncontrados + "Ingrese el número del doctor con el que desea reservar un turno:"));

            if (isNaN(indiceDoctorElegido) || indiceDoctorElegido < 1 || indiceDoctorElegido > doctoresElegidos.length) {
                alert("Número de doctor inválido.");
            } else {
                const doctorElegido = doctoresElegidos[indiceDoctorElegido - 1];
                let mensajeHorarios = "Horarios disponibles:\n";
                doctorElegido.horarios.forEach((horario, index) => {
                    mensajeHorarios += `${index + 1}. ${horario}\n`;
                });

                const indiceHorarioElegido = parseInt(prompt("Horarios disponibles para " + doctorElegido.nombre + ":\n" + mensajeHorarios + "Ingrese el número del horario deseado:"));

                if (isNaN(indiceHorarioElegido) || indiceHorarioElegido < 1 || indiceHorarioElegido > doctorElegido.horarios.length) {
                    alert("Número de horario inválido.");
                } else {
                    const horarioElegido = doctorElegido.horarios[indiceHorarioElegido - 1];
                    const confirmarCita = prompt("¿Desea confirmar su cita para el doctor " + doctorElegido.nombre + " a las " + horarioElegido + "? (Si/No)");
                    if (confirmarCita.toLowerCase() === "si") {
                        reservarTurno(doctorElegido, horarioElegido);
                    } else {
                        alert("Gracias por usar Mediconnect. ¡Hasta luego!");
                    }
                }
            }
        } else {
            alert("No se ha encontrado ningún doctor con ese nombre o apellido.");
        }
    } else {
        alert("No se ha podido encontrar esa especialidad.");
    }
    reservarTurno();
};



const buscarPorNombre = () => {
    const nombreBuscado = prompt("Ingrese el nombre o apellido del profesional con el cual desea atenderse").toLowerCase();
    const doctoresEncontrados = doctores.filter(doctor => doctor.nombre.toLowerCase().includes(nombreBuscado));

    if (doctoresEncontrados.length > 0) {
        let mensajeDoctores = "Doctores Encontrados:\n";
        doctoresEncontrados.forEach((doctor, index) => {
            mensajeDoctores += `${index + 1}. Nombre: ${doctor.nombre}\nHorarios disponibles:\n`;
            doctor.horarios.forEach((horario, idx) => {
                mensajeDoctores += `${idx + 1}. ${horario}\n`;
            });
            mensajeDoctores += `Precio por consulta: $${doctor.arancel}\n\n`;
        });

        alert(mensajeDoctores);

        const indiceDoctorElegido = parseInt(prompt("Ingrese el número del doctor con el que desea reservar un turno:")) - 1;

        if (!isNaN(indiceDoctorElegido) && indiceDoctorElegido >= 0 && indiceDoctorElegido < doctoresEncontrados.length) {
            const doctorElegido = doctoresEncontrados[indiceDoctorElegido];

            let mensajeHorarios = "Horarios disponibles:\n";
            doctorElegido.horarios.forEach((horario, index) => {
                mensajeHorarios += `${index + 1}. ${horario}\n`;
            });

            alert(mensajeHorarios);

            const indiceHorarioElegido = parseInt(prompt("Ingrese el número del horario deseado:")) - 1;

            if (!isNaN(indiceHorarioElegido) && indiceHorarioElegido >= 0 && indiceHorarioElegido < doctorElegido.horarios.length) {
                const horarioElegido = doctorElegido.horarios[indiceHorarioElegido];

                const confirmarCita = prompt(`¿Desea confirmar su cita para ${doctorElegido.nombre} a las ${horarioElegido}? (Si/No)`).toLowerCase();
                
                if (confirmarCita === "si") {
                    reservarTurno(doctorElegido, horarioElegido);
                    alert("Gracias por usar Mediconnect. ¡Hasta luego!");
                } else {
                    alert("Gracias por usar Mediconnect. ¡Hasta luego!");
                }
            } else {
                alert("Número de horario inválido.");
            }
        } else {
            alert("Número de doctor inválido.");
        }
    } else {
        alert("No se encontró ningún doctor con ese nombre o apellido.");
    }
};




const verMenuCompleto = () => {
    console.log("Especialidades disponibles:");

    
    Object.keys(doctoresPorEspecialidad).forEach((especialidad, index) => {
        console.log(`${index + 1}. ${especialidad}`);
    });

    
    const eleccionEspecialidad = Number(prompt(
        "Ingrese el número de la especialidad para ver los doctores disponibles:\n" +
        Object.keys(doctoresPorEspecialidad).map((especialidad, index) => `${index + 1} - ${especialidad}`).join("\n")
    ));

    const especialidades = Object.keys(doctoresPorEspecialidad);
    if (!isNaN(eleccionEspecialidad) && eleccionEspecialidad >= 1 && eleccionEspecialidad <= especialidades.length) {
        const especialidadElegida = especialidades[eleccionEspecialidad - 1];
        console.log(`Doctores disponibles en ${especialidadElegida}:`);

        const doctoresDisponibles = doctoresPorEspecialidad[especialidadElegida];
        doctoresDisponibles.forEach((doctor, index) => {
            console.log(`${index + 1}. ${doctor.nombre}`);
        });

        // Solicitar al usuario que elija un doctor
        const indiceDoctorElegido = Number(prompt(
            `Ingrese el número del doctor con el que desea reservar un turno en ${especialidadElegida}:\n` +
            doctoresDisponibles.map((doctor, index) => `${index + 1} - ${doctor.nombre}`).join("\n")
        ));

        if (!isNaN(indiceDoctorElegido) && indiceDoctorElegido >= 1 && indiceDoctorElegido <= doctoresDisponibles.length) {
            const doctorElegido = doctoresDisponibles[indiceDoctorElegido - 1];
            alert(`Ha elegido a ${doctorElegido.nombre}.`);
        
            const horariosDisponibles = doctorElegido.horarios.map((horario, index) => `${index + 1}. ${horario}`).join("\n");
            const horarioElegidoIndex = Number(prompt(`Los horarios disponibles son:\n${horariosDisponibles}\nIngrese el número del horario deseado:`)) - 1;
        
            if (!isNaN(horarioElegidoIndex) && horarioElegidoIndex >= 0 && horarioElegidoIndex < doctorElegido.horarios.length) {
                const horarioElegido = doctorElegido.horarios[horarioElegidoIndex];
                alert(`Ha elegido el horario ${horarioElegido}.`);
                alert(`Precio por turno: $${doctorElegido.arancel}`);
        
                const confirmarCita = prompt("¿Desea confirmar su cita? (Si/No)");
                if (confirmarCita.toLowerCase() === "si") {
                
                    alert("Se ha enviado la confirmación de turno al correo.");
                } else {
                    alert("Gracias por usar Mediconnect. ¡Hasta luego!");
                }
            } else {
                alert("Número de horario inválido.");
            }
        } else {
            alert("Número de doctor inválido.");
        }
        
        
    } else {
        console.log("Número de especialidad inválido.");
    }
    reservarTurno();
};

alert("Mediconnect");
registroUsuario();

while (true) {
    const eleccionDeBusqueda = Number(prompt(
        "Elija la opción correcta, según corresponda:\n" +
        "1- Ver Menú completo.\n" +
        "2- Buscar profesional por especialidad.\n" +
        "3- Buscar profesional por nombre.\n" +
        "4- Salir"
    ));

    if (eleccionDeBusqueda === 1) {
        verMenuCompleto();
    } else if (eleccionDeBusqueda === 2) {
        buscarPorEspecialidad();
    } else if (eleccionDeBusqueda === 3) {
        buscarPorNombre();
    } else if (eleccionDeBusqueda === 4) {
        alert("Gracias por usar Mediconnect. ¡Hasta luego!");
        break; // Salir del ciclo principal
    } else {
        alert("Opción inválida. Por favor, elija una de las opciones disponibles.");
    }
}while (true) {
    const eleccionDeBusqueda = Number(prompt(
        "Elija la opción correcta, según corresponda:\n" +
        "1- Ver Menú completo.\n" +
        "2- Buscar profesional por especialidad.\n" +
        "3- Buscar profesional por nombre.\n" +
        "4- Salir"
    ));

    if (eleccionDeBusqueda === 1) {
        verMenuCompleto();
    } else if (eleccionDeBusqueda === 2) {
        buscarPorEspecialidad();
    } else if (eleccionDeBusqueda === 3) {
        buscarPorNombre();
    } else if (eleccionDeBusqueda === 4) {
        alert("Gracias por usar Mediconnect. ¡Hasta luego!");
        break; // Salir del ciclo principal
    } else {
        alert("Opción inválida. Por favor, elija una de las opciones disponibles.");
    }
}
