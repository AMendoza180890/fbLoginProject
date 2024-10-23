import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js"
//import { showNotification } from "./notification.js";

const signInForm = document.querySelector("#signinModal");

signInForm.addEventListener('submit', async(e)=> {
    e.preventDefault()
    // porque no obtengo los valores y dice que no reconoce el metodo .value?

    const email = signInForm["login-email"].value
    const password = signInForm["login-password"].value

    try{
        const credentials = await signInWithEmailAndPassword(auth,email,password)
        console.log(credentials)
    }catch (error){
        console.log(error)
    }

})

