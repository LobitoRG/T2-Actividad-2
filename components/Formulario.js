import { useState } from '../js/hooks.js';

export function Formulario() {
    const [formData, setFormData] = useState({ nombre: '', email: '' });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Datos enviados: ${JSON.stringify(formData)}`);
    }

    return `
        <form id="formulario">
            <input type="text" placeholder="Nombre" id="nombre" />
            <input type="email" placeholder="Email" id="email" />
            <button type="submit">Enviar</button>
        </form>
    `;
}

document.getElementById('formulario-container').innerHTML = Formulario();
document.getElementById('formulario').addEventListener('submit', handleSubmit);
