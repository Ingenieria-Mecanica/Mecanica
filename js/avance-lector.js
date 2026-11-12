/* ==============================================================================
   PORTAL WEB OFICIAL · INGENIERÍA MECÁNICA · FACULTAD DE MINAS · UNAL MEDELLÍN
   Módulo Mi Avance · Lector e intérprete de Historia Académica SIA
   Procesa y estructura el texto copiado del SIA (Ctrl+A, Ctrl+C).
   Ejecución 100% en el navegador (Client-Side). No envía datos a ningún servidor.
   Plan 3538 · 180 créditos totales exigidos · Todos los derechos reservados © 2026.
   ============================================================================== */

const CREDITOS_PLAN = 180;

const TIPOLOGIAS = [
  { clave: 'FUND. OBLIGATORIA', nombre: 'Fundamentación obligatoria', grupo: 'fundamentacion', exigidos: 41 },
  { clave: 'FUND. OPTATIVA', nombre: 'Fundamentación optativa', grupo: 'fundamentacion', exigidos: 4 },
  { clave: 'DISCIPLINAR OBLIGATORIA', nombre: 'Disciplinar obligatoria', grupo: 'disciplinar', exigidos: 84 },
  { clave: 'DISCIPLINAR OPTATIVA', nombre: 'Disciplinar optativa', grupo: 'disciplinar', exigidos: 9 },
  { clave: 'LIBRE ELECCIÓN', nombre: 'Libre elección', grupo: 'libre', exigidos: 36 },
  { clave: 'TRABAJO DE GRADO', nombre: 'Trabajo de grado', grupo: 'disciplinar', exigidos: 6 },
  { clave: 'NIVELACIÓN', nombre: 'Nivelación', grupo: 'fundamentacion', exigidos: 0 },
];

const quitarTildes = (t) => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const entero = (t) => parseInt(t, 10);

// "2026-1S" -> { anio: 2026, num: 1 }
function leerPeriodo(texto) {
  const m = /^(\d{4})-(\d)/.exec(texto);
  return m ? { anio: entero(m[1]), num: entero(m[2]) } : null;
}
const clavePeriodo = (p) => p.anio * 10 + p.num;
const etiquetaPeriodo = (p) => `${p.anio}-${p.num}S`;

// Extrae una cifra usando una expresión regular
function leerCifraSuelta(texto, re) {
  const m = re.exec(texto);
  if (!m) return null;
  const v = parseFloat(m[1].replace(',', '.'));
  return Number.isNaN(v) ? null : v;
}

// Extrae el nombre de quien consulta (si aparece en el encabezado del SIA)
function leerNombreEstudiante(texto) {
  const m = /Estudiante\s*:\s*([^\n\r]+)/i.exec(texto);
  if (m) return m[1].trim();

  const mAlt = /(?:Bienvenido\(a\)|Hola)\s*,\s*([^\n\r.]+)/i.exec(texto);
  return mAlt ? mAlt[1].trim() : '';
}

// Analiza la tabla de materias inscritas / cursadas
function procesarMaterias(lineas) {
  const materias = [];
  const reMateria = /^(\d{6,8}[A-Za-z0-9-]*)\s*\t+([^\t]+)\t+(\d+)\t+([^\t]+)\t+([^\t]+)\t+([\d.,]+)\t+([^\t]+)\t+([^\t]+)/;

  for (const lin of lineas) {
    const m = reMateria.exec(lin.trim());
    if (!m) continue;

    const nota = parseFloat(m[6].replace(',', '.'));
    materias.push({
      codigo: m[1].trim(),
      nombre: m[2].trim(),
      creditos: entero(m[3]),
      tipologia: m[4].trim(),
      periodoTexto: m[5].trim(),
      periodo: leerPeriodo(m[5].trim()),
      calificacion: Number.isNaN(nota) ? 0 : nota,
      estado: m[7].trim().toUpperCase(),
      convalida: m[8].trim(),
    });
  }

  return materias;
}

// Analiza la tabla de resumen de créditos por tipología
function procesarResumenTipologias(texto) {
  const resumen = {};
  for (const t of TIPOLOGIAS) {
    resumen[t.clave] = {
      nombre: t.nombre,
      grupo: t.grupo,
      exigidos: t.exigidos,
      aprobados: 0,
      pendientes: t.exigidos,
      inscritos: 0,
    };
  }

  const lineas = texto.split(/[\r\n]+/);

  for (const lin of lineas) {
    for (const t of TIPOLOGIAS) {
      const exp = new RegExp(`^${t.clave.replace('.', '\\.')}\\s+(\\d+)\\s+(\\d+)\\s+(\\d+)`, 'i');
      const m = exp.exec(lin.trim());
      if (m) {
        resumen[t.clave].exigidos = entero(m[1]);
        resumen[t.clave].aprobados = entero(m[2]);
        resumen[t.clave].pendientes = entero(m[3]);
      }
    }
  }

  return resumen;
}

