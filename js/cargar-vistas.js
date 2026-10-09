// Carga los fragmentos HTML separados dentro de index.html.
async function cargarFragmento(contenedor, archivo) {
  const respuesta = await fetch(archivo);
  if (!respuesta.ok) {
    throw new Error(`No se pudo cargar ${archivo}`);
  }
  document.querySelector(contenedor).insertAdjacentHTML("beforeend", await respuesta.text());
}

async function cargarInterfaz() {
  try {
    await cargarFragmento("#zonaLogin", "partials/login.html");
    await cargarFragmento("#zonaSidebar", "partials/sidebar.html");
    await cargarFragmento("#zonaHeader", "partials/header.html");

    const vistas = [
      "dashboard", "usuarios", "alimentos", "inventario",
      "sincronizacion", "contabilidad", "reportes",
      "configuracion", "ayuda"
    ];

    for (const vista of vistas) {
      await cargarFragmento("#zonaVistas", `partials/${vista}.html`);
    }

    await cargarFragmento("#zonaFooter", "partials/footer.html");

    // Si tu JavaScript original inicializa eventos al cargar la página,
    // mueve esa inicialización a una función y ejecútala aquí, después de cargar las vistas.
    if (typeof inicializarMeraki === "function") {
      inicializarMeraki();
    }
  } catch (error) {
    console.error(error);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p style="color:#b00020;padding:16px">Error cargando la interfaz: ${error.message}. Abre el proyecto con Live Server.</p>`
    );
  }
}

cargarInterfaz();
