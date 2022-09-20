var arreglo = [9, 9];

var suma = 0;

function sumar(){
    for(var i=0;i<arreglo.length;i++){
        suma = suma + arreglo[i];
    };
};

sumar();
var promedio = suma / arreglo.length;
console.log(promedio);


//Promedio mediante el reduce

function sumaF(valorAcumulado, valorAcual){
    return valorAcumulado + valorAcual;
};

var sumaLista = arreglo.reduce(sumaF);
console.log(sumaLista);


// Lista par o impar

var lista = [10,20,30,40];

//Valida si un arreglo es par o impar en segun su n elementos
function esPar(lista){
    return !(lista.length%2);  //Valida si es par y devuelve True
};

//console.log(esPar(lista));

//Funcion que calcula la mediana
function calcularMediana(lista){
    var validacionPar = esPar(lista);
    var posicion;
    var mediana;

    if(validacionPar){
        posicion = Math.floor(lista.length / 2);
        //console.log(posicion);
        var nvaPos = posicion - 1;
        mediana = (lista[posicion] + lista[nvaPos]) / 2;
        console.log(mediana);

    }else{
        posicion = Math.floor(lista.length / 2);
        //console.log(posicion);
        mediana = lista[posicion];
        console.log(mediana);
    };
};

calcularMediana(lista);

//Ordenar un array
//Ordena un arrgelo con sort
function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nvoValor){

        // if(valorAcumulado > nvoValor){
        //     return 1;
        // }else if(valorAcumulado == nvoValor){
        //     return 0;
        // }else if(valorAcumulado < nvoValor){
        //     return -1;
        // };

        //Todo lo anterior es igual al return siguiente

        return valorAcumulado - nvoValor;
    };

    const listaOrdenada = listaDesordenada.sort(ordenarListaSort);
    return listaOrdenada;
};

listaa = [3,2,1,6,8,3];
console.log(listaa.sort());


//Moda
//Esta funcion ordena un arreglo de arreglos
function ordenarListaBi(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nvoValor){

        return valorAcumulado[1] - nvoValor[1];
    };

    const listaOrdenada = listaDesordenada.sort(ordenarListaSort);
    return listaOrdenada;
};

//Esta funcion crea un objeto de elementos y cuantas veces se repite
function contarRepetidos(lista){
    var obj = {};
    var elemento;

    for(var i=0;i<lista.length;i++){

        elemento = lista[i];

        
        if(obj[elemento]){
            obj[elemento] += 1;
        }else{
            obj[elemento] = 1;
        };
    };

    var listaArray = Object.entries(obj);

    var ordenarArray = ordenarListaBi(listaArray);

    //Una vez ordenada la ultima pos es la moda 
    var moda = listaArray[listaArray.length - 1][0];

    console.log({listaArray, ordenarArray, moda});

};