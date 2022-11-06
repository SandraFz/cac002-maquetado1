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
let inputs = document.querySelectorAll(".form-control");
const arr = Array.from(inputs);

console.log("querySelectorAll return this: ");
console.log(arr)
console.log(typeof arr)



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


    if (cantidad.value == ""){
        cantidad.classList.add("is-invalid");
        alert("Ingrese la cantidad");
        return
    }*/

    let i;

    var areInvalid = 0;

    /*if (inputs[i].value == ""){
        alert("Complete todos los campos")
    }*/
    
    
    for (i = 0; i < inputs.length; i++){
        
        if (inputs[i].value == "") {
            
            inputs[i].classList.add("is-invalid");
        }
        areInvalid += i;

    }

    alert("Complete todos los campos")
    

    /*let oneIsInvalid = document.querySelector(".is-invalid")
    console.log("oneIsInvalid")
    console.log(typeof oneIsInvalid)
    console.log()
    if(oneIsInvalid == 0){
        alert("Complete todos los campos")
    }*/

    /**/

   /*function isNotValid(arr){
        return inputs[i].classList > 0;
    }*/

    /*function mensajeError(arr){


      if (arr.some(isNotValid) = true) {
        alert("Complete todos los campos")
      }

        
        
    }*/
    
    

    /*while (arr.some(isNotValid)){
        areInvalid = 0;
        alert("Complete todos los campos")
    }*/
    

    /*for (i = 0; i < inputs.length; i++){
        if (inputs[i].value == "") {
            inputs[i].classList.add("is-invalid");
        }
        areInvalid += i;

        if ()
    }*/

    /*mensajeError();

    function mensajeError() {

        //arr.some(isInvalid)

        const classListI = Array.from(inputs[i].classList)

        function isInvalid(){
            let i;
            return arr[i].value == ""
        }
        if (isInvalid == true) {
            alert("Complete todos los campos");
        }
    }*/


}
console.log(inputs)

function quitarError() {
   
        for (i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("is-invalid")
        }
    }

console.log("quitarError dice: " + quitarError)


//CÁLCULO DEL MONTO TOTAL

function calculoTotal() {

    quitarError();
    validacion();


    console.log("este es el nombre dentro del método: " + nombre)
    let totalBruto = valor * cantidad.value;

    console.log("Esta es el valor dentro del método: " + valor + typeof valor);
    console.log("Esta es la cantidad dentro del método: " + cantidad + typeof cantidad);
    console.log("Esta es el totalBruto dentro del método: " + totalBruto + typeof totalBruto);

    let categoria = document.getElementById("categoria").value;
    let totalPorCateg;

    switch (categoria) {

        case "estudiante":

            totalPorCateg = totalBruto - ((estudianteDesc / 100) * totalBruto)
            console.log("estudiantes / 100 " + (totalBruto - ((estudianteDesc / 100) * totalBruto)))
            console.log("Este es el total Bruto de estudiante: " + totalBruto);
            console.log("totalPorCateg :" + totalPorCateg)
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



//ENVÍO EL VALOR AL INPUT "TOTAL A PAGAR"

/*function mostrarTotal() {

    let $total = calculoTotal();
    let totalInput = document.getElementById("total");
    totalInput.value = "Total a pagar: $" + totalPorCateg;



    console.log("El $total es: " + $total);
    console.log("El totalInput es: " + totalInput)
    console.log(totalInput + $total)
}*/

resumen.addEventListener('click', calculoTotal);
