/* ============================================================
   TOKENS
   ============================================================ */
:root {
  --tinta:        #1a1510;
  --papel:        #f7f3ea;
  --papel-oscuro: #ede8db;
  --acento:       #8b2c2c;       /* rojo sangría — portada, citas */
  --acento-frio:  #2a4a6b;       /* azul noche — Pavel, libros */
  --acento-calido:#c97d2e;       /* ámbar — recuerdos, reflexiones */
  --borde:        rgba(26,21,16,.12);
  --sombra:       0 4px 32px rgba(26,21,16,.14);

  --fuente-display: 'Playfair Display', Georgia, serif;
  --fuente-cuerpo:  'Lora', Georgia, serif;
  --fuente-mono:    'JetBrains Mono', monospace;

  --radio:      4px;
  --transicion: .35s cubic-bezier(.4,0,.2,1);
}

/* ============================================================
   RESET / BASE
   ============================================================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 18px; }

body {
  font-family: var(--fuente-cuerpo);
  background: var(--tinta);
  color: var(--tinta);
  overflow-x: hidden;
}

/* ============================================================
   PORTADA
   ============================================================ */
.scene--cover {
  position: relative;
  min-height: 100vh;
  background: var(--tinta);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cover__bg-lines {
  position: absolute; inset: 0;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 38px,
    rgba(247,243,234,.04) 38px,
    rgba(247,243,234,.04) 39px
  );
}

.cover__content {
  position: relative;
  text-align: center;
  color: var(--papel);
  padding: 3rem 2rem;
  max-width: 560px;
}

.cover__eyebrow {
  font-family: var(--fuente-mono);
  font-size: .75rem;
  letter-spacing: .25em;
  text-transform: uppercase;
  color: var(--acento-calido);
  display: block;
  margin-bottom: 1.5rem;
}

.cover__title {
  font-family: var(--fuente-display);
  font-size: clamp(5rem, 18vw, 10rem);
  font-weight: 700;
  line-height: .9;
  letter-spacing: -.02em;
  color: var(--papel);
  text-shadow: 0 0 80px rgba(139,44,44,.5);
}

.cover__subtitle {
  font-family: var(--fuente-display);
  font-style: italic;
  font-size: 1.35rem;
  color: var(--papel-oscuro);
  margin-top: .5rem;
  letter-spacing: .04em;
}

.cover__divider {
  width: 60px;
  height: 2px;
  background: var(--acento);
  margin: 2rem auto;
}

.cover__blurb {
  font-size: .95rem;
  line-height: 1.8;
  color: rgba(247,243,234,.75);
}

.btn-leer {
  margin-top: 2.5rem;
  padding: .85rem 2.4rem;
  background: var(--acento);
  color: var(--papel);
  border: none;
  font-family: var(--fuente-mono);
  font-size: .8rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: var(--radio);
  transition: background var(--transicion), transform var(--transicion);
}
.btn-leer:hover { background: #a83535; transform: translateY(-2px); }

.cover__numero-pagina {
  position: absolute;
  bottom: 2rem; right: 2.5rem;
  font-family: var(--fuente-display);
  font-style: italic;
  font-size: 1.1rem;
  color: rgba(247,243,234,.25);
}

/* ============================================================
   PROGRESO
   ============================================================ */
.progreso-barra {
  position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 100;
  background: rgba(247,243,234,.1);
}
.progreso-fill {
  height: 100%;
  background: var(--acento);
  width: 0%;
  transition: width .3s ease;
}

/* ============================================================
   NAV LATERAL
   ============================================================ */
.nav-lateral {
  position: fixed;
  left: 0; top: 50%;
  transform: translateY(-50%);
  background: var(--papel);
  border-right: 1px solid var(--borde);
  padding: 1.2rem .8rem;
  z-index: 90;
  border-radius: 0 var(--radio) var(--radio) 0;
  box-shadow: var(--sombra);
  max-width: 200px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transicion);
}
.nav-lateral.visible { opacity: 1; pointer-events: all; }
.nav-lateral__titulo {
  font-family: var(--fuente-mono);
  font-size: .65rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: rgba(26,21,16,.4);
  margin-bottom: .8rem;
}
.nav-lateral__lista { list-style: none; }
.nav-lateral__lista li { margin-bottom: .3rem; }
.nav-lateral__lista a {
  font-family: var(--fuente-mono);
  font-size: .72rem;
  color: var(--tinta);
  text-decoration: none;
  opacity: .5;
  transition: opacity var(--transicion), color var(--transicion);
  display: block;
  padding: .2rem .4rem;
  border-radius: 2px;
}
.nav-lateral__lista a:hover,
.nav-lateral__lista a.activo { opacity: 1; color: var(--acento); }

