/**
 * PLATAFORMA DIGITAL · INGENIERÍA MECÁNICA (UNAL MEDELLÍN)
 * Desarrollado por: Santiago Escobar Arias · Representante de Sistemas
 * Delegados de la Representación: Sebastian Leonel Ruiz y Santiago Espinosa López
 * © 2026 Santiago Escobar Arias. Todos los derechos reservados.
 * Obra protegida por la Ley 23 de 1982 y Decisión 351 (CAN).
 */
/* =============================================
   MÓDULO INICIO · INGENIERÍA MECÁNICA
   - Carga programa.json al inicio
   - Carga perfil.json y grupos.json por intersección
   - Escenario Cinemático de Engranajes y Turbina Interactiva
   - Simulador Dinámico de Sistemas Mecánicos & Simulación Computacional
   ============================================= */

const ICONOS_PERFIL = {
  diseno: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>',
  energia: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  manufactura: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  mecatronica: '<rect width="16" height="16" x="4" y="4" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M15 9h.01M9 15h.01M15 15h.01"/>',
  gestion: '<path d="M12 20v-6M6 20V10M18 20V4"/>',
  potencia: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
};

const ICONOS_RUTAS = {
  diseno: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>',
  energia: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  manufactura: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  mecatronica: '<rect width="16" height="16" x="4" y="4" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M15 9h.01M9 15h.01M15 15h.01"/>',
  gestion: '<path d="M12 20v-6M6 20V10M18 20V4"/>',
};

const icono = (nombre) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS_PERFIL[nombre] || ICONOS_PERFIL.diseno}</svg>`;
const iconoRuta = (nombre) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS_RUTAS[nombre] || ICONOS_RUTAS.diseno}</svg>`;

const ICONO_SELLO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/><path d="m9.5 9 1.8 1.8L15 7.2"/></svg>';

const ICONOS_REDES = {
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  wpp: '<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.71C8.89 7.71 8.6 7.78 8.36 8.04C8.11 8.3 7.41 8.96 7.41 10.3C7.41 11.63 8.38 12.92 8.52 13.1C8.66 13.29 10.42 16 13.12 17.17C15.36 18.14 15.82 17.95 16.31 17.9C16.8 17.86 17.88 17.26 18.11 16.63C18.33 16 18.33 15.46 18.26 15.35C18.2 15.24 18.01 15.18 17.73 15.04C17.45 14.9 16.08 14.23 15.83 14.13C15.57 14.04 15.39 13.99 15.2 14.27C15.02 14.55 14.49 15.18 14.33 15.36C14.17 15.55 14.01 15.57 13.73 15.43C13.45 15.29 12.27 14.9 10.87 13.65C9.78 12.68 9.05 11.48 8.84 11.12C8.63 10.76 8.82 10.56 8.96 10.42C9.09 10.29 9.25 10.08 9.39 9.92C9.53 9.76 9.58 9.64 9.67 9.46C9.76 9.27 9.72 9.11 9.65 8.97C9.58 8.83 9.07 7.58 8.86 7.07C8.66 6.58 8.45 6.64 8.3 6.63C8.15 6.63 7.97 6.63 7.78 6.63"/></svg>',
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  correo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'
};


/* ---------- 1. Programa ---------- */

