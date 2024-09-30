var numero = document.getElementById("num");
var perfil = document.getElementById("perfil");
var botao = document.getElementById("botao");
perfil.addEventListener("click", perfil0);
numero.addEventListener("click", numero0).value;

function perfil0() {}
function numero0() {
  var telefone = document.getElementById("copy");
  telefone.innerText = "Número Copiado";
}

function enviarComentario() {
  var comentario = document.getElementById("comentario").value;
  var mensagemDiv = document.getElementById("mensagem");
  if (comentario) {
    mensagemDiv.textContent = "Comentário enviado!";
    mensagemDiv.style.color = "green";
    document.getElementById("comentario").value = "";
  } else {
    mensagemDiv.textContent = "Por favor, insira um comentário!";
    mensagemDiv.style.color = "red";
  }
}
