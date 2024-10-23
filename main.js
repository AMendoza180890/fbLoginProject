// esta importacion a firebase funciona para poder ejecutar una funcion llamada onAuthStateChange que permite determinar si
// el usuario ya inicio sesion o no o ya se registro.
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {loginCheck} from './app/loginCheck.js';
// esta importacion es importante porque contiene los accesos a la aplicacion en firebase
import {auth} from './app/firebase.js';
// esta importacion es la que llama a singupForm que contiene la logica del inicio de sesion para que funcione la aplicacion
import './app/signupForm.js';
import './app/logout.js';
import './app/signinForm.js';

onAuthStateChanged(auth, async (user) => {
    loginCheck(user);
    //  if (user){
    //     loginCheck(user);
    //  }else{

    //  }
})