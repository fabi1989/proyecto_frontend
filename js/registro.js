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

  return true;

}