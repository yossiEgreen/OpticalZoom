document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verificar si las credenciales coinciden con las del administrador
        if (username === "admin007@gmail.com" && password === "@admin007") {
            // Si coinciden, redirigir al usuario al panel del administrador
            window.location.href = "admin.html";
        } else {
            // Si no coinciden, verificar las credenciales de los usuarios registrados
            const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
            if (usuarioGuardado && usuarioGuardado.email === username && usuarioGuardado.password === password) {
                // Si coinciden, redirigir al usuario a la página de usuario
                window.location.href = "user.html";
            } else {
                // Si no coinciden con ningún usuario registrado, mostrar un mensaje de error
                errorMessage.textContent = "Credenciales incorrectas. Por favor, inténtelo de nuevo.";
                errorMessage.style.display = "block";
            }
        }
    });
});
