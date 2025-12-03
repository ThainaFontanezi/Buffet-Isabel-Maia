document
  .getElementById("form-orcamento")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const tipoEvento = document.getElementById("tipo-evento").value;
    const data = document.getElementById("data").value;
    const convidados = document.getElementById("convidados").value;
    const obs = document.getElementById("obs").value;

    const dataFormatada = data.split("-").reverse().join("/");

    const mensagem =
      `*Olá! Gostaria de um orçamento.*%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*Tipo de Evento:* ${tipoEvento}%0A` +
      `*Data:* ${dataFormatada}%0A` +
      `*Convidados:* ${convidados} pessoas%0A` +
      `*Observações:* ${obs}`;

    const numeroWhatsApp = "5521964239451";

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    window.open(url, "_blank");
  });

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "0";
    nav.style.background = "#0f0f0f";
    nav.style.width = "100%";
    nav.style.textAlign = "center";
    nav.style.padding = "20px";
  }
});
