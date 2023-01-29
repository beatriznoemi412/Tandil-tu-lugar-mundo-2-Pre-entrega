
const ciudad= document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  ciudad.classList.add("visible");
  abrir.classList.add("invisiblemenu");
});
cerrar.addEventListener("click", () => {
  ciudad.classList.remove("visible");
  abrir.classList.remove("invisiblemenu");
});
