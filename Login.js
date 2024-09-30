function sing_up() {
  var verificar = document.getElementById("senha").value;
  var verificar2 = document.getElementById("e-mail").value;
  if (verificar && verificar2) {
  } else {
    window.alert("Por gentileza, preencha os requisitos!");
  }
}
function esquece() {
  window.alert(
    "Um token foi enviado ao seu e-mail, junto da redefinição da senha!"
  );
}
