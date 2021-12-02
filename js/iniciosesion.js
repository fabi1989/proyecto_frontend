function validar(iniciosesion) {
  if (/^\w+[a-z]i([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
    alert("la dirección de email" + valor + "es correcta.");
  } else {
    alert("la dirección de email es incorrecta");
  }

  if (iniciosesion.contraseña.value.trim().length == 0) {
    alert("Contraseña obligatoria");
    return false;
  }

}