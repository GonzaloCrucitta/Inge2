/*
Escenario 1: Por algún error la barrera quedó baja. (No hay que modelar esto, simplemente
tener el estado inicial asi). El tren llega, se detecta su presencia pero como la barrera
ya esta baja no tiene que volver a bajar y cuando el tren se retira, la barrera se levanta
y vuelve a su estado estable.
*/

class Barrera {
    constructor(estado){
        this.estadoBarrera = estado;
    }
    getEstado(){
        return this.estadoBarrera;
    }
    subirBarrera(){
        if(this.estadoBarrera !== "levantada") {
            console.log("Subiendo la barrera...");
            this.estadoBarrera = "levantada";
        }
    }
    bajarBarrera(){
        if(this.estadoBarrera !== "baja") {
            console.log("Bajando la barrera...");
            this.estadoBarrera = "baja";
        }
    }
}

class Sensor {
    constructor(barrera){
        this.barrera = barrera
    }
    activar(){
        this.barrera.bajarBarrera();
    }
    desactivar(){
        this.barrera.subirBarrera();
    }
}

function main(){
    barrera = new Barrera("baja");  // la barrera ya está baja por error
    sensor = new Sensor(barrera)

    console.log("El tren está por pasar. La barrera está: " + barrera.getEstado());
    
    sensor.activar();

    console.log("El tren está pasando. La barrera está: " + barrera.getEstado());

    sensor.desactivar();

    console.log("El tren terminó de pasar. La barrera está: " + barrera.getEstado());
}

main();
