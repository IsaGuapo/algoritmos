//guardar datos en localStorage
let user=localStorage.getItem("usuario");
console.log(`Usuario: ${user}`)
let password=localStorage.getItem("password")
console.log(`Contraseña: ${password}`)

//convertirlos a string con stringify para que LocalStorage pueda guardar los datos
localStorage.setItem(
    "users",
    JSON.stringify({
        0:{
            usuario:"Alejandro",
            contraseña:"123456",
        },
        1:{
            usuario:"Pepita",
            contraseña:"654321",
        },
        2:{
            usuario:"Juanita",
            contraseña:"147896",
        },
        3:{
            usuario:"Borja",
            contraseña:"555666",
        },
        4:{
            usuario:"Isa",
            contraseña:"12012",
        },


    })
)



//parsear el string para poder trabajarlo como un objeto.
const usuarios=JSON.parse(localStorage.getItem("users"));
console.log (usuarios[2].contraseña)

//validacion de datos
const validaForm=()=> {

    
}