function pintarPrograma(p) {
  // Renderizado en la barra conductora curricular
  $('#portada-cifras').innerHTML = p.cifras
    .map((c) => `
      <li class="hero-tesla__cifra-nodo">
        <span class="hero-tesla__cifra-val">${esc(c.valor)}</span>
        <span class="hero-tesla__cifra-txt">${esc(c.texto)}</span>
      </li>`)
    .join('');

  const acreditacion = p.acreditacion;
  $('#programa-contenido').innerHTML = `
    <div class="seccion-titulo">
      <p class="seccion-titulo__antetitulo">${esc(p.facultad)} · ${esc(p.sede)}</p>
      <h2 id="programa-titulo">Definición y Misión del Pregrado</h2>
      <p class="seccion-titulo__intro">Ingeniería Mecánica · Rigor analítico, diseño computacional, manufactura avanzada y liderazgo industrial</p>
    </div>

    <div class="programa__rejilla">
      <div class="programa__texto">
        <span class="programa__lema">Lema de la Facultad: ${esc(p.lema)}</span>
        <div class="programa__parrafos">
          ${p.descripcion.map((parrafo) => `<p>${esc(parrafo)}</p>`).join('')}
        </div>
      </div>
      <ul class="ficha">
        ${p.ficha.map((f) => `
          <li><span class="ficha__etiqueta">${esc(f.etiqueta)}</span><span class="ficha__valor">${esc(f.valor)}</span></li>`).join('')}
      </ul>
    </div>

    <!-- RUTAS CURRICULARES / CAMPOS DE APLICACIÓN -->
    <div class="rutas-curriculares" id="rutas-curriculares">
      <div class="seccion-titulo seccion-titulo--rutas">
        <p class="seccion-titulo__antetitulo">Campos de profundización y aplicación</p>
        <h3 class="rutas__titulo">Ejes Curriculares Estratégicos</h3>
        <p class="seccion-titulo__intro">El plan curricular articula cinco grandes áreas tecnológicas que preparan al ingeniero mecánico para liderar la industria global:</p>
      </div>

      <div class="rutas__grid">
        ${(p.rutas || []).map((ruta, idx) => `
          <article class="ruta-card" style="--color-ruta: ${ruta.color}">
            <div class="ruta-card__encabezado">
              <span class="ruta-card__numero">EJE 0${idx + 1}</span>
              <span class="ruta-card__icono">${iconoRuta(ruta.icono)}</span>
            </div>
            <h4 class="ruta-card__nombre">${esc(ruta.nombre)}</h4>
            <p class="ruta-card__descripcion">${esc(ruta.descripcion)}</p>
            <div class="ruta-card__pie">
              <a href="malla.html" class="ruta-card__enlace" title="Ver materias de ${esc(ruta.nombre)} en la malla">
                <span>Ver en la malla</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </article>`).join('')}
      </div>
    </div>

    <!-- ACREDITACIÓN DE CALIDAD -->
    <div class="acreditacion">
      <div class="acreditacion__cabecera">
        <span class="acreditacion__sello-icono">${ICONO_SELLO}</span>
        <div>
          <span class="acreditacion__antetitulo">Calidad Académica Certificada</span>
          <h3 class="acreditacion__estado">${esc(acreditacion.estado)}</h3>
        </div>
      </div>
      <div class="acreditacion__rejilla">
        ${acreditacion.hitos.map((h, i) => `
          <div class="acreditacion__tarjeta ${i === 0 ? 'acreditacion__tarjeta--renovacion' : ''}">
            <div class="acreditacion__tarjeta-encabezado">
              <span class="acreditacion__anio-badge">${esc(h.anio)}</span>
              <span class="acreditacion__hito-tipo">${i === 0 ? 'Trayectoria Histórica' : 'Certificación y Excelencia'}</span>
            </div>
            <p class="acreditacion__texto">${esc(h.texto)}</p>
          </div>`).join('')}
      </div>
      <div class="acreditacion__pie">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="acreditacion__info-icono" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <p class="acreditacion__nota">${esc(acreditacion.nota)}</p>
      </div>
    </div>

    <p class="fuentes">Fuentes oficiales:
      ${p.fuentes.map((f) => `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.titulo)}</a>`).join(' · ')}
    </p>`;
}


/* ---------- 2. Perfil del egresado ---------- */

