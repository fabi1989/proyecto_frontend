function validar(registro) {
  if (registro.email.value.trim().length == 0) {
    alert("correo obligatorio");
    return false;
  }

  if (registro.contraseña.value.trim().length == 0) {
    alert("contraseña obligatoria");
    return false;
  }

  if (registro.contraseña.value != registro.confirmacion.value) {
    alert("Contraseña no coincide");
    return false;
  }

  if (registro.checked) {
    alert("Elija género es obligatorio");
    return false;
  }

  if (registro.edad.value == "") {
    alert("Elija opcion es obligtorio")
    return false
  }

  if (!registro.terminos.checked) {
    alert("Debe aceptar los terminos")
    return false
  }

  return true;

}