function dividir(a, b){
    //b==0 ? "No se puede dividir por cero" : a/b;
    if (b==0) return "No se puede dividir por cero";
    return a/b;
}

module.exports = dividir;
