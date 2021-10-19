//1.Escriba un programa que pida al usuario ingresar la longitud de la línea y muestre de uno en uno lo siguiente
function print (num){
    const icon= "+"
    let resultado= ""
    for (let i=0; i<num; i++){
      resultado=resultado+icon
    }
    return resultado
  } 
  console.log (print(5));

  //2.Escriba un programa que pida al usuario ingresar la longitud de la línea y dos caracteres; y muestre de uno en uno lo siguiente:
  let print2=(longitud)=>{
    const caracer1="+";
    const caracter2="-";
    let resultado="";
    for (let i=0; i<longitud; i++){
        resultado=resultado+caracter2+caracer1
      }
      return resultado
    } 
    console.log (print2(6));

    //3.Escriba un programa que pida al usuario ingresar la altura y el ancho de un rectángulo y lo dibuje utilizando asteriscos:
    let print3=(ancho,alto)=>{
      const icon= "+"
      let resultado= ""
      
      for (let i=0; i<alto; i++){
        for (let j=0; j<ancho; j++){
          resultado=resultado+icon
        }
        console.log(resultado)
        resultado=""
      }
          
    } 
  print3(6,3);
//4.Escriba un programa que dibuje el triángulo del tamaño indicado por el usuario de acuerdo al ejemplo:
//1. definir un contador
//contar los espacios vacios que hay. Cada linea tiene exactamente el valor de num, pero en cada linea restamos 1 asterisco
let prinTriangulo=(num)=>{
  const icon= "+"
  let resultado= ""
  
  for (let i=0; i<num; i++){
      resultado=resultado+icon
    
    c
  }
      
} 
prinTriangulo(6);