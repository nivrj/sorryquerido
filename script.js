function respostaErrada() {
  alert("resposta errada 😑 vamos querer ser um pouco carinhoso?!");
  location.reload(); // retorna à página inicial
}

function respostaCerta() {
  alert("resposta certa!! você é um gatinho atencioso e carinhoso 💕");
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h1>clique aqui para a sua surpresa</h1>
    <button onclick="irParaSurpresa()">clique aqui</button>
  `;
}

function irParaSurpresa() {
  window.location.href = "surpresa.html";
}