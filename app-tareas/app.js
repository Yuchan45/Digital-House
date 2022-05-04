const chalk = require('chalk');


function menu(objTareas) {
    switch(process.argv[2]){
        case "listar":
            let arrayTareas = objTareas.leerArchivo(objTareas.archivo);
            objTareas.mostrarTareas(arrayTareas);
            break;

        case undefined:
            console.log(chalk.red("*Atención - Tienes que pasar una acción.\nLas acciones disponibles son: listar\n"));
            break;

        case "crear":
            if (process.argv[3] == undefined) {
                console.log(chalk.red("*Atención - Debes ingresar el nombre de la nueva tarea. (ej: node app.js crear 'Nueva tarea')\n"));
                break;
            }
            // Ver como hacer para poder recibir todos los argumentos siguientes al 3 como 1 solo argumento.
            let nuevaTarea = {
                titulo: process.argv[3],
                estado: "Pendiente"
            }
            objTareas.guardarTarea(nuevaTarea);
            console.log(chalk.green("*Se ha creado la tarea '" + nuevaTarea.titulo + "' exitosamente!\n"));
            break;

        case "filtrar":
            if (process.argv[3] == undefined) {
                console.log(chalk.red("*Atención - Debes ingresar el estado por el que deseas filtrar. (ej: node app.js filtrar 'Pendiente')\n"));
                break;
            }
            let estado = process.argv[3];
            objTareas.filtrarPorEstado(estado);
            break;

        default:
            console.log(chalk.red("*No entiendo qué quieres hacer.\nLas acciones disponibles son: listar, crear y filtrar.\n"));
    } 

}



function main(){
    const objTareas = require('./tareas');
    menu(objTareas);
}

main();