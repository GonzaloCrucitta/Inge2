class Barrera {
    constructor(estado){
        this.estadoBarrera = estado;
    }
    getEstado(){
        return this.estadoBarrera;
    }
    subirBarrera(){
        this.estadoBarrera = "levantada"
    }
    bajarBarrera(){
        this.estadoBarrera = "baja"
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
    if(barrera.getEstado()=='levantada'){
       sensor.activar() ;
    }
    console.log("El tren esta pasando. La barrera esta: " +barrera.getEstado());
    sensor.desactivar()
    console.log("El tren termino de pasar. La barrera esta: "+barrera.getEstado())

}
main()
