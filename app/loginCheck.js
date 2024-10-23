const loggedOutLink = document.querySelectorAll(".logged-out");
const loggedInLink = document.querySelectorAll(".logged-in");

export const loginCheck = user =>{
    if(user){
        loggedOutLink.forEach(link => link.style.display = 'none');
        loggedInLink.forEach(link => link.style.display = 'block');
    }else{
        loggedOutLink.forEach(link => link.style.display = 'block');
        loggedInLink.forEach(link => link.style.display = 'none');
    }
}