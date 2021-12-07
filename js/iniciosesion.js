function validar(cualquiercosa) {
  // 'input-group'
  console.log({ cualquiercosa })

  const passwd = cualquiercosa.contrasena.value.trim();
  const emailStr = cualquiercosa.email.value.trim();
  const regex = /^\w+[a-z]i([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

  const passwdError = cualquiercosa.contrasena
    .parentNode.querySelector('.input-error')

  if (passwd.length == 0) {
    passwdError.classList.add('input-error--is-active');
  } else {
    passwdError.classList.remove('input-error--is-active');
  }

  if (regex.test(emailStr)) {
    console.log('FUNCIONA');
  } else {
    console.log('NO FUNCIONA');
  }
}
