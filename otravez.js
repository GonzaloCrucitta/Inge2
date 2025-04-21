var Sensor = function(sistemaDeControl){
    this.sistemaDeControl = sistemaDeControl;

    this.activar = function(){
        this.sistemaDeControl.sensorActivado();
    }
    this.desactivar = function(){
        this.sistemaDeControl.sensorDesactivado();
    }

}
var SistemaDeControl = function(Barrera){
    this.barrera = Barrera;
    this.sensorActivado = function(){
        this.barrera.estado.sensorActivado();
    }
    this.sensorDesactivado = function(){
        this.barrera.estado.sensorDesactivado();
    }

}

var EstadoAlta = function(Barrera){
    this.barrera = Barrera;
    this.estado = "Alta"
    this.sensorActivado = function(){
        this.barrera.bajarBarrera();
    }
    this.sensorDesactivado = function(){
        this.barrera.subirBarrera();
    }
    this.obtenerEstado = function(){
        return this.estado;
    }
}

var EstadoBaja = function(Barrera){
    this.barrera = Barrera;
    this.estado = "Baja"
    this.sensorActivado = function(){
        this.barrera.bajarBarrera();
    }
    this.sensorDesactivado = function(){
        this.barrera.subirBarrera();
    }
    this.obtenerEstado = function(){
        return this.estado;
    }
}



var Barrera = function(){
    this.estado = null;
    this.bajarBarrera = function(){
        this.estado = new EstadoBaja(this);
    }
    this.subirBarrera = function(){
        this.estado = new EstadoAlta(this);
    }
    this.obtenerEstado = function(){
        return this.estado.obtenerEstado();
    }
    this.setearEstadoAlta = function(){
        this.estado = new EstadoAlta(this);
    }
    this.setearEstadoBaja = function(){
        this.estado = new EstadoBaja(this);
    }
}

function main(){
    var unaBarrera = new Barrera();
    unaBarrera.setearEstadoAlta();
    var unSistemaDeControl = new SistemaDeControl(unaBarrera);
    var unSensor = new Sensor(unSistemaDeControl)

    ///Escenario Normal : Pasa un Tren, bajamos la barrera
    console.log("\nEscenario Normal\n")
    console.log("Esta por pasar un tren. El estado de la barrera es: " + unaBarrera.obtenerEstado());
    unSensor.activar();
    console.log("El tren esta pasando. El estado de la barrera es:" + unaBarrera.obtenerEstado());
    unSensor.desactivar();
    console.log("El Tren ya paso. El estado de la barrera es: " + unaBarrera.obtenerEstado());

    ///Escenario 1: La barrera quedo baja, entonces no tiene que bajarla
    unaBarrera.setearEstadoBaja();
    console.log("\nEscenario 1: La barrera quedo baja\n")
    console.log("Esta por pasar un tren. El estado de la barrera es: " + unaBarrera.obtenerEstado());
    unSensor.activar();
    console.log("El tren esta pasando. El estado de la barrera es:" + unaBarrera.obtenerEstado());
    unSensor.desactivar();
    console.log("El Tren ya paso. El estado de la barrera es: " + unaBarrera.obtenerEstado());

    ///Escenario 2: El tren esta en el cruce pero la barrera quedo alta.
    unaBarrera.setearEstadoAlta();
    console.log("\nEscenario 1: La barrera quedo baja\n")
    console.log("Esta pasando el tren. El estado de la barrera es: " + unaBarrera.obtenerEstado());
    unSensor.desactivar();
    console.log("El Tren ya paso. El estado de la barrera es: " + unaBarrera.obtenerEstado());

}

main()
