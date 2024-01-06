let opcionValida = false;

// Acceso del usuario (Registro o inicio)
const registroUsuario = () => {
    while (!opcionValida) {
        alert("¡Bienvenido a Mediconnect! La plataforma donde encontrarás a los mejores doctores y cuidaremos de tu salud juntos");

        const ingresoUsuario = Number(prompt("Por favor, marque lo que corresponda:\n1 - Estoy registrado\n2 - Quiero registrarme"));

        if (ingresoUsuario === 1) {
            prompt("Ingrese con su Dirección de correo electronico");
            break;
        } else if (ingresoUsuario === 2) {
            const nombreUsuario = prompt("Ingrese su nombre completo");
            const correoElectronico = prompt("Ingrese su dirección de correo electrónico para registrarse en nuestro sistema");
            const claveUsuario = prompt("Ingrese una contraseña")
            alert(`¡Registro exitoso! Gracias por registrarte con el correo: ${correoElectronico}`);
            break;
        } else {
            alert("Opción inválida. Por favor, seleccione '1' si está registrado o '2' si quiere registrarse.");
        }
    }
};

// Elección del profesional
const elegirEspecialidad = () => {
    let especialidadElegida = Number(prompt("Por favor, indique la especialidad con la cual desee atenderse:\n" +
        "1-Psiquiatría\n" +
        "2-Medicina familiar\n" +
        "3-Cardiología\n" +
        "4-Dermatología\n" +
        "5-Endocrinología\n"
    ));

    // Inicio del caso 1: Psiquiatria
    switch (especialidadElegida) {
        case 1:
            alert("Profesionales de Psiquiatría disponibles:\n" +
                "1. Dra. Blanca Paez\n" +
                "   Horarios: 10:00, 11:00, 12:00, 13:00\n" +
                "   Arancel: $10.000\n" +
                "2. Dr. Leonardo Morales\n" +
                "   Horarios: 11:00, 12:00, 13:00, 14:00\n" +
                "   Arancel: $12.000"
            );

            let psiquiatriaProfesional = Number(prompt("Por favor, elija un profesional para Psiquiatría:\n" +
                "1- Dra. Blanca Paez\n" +
                "2- Dr. Leonardo Morales\n"
            ));

            let horarioElegidoPsiquiatria;

            switch (psiquiatriaProfesional) {
                case 1:
                    horarioElegidoPsiquiatria = Number(prompt(`Por favor, elija un horario para Dra. Blanca Paez:\n` +
                        "1- 10:00\n2- 11:00\n3- 12:00\n4- 13:00"
                    ));

                    if (horarioElegidoPsiquiatria >= 1 && horarioElegidoPsiquiatria <= 4) {
                        let horaSeleccionada = ["10:00", "11:00", "12:00", "13:00"][horarioElegidoPsiquiatria - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con la Dra. Blanca Paez. La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                case 2:
                    horarioElegidoPsiquiatria = Number(prompt(`Por favor, elija un horario para Dr. Leonardo Morales:\n` +
                        "1- 11:00\n2- 12:00\n3- 13:00\n4- 14:00"
                    ));

                    if (horarioElegidoPsiquiatria >= 1 && horarioElegidoPsiquiatria <= 4) {
                        let horaSeleccionada = ["11:00", "12:00", "13:00", "14:00"][horarioElegidoPsiquiatria - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con el Dr. Leonardo Morales.La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                default:
                    alert("Opción no válida para profesionales de Psiquiatría.");
                    break;
            }
            break;
        // Fin del caso 1: Psiquiatría

        //   Incio del caso 2: Medicina familiar
        case 2:
            alert("Profesionales de Medicina familiar disponibles:\n" +
                "1. Dra. Juliana García\n" +
                "   Horarios: 08:00, 10:00, 13:00\n" +
                "   Arancel: $6.000\n" +
                "2. Dr. Santiago Martínez\n" +
                "   Horarios: 09:30, 11:30, 14:30\n" +
                "   Arancel: $6.500"
            );

            let medicinaFamiliarProfesional = Number(prompt("Por favor, elija un profesional para Medicina familiar:\n" +
                "1- Dra. Juliana García\n" +
                "2- Dr. Santiago Martínez\n"
            ));

            let horarioElegidoMedicinaFamiliar;

            switch (medicinaFamiliarProfesional) {
                case 1:
                    horarioElegidoMedicinaFamiliar = Number(prompt(`Por favor, elija un horario para Dra. Juliana García:\n` +
                        "1- 08:00\n2- 10:00\n3- 13:00"
                    ));

                    if (horarioElegidoMedicinaFamiliar >= 1 && horarioElegidoMedicinaFamiliar <= 3) {
                        let horaSeleccionada = ["08:00", "10:00", "13:00"][horarioElegidoMedicinaFamiliar - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con la Dra. Juliana García. La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                case 2:
                    horarioElegidoMedicinaFamiliar = Number(prompt(`Por favor, elija un horario para Dr. Santiago Martínez:\n` +
                        "1- 09:30\n2- 11:30\n3- 14:30"
                    ));

                    if (horarioElegidoMedicinaFamiliar >= 1 && horarioElegidoMedicinaFamiliar <= 3) {
                        let horaSeleccionada = ["09:30", "11:30", "14:30"][horarioElegidoMedicinaFamiliar - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con el Dr. Santiago Martínez. La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                default:
                    alert("Opción no válida para profesionales de Medicina familiar.");
                    break;
            }
            break;
        // Fin del caso 2: Medicina familiar

        // Incio del caso 3: Cardiologia
        case 3:
            alert("Profesionales de Cardiología disponibles:\n" +
                "1. Dra. Camila Rojas\n" +
                "   Horarios: 10:00, 12:00, 15:00\n" +
                "   Arancel: $5.000\n" +
                "2. Dr. Mateo Guzmán\n" +
                "   Horarios: 08:30, 11:30, 13:30\n" +
                "   Arancel: $7.800"
            );

            let cardiologiaProfesional = Number(prompt("Por favor, elija un profesional para Cardiología:\n" +
                "1- Dra. Camila Rojas\n" +
                "2- Dr. Mateo Guzmán\n"
            ));

            let horarioElegidoCardiologia;

            switch (cardiologiaProfesional) {
                case 1:
                    horarioElegidoCardiologia = Number(prompt(`Por favor, elija un horario para Dra. Camila Rojas:\n` +
                        "1- 10:00\n2- 12:00\n3- 15:00"
                    ));

                    if (horarioElegidoCardiologia >= 1 && horarioElegidoCardiologia <= 3) {
                        let horaSeleccionada = ["10:00", "12:00", "15:00"][horarioElegidoCardiologia - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con la Dra. Camila Rojas.La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                case 2:
                    horarioElegidoCardiologia = Number(prompt(`Por favor, elija un horario para Dr. Mateo Guzmán:\n` +
                        "1- 08:30\n2- 11:30\n3- 13:30"
                    ));

                    if (horarioElegidoCardiologia >= 1 && horarioElegidoCardiologia <= 3) {
                        let horaSeleccionada = ["08:30", "11:30", "13:30"][horarioElegidoCardiologia - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con el Dr. Mateo Guzmán.La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                default:
                    alert("Opción no válida para profesionales de Cardiología.");
                    break;
            }
            break;
        // Fin del caso 3: Cardiología

        // Incio del caso 4: Dermatologia
        case 4:
            alert("Profesionales de Dermatología disponibles:\n" +
                "1. Dra. Isabella Ríos\n" +
                "   Horarios: 11:00, 13:00, 16:00\n" +
                "   Arancel: $8.000\n" +
                "2. Dr. Martín Díaz\n" +
                "   Horarios: 09:00, 12:00, 14:00\n" +
                "   Arancel: $6.700"
            );

            let dermatologiaProfesional = Number(prompt("Por favor, elija un profesional para Dermatología:\n" +
                "1- Dra. Isabella Ríos\n" +
                "2- Dr. Martín Díaz\n"
            ));

            let horarioElegidoDermatologia;

            switch (dermatologiaProfesional) {
                case 1:
                    horarioElegidoDermatologia = Number(prompt(`Por favor, elija un horario para Dra. Isabella Ríos:\n` +
                        "1- 11:00\n2- 13:00\n3- 16:00"
                    ));

                    if (horarioElegidoDermatologia >= 1 && horarioElegidoDermatologia <= 3) {
                        let horaSeleccionada = ["11:00", "13:00", "16:00"][horarioElegidoDermatologia - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con la Dra. Isabella Ríos. La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                case 2:
                    horarioElegidoDermatologia = Number(prompt(`Por favor, elija un horario para Dr. Martín Díaz:\n` +
                        "1- 09:00\n2- 12:00\n3- 14:00"
                    ));

                    if (horarioElegidoDermatologia >= 1 && horarioElegidoDermatologia <= 3) {
                        let horaSeleccionada = ["09:00", "12:00", "14:00"][horarioElegidoDermatologia - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con el Dr. Martín Díaz. La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                default:
                    alert("Opción no válida para profesionales de Dermatología.");
                    break;
            }
            break;
        // Fin del caso 4: Dermatología

        //  Inicio del caso 5: Endocrinología
        case 5:
            alert("Profesionales de Endocrinología disponibles:\n" +
                "1. Dr. Benjamín Ortíz\n" +
                "   Horarios: 08:00, 10:00, 13:00\n" +
                "   Arancel: $9.000\n" +
                "2. Dra. Luciana Álvarez\n" +
                "   Horarios: 09:30, 11:30, 15:30\n" +
                "   Arancel: $8.400"
            );

            let endocrinologiaProfesional = Number(prompt("Por favor, elija un profesional para Endocrinología:\n" +
                "1- Dr. Benjamín Ortíz\n" +
                "2- Dra. Luciana Álvarez\n"
            ));

            let horarioElegidoEndocrinologia;

            switch (endocrinologiaProfesional) {
                case 1:
                    horarioElegidoEndocrinologia = Number(prompt(`Por favor, elija un horario para Dr. Benjamín Ortíz:\n` +
                        "1- 08:00\n2- 10:00\n3- 13:00"
                    ));

                    if (horarioElegidoEndocrinologia >= 1 && horarioElegidoEndocrinologia <= 3) {
                        let horaSeleccionada = ["08:00", "10:00", "13:00"][horarioElegidoEndocrinologia - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con el Dr. Benjamín Ortíz. La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                case 2:
                    horarioElegidoEndocrinologia = Number(prompt(`Por favor, elija un horario para Dra. Luciana Álvarez:\n` +
                        "1- 09:30\n2- 11:30\n3- 15:30"
                    ));

                    if (horarioElegidoEndocrinologia >= 1 && horarioElegidoEndocrinologia <= 3) {
                        let horaSeleccionada = ["09:30", "11:30", "15:30"][horarioElegidoEndocrinologia - 1];
                        alert(`Ha elegido el turno de las ${horaSeleccionada} con la Dra. Luciana Álvarez. La información ha sido enviada a su correo`);
                    } else {
                        alert("Opción de horario no válida.");
                    }
                    break;

                default:
                    alert("Opción no válida para profesionales de Endocrinología.");
                    break;
            }
            break;
        // Fin del caso 5: Endocrinología

        default:
            alert("Opción no válida para especialidad.");
            break;
    }
};


registroUsuario();
elegirEspecialidad();
