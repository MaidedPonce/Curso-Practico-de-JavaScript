function esPar(numero) {
    return numero % 2 === 0 ? true : false;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Mediana gral
const salariosMx = mexico.map(persona => persona.salary);

// Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])


        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}



const salariosMxSorted = salariosMx.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGralMx = medianaSalarios(salariosMxSorted);

// Mediana del top 10%

const spliceStart = (salariosMxSorted.length * 90) / 100;
const spliceCount = salariosMxSorted.length - spliceStart;

const salariosMxTop10 = salariosMxSorted.splice(spliceStart, spliceCount);

const medianaTop10Mx = medianaSalarios(salariosMxTop10);



console.log({
    medianaGralMx,
    medianaTop10Mx
})