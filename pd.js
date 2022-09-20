const precio = document.getElementById('precio'); 
const descuento = document.getElementById('descuento'); 
const precioP = document.getElementById('precio-p'); 
const descuentoP = document.getElementById('descuento-p'); 

const button = document.getElementById('calcular');


button.addEventListener('click', function(){
    var obtenerPrecio = precio.value;
    //console.log(obtenerPrecio);
    var obtenerDescuento = descuento.value;
    //console.log(obtenerDescuento);

    if(!obtenerPrecio || !obtenerDescuento){
        precioP.innerHTML = "No hay valores para procesar";
    }else{
        if(obtenerDescuento > 100){
            precioP.innerHTML = "El descuento no puede ser mayor a 100!";
        }else{
            var precioDescuento =( obtenerPrecio * (100 - obtenerDescuento)) / 100;
            //console.log(precioDescuento);

            precioP.innerHTML = `Precio de Producto $${obtenerPrecio}`;
            descuentoP.innerHTML = `Precio Final $${precioDescuento}`;
        };
    };
});


// CUPONERA

var cupones = [
    {
        cupon: 'luis',
        valor: 30
    },
    {
        cupon: 'platzi',
        valor: 50
    },
    {
        cupon: 'hola',
        valor: 10
    },
];

const precioq = document.getElementById('precio-q'); 
const descuentoq = document.getElementById('descuento-q'); 
const precioPq = document.getElementById('precio-pq'); 
const cuponPq = document.getElementById('descuento-pq'); 

const buttonq = document.getElementById('calcular-q');

buttonq.addEventListener('click', function(){
    var precioProd = precioq.value;
    var cupon = descuentoq.value;
    var descuento = 0;

    //console.log(cupon);
    if(!precioProd || cupon == ''){
        precioPq.innerHTML = "No hay valores a evaluar";
    }else{
        cupones.forEach(element => {
            if(cupon == element.cupon){
                descuento = element.valor;
            };
        });

        if(descuento == 0){
            precioPq.innerHTML = "El cupon no existe";
        }else{
            var precioDescuentoQ = (precioProd * (100 - descuento)) / 100;

            precioPq.innerHTML = `Precio de Producto $${precioProd}`;
            cuponPq.innerHTML = `Precio Final $${precioDescuentoQ}`;
        }

    };
});