// Suma los créditos inscritos (en curso) por tipología
function cruzarInscritosPorTipologia(materias, resumen) {
  for (const m of materias) {
    if (m.estado === 'INSCRITA') {
      const k = m.tipologia.toUpperCase();
      if (resumen[k]) {
        resumen[k].inscritos = (resumen[k].inscritos || 0) + m.creditos;
      }
    }
  }
}

// Valida si el texto pegado parece realmente una historia académica del SIA
function validarTextoHistoria(texto) {
  if (!texto || typeof texto !== 'string') return false;
  const tienePalabrasClave =
    /HISTORIA ACAD[EÉ]MICA/i.test(texto) ||
    /RESUMEN DE CR[EÉ]DITOS/i.test(texto) ||
    /P\.A\.P\.A/i.test(texto) ||
    (/EXIGIDOS/i.test(texto) && /APROBADOS/i.test(texto));

  const tieneMaterias = /\d{6,8}[A-Za-z0-9-]*\s*\t+[^\t]+\t+\d+/.test(texto);
  return tienePalabrasClave && tieneMaterias;
}

// Función principal: toma el texto plano pegado y devuelve la historia estructurada
function interpretarHistoriaAcademica(texto) {
  if (!validarTextoHistoria(texto)) {
    throw new Error('El texto no parece ser una historia académica válida del SIA. Copia todo el contenido con Ctrl+A en la página del SIA y pégalo aquí.');
  }

  const lineas = texto.split(/[\r\n]+/);
  const materias = procesarMaterias(lineas);
  const resumen = procesarResumenTipologias(texto);
  cruzarInscritosPorTipologia(materias, resumen);

  const nombre = leerNombreEstudiante(texto);
  const textoNorm = quitarTildes(texto).toUpperCase();

  // Detección de requisito de idioma extranjero acreditado
  const tieneInglesAprobado = materias.some((m) => {
    const nom = quitarTildes(m.nombre).toUpperCase();
    const esIngles = /INGLES|ENGLISH|IDIOMA EXTRANJERO/i.test(nom);
    const ok = ['APROBADA', 'VALIDADA', 'CONVALIDADA'].includes(m.estado);
    return esIngles && ok;
  });

  const nivelacionCeroPendiente = resumen['NIVELACIÓN'] && resumen['NIVELACIÓN'].pendientes === 0;
  const inglesAcreditado = tieneInglesAprobado || Boolean(nivelacionCeroPendiente);

  const esMecanica =
    /MECANICA/i.test(textoNorm) ||
    /3538\s*-\s*INGENIERIA/i.test(textoNorm) ||
    /3538\s+INGENIERIA/i.test(textoNorm) ||
    /PLAN.*3538/i.test(textoNorm) ||
    /3538/i.test(textoNorm);

  return {
    materias,
    resumen,
    nombre: nombre ? nombre.trim() : '',
    papa: leerCifraSuelta(texto, /(\d\.\d{1,2})\s*\(Acumulado\)\s*Pregrado\s*-\s*P\.A\.P\.A/i),
    promedio: leerCifraSuelta(texto, /(\d\.\d{1,2})\s*\(Acumulado\)\s*Pregrado\s*-\s*Promedio/i),
    cancelados: leerCifraSuelta(texto, /Cancelados\s+en\s+los\s+Periodos\s+Cursados?\s*(\d+)/i),
    excedentes: leerCifraSuelta(texto, /Cr[ée]ditos\s+Excedentes\s*(\d+)/i),
    porcentajeSia: leerCifraSuelta(texto, /Porcentaje\s+de\s+Avance\s*([\d.,]+)\s*%/i),
    cupo: leerCifraSuelta(texto, /Cupo\s+de\s+cr[ée]ditos\s+(\d+)/i),
    disponibles: leerCifraSuelta(texto, /Cr[ée]ditos\s+disponibles\s*(-?\d+)/i),
    adicionales: leerCifraSuelta(texto, /Cr[ée]ditos\s+adicionales\s+(\d+)/i),
    esMecanica,
    esElectrica: esMecanica,
    esPetroleos: esMecanica, // alias retrocompatibles
    inglesAcreditado,
  };
}

// Exporta al ámbito global
window.LectorHistoriaSia = {
  CREDITOS_PLAN,
  TIPOLOGIAS,
  validarTexto: validarTextoHistoria,
  interpretar: interpretarHistoriaAcademica,
};
