function validar(registro) {
  if (registro.email.value.trim().length == 0) {
    alert("Correo obligatorio");
    return false;
  }

  if (registro.contraseña.value.trim().length <= 7) {
    alert("Contraseña debe contener mínimo 8 dígitos");
    return false;
  }

  if (registro.contraseña.value != registro.confirmacion.value) {
    alert("Contraseña no coincide");
    return false;
  }

  if (registro.generomusica.value == "") {
    alert("Selecciona un género");
    return false;
  }

  if (registro.edad.value == "") {
    alert("Rango edad es obligtorio")
    return false;
  }

  if (!registro.terminos.checked) {
    alert("Debe aceptar los terminos")
    return false;
  }

  return true;

}