/* ============================================================
   LIBRO / CAPÍTULOS
   ============================================================ */
.libro {
  background: var(--papel);
  min-height: 100vh;
}

.capitulo {
  display: none;
  max-width: 680px;
  margin: 0 auto;
  padding: 5rem 2rem 4rem;
  animation: fadeIn .5s ease;
}
.capitulo.activo { display: block; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.cap-numero {
  font-family: var(--fuente-mono);
  font-size: .7rem;
  letter-spacing: .25em;
  text-transform: uppercase;
  color: rgba(26,21,16,.35);
  display: block;
  margin-bottom: .8rem;
}

.cap-titulo {
  font-family: var(--fuente-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--tinta);
  margin-bottom: 1rem;
}

.cap-titulo--acento { color: var(--acento); }
.cap-titulo--frio   { color: var(--acento-frio); }

.cap-descripcion {
  font-family: var(--fuente-display);
  font-style: italic;
  font-size: 1.1rem;
  color: rgba(26,21,16,.6);
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--borde);
}

.cap-body {
  font-size: 1rem;
  line-height: 1.9;
  color: var(--tinta);
}

.cap-body p { margin-bottom: 1.4em; }

.cap-body strong { font-weight: 700; color: var(--acento); }

/* Cita en bloque */
.cita-bloque {
  margin: 2.5rem 0;
  padding: 1.4rem 2rem;
  border-left: 4px solid var(--acento);
  background: var(--papel-oscuro);
  border-radius: 0 var(--radio) var(--radio) 0;
  font-family: var(--fuente-display);
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--tinta);
  cursor: pointer;
  transition: border-color var(--transicion), background var(--transicion);
}
.cita-bloque:hover { border-color: var(--acento-calido); background: #e8e3d8; }
.cita-bloque .cita-autor {
  display: block;
  font-style: normal;
  font-family: var(--fuente-mono);
  font-size: .72rem;
  letter-spacing: .12em;
  color: rgba(26,21,16,.45);
  margin-top: .8rem;
}

/* Etiqueta de lugar */
.tag-lugar {
  display: inline-block;
  font-family: var(--fuente-mono);
  font-size: .68rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  padding: .25rem .7rem;
  border-radius: 2px;
  margin: 1.5rem 0 .5rem;
}
.tag-lugar--lima    { background: rgba(42,74,107,.1); color: var(--acento-frio); }
.tag-lugar--libreria{ background: rgba(201,125,46,.1); color: var(--acento-calido); }
.tag-lugar--casa    { background: rgba(26,21,16,.07); color: rgba(26,21,16,.5); }

/* Tarjeta personaje */
.personaje-card {
  display: flex; gap: 1rem; align-items: flex-start;
  padding: 1.2rem;
  background: var(--papel-oscuro);
  border-radius: var(--radio);
  margin: 2rem 0;
  border: 1px solid var(--borde);
}
.personaje-card__icono {
  font-size: 2rem;
  flex-shrink: 0;
}
.personaje-card__nombre {
  font-family: var(--fuente-display);
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: .3rem;
}
.personaje-card__desc {
  font-size: .88rem;
  line-height: 1.6;
  color: rgba(26,21,16,.7);
}

/* Separador capítulo */
.sep { text-align: center; margin: 2rem 0; color: rgba(26,21,16,.2); letter-spacing: .5em; }

/* ============================================================
   NAV INFERIOR
   ============================================================ */
.nav-capitulos {
  position: sticky;
  bottom: 0;
  background: var(--papel);
  border-top: 1px solid var(--borde);
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 80;
  box-shadow: 0 -4px 20px rgba(26,21,16,.08);
}
.nav-btn {
  font-family: var(--fuente-mono);
  font-size: .75rem;
  letter-spacing: .1em;
  padding: .6rem 1.4rem;
  background: transparent;
  border: 1px solid var(--borde);
  cursor: pointer;
  border-radius: var(--radio);
  color: var(--tinta);
  transition: background var(--transicion), border-color var(--transicion);
}
.nav-btn:hover { background: var(--papel-oscuro); border-color: var(--acento); }
.nav-btn:disabled { opacity: .3; cursor: default; }
.nav-indicador {
  font-family: var(--fuente-mono);
  font-size: .72rem;
  color: rgba(26,21,16,.45);
}

/* ============================================================
   FAB + PANEL NOTAS
   ============================================================ */
.fab-notas {
  position: fixed;
  bottom: 5.5rem; right: 1.5rem;
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--acento-frio);
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(42,74,107,.35);
  z-index: 110;
  transition: transform var(--transicion), background var(--transicion);
}
.fab-notas:hover { transform: scale(1.1); background: #1e3a55; }

.panel-notas {
  position: fixed;
  right: 0; top: 0; bottom: 0;
  width: min(380px, 100vw);
  background: var(--papel);
  box-shadow: -8px 0 40px rgba(26,21,16,.2);
  z-index: 200;
  display: flex; flex-direction: column;
  transform: translateX(100%);
  transition: transform var(--transicion);
  padding: 1.5rem;
}
.panel-notas.abierto { transform: translateX(0); }
.panel-notas__header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 1rem;
  font-family: var(--fuente-display);
  font-weight: 700;
  font-size: 1.1rem;
}
.panel-notas__cerrar {
  background: none; border: none; font-size: 1.2rem; cursor: pointer; color: rgba(26,21,16,.5);
}
.panel-notas__area {
  flex: 1;
  border: 1px solid var(--borde);
  border-radius: var(--radio);
  padding: .8rem;
  font-family: var(--fuente-cuerpo);
  font-size: .9rem;
  resize: none;
  background: var(--papel-oscuro);
  line-height: 1.7;
  color: var(--tinta);
  margin-bottom: .8rem;
}
.panel-notas__guardar {
  padding: .65rem;
  background: var(--acento-frio);
  color: white;
  border: none; border-radius: var(--radio);
  cursor: pointer;
  font-family: var(--fuente-mono);
  font-size: .75rem;
  letter-spacing: .1em;
  transition: background var(--transicion);
}
.panel-notas__guardar:hover { background: #1e3a55; }
.notas-guardadas { margin-top: 1rem; overflow-y: auto; }
.nota-item {
  background: var(--papel-oscuro);
  border-radius: var(--radio);
  padding: .7rem .9rem;
  font-size: .82rem;
  line-height: 1.6;
  margin-bottom: .6rem;
  border-left: 3px solid var(--acento-frio);
  position: relative;
}
.nota-item__cap {
  font-family: var(--fuente-mono);
  font-size: .65rem;
  color: rgba(26,21,16,.4);
  margin-bottom: .25rem;
}

/* ============================================================
   MODAL CITA
   ============================================================ */
.modal-cita {
  position: fixed; inset: 0; background: rgba(26,21,16,.7);
  display: flex; align-items: center; justify-content: center;
  z-index: 300;
  backdrop-filter: blur(4px);
}
.modal-cita__inner {
  background: var(--papel);
  max-width: 480px; width: 90%;
  padding: 2.5rem;
  border-radius: var(--radio);
  text-align: center;
}
.modal-cita__texto {
  font-family: var(--fuente-display);
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.75;
  margin-bottom: 1rem;
}
.modal-cita__autor {
  font-family: var(--fuente-mono);
  font-size: .75rem;
  color: rgba(26,21,16,.45);
  letter-spacing: .15em;
  display: block;
  margin-bottom: 1.5rem;
}
.modal-cita__inner button {
  font-family: var(--fuente-mono);
  font-size: .72rem;
  letter-spacing: .12em;
  padding: .5rem 1.2rem;
  border: 1px solid var(--borde);
  background: none;
  cursor: pointer;
  border-radius: var(--radio);
  transition: background var(--transicion);
}
.modal-cita__inner button:hover { background: var(--papel-oscuro); }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 640px) {
  .nav-lateral { display: none; }
  .capitulo { padding: 4rem 1.2rem 3rem; }
  .nav-capitulos { padding: .8rem 1rem; }
}
