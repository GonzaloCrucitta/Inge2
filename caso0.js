/* 
Escenario 0:  Representar como funciona la barrera que corta el paso vehicular en un cruce.
Tenemos el tren , una calle que es mano unica y tenemos una barrera que puede estar levantada
o bajada. Cuando termina de pasar el tren, debería levantarse la barrera
*/

class Barrera {
    constructor(){
        this.estadoBarrera = "levantada";
    }
    subirBarrera(){
        estadoBarrera = "levantada"
    }
    bajarBarrera(){
        estadoBarrera = "bajada"
    }
}

class Sensor {
    constructor(){
        this.barrera = Barrera;
    }
    activar(){
        barrera.bajarBarrera();
    }
    desactivar(){
        barrera.subirBarrera();
    }
}

