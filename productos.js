document.addEventListener("DOMContentLoaded", function() {
    const formularioProducto = document.getElementById("formularioProducto");
    const listaProductos = document.querySelector(".lista-productos");

    // Agregar evento de submit al formulario de subir producto
    formularioProducto.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores del formulario
        const nombreProducto = document.getElementById("nombreProducto").value;
        const descripcionProducto = document.getElementById("descripcionProducto").value;
        const precioProducto = document.getElementById("precioProducto").value;
        const imagenProducto = document.getElementById("imagenProducto").files[0]; // Obtener la primera imagen seleccionada

        // Crear un objeto con los datos del producto
        const producto = {
            nombre: nombreProducto,
            descripcion: descripcionProducto,
            precio: precioProducto,
            imagen: imagenProducto.name // Obtener el nombre de la imagen
        };

        // Agregar el producto al localStorage
        let productos = JSON.parse(localStorage.getItem("productos")) || [];
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));

        // Mostrar el producto en la lista de productos
        mostrarProducto(producto);

        // Limpiar el formulario después de subir el producto
        formularioProducto.reset();
    });

    // Función para mostrar un producto en la lista de productos
    function mostrarProducto(producto) {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");

        // Crear elementos para mostrar los detalles del producto
        const imagen = document.createElement("img");
        imagen.src = "img/" + producto.imagen;
        imagen.alt = producto.nombre;

        const nombre = document.createElement("h2");
        nombre.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement("p");
        precio.textContent = "Precio: $" + producto.precio;

        // Botón para editar el producto
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", function() {
            // Mostrar un formulario o una interfaz para editar el producto
            const nuevoNombre = prompt("Ingrese el nuevo nombre del producto:", producto.nombre);
            const nuevaDescripcion = prompt("Ingrese la nueva descripción del producto:", producto.descripcion);
            const nuevoPrecio = prompt("Ingrese el nuevo precio del producto:", producto.precio);

            // Actualizar los detalles del producto
            producto.nombre = nuevoNombre;
            producto.descripcion = nuevaDescripcion;
            producto.precio = nuevoPrecio;

            // Actualizar los detalles del producto en la lista
            nombre.textContent = nuevoNombre;
            descripcion.textContent = nuevaDescripcion;
            precio.textContent = "Precio: $" + nuevoPrecio;

            // Actualizar los datos en el almacenamiento local
            let productos = JSON.parse(localStorage.getItem("productos")) || [];
            const index = productos.findIndex(p => p.nombre === producto.nombre);
            productos[index] = producto;
            localStorage.setItem("productos", JSON.stringify(productos));
        });

        // Botón para borrar el producto
        const botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar";
        botonBorrar.addEventListener("click", function() {
            // Eliminar el producto de la lista de productos
            divProducto.remove();

            // Eliminar el producto del almacenamiento local
            let productos = JSON.parse(localStorage.getItem("productos")) || [];
            productos = productos.filter(p => p.nombre !== producto.nombre);
            localStorage.setItem("productos", JSON.stringify(productos));
        });

        // Agregar elementos al div del producto
        divProducto.appendChild(imagen);
        divProducto.appendChild(nombre);
        divProducto.appendChild(descripcion);
        divProducto.appendChild(precio);
        divProducto.appendChild(botonEditar);
        divProducto.appendChild(botonBorrar);

        // Agregar el div del producto a la lista de productos
        listaProductos.appendChild(divProducto);
    }

    // Cargar los productos al cargar la página
    function cargarProductos() {
        const productos = JSON.parse(localStorage.getItem("productos")) || [];
        productos.forEach(function(producto) {
            mostrarProducto(producto);
        });
    }

    cargarProductos();
});
