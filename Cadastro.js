function Cadastro() {
  var verificar_senha1 = document.getElementById("senha");
  var verificar_senha2 = document.getElementById("confim_senha");
  if (verificar_senha1.value && verificar_senha2.value) {
    window.location.href = "http://127.0.0.1:5500/html/index.html";
  } else {
    window.alert("Preencha todos os requisitos");
  }
}
