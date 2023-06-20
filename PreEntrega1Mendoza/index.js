
// let unNumero = 6
// if (unNumero == 5)
// {
//     console.log("el numero es 5");
// }
// else (unNumero == 6)
// {
//     console.log ("casi pero no");
// }

// console.log ("hola world")

let edad = parseInt(prompt ("Ingrese edad")) 
do {

     if (edad > 18) {
          function mostrar(){
          alert("Bienvenido");}
          setTimeout (mostrar, 500)
     }
     else {
          alert ("no puede netrar a esta pagina")
          edad = parseInt(prompt ("Ingrese edad"))
     }
}
while(edad < 18);
