export function crearPaginacion(usuarios, elementosPorPagina) {
    let paginaActual = 1;
    const totalPaginas = Math.ceil(usuarios.length / elementosPorPagina);

    function mostrarPagina(pagina) {
        const inicio = (pagina - 1) * elementosPorPagina;
        const fin = inicio + elementosPorPagina;
        const usuariosPagina = usuarios.slice(inicio, fin);
        document.getElementById('tabla-usuarios').innerHTML = JSON.stringify(usuariosPagina);
    }

    document.getElementById('pagina-siguiente').addEventListener('click', () => {
        if (paginaActual < totalPaginas) {
            paginaActual++;
            mostrarPagina(paginaActual);
        }
    });

    document.getElementById('pagina-anterior').addEventListener('click', () => {
        if (paginaActual > 1) {
            paginaActual--;
            mostrarPagina(paginaActual);
        }
    });

    mostrarPagina(paginaActual);
}
