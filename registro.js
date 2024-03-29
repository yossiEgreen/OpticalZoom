document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmarPassword = document.getElementById("confirmPassword").value;

        // Validar si las contraseñas coinciden
        if (password !== confirmarPassword) {
            mostrarError("Las contraseñas no coinciden.");
            return;
        }

        // Crear un objeto con los datos del usuario
        const usuario = {
            nombre: nombre,
            email: email,
            password: password
        };

        // Guardar los datos del usuario en el almacenamiento local
        localStorage.setItem("usuario", JSON.stringify(usuario));

        // Después de guardar los datos, puedes redirigir al usuario a otra página
        window.location.href = "login.html";
    });

    function mostrarError(mensaje) {
        const errorDiv = document.getElementById("error");
        errorDiv.innerText = mensaje;
        errorDiv.style.display = "block";
    }
});
