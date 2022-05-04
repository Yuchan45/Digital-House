let array = [
    {
    "titulo": "Agregado 1",
    "estado": "Terminada"
    },
    {
    "titulo": "Agregado 2",
    "estado": "En progreso"
    }
];

function escribirJSON(array){
    let datosConvertidos = JSON.stringify(array);
    return datosConvertidos;
}

console.log(escribirJSON(array));

/* [
    {
        "titulo": "Repasar JS",
        "estado": "Terminada"
    },
    {
        "titulo": "Armar app de tareas",
        "estado": "En progreso"
    },
    {
        "titulo": "Break",
        "estado": "Pendiente"
    },
    {
        "titulo": "Practicar importar mas modulos",
        "estado": "En progreso"
    },
    {
        "titulo": "Probar cosas con los objetos",
        "estado": "En progreso"
    }
] */