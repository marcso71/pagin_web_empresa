// Esperar a que todo el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // 1. Crear dinámicamente un campo de entrada para buscar
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Buscar término...";
    searchInput.style.margin = "20px auto 0 auto";
    searchInput.style.display = "block";
    searchInput.style.padding = "10px";
    searchInput.style.width = "50%";
    searchInput.style.maxWidth = "400px";
    searchInput.style.borderRadius = "5px";
    searchInput.style.border = "1px solid #ccc";
    searchInput.style.fontSize = "15px";

    // 2. Insertar el buscador justo después del encabezado h1 o el párrafo del header
    const header = document.getElementById("mi-encabezado");
    if (header) {
        header.appendChild(searchInput);
    }

    // 3. Lógica para filtrar las filas de la tabla en tiempo real
    searchInput.addEventListener("keyup", () => {
        const filterValue = searchInput.value.toLowerCase();
        const tableRows = document.querySelectorAll("table tr");

        // Recorrer todas las filas saltándose la primera (el encabezado th)
        for (let i = 1; i < tableRows.length; i++) {
            const row = tableRows[i];
            // Buscar la coincidencia en la primera columna (el término de arquitectura)
            const termColumn = row.getElementsByTagName("td")[0];
            
            if (termColumn) {
                const textValue = termColumn.textContent || termColumn.innerText;
                
                // Si la palabra contiene lo que el usuario escribió, se muestra; si no, se oculta
                if (textValue.toLowerCase().indexOf(filterValue) > -1) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            }
        }
    });
});