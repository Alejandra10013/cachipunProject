function maquina(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo) + minimo);
    return numero;
}

// VARIABLES
var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["PIEDRA", "PAPEL", "TIJERA"];

var opcionUsuario;
var opcionMaquina = maquina(0, 2);

var rondas = 0;
var marcadorMaquina = 0;
var marcadorUsuario = 0;

rondas = prompt("Ingrese cantidad de rondas a jugar");

while (rondas <= 0) {
    rondas = prompt("Ingrese una cantidad de rondas válida.");
}

for (var i = 1; i <= rondas; i++) {
    alert(`Ronda nro. ${i} de un total de: ${rondas} rondas.`);
    jugada();
}



if (marcadorUsuario > marcadorMaquina) {
    alert(`USUARIO ganó la partida! Marcador final: \nUsuario: [${marcadorUsuario}] \nMaquina: [${marcadorMaquina}]`);
} else if (marcadorUsuario < marcadorMaquina) {
    alert(`MAQUINA ganó la partida! Marcador final: \nUsuario: [${marcadorUsuario}] \nMaquina: [${marcadorMaquina}]`);
} else {
    alert(`EMPATE. Marcador final: \n Usuario: [${marcadorUsuario}] \n Maquina: [${marcadorMaquina}]`);
}

function jugada() {

    opcionUsuario = prompt("¿Qué elegirás?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
    while (opciones >= 3) {
        opciones = prompt("ingrese una opcion valida")
    }


    alert(`Elegiste ${opciones[opcionUsuario]}`);
    alert(`Maquina ha elegido ${opciones[opcionMaquina]}`);
    // alert(`Elegiste ${opciones[opcionUsuario]}`);
    // alert(`Maquina ha elegido ${opciones[opcionMaquina]}`);

    if (opcionUsuario == opciones) {
        if (opcionUsuario == piedra) {
            if (opcionMaquina == piedra) {
                alert("EMPATE");
            } else if (opcionMaquina == papel) {
                marcadorMaquina++;
                alert("HAZ PERDIDO");
            } else if (opcionMaquina == tijera) {
                marcadorUsuario++;
                alert("GANASTE");
            }
        } else if (opcionUsuario == papel) {
            if (opcionMaquina == piedra) {
                marcadorUsuario++;
                alert("GANASTE");
            } else if (opcionMaquina == papel) {
                alert("EMPATE");
            } else if (opcionMaquina == tijera) {
                marcadorMaquina++;
                alert("HAZ PERDIDO");
            }
        } else if (opcionUsuario == tijera) {
            if (opcionMaquina == piedra) {
                marcadorMaquina++;
                alert("HAZ PERDIDO");
            } else if (opcionMaquina == papel) {
                marcadorUsuario++;
                alert("GANASTE");
            } else if (opcionMaquina == tijera) {
                alert("EMPATE");
            }
        } else {
            alert("alerta final");
        }
    }
}