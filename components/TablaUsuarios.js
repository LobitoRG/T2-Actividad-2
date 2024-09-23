import { crearPaginacion } from '../js/paginacion.js';

export function TablaUsuarios() {
    const usuarios = [
        { id: 1, nombre: 'Juan', email: 'juan@example.com' },
        { id: 2, nombre: 'Ana', email: 'ana@example.com' },
        // ... más usuarios
    ];

    crearPaginacion(usuarios, 5);
}

document.getElementById('tabla-usuarios').innerHTML = TablaUsuarios();