function pintarPerfil(perfil) {
  $('#perfil-contenido').innerHTML = `
    <div class="seccion-titulo">
      <p class="seccion-titulo__antetitulo">Competencias y Proyección</p>
      <h2 id="perfil-titulo">${esc(perfil.titulo)}</h2>
      <p class="seccion-titulo__intro">${esc(perfil.intro)}</p>
    </div>
    <ul class="perfil__tarjetas">
      ${perfil.rasgos.map((r) => `
        <li class="rasgo">
          <span class="rasgo__icono">${icono(r.icono)}</span>
          <h3>${esc(r.titulo)}</h3>
          <p>${esc(r.texto)}</p>
        </li>`).join('')}
    </ul>
    <p class="perfil__fuente">${esc(perfil.fuente)}</p>`;
}


/* ---------- 3. Grupos Estudiantiles y Capítulos Técnicos ---------- */

function pintarGrupos(grupos) {
  if (!grupos || !grupos.length) return;

  const cardsHtml = grupos.map((grupo) => {
    const destinoIg = grupo.enlace ? `href="${esc(grupo.enlace)}" target="_blank" rel="noopener noreferrer"` : '';

    const liderazgoHtml = (grupo.liderazgo || []).map((l) => `
      <div class="grupo-card__lider-bloque">
        <span class="grupo-card__lider-rol">${esc(l.rol)}</span>
        <strong class="grupo-card__lider-nombre">${esc(l.nombre)}</strong>
        <span class="grupo-card__lider-estamento">${esc(l.estamento)} · Minas</span>
        <a class="grupo-card__lider-correo" href="mailto:${esc(l.correo)}" title="Contactar a ${esc(l.nombre)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>${esc(l.correo)}</span>
        </a>
      </div>
    `).join('');

    const redesHtml = (grupo.redes || []).map((r) => `
      <a class="grupo-card__btn-ig" href="${esc(r.enlace)}" target="_blank" rel="noopener noreferrer" title="${esc(r.plataforma)}: ${esc(r.usuario)}">
        ${ICONOS_REDES[r.icono] || ''}
        <span>${esc(r.usuario || r.plataforma)}</span>
      </a>
    `).join('');

    return `
      <li class="tarjeta-grupo">
        <div class="grupo-card__emblema-wrap">
          <a class="grupo-card__emblema" ${destinoIg} aria-label="Visitar redes oficiales de ${esc(grupo.nombre)}" title="Clic para conectar con ${esc(grupo.nombre)}">
            <img src="${esc(grupo.logo)}" alt="Logo oficial de ${esc(grupo.nombre)}" class="grupo-card__logo" loading="lazy">
          </a>
        </div>

        <div class="grupo-card__info">
          <span class="grupo-card__tipo">${esc(grupo.tipo)}</span>
          <h3 class="grupo-card__nombre">${esc(grupo.nombre)}</h3>
          ${grupo.subtitulo ? `<p class="grupo-card__subtitulo">${esc(grupo.subtitulo)}</p>` : ''}
          <p class="grupo-card__desc">${esc(grupo.descripcion)}</p>

          ${liderazgoHtml ? `<div class="grupo-card__liderazgo">${liderazgoHtml}</div>` : ''}
          <div class="grupo-card__acciones">${redesHtml}</div>
        </div>
      </li>`;
  }).join('');

  $('#grupos-contenido').innerHTML = `
    <div class="seccion-titulo">
      <p class="seccion-titulo__antetitulo">Comunidad & Liderazgo Tecnológico</p>
      <h2 id="grupos-titulo">Grupos Estudiantiles & Capítulos Técnicos</h2>
      <p class="seccion-titulo__intro">Espacios de alto rendimiento extracurricular en la Facultad de Minas de la Universidad Nacional de Colombia donde los estudiantes de Ingeniería Mecánica consolidan liderazgo, innovación y competencias técnicas aplicadas a proyectos de impacto internacional.</p>
    </div>
    <ul class="grupos__grid">${cardsHtml}</ul>`;
}

