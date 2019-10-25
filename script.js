
function openMenu(){

    let currentHeight = document.getElementById('burgerMenu')

    if (currentHeight.style.height == '5rem'){

       document.getElementById('burgerMenu').style.height = "100vh"
    }

    else{    
        currentHeight.style.height = '5rem'
    }
}