const codigoColor_field = document.getElementById("codigoColor");
const valor_resistencia = document.getElementById("valor_resistencia");
const precio = document.getElementById("precio");
const marca = document.getElementById("marca");
const submit_btn2 = document.getElementById("submit_btn2");

function actualizar(codigo_color,valor,precioR,marcaR){
    let thing = JSON.stringify({valor_resistencia:valor,precio:precioR,marca:marcaR});
    console.log(thing);
    fetch("http://localhost:3000/actualizar/"+codigo_color , {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: thing
    })
   
    .then(async res =>{
        var response = await res.json();
        console.log("Arriba de response");
        console.log(response);
    })
    .catch(err =>{
        alert("Por favor revise los datos ingresados");
        console.log("arriba del error");
        console.log(err);
    })
    }

submit_btn2.addEventListener("click", ()=>{
    let codigoColor2 = codigoColor_field.value
    let valor = valor_resistencia.value
    let precioR = precio.value
    let marcaR = marca.value
    actualizar(codigoColor2,valor,precioR,marcaR);
});
