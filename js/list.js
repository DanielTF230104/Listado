function myFunction() {
    let text = "¿Estás seguro de BORRAR?\nPulse ACEPTAR o CANCELAR.";
    if (confirm(text) == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
}