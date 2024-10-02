document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.sendMessageForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores de los inputs
        const perimetroToraxico = parseFloat(document.querySelectorAll('.input')[0].value);
        const longitudCorporal = parseFloat(document.querySelectorAll('.input')[1].value);
        const pesoVivoResult = document.getElementById('pesoVivoResult');

        // Verificar si los valores ingresados son válidos
        if (!isNaN(perimetroToraxico) && !isNaN(longitudCorporal)) {
            // Realizar el cálculo
            const pesoVivo = ((perimetroToraxico * 2) + longitudCorporal) / 11.887;

            // Mostrar el resultado en el campo de Peso Vivo
            pesoVivoResult.textContent = pesoVivo.toFixed(2);
        } else {
            pesoVivoResult.textContent = "Valores inválidos";
        }
    });
});
