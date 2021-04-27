const form = document.getElementById("myFormId");

function registerValidate() {
  let acumErrores = 0;

  form.classList.remove("is-invalid");

  let inputEmail = document.getElementById("inputEmail");
  let inputPassword = document.getElementById("inputPassword");
  let repeatPassword = document.getElementById("repeatPassword");
  let inputProvince = document.forms["myForm"]["inputProvince"];
  let inputUsername = document.getElementById("inputUsername");
  let gridCheck = document.forms["myForm"]["gridCheck"];

  // validacio mail
  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "El email no cumple el formato";
    acumErrores++;
  } else {
    inputEmail.classList.add("is-valid");
  }
  // validació contrassenya
  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "És un camp obligatori";
    acumErrores++;
  } else if (!validar_password(inputPassword.value)) {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "Format incorrecte! Com a mínim: una majúscola, una minúscola i un número!";
    acumErrores++;
  } else if (validar_password(inputPassword.value)) {
    inputPassword.classList.add("is-valid");
  }
  // validació repetició contrassenya
  if (repeatPassword.value == "") {
    repeatPassword.classList.add("is-invalid");
    document.getElementById("errorRepeatPassword").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (repeatPassword.value != inputPassword.value) {
    repeatPassword.classList.add("is-invalid");
    document.getElementById("errorRepeatPassword").textContent =
      "Les contrassenyes no coincideixen";
    acumErrores++;
  } else {
    repeatPassword.classList.add("is-valid");
  }
  // validació provincia
  if (inputProvince.value == "") {
    inputProvince.classList.add("is-invalid");
    document.getElementById("errorProvince").textContent =
      "La provincia es obligatoria";
    acumErrores++;
  } else {
    inputProvince.classList.add("is-valid");
  }

  // validació usuari
  if (inputUsername.value == "") {
    inputUsername.classList.add("is-invalid");
    document.getElementById("errorInputUser").textContent =
      "És obligatori triar un nom d'usuari!";
    acumErrores++;
  } else {
    inputUsername.classList.add("is-valid");
  }

  //validació checkbox
  if (!gridCheck.checked) {
    gridCheck.classList.add("is-invalid");
    document.getElementById("errorCheck").textContent = "Acepta las bases";
    acumErrores++;
  }

  //boolean comptador
  if (acumErrores > 0) {
    return false;
  } else {
    alert("Ben fet!");
    return true;
  }
}

function loginValidate() {
  let acumErrores = 0;

  form.classList.remove("is-invalid");

  let inputEmail = document.getElementById("inputEmail");
  let inputPassword = document.getElementById("inputPassword");
  let gridCheck = document.forms["myForm"]["gridCheck"];

  // validacio mail
  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "El email no cumple el formato";
    acumErrores++;
  } else {
    inputEmail.classList.add("is-valid");
  }

  // validació contrassenya
  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "És un camp obligatori";
    acumErrores++;
  } else if (!validar_password(inputPassword.value)) {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "Format incorrecte! Com a mínim: una majúscola, una minúscola i un número!";
    acumErrores++;
  } else if (validar_password(inputPassword.value)) {
    inputPassword.classList.add("is-valid");
  }

  //boolean comptador
  if (acumErrores > 0) {
    return false;
  } else {
    alert("Ben fet!");
    return true;
  }
}

function searchValidate() {
  let acumErrores = 0;

  form.classList.remove("is-invalid");

  let inputBuscar = document.getElementById("inputBuscar");

  // validacio búsqueda
  if (inputBuscar.value == "") {
    inputBuscar.classList.add("is-invalid");
    document.getElementById("errorBuscar").textContent =
      "El camp és obligatori";
    acumErrores++;
  } else if (inputBuscar.value.length < 3) {
    inputBuscar.classList.add("is-invalid");
    document.getElementById("errorBuscar").textContent =
      "Per a buscar, afegeix mínim 3 lletres";
    acumErrores++;
  }

  //boolean comptador
  if (acumErrores > 0) {
    return false;
  } else {
    alert("Ben fet!");
    return true;
  }
}

form.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
  },
  true
);

//RegEx per a validar mail
function validar_email(email) {
  var regexMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regexMail.test(email) ? true : false;
}

//RegEx per a validar password
function validar_password(password) {
  let regexPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return regexPassword.test(password) ? true : false;
}
