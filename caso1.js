/*
Escenario 1: Por algún error la barrera quedó baja. (No hay que modelar esto, simplemente
tener el estado inicial asi). El tren llega, se detecta su presencia pero como la barrera
ya esta baja no tiene que volver a bajar y cuando el tren se retira, la barrera se levanta
y vuelve a su estado estable.
*/

class barrera {
    constructor(){
        this.estadoBarrera = "bajada";
    }
    subirBarrera(){
        estadoBarrera = "levantada"
    }
    bajarBarrera(){
        estadoBarrera = "bajada"
    }
}