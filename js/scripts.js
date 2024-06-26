document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".producto button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Producto agregado al carrito");
    });
  });
});
