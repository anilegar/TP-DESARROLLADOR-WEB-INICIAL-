
/*----------------boton de compras---------------*/
    const buyButtons = document.querySelectorAll('.comprar'); // Selecciona todos los botones de compra
    buyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h5').innerText; // Obtiene el nombre del producto del elemento h3 dentro del elemento padre del botón
        Swal.fire({
          title: `Has añadido ${productName} a tu carrito de compras`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      });
    });

/*-------------------------Formulario-----------------------------------*/
document.querySelector('#contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  swal({
    title: "Mensaje enviado",
    text: "Tu reclamo fue enviado, nos pondremos en contacto contigo a la brevedad",
    icon: "success",
  });
  document.querySelector('#contact-form').reset();
});