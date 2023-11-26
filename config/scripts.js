function mostrarAgradecimiento() {
    var numero = document.getElementById("numeroInput").value;

    // Verificar si se ingresó un número
    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
    } else {
      alert("Gracias por ingresar el número " + numero + "!");
      numeroInput.value="";
    }
  }