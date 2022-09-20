
function opCuadrado(lado){
    return {
        perimetro: lado * 4,
        area: lado * lado
    };
};


function opTriangulo(ladoA, ladoB, base, altura){
    return{
        perimetro: ladoA + ladoB + base,
        area: (base * altura) / 2,
    };
};


function opCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2); //pos recibe el n y la potencia a evaluar

    return {
        circunferencia: diametro * Math.PI.toFixed(5), //Fixed limita los decimales
        area: radioAlCuadrado * Math.PI.toFixed(5)
    };
};


function opTrianguloAltura(lados, base){
    if(lados == base){
        console.warn("No es un triangulo isoceles!");
    };

    return { altura: Math.sqrt((Math.pow(lados,2))-((Math.pow(base,2)/4)))};
};

function opTrianguloEscaleno(ladoA, ladoB, ladoC){
    if(ladoA == ladoB && ((ladoA + ladoB)/2) == ladoC){
        console.warn("No es un triangulo escaleno!");
    }else{
        const semiP = (ladoA +  ladoB + ladoC)/2; //SemiPerimetro
        return {
        altura: (2/ladoA) * Math.sqrt(semiP * (semiP - ladoA) * (semiP - ladoB) * (semiP - ladoC));
    };
    };
};