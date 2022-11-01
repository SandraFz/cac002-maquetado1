//CONSTANTES

let estudianteDesc = document.getElementById("estudiante").innerText;
console.log(estudianteDesc)
let traineeDesc = document.getElementById("trainee").innerText;
console.log(traineeDesc)
let juniorDesc = document.getElementById("junior").innerText;
console.log(juniorDesc)
const valor = Number(document.getElementById("valor").innerText);
console.log(typeof valor)
//VARIABLES

let nombre = document.getElementById("name").innerText;
let lastName = document.getElementById("lastname").innerText;
let cantidad = Number(document.getElementById("cantidad").innerText);
console.log("Cantidad fuera del método: " + cantidad + typeof cantidad)
let resumen = document.getElementById("resumen"); 

//CÁLCULO DEL MONTO TOTAL
  
function calculoTotal(){
    let totalBruto = valor * Number(cantidad);

    console.log("Esta es el valor dentro del método: " + valor + typeof valor);
    console.log("Esta es la cantidad dentro del método: " + cantidad + typeof cantidad);
    console.log("Esta es el totalBruto dentro del método: " + totalBruto + typeof totalBruto);

    let categoria = document.getElementById("categoria").value;
    let totalPorCateg;
    
    switch (categoria){
       
        case "estudiante":
           
            totalPorCateg = totalBruto - ((parseInt(estudianteDesc) / 100) * totalBruto)
            console.log("Este es el total Bruto de estudiante: " + totalBruto);
            break;
    
        case "trainee":
            totalPorCateg = totalBruto - ((parseInt(traineeDesc) / 100) * totalBruto);
            break;
    
        case "junior":
            totalPorCateg = totalBruto - ((parseInt(juniorDesc) / 100) *totalBruto);
            break;

        default:
            totalPorCateg = totalBruto;
            break;
    };

    let totalInput = document.getElementById("total");
    totalInput.innerText = totalPorCateg;
    totalInput.innerHTML = totalPorCateg;
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