/* ---------- 4. Animación Compacta de Especialidades de Mecánica ---------- */
function iniciarRotadorAnimado() {
  const rotador = $('#rotador-mecanica');
  const puntos = $('#ticker-puntos .ticker-punto');
  if (!rotador) return;

  const especialidades = [
    'Diseño Mecánico & Elementos Finitos (CAD/CAE)',
    'Termofluidos & Ciclos de Potencia Térmica',
    'Manufactura Avanzada CAM, CNC & Materiales',
    'Automatización Industrial, Robótica & Mecatrónica'
  ];

  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % especialidades.length;
    rotador.classList.add('is-changing');
    setTimeout(() => {
      rotador.textContent = especialidades[idx];
      rotador.classList.remove('is-changing');
      puntos.forEach((p, i) => p.classList.toggle('is-activo', i === idx));
    }, 220);
  }, 3000);
}


/* ---------- 5. Carga de datos diferida ---------- */

const SECCIONES = {
  perfil: () => cargarDatos('perfil').then(pintarPerfil),
  grupos: () => cargarDatos('grupos').then(pintarGrupos),
};

function cargarSeccion(seccion) {
  const cargar = SECCIONES[seccion.dataset.carga];
  if (cargar) {
    cargar().catch((error) => mostrarErrorDeCarga(seccion.querySelector('.contenedor'), error));
  }
}

// Carga inicial
cargarDatos('programa')
  .then(pintarPrograma)
  .catch((error) => mostrarErrorDeCarga($('#programa-contenido'), error));

iniciarRotadorAnimado();
iniciarLogoMecanica();

const porCargar = $$('[data-carga]');
if ('IntersectionObserver' in window) {
  const vigilante = new IntersectionObserver((entradas) => {
    entradas.filter((e) => e.isIntersecting).forEach((e) => {
      vigilante.unobserve(e.target);
      cargarSeccion(e.target);
    });
  }, { rootMargin: '400px 0px' });
  porCargar.forEach((seccion) => vigilante.observe(seccion));
} else {
  porCargar.forEach(cargarSeccion);
}


/* =========================================================
   6. CINEMÁTICA INTERACTIVA · ENGRANAJES & TURBINA (MECÁNICA)
   - Engranaje maestro rotatorio con dientes involutos alrededor del logo
   - Satélites planetarios y vectores de torque cinemáticos
   - Reacción fluida a cursor / toque con inercia y chispa cinemática
   ========================================================= */

