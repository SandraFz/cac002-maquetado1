//CONSTANTES

const estudianteDesc = 80;
const traineeDesc = 50;
const juniorDesc = 15;
const valor = 200;

//VARIABLES

let nombre = document.getElementById("name");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
//console.log("Cantidad fuera del método: " + cantidad + typeof cantidad)
let resumen = document.getElementById("resumen");
let reset = document.getElementById("reset");
let inputs = document.querySelectorAll(".form-control");
const arr = Array.from(inputs);
//console.log("querySelectorAll return this: ");
//console.log(arr)
//console.log(typeof arr)

//VALIDACIÓN

function validacion() {

    /*if(nombre.value == ""){
        nombre.classList.add("is-invalid");
        alert("Ingrese su nombre");
        return
    }

     if (lastName.value == ""){
        lastName.classList.add("is-invalid");
        alert("Ingrese su apellido");
        return
    } */

    /*const emailValid = email => {return ^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)}*/

    /*if (email.value == ""){
        email.classList.add("is-invalid");
        alert("Ingrese su email");
        return
    }

    if (cantidad.value == "" ){
        cantidad.classList.add("is-invalid");
        alert("Ingrese la cantidad");
        return
    }*/

    /*if (typeof cantidad.value != Number){
        cantidad.classList.add("is-invalid");
        alert("Ingrese correctamente la cantidad");
        return
    }*/

    //REDUCCIÓN DEL CÓDIGO CON UN BUCLE
    //FALTA VALIDAR EL MAIL Y LA CANTIDAD
    
    let i;

    let areInvalid = 0;
    
    for (i = 0; i < inputs.length; i++){
        
        if (inputs[i].value == "") {
            
            inputs[i].classList.add("is-invalid");
            areInvalid +=1
        }
    }

    if(areInvalid > 0){
        alert("Complete todos los campos")
    }

    /*if(typeof parseInt(cantidad) !== Number){
            alert("La cantidad debe ser un número")
            inputs[i].classList.add("is-invalid"); 
        return  
    }

    console.log("Cantidad:")
    console.log(typeof cantidad)*/
}

function quitarError() {
        for (i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("is-invalid");
            total.innerHTML="...";
        }
    }

//CÁLCULO DEL MONTO TOTAL

function calculoTotal() {
    
    quitarError();
    validacion();
    let totalBruto = valor * cantidad.value;

                //console.log("Esta es el valor dentro del método: " + valor + typeof valor);
                //console.log("Esta es la cantidad dentro del método: " + cantidad + typeof cantidad);
                //console.log("Esta es el totalBruto dentro del método: " + totalBruto + typeof totalBruto);

    let categoria = document.getElementById("categoria").value;
    let totalPorCateg;

    switch (categoria) {

        case "estudiante":

            totalPorCateg = totalBruto - ((estudianteDesc / 100) * totalBruto)
                        //console.log("estudiantes / 100 " + (totalBruto - ((estudianteDesc / 100) * totalBruto)))
                        //console.log("Este es el total Bruto de estudiante: " + totalBruto);
                        //console.log("totalPorCateg :" + totalPorCateg)
            break;

        case "trainee":
            totalPorCateg = totalBruto - ((parseInt(traineeDesc) / 100) * totalBruto);
            break;

        case "junior":
            totalPorCateg = totalBruto - ((parseInt(juniorDesc) / 100) * totalBruto);
            break;

       default:
            totalPorCateg = totalBruto;
            break;
    };

    total.innerHTML = totalPorCateg;
}

resumen.addEventListener('click', calculoTotal);
reset.addEventListener('click', quitarError);
