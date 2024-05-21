// Esta función valida todos los campos del formulario
// Si alguno no cumple con los requisitos, se aborta
// con return. Caso contrario, al final se realiza
// efectivamente el envio de los datos.
function validarEnviar() {
    const errorNombre = document.getElementById('errorNombre');
    const errorApellido = document.getElementById('errorApellido');
    const errorDNI = document.getElementById('errorDNI');
    const errorEmail = document.getElementById('errorEmail');
    const errorServicio = document.getElementById('errorServicio');
    const errorObraSocial = document.getElementById('errorObraSocial');
    const errorFecha = document.getElementById('errorFecha');
    const errorTurno = document.getElementById('errorTurno');

    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        errorNombre.innerHTML = '<span>Debe escribir su nombre</span>';
        document.fvalida.nombre.focus();
        document.fvalida.nombre.style.border = '2px solid red';
        return 0;
    }
    else {
        errorNombre.innerHTML = '';
        document.fvalida.nombre.style.border = 'none';
    }


    //valido el apellido
    if (document.fvalida.apellido.value.length == 0) {
        errorApellido.innerHTML = '<span>Debe escribir su apellido</span>';
        document.fvalida.apellido.focus();
        document.fvalida.apellido.style.border = '2px solid red';
        return 0;
    }
    else {
        errorApellido.innerHTML = '';
        document.fvalida.apellido.style.border = 'none';
    }



    //valido el DNI
    const dniInput = document.getElementById('dni');
    const dniValue = dniInput.value;


    // Verificar si el valor contiene exactamente 8 dígitos
    const dniPattern = /^\d{8}$/;
    if (!dniPattern.test(dniValue)) {
        errorDNI.innerHTML = '<span>El DNI debe contener exactamente 8 dígitos numéricos</span>';
        dniInput.focus();
        dniInput.style.border = '2px solid red';
        return 0;
    }
    else {
        errorDNI.innerHTML = '';
        dniInput.style.border = 'none';
    }



    //valido el Email
    var emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(emailValue)) {
        errorEmail.innerHTML = '<span>Debe completar un E-mail válido</span>';
        emailInput.focus();
        emailInput.style.border = '2px solid red';
        return 0;
    }
    else {
        errorEmail.innerHTML = '';
        emailInput.style.border = 'none';
    }



    //valida la eleccion del servicio
    if (document.fvalida.servicio.selectedIndex == 0) {
        errorServicio.innerHTML = '<span>Debe seleccionar el servicio que desee tomar</span>';
        document.fvalida.servicio.style.border = '2px solid red';
        return 0;
    }
    else {
        errorServicio.innerHTML = '';
        document.fvalida.servicio.style.border = 'none';
    }



    //valida la eleccion de la Obra social
    if (document.fvalida.obra_social.selectedIndex == 0) {
        errorObraSocial.innerHTML = '<span>Debe seleccionar su obra social</span>';
        document.fvalida.obra_social.style.border = '2px solid red';
        return 0;
    }
    else {
        errorObraSocial.innerHTML = '';
        document.fvalida.obra_social.style.border = 'none';
    }


    //valida la eleccion de la fecha
    const dateInput = document.getElementById('fecha');
    if (!dateInput.value) {
        errorFecha.innerHTML = '<span>Debe seleccionar la fecha de su turno</span>';
        dateInput.focus();
        dateInput.style.border = '2px solid red';
        return 0;
    }
    else {
        errorFecha.innerHTML = '';
        dateInput.style.border = 'none';
    }


    //valida la eleccion del turno
    const turnoInput = document.getElementById('turno');
    let elementoActivo = document.querySelector('input[name="turno"]:checked');
    if (elementoActivo) {
        errorTurno.innerHTML = '';
        turnoInput.style.border = 'none';
    } else {
        errorTurno.innerHTML = '<span>Debe seleccionar un horario para el turno</span>';
        turnoInput.style.border = '2px solid red';
        return 0;
    }


    //valida que el tipo de archivo sea imagen
    const imageInput = document.getElementById('ordenMedica');
    const file = imageInput.files[0];

    if (file) {
        const validImageTypes = ['image/jpg', 'image/jpeg', 'image/bmp', 'image/png', 'image/gif'];
        if (!validImageTypes.includes(file.type)) {
            errorOrdenMedica.innerHTML = '<span>Debe subir un archivo de imagen válido (JPG, BMP, PNG, GIF)</span>';
            imageInput.value = '';
            imageInput.style.border = '2px solid red';
            return 0;
        }
        else {
            imageInput.style.border = 'none';
        }
    }

    // //Finalmente, si llegó hasta aqui, se envia el formulario
    const divImagen = document.getElementById('medicoPortada');

    divImagen.innerHTML = `
    <img src="../static/img/Turno.jpg" alt="Imagen de turno" class="FotoTurno">
    <a class="botonForm" href="../index.html"
                        onclick="return true">
                        <i class="fa-solid fa-rotate-left"></i>
                        <span>Volver</span>
                    </a>
`;
    const formulario = document.getElementById('formulario');
    formulario.style.display = 'none';
}


