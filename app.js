// ============================================================
//  APP — Libro Digital Interactivo "Diego"
// ============================================================

let capituloActual = null;
let notas = JSON.parse(localStorage.getItem('diego_notas') || '[]');

// ── INICIALIZACIÓN ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  construirNav();
  renderizarCapitulos();
  renderizarNotas();
});

function construirNav() {
  const lista = document.getElementById('nav-lista');
  CAPITULOS.forEach(cap => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" onclick="irCapitulo(${cap.id}); return false;" id="nav-link-${cap.id}">
      <span style="opacity:.4; font-size:.6rem; display:block; margin-bottom:.1rem">${cap.numero}</span>
      ${cap.titulo}
    </a>`;
    lista.appendChild(li);
  });
}

function renderizarCapitulos() {
  const libro = document.getElementById('libro');
  CAPITULOS.forEach(cap => {
    const div = document.createElement('section');
    div.className = 'capitulo';
    div.id = `capitulo-${cap.id}`;
    div.setAttribute('aria-label', cap.titulo);
    div.innerHTML = `
      <span class="cap-numero">${cap.numero}</span>
      <h2 class="cap-titulo ${cap.tituloClase}">${cap.titulo}</h2>
      <p class="cap-descripcion">${cap.descripcion}</p>
      <div class="cap-body">${cap.contenido}</div>
    `;
    libro.appendChild(div);
  });
}

// ── NAVEGACIÓN ───────────────────────────────────────────────
function irCapitulo(id) {
  // Ocultar portada
  document.getElementById('portada').style.display = 'none';

  // Mostrar nav
  document.getElementById('nav-lateral').classList.add('visible');
  document.getElementById('nav-capitulos').style.display = 'flex';

  // Desactivar capítulo anterior
  if (capituloActual !== null) {
    const anterior = document.getElementById(`capitulo-${capituloActual}`);
    if (anterior) anterior.classList.remove('activo');
    const linkAnterior = document.getElementById(`nav-link-${capituloActual}`);
    if (linkAnterior) linkAnterior.classList.remove('activo');
  }

  // Activar nuevo
  capituloActual = id;
  const cap = document.getElementById(`capitulo-${id}`);
  if (cap) {
    cap.classList.add('activo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const linkActual = document.getElementById(`nav-link-${id}`);
  if (linkActual) linkActual.classList.add('activo');

  // Actualizar indicador y botones
  actualizarNavInfo();
}

function cambiarCapitulo(delta) {
  const nuevoId = capituloActual + delta;
  if (nuevoId >= 1 && nuevoId <= CAPITULOS.length) {
    irCapitulo(nuevoId);
  }
}

function actualizarNavInfo() {
  const total = CAPITULOS.length;
  document.getElementById('nav-indicador').textContent =
    `${capituloActual} / ${total}`;

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  btnPrev.disabled = capituloActual <= 1;
  btnNext.disabled = capituloActual >= total;

  // Progreso
  const pct = ((capituloActual - 1) / (total - 1)) * 100;
  document.getElementById('progreso-fill').style.width = pct + '%';
}

// ── MODAL CITA ───────────────────────────────────────────────
function mostrarCita(texto, autor) {
  document.getElementById('modal-cita-texto').textContent = `"${texto}"`;
  document.getElementById('modal-cita-autor').textContent = `— ${autor}`;
  document.getElementById('modal-cita').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal-cita').style.display = 'none';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarModal();
  if (e.key === 'ArrowRight') cambiarCapitulo(1);
  if (e.key === 'ArrowLeft')  cambiarCapitulo(-1);
});

// ── PANEL DE NOTAS ───────────────────────────────────────────
function toggleNotas() {
  const panel = document.getElementById('panel-notas');
  panel.classList.toggle('abierto');
  panel.setAttribute('aria-hidden', !panel.classList.contains('abierto'));
}

function guardarNotas() {
  const texto = document.getElementById('notas-texto').value.trim();
  if (!texto) return;

  const nota = {
    id: Date.now(),
    capitulo: capituloActual
      ? `Cap. ${capituloActual} — ${CAPITULOS[capituloActual - 1].titulo}`
      : 'Portada',
    texto,
    fecha: new Date().toLocaleDateString('es-PE', { day:'2-digit', month:'short' })
  };

  notas.unshift(nota);
  localStorage.setItem('diego_notas', JSON.stringify(notas));
  document.getElementById('notas-texto').value = '';
  renderizarNotas();
}

function renderizarNotas() {
  const contenedor = document.getElementById('notas-guardadas');
  if (notas.length === 0) {
    contenedor.innerHTML = '<p style="font-size:.8rem; color:rgba(26,21,16,.35); margin-top:.5rem;">Tus notas aparecerán aquí.</p>';
    return;
  }
  contenedor.innerHTML = notas.map(n => `
    <div class="nota-item">
      <div class="nota-item__cap">${n.fecha} · ${n.capitulo}</div>
      ${n.texto}
    </div>
  `).join('');
}

// ── FAB: mostrar/ocultar según scroll ────────────────────────
window.addEventListener('scroll', () => {
  const fab = document.getElementById('fab-notas');
  if (window.scrollY > 200) {
    fab.style.opacity = '1';
    fab.style.pointerEvents = 'all';
  } else {
    fab.style.opacity = capituloActual ? '1' : '0';
    fab.style.pointerEvents = capituloActual ? 'all' : 'none';
  }
});
