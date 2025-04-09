/*
Escenario 2: El modelo arranca con el tren en el cruce pero la barrera no bajo.
Entonces el tren se retira pero como la barrera estaba alta no tiene que volver a bajar.
(No bajar una barrera que esta baja y no levantar una que ya esta alta)
*/

class Barrera {
    constructor(estado){
        this.estadoBarrera = estado;
    }

    getEstado(){
        return this.estadoBarrera;
    }

    subirBarrera(){
        if (this.estadoBarrera !== "levantada") {
            console.log("Subiendo la barrera...");
            this.estadoBarrera = "levantada";
        }
    }

    bajarBarrera(){
        if (this.estadoBarrera !== "baja") {
            console.log("Bajando la barrera...");
            this.estadoBarrera = "baja";
        }
    }
}

class Sensor {
    constructor(barrera){
        this.barrera = barrera;
    }

    activar(){
        this.barrera.bajarBarrera();
    }

    desactivar(){
        this.barrera.subirBarrera();
    }
}

function main(){
    barrera = new Barrera("levantada"); // tren ya en el cruce, pero barrera NO bajó
    sensor = new Sensor(barrera);

    console.log("El tren ya está en el cruce. La barrera está: " + barrera.getEstado());

    // Acá no bajamos la barrera porque la situación ya es una falla inicial

    console.log("El tren se retira del cruce...");
    sensor.desactivar(); // solo se levanta si estuviera baja

    console.log("La barrera está ahora: " + barrera.getEstado());
}

main();
