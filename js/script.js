const imagenes  = [];
const btnIzquierda = document.getElementById("btnIzquierda");
const btnDerecha = document.getElementById("btnDerecha");
const btnReproductor = document.getElementById("reproducir");
const btnPausar = document.getElementById("pausar");
let reproductor = null;
let posicion = 0;

for(let i = 0; i < 6; i++){
    imagenes[i] = `img/universo/imagen${i+1}.jpg`;
}

document.imagen.src = imagenes[0];


btnDerecha.addEventListener("click", siguienteImagen);
btnIzquierda.addEventListener("click", anteriorImagen);
btnReproductor.addEventListener("click", reproducir);
btnPausar.addEventListener("click", pausar);

function siguienteImagen(){

    posicion++;
    if(posicion > imagenes.length -1){
        posicion = 0;
    }
    
    document.imagen.src = imagenes[posicion];
}

function anteriorImagen(){

    posicion--;
    if(posicion < 0){
        posicion = imagenes.length -1;
    }

    document.imagen.src = imagenes[posicion];
}

function reproducir(){

    reproductor = setInterval(siguienteImagen, 2000);
    btnPausar.style.display = "inline";
    btnReproductor.style.display = "none";
    btnDerecha.setAttribute("disabled", "");
    btnIzquierda.setAttribute("disabled", "");
}

function pausar(){

    clearInterval(reproductor);
    btnPausar.style.display = "none";
    btnReproductor.style.display = "inline";
    btnDerecha.removeAttribute("disabled", "");
    btnIzquierda.removeAttribute("disabled", "");
}