function cargarMedico(seleccionado) {
    if (seleccionado) {
        let ruta;
        let nombre;
        var select = document.getElementById('servicio');

        switch (seleccionado) {
            case 'E1':
                ruta = "../static/img/Ecografista1.jpg";
                nombre = "Mariana Alvarez";
                select.value = "ecografia";
                break;
            case 'E2':
                ruta = "../static/img/Ecografista2.jpg";
                nombre = "Victoria Pietra";
                select.value = "ecografia";
                break;
            case 'E3':
                ruta = "../static/img/Ecografista3.jpg";
                nombre = "Lautaro Fernández";
                select.value = "ecografia";
                break;
            case 'R1':
                ruta = "../static/img/Radiologo1.jpg";
                nombre = "Lucía Galván";
                select.value = "radiologia";
                break;
            case 'R2':
                ruta = "../static/img/Radiologo2.jpg";
                nombre = "Jorge Plaza";
                select.value = "radiologia";
                break;
            case 'R3':
                ruta = "../static/img/Radiologo3.jpg";
                nombre = "Nicolás Galinguer";
                select.value = "radiologia";
                break;
            case 'M1':
                ruta = "../static/img/Mamamografista1.jpg";
                nombre = "Pilar Peralta";
                select.value = "mamografia";
                break;
            case 'M2':
                ruta = "../static/img/Mamamografista2.jpg";
                nombre = "Naiara Da Silva";
                select.value = "mamografia";
                break;
            case 'M3':
                ruta = "../static/img/Mamamografista3.jpg";
                nombre = "Leonardo Galtier";
                select.value = "mamografia";
                break;
            case 'T1':
                ruta = "../static/img/Tomografo1.jpg";
                nombre = "Patricia Herrera";
                select.value = "tomografia";
                break;
            case 'T2':
                ruta = "../static/img/Tomografo2.jpg";
                nombre = "Azul Bambaci";
                select.value = "tomografia";
                break;
            case 'T3':
                ruta = "../static/img/Tomografo3.jpg";
                nombre = "Florencia Dalmazzo";
                select.value = "tomografia";
                break;
        }
        const divImagen = document.getElementById('medicoPortada');

        divImagen.innerHTML = `
    <img src=` + ruta + ` alt="Imagen del médico" class="FotoMedico">
    <h1 class="tituloMedicoForm sedan">` + nombre + `</h1>
`;
    }
}


function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Esta función se ejecuta cuando carga la pagina
window.onload = function () {

    //asigna como fecha minima del calendario la fecha actual
    const dateInput = document.getElementById('fecha');
    const hoy = new Date();

    const year = hoy.getFullYear();
    const month = String(hoy.getMonth() + 1).padStart(2, '0'); // Mes en formato MM
    const day = String(hoy.getDate()).padStart(2, '0'); // Día en formato DD

    const hoyDate = `${year}-${month}-${day}`;
    dateInput.min = hoyDate;

    const seleccionado = obtenerParametroURL('seleccionado');
    cargarMedico(seleccionado);
}

