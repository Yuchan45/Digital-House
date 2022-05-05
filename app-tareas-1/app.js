/******** MODO DE LECTURA SINCRONICO ********/
// let rawdata = fs.readFileSync('./app-tareas/tareas.json', 'utf-8');
// let arrayTareas = JSON.parse(rawdata);
// console.log(arrayTareas);


/******** MODO DE LECTURA ASINCRONICO ********/
// fs.readFile('./app-tareas/tareas.json', (error, data) => {
//     if (error) throw error;
//     console.log("Modo asincrono");
//     let arrayTareas = JSON.parse(data);
//     console.log(arrayTareas);
// });


function main(){
    const objetoTareas = require('./funcionesDeTareas');
    
    let arrayTareas = objetoTareas.leerArchivo();
    objetoTareas.capturarArgumentos(arrayTareas);
}

main();