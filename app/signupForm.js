// importamos la libreria para poder utilizar el metodo createUserWithEmailAndPassword
// segun nos sugiere la documentacion de firebase en: 
// https://firebase.google.com/docs/auth/web/start?hl=es
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showNotification } from "./notification.js";

let formularioSignUp = document.querySelector("#signup-form")

formularioSignUp.addEventListener('submit', async (e)=>{
    //evita que el comportamiento de la pagina se recargue una vez que se envia el formulario.
    e.preventDefault();

    //obteniendo el elemento formulario podemos obtener el valor de cualquier elemento con [].value
    const email = formularioSignUp["signup-email"].value
    const password = formularioSignUp["signup-password"].value

    // Este es solo un console log para poder ver lo que estamos obteniendo en las variables de email y password
    //console.log(email, password)

    // Necesitamos las propiedades que nos ayuden a enviar la informacion a firebase
    // Eso lo encontramos en la documentacion de firebase
    // https://firebase.google.com/docs/web/setup#available-libraries

    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(credentials);

        // cerrar el modal
        const singupModal = document.querySelector('#signupModal')
        const modalSingup = bootstrap.Modal.getInstance(singupModal)
        modalSingup.hide()

        showNotification("Welcome " + credentials.user.email);

    } catch (error) {
        if (error.code === 'auth/weak-password') {
            showNotification('Password is too weak','error')
        }else if (error.code === 'auth/email-already-in-use') {
            showNotification('Email is already in use', 'error')
        }else if(error.code === 'auth/invalid-email'){
            showNotification('Invalid Email', 'error')
        }else{
            showNotification('something went wrong' + error, 'error')
        }
    }

})