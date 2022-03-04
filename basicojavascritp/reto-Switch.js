

piedra();

function piedra() {
    var min = 1;
    var max = 3;
    var cpu = Math.floor(Math.random()*(max-min+1)+min);
    console.log(cpu);
    piedra = 2;
    papel = 3;
    tijera = 1;
    switch (cpu) {
        case piedra:
            console.log("empate");
            break;
        case papel:
            console.log("Perdiste Gana Papel");
            break;
        case tijera:
            console.log("Ganaste pidra rompe tiejras");
            break;
    }    
}

function papel() {
    var min = 1;
    var max = 3;
    var cpu = Math.floor(Math.random()*(max-min+1)+min);
    console.log(cpu);
    piedra = 1;
    papel = 2;
    tijera = 3;
    switch (cpu) {
        case piedra:
            console.log("Ganaste; Papel cubre ppiedra");
            break;
        case papel:
            console.log("Empate");
            break;
        case tijera:
            console.log("Perdiste tijeras corta papel");
            break;
    }    
}

function tijera() {
    var min = 1;
    var max = 3;
    var cpu = Math.floor(Math.random()*(max-min+1)+min);
    console.log(cpu);
    piedra = 3;
    papel = 1;
    tijera = 2;
    switch (cpu) {
        case piedra:
            console.log("Perdiste piedra rompe tijeras");
            break;
        case papel:
            console.log("Ganaste; Tijeras corta papel");
            break;
        case tijera:
            console.log("Empate");
            break;
    }    
}
