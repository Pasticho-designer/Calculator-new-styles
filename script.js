
const pantalla = document.querySelector('.pantalla')
const botones = document.querySelectorAll('.btn')

botones.forEach( boton => {
   
    boton.addEventListener('click', () =>{

        const botonpresionado = boton.textContent;
        if (boton.id === "equis"){
            
            if(pantalla.textContent == "0"){
                pantalla.textContent = "*";
                return
            }
            else {
                pantalla.textContent += "*";
                return
            }
        }

        

        if (boton.id === "borrar") {
           if (pantalla.textContent.length == 1 || pantalla.textContent == "Error"){
            pantalla.textContent ="0";
            return
           }
           else {
            pantalla.textContent = pantalla.textContent.slice(0,-1)
            return
           }
        }
        
        if (boton.id === "c"){
            pantalla.textContent = "0";
            return
        }
        try {
            if (boton.id === "igual"){
                pantalla.textContent = eval(pantalla.textContent);
                return
        }} 
        catch {
            pantalla.textContent = "Error"
            return
        }
        
        if (pantalla.textContent == "0" || pantalla.textContent == "Error"){
            pantalla.textContent = botonpresionado
        }else {
            pantalla.textContent += botonpresionado;
        }
    })
})