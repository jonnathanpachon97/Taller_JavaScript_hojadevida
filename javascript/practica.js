// ejercicio de colores
function cambiarFondo() {
    if(document.getElementById('fondoazul').checked) {   
        document.body.classList.toggle('azul');
    }   
    else if(document.getElementById('fondoverde').checked) {   
        document.body.classList.toggle('verde');   
    }   
    else if(document.getElementById('fondorojo').checked) {  
        document.body.classList.toggle('rojo');
    }   
    else if (document.getElementById('fondogris').checked) {   
        document.body.classList.toggle('gris');   
    }  
    else {   
        document.getElementById("error").innerHTML   
           = "no tiene seleccionada ninguna opcion";   
    }
}
       
//ejercicio acordeon      
    const bloque    = document.querySelectorAll('.bloque');
    const h2        = document.querySelectorAll('.h2');


    h2.forEach( (cadaH2 , i )=>{
        h2[i].addEventListener('click', ()=>{

            bloque.forEach( (cadaBloque , i )=>{
                bloque[i].classList.remove('activo');
            })
            bloque[i].classList.add('activo');

        })
    })

   
