console.log(salarios);


// Analisis para Juanita

//Esta funcion busca a la persona dentro del objeto gral Salarios
function encontarPersona(personaBusqueda){
    return salarios.find(persona => persona.name == personaBusqueda);
};

//Aqui en base a la busqueda de la persona obtenemos sus salario y su promedio de salario
function medianaPorPersona(nombre){
    var trabajos = encontarPersona(nombre).trabajos;

    //console.log(trabajos);

    const salarios =  trabajos.map(function(elemento){
        return elemento.salario;
    });

    const medianaSalario = PlatziMath.calcularMediana(salarios);

    return medianaSalario;
};


function proyeccionPorPersona(nombre){
    var trabajos = encontarPersona(nombre).trabajos;

    let porcentajesCrecimiento = [];

    for(let i=1;i<trabajos.length;i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i-1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcetajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcetajeCrecimiento); 
    };

    const medianaCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaCrecimiento;
    const nvoSalario = ultimoSalario + aumento;

    return nvoSalario;

};


//Analisis Empresarial
const empresas = {};

for(persona of salarios){
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    };
};

console.log({empresas});

//Mediana de salarios de una empresa por year
function medianaEmpresaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn('La Empresa no existe!');
    }else if(!empresas[nombre][year]){
        console.warn('La empresa no tiene salarios registrados ese year!');
    }else{
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    };
};


function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn('No existe esta empresa en los registros!');
    }else{
        const yearsEmpresa = Object.keys(empresas[nombre]);
        const listaMedianaYears = yearsEmpresa.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });

        let porcentajesCrecimiento = [];

        for(let i=1;i<listaMedianaYears.length;i++){
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i-1];
            const crecimiento = salarioActual - salarioPasado;
            const porcetajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcetajeCrecimiento); 
        };

        const medianaCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimoMediana * medianaCrecimiento;
        const nvoMediana = ultimoMediana + aumento;

        return nvoMediana;

        //console.log({listaMedianaYears});
    };
};


//Analisis General

function medianaGral(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    console.log({listaMedianas});

    const mediana = PlatziMath.calcularMediana(listaMedianas);
    console.log(mediana);

};


function medianaTopTen(){
    const listaDeMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const medianasOrdenadas = PlatziMath.ordenarLista(listaDeMedianas);

    console.log({listaDeMedianas, medianasOrdenadas})

};