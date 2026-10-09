# Meraki separado por archivos HTML

## Estructura
- `index.html`: página principal y contenedores.
- `partials/login.html`: inicio de sesión y restablecimiento de contraseña.
- `partials/sidebar.html`: menú lateral.
- `partials/header.html`: barra superior.
- `partials/dashboard.html`: panel principal.
- `partials/usuarios.html`: gestión de usuarios.
- `partials/alimentos.html`: gestión de alimentos y pérdidas.
- `partials/inventario.html`: inventario.
- `partials/sincronizacion.html`: sincronización.
- `partials/contabilidad.html`: contabilidad.
- `partials/reportes.html`: reportes.
- `partials/configuracion.html`: configuración.
- `partials/ayuda.html`: ayuda.
- `partials/footer.html`: pie de página.
- `js/cargar-vistas.js`: carga los fragmentos HTML.

## Cómo abrirlo
1. Conserva tu carpeta `css` original al mismo nivel que `index.html`, con `css/style1.css`.
2. Si ya tienes el JavaScript original de Meraki, conserva ese archivo también en su ubicación.
3. Abre la carpeta con Visual Studio Code y ejecuta `index.html` con la extensión **Live Server**. No lo abras haciendo doble clic, porque `fetch()` normalmente no carga fragmentos desde `file://`.
4. El archivo JavaScript original debe inicializar sus eventos después de que se carguen los fragmentos. En este cargador se deja preparada la llamada opcional `inicializarMeraki()`. Si el JS original usa `DOMContentLoaded` para buscar elementos, hay que adaptar esa inicialización para que se ejecute después de cargar las vistas.

## Importante
El archivo que compartiste solo contenía el HTML; no incluía el código JavaScript que implementa el inicio de sesión, navegación, tablas y formularios. Por eso el paquete separa el HTML, pero no puede garantizar esas funciones hasta integrar el JavaScript original.
