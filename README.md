# Diego — Anécdotas de un Lector

Libro digital interactivo basado en el primer capítulo de la novela **Diego**, sobre un joven escritor limeño, sus libros, su amigo Pavel y sus reflexiones sobre la literatura y la vida.

---

## 🖥️ Demo

> Abre `index.html` en tu navegador, o despliégalo en GitHub Pages.

---

## 📚 Características

| Feature | Descripción |
|---|---|
| **10 capítulos interactivos** | Cada uno con narración, citas expandibles y tarjetas de personajes |
| **Citas en modal** | Haz clic en cualquier bloque de cita para verla ampliada |
| **Panel de notas** | Toma notas mientras lees; se guardan en `localStorage` |
| **Navegación por teclado** | `←` `→` para cambiar capítulo, `Esc` para cerrar modales |
| **Barra de progreso** | Indicador visual del avance en la lectura |
| **Diseño tipográfico** | Playfair Display + Lora, pensado para la lectura prolongada |
| **Responsive** | Funciona en móvil y escritorio |

---

## 🗂️ Estructura

```
libro-diego/
├── index.html          ← Portada y esqueleto HTML
├── css/
│   └── style.css       ← Estilos (tokens, componentes, responsive)
├── js/
│   ├── capitulos.js    ← Datos de los 10 capítulos
│   └── app.js          ← Lógica de navegación, notas y modales
└── README.md
```

---

## 🚀 Despliegue en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En *Source*, selecciona la rama `main` y la carpeta `/ (root)`.
4. El sitio estará disponible en `https://<tu-usuario>.github.io/<nombre-repo>/`.

---

## ✏️ Personalización

### Agregar o editar capítulos

Edita el array `CAPITULOS` en `js/capitulos.js`. Cada capítulo tiene:

```js
{
  id: 1,                          // número del capítulo
  numero: "Capítulo I",           // etiqueta visible
  titulo: "El título",
  tituloClase: "",                // "" | "cap-titulo--acento" | "cap-titulo--frio"
  descripcion: "Bajada del cap.", // texto en cursiva bajo el título
  contenido: `...HTML...`         // HTML interno del capítulo
}
```

### Citas expandibles

Usa este HTML dentro del `contenido` de un capítulo:

```html
<div class="cita-bloque" onclick="mostrarCita('Texto de la cita.', 'Autor')">
  Texto de la cita.
  <span class="cita-autor">— Autor</span>
</div>
```

### Tags de lugar

```html
<span class="tag-lugar tag-lugar--lima">📍 Lima</span>
<span class="tag-lugar tag-lugar--libreria">📚 Librería</span>
<span class="tag-lugar tag-lugar--casa">🏠 Casa</span>
```

---

## 📄 Licencia

Contenido literario basado en la novela *Diego*. Código bajo licencia MIT.
