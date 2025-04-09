/* 
Escenario 0:  Representar como funciona la barrera que corta el paso vehicular en un cruce.
Tenemos el tren , una calle que es mano unica y tenemos una barrera que puede estar levantada
o bajada. Cuando termina de pasar el tren, debería levantarse la barrera
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
    barrera = new Barrera("levantada");
    sensor = new Sensor(barrera)

    console.log("El tren esta por pasar. La barrera esta: " + barrera.getEstado());
    sensor.activar() ;

    console.log("El tren esta pasando. La barrera esta: " +barrera.getEstado());
    
    sensor.desactivar()
    
    console.log("El tren termino de pasar. La barrera esta: "+barrera.getEstado())

}
main()
