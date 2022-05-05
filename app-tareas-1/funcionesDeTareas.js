const fs = require('fs');
const chalk = require('chalk');

let objetoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function(){
        let rawdata = fs.readFileSync('./tareas/tareas.json');
        let arrayTareas = JSON.parse(rawdata);
        return arrayTareas;
    },
    mostrarTareas: function(array) {
        console.log(chalk.bold("\nListado de tareas\n---------------------"));
        for (let i=0; i<array.length; i++){
            console.log(i+1 + ". " + chalk.bold(array[i].titulo) + " - " + chalk.green.italic(array[i].estado));
        }
        console.log("\n\n");

    },
    capturarArgumentos: function(arrayTareas) {
        switch(process.argv[2]){
            case "listar":
                this.mostrarTareas(arrayTareas);
                break;

            case undefined:
                console.log(chalk.red("Atención - Tienes que pasar una acción.\nLas acciones disponibles son: listar\n"));
                break;

            default:
                console.log(chalk.red("No entiendo qué quieres hacer.\nLas acciones disponibles son: listar\n"));
        } 
    }

}

module.exports = objetoTareas;