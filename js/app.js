var canvas = document.getElementById('fondo'); // busqueda de archivo y lo guarda en la variable 
var lapiz = canvas.getContext('2d');

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,
    cargaOk : false
};

var vaca = {
    url: './imagenes/vaca.png',
    imagen: Image,
    cargaOk : false
};

var cerdo = {
    url: './imagenes/cerdo.png',
    imagen :Image,
    cargaOk : false
};

var cuchillo = {
    url: './imagenes/cuchillo.png',
    imagen : Image,
    cargaOk: false
};

fondo.imagen = new Image ();
vaca.imagen = new Image();
cerdo.imagen = new Image();
cuchillo.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;
fondo.imagen.addEventListener("load", function(){
    fondo.cargaOk = true;
    dibujar();
});
vaca.imagen.addEventListener("load",function(){
     vaca.cargaOk = true;
    dibujar();
});
cerdo.imagen.addEventListener("load",function(){
     cerdo.cargaOk = true;
    dibujar();
});
cuchillo.imagen.addEventListener("load",function(){
    cuchillo.cargaOk = true;
    dibujar();
});
function dibujar(){
    if (fondo.cargaOk== true) {
    lapiz.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOk== true) {
    lapiz.drawImage(vaca.imagen,150,100);
    }
    if (cerdo.cargaOk== true) {
    lapiz.drawImage(cerdo.imagen,200,200);
    }
    if(cuchillo.cargaOk== true) {
    lapiz.drawImage(cuchillo.imagen,250,250);
    }
}