function iniciarLogoMecanica() {
  const canvas = $('#canvas-logo-tesla');
  const escenario = $('#logo-escenario-tesla');
  const logo = $('#logo-mecanica-emisor');
  const heroSection = $('#hero-tesla');
  if (!canvas || !escenario || !logo) return;

  const ctx = canvas.getContext('2d');
  let dpr = window.devicePixelRatio || 1;
  let W = 0;
  let H = 0;
  let cx = 0;
  let cy = 0;
  let R_logo = 60;

  function redimensionar() {
    W = escenario.clientWidth || 380;
    H = escenario.clientHeight || 380;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    cx = W * 0.5;
    cy = H * 0.5;
    R_logo = (logo.offsetWidth * 0.5) || (W * 0.17);
  }

  redimensionar();
  window.addEventListener('resize', redimensionar);

  let mouseX = -1000;
  let mouseY = -1000;
  let mouseActivo = false;
  let pulsoImpacto = 0;
  let anguloGiro = 0;
  let velocidadAngular = 0.008;

  function actualizarCursor(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    mouseX = clientX - rect.left;
    mouseY = clientY - rect.top;
    mouseActivo = true;
  }

  function desactivarCursor() {
    mouseActivo = false;
    mouseX = -1000;
    mouseY = -1000;
  }

  escenario.addEventListener('mousemove', (e) => actualizarCursor(e.clientX, e.clientY));
  escenario.addEventListener('mouseleave', desactivarCursor);
  escenario.addEventListener('click', (e) => {
    actualizarCursor(e.clientX, e.clientY);
    pulsoImpacto = 25;
  });

  escenario.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      actualizarCursor(e.touches[0].clientX, e.touches[0].clientY);
      pulsoImpacto = 25;
    }
  }, { passive: true });

  escenario.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      actualizarCursor(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  escenario.addEventListener('touchend', desactivarCursor);

  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const lx = e.clientX - rect.left;
      const ly = e.clientY - rect.top;
      const dist = Math.hypot(lx - cx, ly - cy);
      if (dist < W * 0.72) {
        mouseX = lx;
        mouseY = ly;
        mouseActivo = true;
      }
    });
  }

  // Dibuja una corona de engranaje paramétrica
  function dibujarEngranaje(x, y, rPaso, numDientes, ang, altoDiente, colorLinea, colorRelleno, grosor) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(ang);

    ctx.beginPath();
    const pasoAng = (Math.PI * 2) / numDientes;
    const rBase = rPaso - altoDiente * 0.5;
    const rCresta = rPaso + altoDiente * 0.5;

    for (let i = 0; i < numDientes; i++) {
      const a0 = i * pasoAng;
      const a1 = a0 + pasoAng * 0.28;
      const a2 = a0 + pasoAng * 0.50;
      const a3 = a0 + pasoAng * 0.78;

      if (i === 0) {
        ctx.moveTo(Math.cos(a0) * rBase, Math.sin(a0) * rBase);
      } else {
        ctx.lineTo(Math.cos(a0) * rBase, Math.sin(a0) * rBase);
      }
      ctx.lineTo(Math.cos(a1) * rCresta, Math.sin(a1) * rCresta);
      ctx.lineTo(Math.cos(a2) * rCresta, Math.sin(a2) * rCresta);
      ctx.lineTo(Math.cos(a3) * rBase, Math.sin(a3) * rBase);
    }
    ctx.closePath();

    if (colorRelleno) {
      ctx.fillStyle = colorRelleno;
      ctx.fill();
    }
    if (colorLinea) {
      ctx.strokeStyle = colorLinea;
      ctx.lineWidth = grosor || 1.5;
      ctx.stroke();
    }
    ctx.restore();
  }

  // Chispas cinemáticas
  const particulas = [];
  function agregarChispas(x, y, cantidad, color) {
    for (let i = 0; i < cantidad; i++) {
      const ang = Math.random() * Math.PI * 2;
      const vel = 1.2 + Math.random() * 3.5;
      particulas.push({
        x,
        y,
        vx: Math.cos(ang) * vel,
        vy: Math.sin(ang) * vel,
        vida: 1,
        color: color || '#f8af3c',
        tam: 1.5 + Math.random() * 2
      });
    }
  }

  let tick = 0;

  function render() {
    ctx.clearRect(0, 0, W, H);
    tick++;

    if (pulsoImpacto > 0) pulsoImpacto--;

    // 1. Detección y respuesta al cursor
    const distMouse = Math.hypot(mouseX - cx, mouseY - cy);
    const cerca = mouseActivo && distMouse < (W * 0.65);

    let objetivoVel = 0.008;
    if (cerca) {
      objetivoVel = 0.024 + (pulsoImpacto > 0 ? 0.04 : 0);
    }
    velocidadAngular += (objetivoVel - velocidadAngular) * 0.05;
    anguloGiro += velocidadAngular;

    // 2. Halo térmico / de potencia mecánico en degradado
    const rHaloMin = R_logo + 4;
    const rHaloMax = R_logo + 42 + Math.sin(tick * 0.08) * 6 + (pulsoImpacto > 0 ? 20 : 0);
    const gradHalo = ctx.createRadialGradient(cx, cy, rHaloMin, cx, cy, rHaloMax);
    gradHalo.addColorStop(0, 'rgba(248, 175, 60, 0.42)');
    gradHalo.addColorStop(0.35, 'rgba(10, 31, 62, 0.35)');
    gradHalo.addColorStop(0.7, 'rgba(2, 132, 199, 0.12)');
    gradHalo.addColorStop(1, 'transparent');

    ctx.fillStyle = gradHalo;
    ctx.beginPath();
    ctx.arc(cx, cy, rHaloMax, 0, Math.PI * 2);
    ctx.fill();

    // 3. Corona principal de engranaje (Sun Gear)
    const rSunGear = R_logo + 16;
    dibujarEngranaje(
      cx, cy,
      rSunGear,
      18,
      anguloGiro,
      14,
      '#f8af3c',
      'rgba(10, 31, 62, 0.25)',
      2
    );

    // Círculo de paso primitivo punteado
    ctx.strokeStyle = 'rgba(248, 175, 60, 0.55)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, rSunGear, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. Anillo exterior de escala angular / nonio de precisión
    const rNonio = rSunGear + 24;
    ctx.strokeStyle = 'rgba(254, 255, 253, 0.28)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, rNonio, 0, Math.PI * 2);
    ctx.stroke();

    // Marcas de escala y vectores de torque en 360°
    const marcas = 36;
    for (let m = 0; m < marcas; m++) {
      const a = (m / marcas) * Math.PI * 2 + (anguloGiro * 0.4);
      const esMayor = m % 6 === 0;
      const len = esMayor ? 8 : 4;
      const x0 = cx + Math.cos(a) * rNonio;
      const y0 = cy + Math.sin(a) * rNonio;
      const x1 = cx + Math.cos(a) * (rNonio + len);
      const y1 = cy + Math.sin(a) * (rNonio + len);

      ctx.strokeStyle = esMayor ? '#f8af3c' : 'rgba(254, 255, 253, 0.4)';
      ctx.lineWidth = esMayor ? 1.6 : 0.9;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    }

    // 5. Engranajes planetarios satélites (3 satélites a 120°)
    const numSatelites = 3;
    const rOrbita = rSunGear + 20;
    const rPlaneta = 14;
    for (let s = 0; s < numSatelites; s++) {
      const aOrbita = (s / numSatelites) * Math.PI * 2 + (anguloGiro * 0.6);
      const px = cx + Math.cos(aOrbita) * rOrbita;
      const py = cy + Math.sin(aOrbita) * rOrbita;

      dibujarEngranaje(
        px, py,
        rPlaneta,
        8,
        -anguloGiro * 1.8,
        6,
        'rgba(248, 175, 60, 0.85)',
        'rgba(10, 31, 62, 0.5)',
        1.4
      );

      // Eje pivote del satélite
      ctx.fillStyle = '#fefffd';
      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // 6. Interacción cinemática con el cursor / dedo
    if (cerca && distMouse > R_logo) {
      const aCursor = Math.atan2(mouseY - cy, mouseX - cx);
      const origX = cx + Math.cos(aCursor) * rSunGear;
      const origY = cy + Math.sin(aCursor) * rSunGear;

      // Brazo de acople / biela cinemática
      const gradBrazo = ctx.createLinearGradient(origX, origY, mouseX, mouseY);
      gradBrazo.addColorStop(0, '#f8af3c');
      gradBrazo.addColorStop(1, '#fefffd');

      ctx.strokeStyle = gradBrazo;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(origX, origY);
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();

      // Puntos de articulación
      ctx.fillStyle = '#f8af3c';
      ctx.beginPath();
      ctx.arc(origX, origY, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#fefffd';
      ctx.shadowColor = '#f8af3c';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Generar chispas cinemáticas en el cursor y origen
      if (Math.random() < 0.45 || pulsoImpacto > 0) {
        agregarChispas(mouseX, mouseY, 2, '#f8af3c');
        agregarChispas(origX, origY, 1, '#fefffd');
      }
    }

    // 7. Actualizar y dibujar partículas/chispas
    for (let i = particulas.length - 1; i >= 0; i--) {
      const p = particulas[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vida -= 0.035;

      if (p.vida <= 0) {
        particulas.splice(i, 1);
        continue;
      }

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.vida;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.tam * p.vida, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
