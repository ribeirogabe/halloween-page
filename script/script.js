var closeLogin = document.querySelector(".close-login-screen")

var loginScreen = document.querySelector(".login-screen")

var userIconLogin = document.querySelector(".user-icon")

closeLogin.addEventListener('click', closeLoginScreen)
userIconLogin.addEventListener('click', openLoginScreen)


function openLoginScreen(){
    loginScreen.style.display= "flex"
}

function closeLoginScreen(){

    if(loginScreen.style.display = "flex"){
        loginScreen.style.display= "none"
    }
}
