document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor de productos en user.html
    const productosContainer = document.querySelector('.productos-container');

    // Obtener los productos del localStorage
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Mostrar los productos en la página del usuario
    mostrarProductos();

    function mostrarProductos() {
        // Limpiar el contenido actual del contenedor de productos
        productosContainer.innerHTML = '';

        // Iterar sobre cada producto y agregarlo al contenedor
        productos.forEach(function(producto) {
            // Crear elementos para mostrar la información del producto
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');

            // Crear elemento de imagen
            const img = document.createElement('img');
            img.src = 'img/' + producto.imagen; // Ruta de la imagen
            img.alt = producto.nombre;

            const nombre = document.createElement('h2');
            nombre.textContent = producto.nombre;

            const descripcion = document.createElement('p');
            descripcion.textContent = producto.descripcion;

            const precio = document.createElement('p');
            precio.textContent = 'Precio: $' + producto.precio;

            // Contador de productos
            const contadorLabel = document.createElement('label');
            contadorLabel.textContent = 'Cantidad: ';
            const contadorInput = document.createElement('input');
            contadorInput.type = 'number';
            contadorInput.min = '1';
            contadorInput.value = '1';

            // Botón Agregar
            const botonAgregar = document.createElement('button');
            botonAgregar.textContent = 'Agregar';
            botonAgregar.addEventListener('click', function() {
                const cantidad = parseInt(contadorInput.value);
                if (cantidad > 0) {
                    agregarAlCarrito(producto, cantidad); // Llama a la función para agregar al carrito
                } else {
                    alert('Ingrese una cantidad válida');
                }
            });

            // Agregar elementos al contenedor del producto
            productoDiv.appendChild(img);
            productoDiv.appendChild(nombre);
            productoDiv.appendChild(descripcion);
            productoDiv.appendChild(precio);
            productoDiv.appendChild(contadorLabel);
            productoDiv.appendChild(contadorInput);
            productoDiv.appendChild(botonAgregar);

            // Agregar el producto al contenedor principal
            productosContainer.appendChild(productoDiv);
        });
    }

    // Función para agregar un producto al carrito
    function agregarAlCarrito(producto, cantidad) {
        // Obtener el carrito del localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Verificar si el producto ya está en el carrito
        const indice = carrito.findIndex(item => item.nombre === producto.nombre);
        if (indice !== -1) {
            // Incrementar la cantidad si el producto ya está en el carrito
            carrito[indice].cantidad += cantidad;
        } else {
            // Agregar el producto al carrito con cantidad especificada si no está en el carrito
            carrito.push({
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                precioUnitario: producto.precio,
                cantidad: cantidad
            });
        }

        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto agregado al carrito');
    }
});
