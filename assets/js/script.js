const email = document.getElementById("email");
const assunto = document.getElementById("assunto");

let contador = document.querySelector("#contador");
contador.innerHTML = "0 / 100";

let emailOk = false;
let assuntoOk = false;

function validaEmail() {
  let txt = document.querySelector("#txtEmail");
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(regex)) {
    txt.innerHTML = "E-mail Válido";
    email.style.border = "3px solid green";
    emailOk = true
  } else {
    txt.innerHTML = "E-mail Inválido";
    email.style.border = "3px solid red";
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  contador.innerHTML = `${assunto.value.length} / 100`;

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML =
      "Texto é muito grande, digite no máximo 100 caracteres";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente antes de enviar...");
  }
}
