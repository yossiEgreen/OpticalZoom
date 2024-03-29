document.addEventListener('DOMContentLoaded', function() {
    const contadores = document.querySelectorAll('.contador');

    contadores.forEach(contador => {
        const input = contador.querySelector('input');
        const sumarBtn = contador.querySelector('.sumar');
        const restarBtn = contador.querySelector('.restar');

        sumarBtn.addEventListener('click', function() {
            let valor = parseInt(input.value);
            valor++;
            input.value = valor;
        });

        restarBtn.addEventListener('click', function() {
            let valor = parseInt(input.value);
            if (valor > 0) {
                valor--;
                input.value = valor;
            }
        });
    });
});