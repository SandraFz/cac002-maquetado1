//CONSTANTES

const estudianteDesc = document.getElementById("estudiante").innerText;
const traineeDesc = document.getElementById("trainee").innerText;
const juniorDesc = document.getElementById("junior").innerText;
const valor = document.getElementById("valor").innerText;
//VARIABLES

let nombre = document.getElementById("name").innerText;
let lastName = document.getElementById("lastname").innerText;
let cantidad = document.getElementById("cantidad").value;
let resumen = document.getElementById("resumen"); 

//CÁLCULO DEL MONTO TOTAL

function calculoTotal(){

    let totalBruto = valor * cantidad;
    let categoria = document.getElementById("categoria").value;
    let totalPorCateg;
    
    switch (categoria){
       
        case "estudiante":
           
            totalPorCateg = totalBruto - ((parseInt(estudianteDesc) / 100) * totalBruto)
            break;
    
        case "trainee":
            totalPorCateg = totalBruto - ((parseInt(traineeDesc) / 100) * totalBruto);
            break;
    
        case "junior":
            totalPorCateg = totalBruto - ((parseInt(juniorDesc) / 100) *totalBruto);
            break;

        default:
            totalPorCateg = valor;
    };
/*
    let totalInput = document.getElementById("total");
    totalInput.value = "Total a pagar: $" + totalPorCateg;
*/

    return totalPorCateg;
}

//ENVÍO EL VALOR AL INPUT "TOTAL A PAGAR"

function mostrarTotal(){

    let $total = calculoTotal();
    let totalInput = document.getElementById("total");
    totalInput.value = "Total a pagar: $" + totalPorCateg;


    
    console.log("El $total es: " + $total);
    console.log("El totalInput es: " + totalInput)
    console.log(totalInput + $total)
}

resumen.addEventListener('click', calculoTotal);




