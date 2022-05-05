/* requerir módulo autos */
let autos = require('./autos');

const concesionaria = {
    autos: autos,

    buscarAuto: function(patente) {
        for (let i=0; i<this.autos.length; i++) {
            if (this.autos[i].patente == patente) return this.autos[i];
        }
        return null;
    },

    venderAuto: function(patente) {
        let auto = this.buscarAuto(patente);
        auto.vendido = true;
        return;
    },

    autosParaLaVenta: function() {
        let arrayAutos = this.autos.filter(function(auto) {
            return auto.vendido == false;
        });
        return arrayAutos; 
    },

    autosNuevos: function() {
        autosAVender = this.autosParaLaVenta();
        let autosNuevosEnVenta = autosAVender.filter(function(auto) {
            return auto.km < 100;
        });
        return autosNuevosEnVenta; 

    },

    listaDeVentas: function() {
        let autosVendidos = this.autos.filter(function(auto) {
            return auto.vendido == true;
        });
        let preciosAutos = autosVendidos.map(function(auto) {
            return auto.precio;
        });
        return preciosAutos;
    },

    totalDeVentas: function() {
        let autosVendidos = this.autos.filter(function(auto) {
            return auto.vendido == true;
        });
        let listaPrecios = autosVendidos.map(function(auto) {
            return auto.precio;
        });
        if (listaPrecios.length == 0) return 0;
        let total = listaPrecios.reduce(function(acum, precio) {
            return acum + precio;
        });
        return total;
    },

    puedeComprar: function(auto, persona) {
        let precioCadaCuota = auto.precio / auto.cuotas;
        return persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > precioCadaCuota;
    },

    autosQuePuedeComprar: function(persona) {
        let autosEnVenta = this.autosParaLaVenta();
        let autosPuedeComprar = autosEnVenta.filter(function(auto) {
            let precioCadaCuota = auto.precio / auto.cuotas;
            return persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > precioCadaCuota;
        });
        return autosPuedeComprar;
    }

};

function main() {
    let persona = {
        nombre: "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000000
    };

    //console.log(concesionaria.autos);
    //console.log(concesionaria.buscarAuto("JJK116"));
    //console.log(concesionaria.autosParaLaVenta());
    //console.log(concesionaria.autosNuevos());
    //console.log(concesionaria.listaDeVentas());
    //console.log(concesionaria.totalDeVentas());
    //console.log(autos[0]);
    //console.log(concesionaria.puedeComprar(autos[0], persona));
    //console.log(concesionaria.autosQuePuedeComprar(persona));

}

main();