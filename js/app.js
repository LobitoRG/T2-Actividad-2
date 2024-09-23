import { iniciarDB } from '../db/db.js';
import { useCounter } from './hooks.js';
import { Formulario } from '../components/Formulario.js';
import { TablaUsuarios } from '../components/TablaUsuarios.js';

document.getElementById('agregar-dato').addEventListener('click', async () => {
    const dato = { nombre: 'Ejemplo', valor: 123 };
    await agregarDato(dato);
    mostrarDatos();
});

// Lógica de agregar datos a la base de datos
async function agregarDato(dato) {
    const db = await iniciarDB();
    const tx = db.transaction('datos', 'readwrite');
    const store = tx.objectStore('datos');
    await store.add(dato);
}

// Lógica de mostrar datos en la pantalla
async function mostrarDatos() {
    const db = await iniciarDB();
    const tx = db.transaction('datos', 'readonly');
    const store = tx.objectStore('datos');
    const allDatos = await store.getAll();
    document.getElementById('resultado').innerText = JSON.stringify(allDatos);
}

// Usar hooks customizados
const { counter, increment, decrement } = useCounter();
console.log(`Contador actual: ${counter}`);

// Cargar componentes
Formulario();
TablaUsuarios();
