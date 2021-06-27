const boton = document.getElementById("btnMarcas");

boton.addEventListener("click", getMarcas);

function getMarcas(){

  const xhr = new XMLHttpRequest(); //objeto ajax

  //manejador del evento
  xhr.onreadystatechange = () =>{
    if(xhr.readyState == 4){
      if(xhr.status==200){
        let data = JSON.parse(xhr.responseText);
        console.log(data);
      }
    }
  }

  xhr.open("GET", "marcas.json");
  xhr.send();

}

