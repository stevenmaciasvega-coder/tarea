function mostrarColor() {
    const color = document.getElementById("selectColor").value;
    const cuadro = document.getElementById("cuadroColor");

    cuadro.style.backgroundColor = color ? color : "transparent";
}

function mostrarVehiculo() {
    const vehiculo = document.getElementById("selectVehiculo").value;
    const cuadro = document.getElementById("cuadroVehiculo");

    const imagenes = {
        carro: "https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png",
        moto: "https://pngimg.com/uploads/motorcycle/motorcycle_PNG3156.png",
        bicicleta: "https://pngimg.com/uploads/bicycle/bicycle_PNG5374.png"
    };

    if (imagenes[vehiculo]) {
        cuadro.innerHTML = `<img src="${imagenes[vehiculo]}" alt="${vehiculo}">`;
    } else {
        cuadro.innerHTML = "";
    }
}