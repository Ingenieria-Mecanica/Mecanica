/* ==============================================================================
   PORTAL WEB OFICIAL · INGENIERÍA MECÁNICA · UNAL SEDE MEDELLÍN
   Arquitectura de software, maquetación y desarrollo integral por:
   Santiago Escobar Arias · Representante Estudiantil de Ingeniería de Sistemas e Informática
   Delegados de la Representación de Ingeniería Mecánica:
   Sebastian Leonel Ruiz · Santiago Espinosa López
   Facultad de Minas — Universidad Nacional de Colombia, Sede Medellín
   ============================================================================== */

(function () {
  'use strict';

  // ==========================================================================
  // 1. CONFIGURACIÓN Y CONSTANTES OFICIALES DE INGENIERÍA MECÁNICA
  // ==========================================================================

  const SOFIA_CFG = {
    nombre: 'sofIA',
    programa: 'Ingeniería Mecánica',
    facultad: 'Facultad de Minas',
    sede: 'Sede Medellín',
    campus: 'Campus Robledo',
    creditosTotales: 180,
    duracionSemestres: 10,
    planAcuerdo: 'Acuerdo del Consejo Académico · Plan Vigente 3538',
    codigoSIA: '3538',
    codigoSNIES: '122',
    lema: 'Trabajo y Rectitud',
    añoCreacion: '1967 (Cerca de 6 décadas formando líderes en diseño, termofluidos y manufactura)',

    // Creador y Desarrollador Web
    creadorNombre: 'Santiago Escobar Arias',
    creadorRol: 'Representante Estudiantil de Ingeniería de Sistemas e Informática · Arquitecto y Creador del Portal Web',
    creadorWhatsApp: 'https://wa.me/573123772091',
    creadorTelefono: '(+57) 312 377 2091',
    creadorCorreo: 'saescobara@unal.edu.co',
    creadorInstagram: 'https://www.instagram.com/s_escobar__/',
    creadorInstagramUsuario: '@s_escobar__',

    // Representación Estudiantil Oficial y Delegados
    repreEstado: 'Actualmente no se cuenta con representante estudiantil oficial electo.',
    delegado1Nombre: 'Sebastian Leonel Ruiz',
    delegado1Cargo: 'Delegado de la Representación · Ingeniería Mecánica',
    delegado1WhatsApp: 'https://wa.me/573194408265',
    delegado1Telefono: '(+57) 319 440 8265',
    delegado1Correo: 'sleonel@unal.edu.co',
    delegado1Instagram: 'https://www.instagram.com/ler.sebas?mdxt=NXRkajJwc3hjYzk5',
    delegado1InstagramUsuario: '@ler.sebas',

    delegado2Nombre: 'Santiago Espinosa López',
    delegado2Cargo: 'Delegado de la Representación · Ingeniería Mecánica',
    delegado2WhatsApp: 'https://wa.me/573102567299',
    delegado2Telefono: '(+57) 310 256 7299',
    delegado2Correo: 'sespinosal@unal.edu.co',

    // Canales Oficiales del Programa
    canalWhatsAppOficial: 'https://whatsapp.com/channel/0029VbECGFGAe5VwEJ95hh1E',
    linkOficialPrograma: 'https://old-minas.medellin.unal.edu.co/formacion/pregrado/ingenieriamecanica',
    driveRecursos: 'https://drive.google.com/drive/folders/1MDopcD_bGUXzR4HQGhAO4YvQEBN9okQR?usp=drive_link',

    // Trámites y Asesoría en Facultad de Minas
    tramitesMinasUrl: 'https://minas.medellin.unal.edu.co/estudiantes/gestion-de-asuntos-estudiantiles/gae-solicitudes-estudiantiles',
    asesoriaMinasCorreo: 'asesorestu_med@unal.edu.co',
    asesoriaMinasTelefono: '(+57 604) 430 9653',
    asesoriaMinasUbicacion: 'Campus Robledo, Bloque M4, Medellín',
  };

  // Avatar SVG cinemático de sofIA con estética de engranaje, turbina y colores oficiales (#0a1f3e y #f8af3c)
  const SOFIA_SVG_AVATAR = `
    <svg viewBox="0 0 44 44" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="sofiaGradGlowMec" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f8af3c" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#0a1f3e" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#0a1f3e" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="sofiaGradEngranaje" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f8af3c" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>
      </defs>
      <!-- Resplandor exterior cinemático -->
      <circle cx="22" cy="22" r="20" fill="url(#sofiaGradGlowMec)" />
      <!-- Corona circular del engranaje en azul medianoche -->
      <circle cx="22" cy="22" r="14.5" fill="#0a1f3e" stroke="#f8af3c" stroke-width="1.6" />
      <!-- Dientes del engranaje maestro -->
      <g stroke="#f8af3c" stroke-width="2.2" stroke-linecap="round">
        <line x1="22" y1="4.5" x2="22" y2="7.5" />
        <line x1="22" y1="36.5" x2="22" y2="39.5" />
        <line x1="4.5" y1="22" x2="7.5" y2="22" />
        <line x1="36.5" y1="22" x2="39.5" y2="22" />
        <line x1="9.6" y1="9.6" x2="11.8" y2="11.8" />
        <line x1="32.2" y1="32.2" x2="34.4" y2="34.4" />
        <line x1="9.6" y1="34.4" x2="11.8" y2="32.2" />
        <line x1="32.2" y1="11.8" x2="34.4" y2="9.6" />
      </g>
      <!-- Centro en bombilla / turbina tri-pala amarilla -->
      <circle cx="22" cy="22" r="8.5" fill="url(#sofiaGradEngranaje)" stroke="#fefffd" stroke-width="1.2" />
      <!-- Álabes de la turbina central -->
      <path d="M22 22 L22 14.5 M22 22 L15.5 25.8 M22 22 L28.5 25.8" stroke="#0a1f3e" stroke-width="1.8" stroke-linecap="round" />
      <!-- Eje central -->
      <circle cx="22" cy="22" r="2.2" fill="#fefffd" stroke="#0a1f3e" stroke-width="1" />
    </svg>
  `;

  // ==========================================================================
  // 2. ESTRUCTURA DE DATOS E ÍNDICES EN MEMORIA
  // ==========================================================================

  const datosApp = {
    programa: null,
    perfil: null,
    componentes: null,
    plan: null,
    asignaturas: [],
    grupos: [],
    info: null,
  };

  const indices = {
    materiasPorCodigo: new Map(),
    materiasPorNombre: new Map(),
    aliasMaterias: new Map(),
    materiasPorSemestre: new Map(),
    guiasPorId: new Map(),
    calendarioFilas: [],
  };

  function normalizar(texto) {
    return (texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // ==========================================================================
  // 3. CARGA DINÁMICA DE DATOS Y CONSTRUCCIÓN DE ÍNDICES
  // ==========================================================================

  async function cargarDatos() {
    try {
      const [prog, perf, comp, plan, asig, grup, inf] = await Promise.all([
        fetch('data/programa.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
        fetch('data/perfil.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
        fetch('data/malla/componentes.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
        fetch('data/malla/plan.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
        fetch('data/malla/asignaturas.json').then((r) => (r.ok ? r.json() : [])).catch(() => []),
        fetch('data/grupos.json').then((r) => (r.ok ? r.json() : [])).catch(() => []),
        fetch('data/info.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
      ]);

      datosApp.programa = prog;
      datosApp.perfil = perf;
      datosApp.componentes = comp;
      datosApp.plan = plan;
      datosApp.asignaturas = Array.isArray(asig) ? asig : [];
      datosApp.grupos = Array.isArray(grup) ? grup : [];
      datosApp.info = inf;

      construirIndices();
    } catch (e) {
      console.warn('sofIA: Advertencia al cargar datos de Ingeniería Mecánica:', e);
    }
  }

  function construirIndices() {
    indices.materiasPorCodigo.clear();
    indices.materiasPorNombre.clear();
    indices.aliasMaterias.clear();
    indices.materiasPorSemestre.clear();
    indices.guiasPorId.clear();
    indices.calendarioFilas = [];

    // Indexar asignaturas
    datosApp.asignaturas.forEach((asig) => {
      const cod = String(asig.codigo || '').trim().toUpperCase();
      if (cod) indices.materiasPorCodigo.set(cod, asig);

      const nomNorm = normalizar(asig.nombre);
      if (nomNorm) indices.materiasPorNombre.set(nomNorm, asig);

      if (asig.semestre) {
        const sem = parseInt(asig.semestre, 10);
        if (!indices.materiasPorSemestre.has(sem)) {
          indices.materiasPorSemestre.set(sem, []);
        }
        indices.materiasPorSemestre.get(sem).push(asig);
      }
    });

    // Alias y jerga estudiantil de Ingeniería Mecánica UNAL Medellín
    const ALIAS_MATERIAS = [
      [['calculo diferencial', 'diferencial', 'calculo 1', 'calc 1'], 'Cálculo Diferencial'],
      [['calculo integral', 'integral', 'calculo 2', 'calc 2'], 'Cálculo Integral'],
      [['calculo en varias variables', 'varias variables', 'calculo 3', 'calc 3', 'cvv'], 'Cálculo en Varias Variables'],
      [['algebra lineal', 'lineal', 'algebra'], 'Álgebra Lineal'],
      [['geometria vectorial y analitica', 'geometria vectorial', 'vectorial', 'geo vec'], 'Geometría Vectorial y Analítica'],
      [['ecuaciones diferenciales', 'diferenciales', 'ed'], 'Ecuaciones Diferenciales'],
      [['metodos numericos', 'numericos'], 'Métodos Numéricos'],
      [['probabilidad y estadistica', 'estadistica', 'probabilidad'], 'Probabilidad y Estadística'],

      [['fisica mecanica', 'mecanica newtoniana', 'fisica 1'], 'Física Mecánica'],
      [['fisica de electricidad y magnetismo', 'electricidad y magnetismo', 'fisica 2', 'electromagnetismo', 'electri'], 'Física de Electricidad y Magnetismo'],
      [['fundamentos de quimica', 'quimica general', 'quimica'], 'Fundamentos de Química'],
      [['fundamentos de programacion', 'programacion', 'python', 'intro a la programacion'], 'Fundamentos de Programación'],

      [['introduccion a la ingenieria mecanica', 'intro a mecanica', 'intro mecanica', 'iim'], 'Introducción a la Ingeniería Mecánica'],
      [['dibujo basico', 'dibujo 1'], 'Dibujo Básico'],
      [['dibujo de maquinas', 'dibujo mecanico', 'cad', 'solidworks', 'inventor'], 'Dibujo de Máquinas'],

      [['estatica', 'estatica aplicada'], 'Estática'],
      [['dinamica', 'cinematica y dinamica'], 'Dinámica'],
      [['mecanica de solidos', 'solidos', 'resistencia de materiales', 'resistencia'], 'Mecánica de Sólidos'],
      [['mecanica estructural', 'estructural', 'estructuras'], 'Mecánica Estructural'],
      [['mecanismos', 'analisis de mecanismos'], 'Mecanismos'],
      [['diseno mecanico', 'diseno de maquinas', 'diseno 1'], 'Diseño Mecánico'],
      [['elementos de maquinas', 'elementos', 'edm'], 'Elementos de Máquinas'],
      [['taller de diseno mecanico', 'taller de diseno'], 'Taller de Diseño Mecánico'],

      [['termodinamica', 'termodinamica general', 'termo'], 'Termodinámica'],
      [['mecanica de fluidos', 'fluidos'], 'Mecánica de Fluidos'],
      [['transferencia de calor', 'transfe', 'calor'], 'Transferencia de Calor'],
      [['maquinas termicas e hidraulicas', 'maquinas termicas', 'turbomaquinas', 'turbinas y bombas'], 'Máquinas Térmicas e Hidráulicas'],

      [['materiales de ingenieria', 'ciencia de materiales', 'materiales'], 'Materiales de Ingeniería'],
      [['procesos de manufactura', 'manufactura 1', 'manufactura'], 'Procesos de Manufactura'],
      [['metodos de conformado', 'conformado', 'manufactura 2', 'deformacion plastica'], 'Métodos de Conformado'],

      [['circuitos y maquinas electricas', 'circuitos electricos', 'maquinas electricas', 'cme'], 'Circuitos y Máquinas Eléctricas'],
      [['automatizacion y control', 'control', 'sistemas de control'], 'Automatización y Control'],
      [['mecatronica', 'diseno mecatronico'], 'Mecatrónica'],
      [['dinamica de sistemas y control', 'dinamica de sistemas', 'control avanzado'], 'Dinámica de Sistemas y Control'],
      [['gestion de activos', 'mantenimiento', 'confiabilidad', 'gestion del mantenimiento'], 'Gestión de Activos'],

      [['fundamentos de proyectos en ingenieria', 'fundamentos de proyectos', 'fpi'], 'Fundamentos de Proyectos en Ingeniería'],
      [['formulacion y evaluacion de proyectos', 'formulacion de proyectos', 'fep'], 'Formulación y Evaluación de Proyectos'],
      [['proyecto de ingenieria mecanica', 'proyecto integrado', 'proyecto de diseno', 'pim'], 'Proyecto de Ingeniería Mecánica'],

      [['trabajo de grado', 'tesis', 'grado', 'tg'], 'Trabajo de Grado'],
      [['practica de extension', 'pasantia', 'practica profesional', 'practica empresarial'], 'Práctica de Extensión'],
      [['asignaturas de posgrado', 'materias de posgrado', 'posgrado como opcion de grado'], 'Asignaturas de Posgrado'],
    ];

    ALIAS_MATERIAS.forEach(([sinonimos, nombreOficial]) => {
      const nomNorm = normalizar(nombreOficial);
      const asig = indices.materiasPorNombre.get(nomNorm);
      if (asig) {
        sinonimos.forEach((sin) => {
          indices.aliasMaterias.set(normalizar(sin), asig);
        });
      }
    });

    // Indexar guías de info.json
    if (datosApp.info && Array.isArray(datosApp.info.guias)) {
      datosApp.info.guias.forEach((guia) => {
        if (guia.id) indices.guiasPorId.set(guia.id, guia);
        if (guia.id === 'calendario' && Array.isArray(guia.semanas)) {
          guia.semanas.forEach((sem) => {
            indices.calendarioFilas.push({
              evento: sem.evento || sem.titulo || '',
              fecha: sem.fecha || sem.plazo || '',
              grupo: sem.grupo || 'General',
              eventoNorm: normalizar(sem.evento || sem.titulo || ''),
            });
          });
        }
      });
    }
  }

  // ==========================================================================
  // 4. MOTOR DE RESPUESTA EN LENGUAJE NATURAL (PLN)
  // ==========================================================================

  function responderPregunta(consultaOriginal) {
    const pregunta = (consultaOriginal || '').trim();
    const preguntaNorm = normalizar(pregunta);

    if (!preguntaNorm) {
      return {
        texto: 'Por favor escribe tu consulta sobre el programa de Ingeniería Mecánica, la malla curricular (180 créditos), materias, prerrequisitos, grupos estudiantiles (Hydrómetra, ASME, UN ToyLab), trámites ante la Facultad de Minas o recursos de estudio en Drive.',
        chips: ['¿Qué es la malla curricular?', '¿Qué tipo de materias hay?', '¿Por qué estudiar Mecánica?'],
      };
    }

    // ------------------------------------------------------------------------
    // 1. Saludos y Presentación
    // ------------------------------------------------------------------------
    if (/^(hola|buen(as|os)?|saludos|hey|que tal|iniciar|comenzar|hi|hello)$/.test(preguntaNorm) || preguntaNorm.startsWith('hola sofia')) {
      return {
        texto: `¡Hola! Soy **${SOFIA_CFG.nombre}**, tu asistente inteligente del programa de **${SOFIA_CFG.programa}** de la **${SOFIA_CFG.facultad}** (UNAL Medellín).

Pregúntame con total confianza sobre:
- **Malla Curricular y prerrequisitos** de las asignaturas del plan (180 créditos).
- **Tipos de materias** y componentes (Fundamentación 45 cr, Disciplinar 99 cr, Libre Elección 36 cr).
- **¿Por qué estudiar Ingeniería Mecánica?** (CAD/CAE, Termofluidos, Manufactura CNC, Mecatrónica, Gestión de Activos).
- **¿Quién es el creador de la web?** (Santiago Escobar Arias).
- **Representación y Delegados de Carrera:** (Sebastian Leonel Ruiz y Santiago Espinosa López).
- **Grupos Estudiantiles:** Hydrómetra UNAL, ASME UN Medellín y UN ToyLab.
- **¿Cómo hacer cambio de carrera / traslados?** ante la Facultad de Minas.
- **Alianzas estratégicas** (SolidWorks, ANSYS, AutoCAD, ICETEX, Sapiencia, Metro Cívica).
- **Banco de Recursos / Drive oficial** con talleres, parciales y guías de laboratorio.

¿Sobre qué tema te gustaría consultar hoy?`,
        chips: [
          '¿Qué es la malla curricular?',
          '¿Qué tipo de materias hay?',
          '¿Por qué estudiar Mecánica?',
          'Contacto de los Delegados',
          'Grupos Estudiantiles',
          'Banco de Recursos en Drive',
        ],
      };
    }

    // ------------------------------------------------------------------------
    // 2. ¿Quién es el Creador de la Web?
    // ------------------------------------------------------------------------
    if (/creador|quien creo|quien hizo|quien desarrollo|desarrollador|autor|santiago escobar|quien construyo esta web|quien programo/.test(preguntaNorm)) {
      return {
        texto: `### Creador y Arquitecto de Software de la Plataforma 💻

Este portal web oficial, sus simuladores de avance, la malla curricular interactiva y yo (**${SOFIA_CFG.nombre}**) fuimos creados y desarrollados integralmente por:

👨‍💻 **${SOFIA_CFG.creadorNombre}**
- **Rol:** ${SOFIA_CFG.creadorRol}.
- **Propósito:** Brindar herramientas digitales de vanguardia, transparentes y gratuitas para fortalecer la vida académica, el seguimiento curricular y el bienestar de los estudiantes de la **Facultad de Minas**.
- **Canal de contacto directo:**
  - WhatsApp: [Chat con Santiago Escobar](${SOFIA_CFG.creadorWhatsApp}) \`${SOFIA_CFG.creadorTelefono}\`
  - Correo institucional: \`${SOFIA_CFG.creadorCorreo}\`
  - Instagram: [@s_escobar__](${SOFIA_CFG.creadorInstagram})

El proyecto cuenta con propiedad intelectual y derechos de autor conforme a la Ley 23 de 1982 y normativas de software de la UNAL Medellín.`,
        chips: ['Contacto de los Delegados', '¿Qué es la malla curricular?', 'Banco de Recursos en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 3. Representación Estudiantil y Delegados de Ingeniería Mecánica
    // ------------------------------------------------------------------------
    if (/repre|representante|representacion|delegado|delegados|sebastian leonel|ruiz|santiago espinosa|contacto repre|quien es el representante/.test(preguntaNorm)) {
      return {
        texto: `### Representación Estudiantil · Ingeniería Mecánica ⚙️

ℹ️ **Estado de la Representación:**
**${SOFIA_CFG.repreEstado}**

Para garantizar el acompañamiento y canalizar las inquietudes de los estudiantes ante el Comité Asesor y la Facultad de Minas, el programa cuenta con dos **Delegados de la Representación**:

👤 **${SOFIA_CFG.delegado1Nombre}** (Delegado de la Representación)
- **WhatsApp:** [Chat con Sebastian Leonel](${SOFIA_CFG.delegado1WhatsApp}) \`${SOFIA_CFG.delegado1Telefono}\`
- **Correo institucional:** \`${SOFIA_CFG.delegado1Correo}\`
- **Instagram:** [@ler.sebas](${SOFIA_CFG.delegado1Instagram})

👤 **${SOFIA_CFG.delegado2Nombre}** (Delegado de la Representación)
- **WhatsApp:** [Chat con Santiago Espinosa](${SOFIA_CFG.delegado2WhatsApp}) \`${SOFIA_CFG.delegado2Telefono}\`
- **Correo institucional:** \`${SOFIA_CFG.delegado2Correo}\`

📲 **Canales oficiales del programa:**
- **Canal Oficial de WhatsApp:** [Canal de Ingeniería Mecánica](${SOFIA_CFG.canalWhatsAppOficial})
- **Página oficial de la carrera:** [old-minas.medellin.unal.edu.co](${SOFIA_CFG.linkOficialPrograma})
- **Carpeta Oficial de Recursos en Drive:** [Recursos en Google Drive](${SOFIA_CFG.driveRecursos})

Escríbeles para dudas curriculares, solicitudes ante el Área Curricular de Ingeniería Mecánica e Ingeniería de Materiales (IMIM) o acompañamiento académico.`,
        chips: ['Canal Oficial de WhatsApp', 'Banco de Recursos en Drive', 'Malla Curricular'],
      };
    }

    // ------------------------------------------------------------------------
    // 4. ¿Qué es la Malla Curricular?
    // ------------------------------------------------------------------------
    if (/que es la malla|malla curricular|explicar la malla|como funciona la malla|ver la malla|entender la malla/.test(preguntaNorm)) {
      return {
        texto: `La **Malla Curricular de Ingeniería Mecánica** (${SOFIA_CFG.planAcuerdo}, Código SIA **${SOFIA_CFG.codigoSIA}**, SNIES **${SOFIA_CFG.codigoSNIES}**) es la ruta formativa de **10 semestres** y **180 créditos**:

- **Semáforo interactivo:** Al hacer clic en cualquier asignatura en la [Malla Curricular](malla.html), se iluminan en **azul disciplinar** sus prerrequisitos y en **amarillo/dorado** las materias que te desbloquea a futuro.
- **Colores por componente:** Azul disciplinar (\`#0284c7\`) para formación disciplinar, violeta (\`#7c3aed\`) para fundamentación y dorado (\`#f8af3c\`) para libre elección.
- **Sombreado de materias aprobadas:** Al cargar tu historia académica en la sección [Mi Avance](avance.html), puedes activar el interruptor *"Sombrear aprobadas"* para ver tu avance reflejado en tiempo real sobre la malla.
- **Banco de materiales:** En la pestaña de Malla tienes acceso directo a la [Carpeta Oficial de Recursos en Google Drive](${SOFIA_CFG.driveRecursos}) con parciales, laboratorios y talleres.`,
        chips: ['¿Qué tipo de materias hay?', 'Prerrequisitos de Diseño Mecánico', 'Ver Banco en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 5. ¿Qué tipos de materias hay? (Componentes y Distribución)
    // ------------------------------------------------------------------------
    if (/que tipo de materias|tipos de materias|componentes|agrupaciones|tipologia|creditos del plan|cuantos creditos son|como se dividen las materias/.test(preguntaNorm)) {
      return {
        texto: `En el plan curricular de **Ingeniería Mecánica** existen **3 grandes componentes de formación** que totalizan **180 créditos**:

1. **Componente de Fundamentación (45 créditos = 25%):**
   - **Matemáticas, Probabilidad y Estadística (27 cr):** Cálculo Diferencial, Integral, Varias Variables, Álgebra Lineal, Geometría Vectorial, Ecuaciones Diferenciales, Métodos Numéricos y Probabilidad y Estadística.
   - **Física (8 cr):** Física Mecánica y Física de Electricidad y Magnetismo.
   - **Química (3 cr):** Fundamentos de Química.
   - **Informática (3 cr):** Fundamentos de Programación (Python).
   - **Optativa de Fundamentación (4 cr):** Biología general, geología o asignaturas científicas afines.

2. **Componente de Formación Disciplinar o Profesional (99 créditos = 55%):**
   - **Introducción a la disciplina (2 cr):** Introducción a la Ingeniería Mecánica.
   - **Mecatrónica (13 cr):** Circuitos y Máquinas Eléctricas, Automatización y Control, Mecatrónica.
   - **Máquinas y Termofluidos (14 cr):** Termodinámica, Mecánica de Fluidos, Transferencia de Calor, Máquinas Térmicas e Hidráulicas.
   - **Mecánica y Diseño (30 cr):** Dibujo Básico, Dibujo de Máquinas, Estática, Dinámica, Mecánica de Sólidos, Mecánica Estructural, Mecanismos, Diseño Mecánico, Elementos de Máquinas, Taller de Diseño Mecánico.
   - **Materiales y Manufactura (15 cr):** Materiales de Ingeniería, Procesos de Manufactura, Métodos de Conformado.
   - **Proyectos (10 cr):** Fundamentos de Proyectos en Ingeniería (FPI), Formulación y Evaluación de Proyectos (FEP), Proyecto de Ingeniería Mecánica (PIM).
   - **Optativas Disciplinares (9 cr):** CAD/CAM/CAE, Elementos Finitos (FEA), Soldadura, Energías Renovables, Tribología, etc.
   - **Trabajo de Grado (6 cr):** Pasantía de extensión empresarial, proyecto de investigación o materias de posgrado.

3. **Componente de Libre Elección (36 créditos = 20% del plan):**
   - Para complementar tu perfil en robótica, ciencia de datos, inteligencia artificial, finanzas o cualquier área de la universidad.`,
        chips: ['¿Por qué estudiar Mecánica?', 'Prerrequisitos de Termodinámica', 'Ir a Mi Avance'],
      };
    }

    // ------------------------------------------------------------------------
    // 6. ¿Por qué estudiar Ingeniería Mecánica? / Fortalezas únicas
    // ------------------------------------------------------------------------
    if (/por que estudiar mecanica|por que estudiar ingenieria mecanica|fortalezas|ventajas|campos de accion|perfil del egresado|a que se dedica|por que mecanica/.test(preguntaNorm)) {
      return {
        texto: `**¿Por qué estudiar Ingeniería Mecánica en la UNAL Medellín?**

Nuestro programa en la **Facultad de Minas** cuenta con cerca de **60 años de tradición y liderazgo** (fundado en 1967) y Acreditación de Alta Calidad del MEN:

1. **Diseño Mecánico y Simulación Avanzada (CAD/CAE):**
   Dominio de modelado paramétrico 3D, cinemática y análisis por elementos finitos (**FEA/CAE**) para predecir esfuerzos, fatiga y vibraciones en componentes críticos.

2. **Termofluidos, Ciencias Térmicas y Energía:**
   Modelación de ciclos de potencia, turbinas de gas/vapor, calderas, bombas hidráulicas y sistemas de climatización y refrigeración industrial, claves en la transición energética.

3. **Manufactura Avanzada y Materiales (CAM/CNC):**
   Formación directa en los talleres de Campus Robledo en centros de mecanizado CNC de 5 ejes, torneado, conformado plástico, fundición y procesos de soldadura especializada.

4. **Mecatrónica, Automatización y Robótica:**
   Integración de actuadores electrohidráulicos y electroneumáticos, sensórica industrial, servomotores y lazo de control cerrado PID para robótica industrial.

5. **Confiabilidad y Gestión de Activos:**
   Optimización de la disponibilidad de maquinaria, mantenimiento predictivo basado en vibraciones y tribología industrial.

6. **Ecosistema de Grupos y Competencia:**
   Presencia en **Hydrómetra UNAL** (campeones mundiales de catamaranes solares), **ASME UN Medellín** (red global de ingenieros mecánicos) y **UN ToyLab** (innovación y diseño dinámico).`,
        chips: ['Grupos Estudiantiles', 'Ver Malla Curricular', 'Contacto de los Delegados'],
      };
    }

    // ------------------------------------------------------------------------
    // 7. ¿Cómo hacer cambio de carrera / Traslado de programa?
    // ------------------------------------------------------------------------
    if (/cambio de carrera|traslado|cambiarme de carrera|cambiarme de programa|traslado de programa|pasarme a|homologacion/.test(preguntaNorm)) {
      return {
        texto: `**¿Cómo solicitar Traslado de Programa Curricular (Cambio de carrera a Mecánica)?**

El trámite oficial se realiza ante el Consejo de la **Facultad de Minas** conforme al Estatuto Estudiantil (**Acuerdo 008 de 2008** del CSU):

1. **Requisitos Normativos Básicos:**
   - Tener la condición de estudiante activo en la UNAL.
   - Contar con un **P.A.P.A. competitivo** (el Comité Asesor de Ingeniería Mecánica evalúa el corte según cupos disponibles).
   - Tener suficiente **cupo de créditos disponibles** en el SIA para culminar el plan de 180 créditos.
   - Haber cursado al menos el número de créditos exigido en tu programa de origen.

2. **Procedimiento de Radicación:**
   - La convocatoria se abre semestralmente conforme al Calendario Académico de la sede.
   - Se radica formalmente mediante el **SGS (Sistema de Gestión de Solicitudes)** de la Facultad de Minas:
     🔗 [Portal de Solicitudes GAE Minas](${SOFIA_CFG.tramitesMinasUrl})
   - Seleccionas la solicitud *«Traslado de programa curricular»*, adjuntas tu carta de motivación y soportes.

3. **Asesoría y Acompañamiento:**
   - Si tienes dudas sobre convalidaciones o cupo de créditos, escribe desde tu correo institucional a **Asesoría Estudiantil de Minas**: \`${SOFIA_CFG.asesoriaMinasCorreo}\` (Campus Robledo, Bloque M4).`,
        chips: ['Portal Solicitudes SGS', 'Calendario académico', '¿Qué es el P.A.P.A.?'],
      };
    }

    // ------------------------------------------------------------------------
    // 8. Alianzas Estratégicas y Convenios
    // ------------------------------------------------------------------------
    if (/alianza|alianzas|convenio|convenios|sapiencia|icetex|metro|civica|beneficios de bienestar|becas/.test(preguntaNorm)) {
      return {
        texto: `**Alianzas Estratégicas y Convenios (UNAL Sede Medellín y Facultad de Minas):**

1. **Alianzas de Permanencia y Bienestar:**
   - **ICETEX:** Líneas de crédito tradicionales, condonables y subsidios de sostenimiento.
   - **Sapiencia (Alcaldía de Medellín):** Fondos de Presupuesto Participativo, Fondo EPM y Becas Medellín para matrícula y sostenimiento.
   - **Metro de Medellín (Cívica Estudiante):** Tarifa preferencial con descuento superior al 50% en Metro, Tranvía, Metrocable y Metroplús.
   - **Auxilios de Bienestar UNAL:** Apoyo alimentario, bono de transporte y residencias estudiantiles (gestión en Bloque M4 Robledo / Bloque 11A Volador).

2. **Convenios de Software Técnico y Simulación:**
   - **Software CAD/CAE en Salas de Minas:** Licencias institucionales de **SolidWorks, Autodesk Inventor, AutoCAD Mechanical, ANSYS (FEA/CFD), MATLAB/Simulink y Mastercam**.
   - **GitHub Student Developer Pack:** Cuentas Pro, GitHub Copilot gratuito y créditos en la nube (AWS, Azure, DigitalOcean).
   - **Autodesk Educación:** Licencias completas gratuitas con correo institucional \`@unal.edu.co\`.
   - **Microsoft 365 & JetBrains:** Herramientas completas para estudiantes.

Consulta todos los convenios detallados en la sección [Convenios](convenios.html).`,
        chips: ['Ver sección Convenios', 'Auxilios de Bienestar', '¿Quién es el creador de la web?'],
      };
    }

    // ------------------------------------------------------------------------
    // 9. Unidad Compartida / Google Drive de Recursos
    // ------------------------------------------------------------------------
    if (/drive|unidad compartida|banco de recursos|material de estudio|parciales pasados|parciales viejos|talleres|apuntes|libros/.test(preguntaNorm)) {
      return {
        texto: `### Carpeta Oficial de Recursos · Ingeniería Mecánica 📚

Los talleres de estática y dinámica, parciales anteriores de termofluidos y diseño, guías de laboratorio de manufactura y libros guía están centralizados en el **Google Drive Oficial**:

🔗 **[Abrir Carpeta de Recursos de Mecánica en Google Drive](${SOFIA_CFG.driveRecursos})**

💡 *Recomendación:* Inicia sesión con tu correo institucional (\`@unal.edu.co\`) para tener acceso inmediato a todas las carpetas organizadas por semestre y materia.`,
        chips: ['Ver Malla Curricular', 'Canal Oficial de WhatsApp', 'Prerrequisitos de materias'],
      };
    }

    // ------------------------------------------------------------------------
    // 10. Prerrequisitos de materias específicas
    // ------------------------------------------------------------------------
    const esConsultaPrereq = /prerrequisit|prerequisit|requisito|que pide|que necesito para ver|para matricular|correquisit|abrir|correr/.test(preguntaNorm);
    const materiaEncontrada = buscarAsignaturaPorTexto(preguntaNorm);

    if (materiaEncontrada && (esConsultaPrereq || preguntaNorm.includes(normalizar(materiaEncontrada.nombre)))) {
      const preCodigos = materiaEncontrada.prerrequisitos || [];
      const correqCodigos = materiaEncontrada.correquisitos || [];

      let detallePrereq = '';
      if (preCodigos.length === 0) {
        detallePrereq = 'No tiene prerrequisitos. La puedes matricular desde tu primer semestre (según tu cupo de créditos y cita del SIA).';
      } else {
        const nombresPre = preCodigos.map((cod) => {
          const preMat = indices.materiasPorCodigo.get(cod);
          return preMat ? `• **${preMat.nombre}** (\`${cod}\`)` : `• Asignatura código \`${cod}\``;
        }).join('\n');
        detallePrereq = `**Prerrequisito(s) necesario(s):**\n${nombresPre}`;
      }

      let detalleCorreq = '';
      if (correqCodigos.length > 0) {
        const nombresCorreq = correqCodigos.map((cod) => {
          const cMat = indices.materiasPorCodigo.get(cod);
          return cMat ? `• **${cMat.nombre}** (\`${cod}\`)` : `• Asignatura código \`${cod}\``;
        }).join('\n');
        detalleCorreq = `\n\n**Correquisito(s) (simultáneos):**\n${nombresCorreq}`;
      }

      const semestreTxt = materiaEncontrada.semestre ? `Semestre sugerido: **${materiaEncontrada.semestre}°**` : 'Asignatura Optativa';
      const obligatoriaTxt = materiaEncontrada.obligatoria ? 'Obligatoria' : 'Optativa';

      const chipsPre = preCodigos
        .map((cod) => indices.materiasPorCodigo.get(cod))
        .filter(Boolean)
        .map((m) => `Prerrequisitos de ${m.nombre}`);

      return {
        texto: `### ${materiaEncontrada.nombre} (\`${materiaEncontrada.codigo}\`)

${detallePrereq}${detalleCorreq}

- **Créditos:** ${materiaEncontrada.creditos}
- **Tipología:** ${obligatoriaTxt} (${materiaEncontrada.agrupacion || 'General'})
- **Nivel:** ${semestreTxt}

Puedes consultar esta asignatura de forma interactiva en la [Malla Curricular](malla.html).`,
        chips: chipsPre.length > 0 ? chipsPre.slice(0, 3) : ['Ver Malla Curricular', 'Banco de Recursos en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 11. Grupos Estudiantiles (Hydrómetra, ASME, UN ToyLab)
    // ------------------------------------------------------------------------
    if (/hydrometra|asme|untoylab|toy lab|semillero|semilleros|grupos estudiantiles|capitulo estudiante|capitulo tecnico/.test(preguntaNorm)) {
      return {
        texto: `### Grupos Estudiantiles y Capítulos Técnicos · Ingeniería Mecánica 🛠️

En Ingeniería Mecánica la vida extracurricular e investigativa cuenta con tres grupos destacados:

1. **Hydrómetra UNAL (Semillero de Movilidad Sostenible y Eficiencia Energética):**
   - Fundado en 2014, diseña y construye prototipos náuticos y terrestres de máxima eficiencia energética.
   - **Logro insignia:** Campeones mundiales del concurso internacional *HydroContest* en Francia.
   - **Instagram:** [@hydrometra](https://www.instagram.com/hydrometra/)

2. **ASME UN Medellín (American Society of Mechanical Engineers):**
   - Sección estudiantil de la red global más prestigiosa de ingeniería mecánica.
   - Enfocado en conferencias técnicas con la industria, visitas empresariales, códigos de diseño y el programa social *Ingeniería para la Vida*.
   - **Instagram:** [@asmeun_med](https://www.instagram.com/asmeun_med/)

3. **UN ToyLab (Laboratorio y Semillero de Ingeniería Lúdica):**
   - Fusiona la cinemática, la dinámica de mecanismos y el diseño con el prototipado de juguetes tecnológicos y aerodeslizadores para divulgación científica.
   - **Instagram:** [@untoylab](https://www.instagram.com/untoylab?xtok=OW5pb3pmdjR0dmU2)

¡Síguelos en sus redes para unirte en sus convocatorias de nuevos integrantes!`,
        chips: ['Instagram Hydrómetra', 'Instagram ASME', 'Instagram UN ToyLab'],
      };
    }

    // ------------------------------------------------------------------------
    // 12. Canal de WhatsApp y Redes del Programa
    // ------------------------------------------------------------------------
    if (/canal de whatsapp|grupo de whatsapp|wpp de materias|grupo de estudio|comunidad de wpp|whatsapp/.test(preguntaNorm)) {
      return {
        texto: `### Canales Oficiales de Comunicación en WhatsApp 💬

- **Canal Oficial del Programa:** Únete al [Canal Oficial de WhatsApp de Ingeniería Mecánica](${SOFIA_CFG.canalWhatsAppOficial}) para recibir información sobre convocatorias, monitorías, becas y eventos académicos.
- **Contacto con los Delegados:**
  - Sebastian Leonel Ruiz: [Chat de WhatsApp](${SOFIA_CFG.delegado1WhatsApp}) \`${SOFIA_CFG.delegado1Telefono}\`
  - Santiago Espinosa López: [Chat de WhatsApp](${SOFIA_CFG.delegado2WhatsApp}) \`${SOFIA_CFG.delegado2Telefono}\``,
        chips: ['Canal Oficial de WhatsApp', 'Contacto de los Delegados', 'Banco en Drive'],
      };
    }

    // ------------------------------------------------------------------------
    // 13. Materias de último semestre / Décimo semestre en Mecánica
    // ------------------------------------------------------------------------
    if (/ultimo semestre|ultimos semestres|decimo semestre|semestre 10|10 semestre|materias para graduarme|terminar la carrera/.test(preguntaNorm)) {
      return {
        texto: `En el **10° y último semestre** de Ingeniería Mecánica el plan está diseñado para culminar tu formación profesional:

1. **Trabajo de Grado (\`3007424\` - 6 créditos):**
   Modalidades oficiales en la Facultad de Minas:
   - **Práctica de Extensión:** Pasantía empresarial en industrias de manufactura, energía, automotriz, aeroespacial o consultoría técnica.
   - **Proyecto de Investigación:** En laboratorios de manufactura CNC, termofluidos, metrología o materiales en Campus Robledo.
   - **Asignaturas de Posgrado:** Cursar materias de la Maestría en Ingeniería Mecánica o Materiales en la Facultad de Minas.

2. **Créditos Disciplinares y de Libre Elección:**
   Completar los **36 créditos** de libre elección exigidos.

3. **Requisitos de Grado:**
   - Cumplir la suficiencia en idioma extranjero (Inglés B1/B2 según tu cohorte).
   - Tener aprobados los **180 créditos** del plan de estudios.

Monitorea tu progreso en tiempo real en [Mi Avance](avance.html).`,
        chips: ['Prerrequisitos de Trabajo de Grado', 'Ir a Mi Avance', 'Ver Malla Curricular'],
      };
    }

    // ------------------------------------------------------------------------
    // 14. Materias por semestre (Semestre 1 al 10)
    // ------------------------------------------------------------------------
    const matchSem = preguntaNorm.match(/semestre\s*([1-9]|10)\b|primer semestre|segundo semestre|tercer semestre|cuarto semestre|quinto semestre|sexto semestre|septimo semestre|octavo semestre|noveno semestre|decimo semestre/);
    if (matchSem) {
      let numSem = 0;
      if (matchSem[1]) {
        numSem = parseInt(matchSem[1], 10);
      } else {
        const ord = matchSem[0];
        if (ord.includes('primer')) numSem = 1;
        else if (ord.includes('segund')) numSem = 2;
        else if (ord.includes('tercer')) numSem = 3;
        else if (ord.includes('cuart')) numSem = 4;
        else if (ord.includes('quint')) numSem = 5;
        else if (ord.includes('sext')) numSem = 6;
        else if (ord.includes('septim')) numSem = 7;
        else if (ord.includes('octav')) numSem = 8;
        else if (ord.includes('noven')) numSem = 9;
        else if (ord.includes('decim')) numSem = 10;
      }

      if (numSem >= 1 && numSem <= 10) {
        const materiasSem = indices.materiasPorSemestre.get(numSem) || [];
        if (materiasSem.length > 0) {
          const listaTxt = materiasSem
            .map((asig) => {
              const preCount = asig.prerrequisitos?.length || 0;
              const preTxt = preCount === 0 ? '_Sin prereq_' : `_${preCount} prerrequisito(s)_`;
              return `• **${asig.nombre}** (\`${asig.codigo}\`, ${asig.creditos} cr) — ${preTxt}`;
            })
            .join('\n');

          const creditosTotal = materiasSem.reduce((acc, m) => acc + (m.creditos || 0), 0);

          return {
            texto: `### Asignaturas sugeridas para Semestre ${numSem}° (${creditosTotal} créditos en la ruta)

${listaTxt}

Puedes explorar sus relaciones en la [Malla Curricular](malla.html).`,
            chips: materiasSem.slice(0, 3).map((m) => `Prerrequisitos de ${m.nombre}`),
          };
        }
      }
    }

    // ------------------------------------------------------------------------
    // 15. Cancelación de materias o cancelación de semestre
    // ------------------------------------------------------------------------
    if (/cancelar|cancelacion|cancelaciones|extemporanea|retirar materia|plazo cancelar|hasta cuando cancelar/.test(preguntaNorm)) {
      return {
        texto: `**Plazos y Condiciones para Cancelar Asignaturas en la Facultad de Minas (Pregrado):**

1. **Semana 3 (Cancelación sin pérdida de créditos):**
   - Es el periodo en el SIA donde puedes retirar asignaturas y los créditos regresan completos a tu bolsa disponible para futuros semestres.

2. **Semana 8 (Cancelación ordinaria con pérdida de créditos):**
   - Puedes cancelar la materia en el SIA hasta esta semana. No afectará tu promedio acumulado, pero esos créditos no se devuelven a tu bolsa.

3. **Cancelación Extemporánea (Por fuerza mayor o enfermedad):**
   - Si superaste la semana 8 y sufriste una calamidad médica, psicológica o laboral comprobable, radicas la solicitud ante el **SGS de la Facultad de Minas**:
     🔗 [Portal Solicitudes SGS Minas](${SOFIA_CFG.tramitesMinasUrl})
   - Adjuntas los certificados médicos avalados por Bienestar Universitario (Bloque M4 / Robledo).`,
        chips: ['Portal Solicitudes SGS', 'Calendario académico', 'Asesoría Estudiantil'],
      };
    }

    // ------------------------------------------------------------------------
    // 16. Consultas del Calendario Académico
    // ------------------------------------------------------------------------
    if (/calendario|fechas|cuando empiezan clases|cuando terminan|semana de induccion|recesos|evaluacion docente/.test(preguntaNorm)) {
      if (indices.calendarioFilas.length > 0) {
        const palabrasClave = preguntaNorm.split(' ').filter((p) => p.length > 3);
        const coincidencias = indices.calendarioFilas.filter((f) =>
          palabrasClave.some((p) => f.eventoNorm.includes(p))
        );

        if (coincidencias.length > 0) {
          const listado = coincidencias
            .slice(0, 5)
            .map((c) => `• **${c.evento}:** ${c.fecha} _(${c.grupo})_`)
            .join('\n');

          return {
            texto: `**Fechas encontradas en el Calendario Académico Oficial:**\n\n${listado}\n\nPuedes revisar todas las fechas en la guía de [Información General](info.html).`,
            chips: ['Cancelar materias', 'Citas del SIA', 'Bolsa de créditos'],
          };
        }
      }

      return {
        texto: `El **Calendario Académico Oficial (2026-2S)** de la UNAL Sede Medellín establece los hitos clave para matrícula, inicio de clases, cancelaciones y cierre de actas.

Consulta la tabla completa de fechas discriminada por semanas en la sección de [Información General](info.html).`,
        chips: ['Plazos para cancelar materias', 'Citas del SIA', 'Bolsa de créditos'],
      };
    }

    // ------------------------------------------------------------------------
    // 17. P.A.P.A., Citas SIA y Bolsa de Créditos
    // ------------------------------------------------------------------------
    if (/papa|promedio|citas sia|dninfoa|bolsa de creditos|cupo de creditos|creditos adicionales|como calcular el papa/.test(preguntaNorm)) {
      return {
        texto: `**Conceptos Clave del Sistema Académico SIA:**

- **P.A.P.A. (Promedio Aritmético Ponderado Acumulado):**
  Se calcula multiplicando la calificación final de cada materia cursada (aprobada o reprobada) por sus créditos, sumando los productos y dividiéndolos entre el total de créditos cursados.
  Determina tu grupo de citación para matrícula, adjudicación de becas y traslados de programa.

- **Citas DNINFOA:**
  Se asignan en 4 grupos de prelación basados en tu P.A.P.A. del periodo anterior y avance de carrera:
  - *Grupo 1:* Estudiantes con mejores promedios y deportistas representativos.
  - *Grupos 2, 3 y 4:* Orden sucesivo de cita para inscripción de asignaturas.

- **Bolsa de Créditos:**
  Recibes un cupo inicial para tu plan (180 créditos exigidos + 90 créditos de bolsa adicional en Ingeniería Mecánica). Si mantienes un P.A.P.A. sobresaliente, puedes solicitar créditos adicionales a la Vicedecanatura Académica vía SGS.

Calcula tu proyección en [Mi Avance](avance.html) o lee la guía completa en [Información General](info.html).`,
        chips: ['Ir a Mi Avance', '¿Cómo hacer cambio de carrera?', 'Ver Malla Curricular'],
      };
    }

    // ------------------------------------------------------------------------
    // 18. Horas de Corresponsabilidad
    // ------------------------------------------------------------------------
    if (/corresponsabilidad|horas de corresponsabilidad|servicio social|beneficiarios bienestar/.test(preguntaNorm)) {
      return {
        texto: `**Horas de Corresponsabilidad en la UNAL:**

Si eres beneficiario de apoyos socioeconómicos de Bienestar Universitario (Gestión Alimentaria, Residencias o Bonos de Transporte):
- Debes cumplir entre **20 y 40 horas** por semestre de actividades solidarias en dependencias de la universidad.
- En la Facultad de Minas puedes cumplirlas apoyando laboratorios de manufactura, fundición, salas de diseño CAD, biblioteca de Robledo o eventos académicos.
- El registro y legalización se realiza en el sistema de Bienestar Universitario.`,
        chips: ['Auxilios de Bienestar', 'Información General', 'Contacto Asesoría Minas'],
      };
    }

    // ------------------------------------------------------------------------
    // 19. Laboratorios de Ingeniería Mecánica
    // ------------------------------------------------------------------------
    if (/laboratorio|laboratorios|maquinas herramientas|cnc|fundicion|soldadura|ciencias termicas|metrologia/.test(preguntaNorm)) {
      return {
        texto: `**Laboratorios e Infraestructura de Ingeniería Mecánica:**

En el **Campus Robledo**, el programa cuenta con espacios de manufactura e investigación de vanguardia:
- **Laboratorio de Máquinas Herramientas & CNC (Bloque M8):** Tornos paralelos, fresadoras universales y centros de mecanizado por control numérico (CNC).
- **Laboratorio de Fundición y Metalurgia:** Hornos de inducción y crisol para colada de aleaciones ferrosas y no ferrosas.
- **Laboratorio de Soldadura y Ensayos Mecánicos:** Equipos SMAW, GMAW, GTAW, ensayos de tracción, dureza, impacto Charpy y microscopía óptica.
- **Laboratorio de Ciencias Térmicas e Hidráulica:** Bancos de intercambio térmico, túnel de viento, turbinas Pelton/Francis y bombas centrífugas.
- **Laboratorio de Metrología Dimensional:** Máquinas de medición por coordenadas (CMM), rugosímetros y comparadores ópticos.`,
        chips: ['Prerrequisitos de Procesos de Manufactura', 'Grupos Estudiantiles', 'Ver Malla Curricular'],
      };
    }

    // ------------------------------------------------------------------------
    // 20. Fallback Inteligente (Sugerencias Guiadas)
    // ------------------------------------------------------------------------
    return {
      texto: `No encontré una coincidencia exacta para tu consulta, pero estoy lista para orientarte en cualquiera de estos temas clave de **Ingeniería Mecánica**:

- Consulta sobre prerrequisitos de cualquier materia (ej. *Estática*, *Dinámica*, *Mecánica de Sólidos*, *Diseño Mecánico*, *Termodinámica*, *Procesos de Manufactura*).
- Cómo solicitar cambio de carrera o traslados ante la Facultad de Minas.
- Quién es el creador de la plataforma o los delegados de la carrera.
- Actividades de los grupos estudiantiles: **Hydrómetra UNAL**, **ASME UN Medellín** y **UN ToyLab**.
- Acceso al Google Drive oficial con parciales, talleres y guías de laboratorio.

¿Qué te gustaría consultar?`,
      chips: [
        '¿Qué es la malla curricular?',
        '¿Qué tipo de materias hay?',
        '¿Por qué estudiar Mecánica?',
        'Contacto de los Delegados',
        'Grupos Estudiantiles',
        'Banco de Recursos en Drive',
      ],
    };
  }

  function buscarAsignaturaPorTexto(textoNorm) {
    // 1. Por código numérico directo
    const matchCod = textoNorm.match(/\b(\d{7}|10000\d{2}-m|10000\d{2})\b/i);
    if (matchCod) {
      const codigo = matchCod[1].toUpperCase();
      if (indices.materiasPorCodigo.has(codigo)) {
        return indices.materiasPorCodigo.get(codigo);
      }
    }

    // 2. Por nombre oficial de la asignatura (priorizando nombres más largos)
    const nombresOrdenados = Array.from(indices.materiasPorNombre.entries()).sort(
      (a, b) => b[0].length - a[0].length
    );
    for (const [nomNorm, asig] of nombresOrdenados) {
      if (textoNorm.includes(nomNorm)) {
        return asig;
      }
    }

    // 3. Por alias ordenados de mayor a menor longitud
    const aliasOrdenados = Array.from(indices.aliasMaterias.entries()).sort(
      (a, b) => b[0].length - a[0].length
    );

    for (const [alias, asig] of aliasOrdenados) {
      if (alias.length <= 4) {
        const regexAlias = new RegExp(`\\b${alias.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
        if (regexAlias.test(textoNorm)) {
          return asig;
        }
      } else if (textoNorm.includes(alias)) {
        return asig;
      }
    }

    return null;
  }

  // ==========================================================================
  // 5. GENERACIÓN DEL DOM Y ELEMENTOS DE INTERFAZ
  // ==========================================================================

  function crearElementosDOM() {
    if (document.getElementById('sofia-contenedor-global')) return;

    const contenedorGlobal = document.createElement('div');
    contenedorGlobal.id = 'sofia-contenedor-global';
    contenedorGlobal.className = 'sofia-flotante-wrap';

    // 1. Globo de bienvenida (tooltip)
    const globo = document.createElement('div');
    globo.className = 'sofia-globo-bienvenida';
    globo.id = 'sofia-globo';
    globo.setAttribute('role', 'status');
    globo.innerHTML = `
      <span class="sofia-globo-texto">👋 ¿Dudas con materias o trámites? <strong>Pregúntale a sofIA</strong></span>
      <button class="sofia-globo-cerrar" id="sofia-globo-cerrar" type="button" aria-label="Cerrar aviso">✕</button>
    `;

    // 2. Botón flotante circular
    const boton = document.createElement('button');
    boton.className = 'sofia-boton';
    boton.id = 'sofia-btn-toggle';
    boton.type = 'button';
    boton.setAttribute('aria-label', 'Abrir asistente virtual sofIA de Ingeniería Mecánica');
    boton.setAttribute('aria-expanded', 'false');
    boton.innerHTML = `
      <span class="sofia-boton__halo" aria-hidden="true"></span>
      ${SOFIA_SVG_AVATAR}
      <span class="sofia-boton__badge" title="sofIA en línea"></span>
    `;

    // 3. Ventana modal del chat
    const ventana = document.createElement('section');
    ventana.className = 'sofia-ventana';
    ventana.id = 'sofia-ventana';
    ventana.setAttribute('aria-label', 'Ventana del asistente virtual sofIA');
    ventana.setAttribute('aria-hidden', 'true');
    ventana.innerHTML = `
      <header class="sofia-cabecera">
        <div class="sofia-cabecera__info">
          <div class="sofia-cabecera__avatar">
            ${SOFIA_SVG_AVATAR}
          </div>
          <div class="sofia-cabecera__titulos">
            <div class="sofia-cabecera__nombre-fila">
              <span class="sofia-cabecera__nombre">${SOFIA_CFG.nombre}</span>
              <span class="sofia-cabecera__tag">UNAL</span>
            </div>
            <span class="sofia-cabecera__estado">
              <span class="sofia-cabecera__punto" aria-hidden="true"></span>
              En línea · Asistente de Mecánica
            </span>
          </div>
        </div>
        <div class="sofia-cabecera__acciones">
          <button class="sofia-accion-btn" id="sofia-btn-reiniciar" type="button" title="Reiniciar conversación" aria-label="Reiniciar conversación">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
          </button>
          <button class="sofia-accion-btn" id="sofia-btn-maximizar" type="button" title="Maximizar / Restaurar" aria-label="Maximizar tamaño del chat">
            <svg id="sofia-icono-maximizar" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </button>
          <button class="sofia-accion-btn" id="sofia-btn-cerrar" type="button" title="Cerrar chat" aria-label="Cerrar chat">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      <div class="sofia-cuerpo" id="sofia-cuerpo" role="log" aria-live="polite">
        <div class="sofia-mensajes" id="sofia-mensajes"></div>
      </div>

      <footer class="sofia-pie">
        <form class="sofia-formulario" id="sofia-form">
          <input
            type="text"
            class="sofia-input"
            id="sofia-input"
            placeholder="Pregúntale a sofIA sobre la malla, materias, grupos..."
            autocomplete="off"
            aria-label="Escribe tu consulta para sofIA"
          />
          <button type="submit" class="sofia-btn-enviar" id="sofia-btn-enviar" aria-label="Enviar mensaje">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
        <span class="sofia-subtexto">sofIA consulta la base oficial del portal de Ingeniería Mecánica UNAL.</span>
      </footer>
    `;

    contenedorGlobal.appendChild(globo);
    contenedorGlobal.appendChild(boton);
    document.body.appendChild(contenedorGlobal);
    document.body.appendChild(ventana);

    vincularEventos();
  }

  // ==========================================================================
  // 6. GESTIÓN DE INTERACCIÓN, MENSAJES Y RENDERIZADO
  // ==========================================================================

  let chatAbierto = false;
  let chatMaximizado = false;

  function abrirSofia() {
    const ventana = document.getElementById('sofia-ventana');
    const boton = document.getElementById('sofia-btn-toggle');
    const input = document.getElementById('sofia-input');
    const globo = document.getElementById('sofia-globo');

    if (!ventana) return;

    chatAbierto = true;
    ventana.classList.add('is-abierta');
    ventana.setAttribute('aria-hidden', 'false');
    if (boton) boton.setAttribute('aria-expanded', 'true');
    if (globo) globo.style.display = 'none';

    sessionStorage.setItem('mecanica.sofia.globo_oculto', '1');

    // Mensaje de bienvenida inicial si está vacío
    const contenedorMensajes = document.getElementById('sofia-mensajes');
    if (contenedorMensajes && contenedorMensajes.children.length === 0) {
      enviarRespuestaSofia(
        `¡Hola! Soy **${SOFIA_CFG.nombre}**, asistente virtual inteligente de **${SOFIA_CFG.programa}** en la **${SOFIA_CFG.facultad}** (UNAL Medellín).

¿En qué puedo orientarte hoy? Puedes seleccionar una de las opciones de abajo o escribir libremente tu consulta.`,
        [
          '¿Qué es la malla curricular?',
          '¿Qué tipo de materias hay?',
          '¿Por qué estudiar Mecánica?',
          'Contacto de los Delegados',
          'Grupos Estudiantiles',
          'Banco de Recursos en Drive',
        ]
      );
    }

    setTimeout(() => {
      if (input) input.focus();
    }, 200);
  }

  function cerrarSofia() {
    const ventana = document.getElementById('sofia-ventana');
    const boton = document.getElementById('sofia-btn-toggle');

    if (!ventana) return;

    chatAbierto = false;
    ventana.classList.remove('is-abierta');
    ventana.setAttribute('aria-hidden', 'true');
    if (boton) {
      boton.setAttribute('aria-expanded', 'false');
      boton.focus();
    }
  }

  function toggleSofia() {
    if (chatAbierto) {
      cerrarSofia();
    } else {
      abrirSofia();
    }
  }

  function toggleMaximizar() {
    const ventana = document.getElementById('sofia-ventana');
    const icono = document.getElementById('sofia-icono-maximizar');
    if (!ventana) return;

    chatMaximizado = !chatMaximizado;
    ventana.classList.toggle('is-maximizada', chatMaximizado);

    if (icono) {
      icono.innerHTML = chatMaximizado
        ? '<path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"/>'
        : '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>';
    }
  }

  function reiniciarChat() {
    const contenedorMensajes = document.getElementById('sofia-mensajes');
    if (contenedorMensajes) contenedorMensajes.innerHTML = '';

    enviarRespuestaSofia(
      `Conversación reiniciada. ¿Qué otra duda sobre **${SOFIA_CFG.programa}** te gustaría consultar?`,
      [
        '¿Qué es la malla curricular?',
        '¿Qué tipo de materias hay?',
        '¿Por qué estudiar Mecánica?',
        'Contacto de los Delegados',
        'Grupos Estudiantiles',
        'Banco de Recursos en Drive',
      ]
    );
  }

  function scrollAlFinal() {
    const cuerpo = document.getElementById('sofia-cuerpo');
    if (cuerpo) {
      cuerpo.scrollTop = cuerpo.scrollHeight;
    }
  }

  function horaActual() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function procesarMarkdown(texto) {
    if (!texto) return '';

    let html = texto
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Encabezados markdown
    html = html.replace(/^### (.*$)/gim, '<h4 style="margin:6px 0 4px 0; color:#f8af3c; font-size:14px; font-weight:700;">$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3 style="margin:8px 0 4px 0; color:#f8af3c; font-size:15px; font-weight:700;">$1</h3>');

    // Negrita e itálica
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');

    // Código en línea
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');

    // Enlaces markdown [texto](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Listas con viñetas
    const lineas = html.split('\n');
    let enLista = false;
    const resultado = [];

    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i].trim();
      if (/^[•\-*]\s+(.*)/.test(linea)) {
        if (!enLista) {
          resultado.push('<ul>');
          enLista = true;
        }
        resultado.push(`<li>${linea.replace(/^[•\-*]\s+/, '')}</li>`);
      } else {
        if (enLista) {
          resultado.push('</ul>');
          enLista = false;
        }
        if (linea.length > 0) {
          resultado.push(`<p>${linea}</p>`);
        }
      }
    }
    if (enLista) resultado.push('</ul>');

    return resultado.join('');
  }

  function agregarMensajeUsuario(texto) {
    const contenedor = document.getElementById('sofia-mensajes');
    if (!contenedor) return;

    const wrap = document.createElement('div');
    wrap.className = 'sofia-mensaje sofia-mensaje--usuario';
    wrap.innerHTML = `
      <div class="sofia-burbuja">
        <p>${texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      </div>
      <span class="sofia-mensaje__hora">${horaActual()}</span>
    `;

    contenedor.appendChild(wrap);
    scrollAlFinal();
  }

  function mostrarIndicadorEscritura() {
    const contenedor = document.getElementById('sofia-mensajes');
    if (!contenedor) return null;

    const wrap = document.createElement('div');
    wrap.className = 'sofia-mensaje sofia-mensaje--sofia sofia-mensaje--escritura';
    wrap.id = 'sofia-escritura';
    wrap.innerHTML = `
      <div class="sofia-burbuja">
        <span class="sofia-punto-ola"></span>
        <span class="sofia-punto-ola"></span>
        <span class="sofia-punto-ola"></span>
      </div>
    `;

    contenedor.appendChild(wrap);
    scrollAlFinal();
    return wrap;
  }

  function removerIndicadorEscritura() {
    const el = document.getElementById('sofia-escritura');
    if (el) el.remove();
  }

  function enviarRespuestaSofia(texto, chips = [], enlaces = []) {
    const contenedor = document.getElementById('sofia-mensajes');
    if (!contenedor) return;

    removerIndicadorEscritura();

    const wrap = document.createElement('div');
    wrap.className = 'sofia-mensaje sofia-mensaje--sofia';

    let chipsHtml = '';
    if (chips && chips.length > 0) {
      const chipsBtns = chips
        .map(
          (c) => `<button type="button" class="sofia-chip" data-chip="${c.replace(/"/g, '&quot;')}">${c}</button>`
        )
        .join('');
      chipsHtml = `<div class="sofia-chips-contenedor">${chipsBtns}</div>`;
    }

    let enlacesHtml = '';
    if (enlaces && enlaces.length > 0) {
      const enlacesCards = enlaces
        .map(
          (e) => `
          <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="sofia-enlace-card">
            <span>${e.titulo}</span>
            <span class="sofia-enlace-card__icono">↗</span>
          </a>
        `
        )
        .join('');
      enlacesHtml = `<div class="sofia-enlaces-contenedor">${enlacesCards}</div>`;
    }

    wrap.innerHTML = `
      <div class="sofia-burbuja">
        ${procesarMarkdown(texto)}
        ${enlacesHtml}
        ${chipsHtml}
      </div>
      <span class="sofia-mensaje__hora">${horaActual()}</span>
    `;

    contenedor.appendChild(wrap);

    // Eventos a los chips
    wrap.querySelectorAll('.sofia-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chipTexto = btn.getAttribute('data-chip');
        if (chipTexto) procesarConsultaUsuario(chipTexto);
      });
    });

    scrollAlFinal();
  }

  function procesarConsultaUsuario(consulta) {
    if (!consulta || !consulta.trim()) return;

    const texto = consulta.trim();
    agregarMensajeUsuario(texto);

    const input = document.getElementById('sofia-input');
    if (input) input.value = '';

    mostrarIndicadorEscritura();

    setTimeout(() => {
      const respuesta = responderPregunta(texto);
      enviarRespuestaSofia(respuesta.texto, respuesta.chips, respuesta.enlaces);
    }, 280);
  }

  // ==========================================================================
  // 7. VINCULACIÓN DE EVENTOS DEL DOM
  // ==========================================================================

  function vincularEventos() {
    const btnToggle = document.getElementById('sofia-btn-toggle');
    const btnCerrar = document.getElementById('sofia-btn-cerrar');
    const btnMaximizar = document.getElementById('sofia-btn-maximizar');
    const btnReiniciar = document.getElementById('sofia-btn-reiniciar');
    const form = document.getElementById('sofia-form');
    const input = document.getElementById('sofia-input');
    const globo = document.getElementById('sofia-globo');
    const globoCerrar = document.getElementById('sofia-globo-cerrar');

    if (btnToggle) btnToggle.addEventListener('click', toggleSofia);
    if (btnCerrar) btnCerrar.addEventListener('click', cerrarSofia);
    if (btnMaximizar) btnMaximizar.addEventListener('click', toggleMaximizar);
    if (btnReiniciar) btnReiniciar.addEventListener('click', reiniciarChat);

    if (globo) {
      globo.addEventListener('click', (e) => {
        if (e.target !== globoCerrar) {
          abrirSofia();
        }
      });
    }

    if (globoCerrar) {
      globoCerrar.addEventListener('click', (e) => {
        e.stopPropagation();
        if (globo) globo.style.display = 'none';
        sessionStorage.setItem('mecanica.sofia.globo_oculto', '1');
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input && input.value.trim()) {
          procesarConsultaUsuario(input.value);
        }
      });
    }

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && chatAbierto) {
        cerrarSofia();
      }
    });

    // Ocultar globo si ya fue cerrado en la sesión
    if (sessionStorage.getItem('mecanica.sofia.globo_oculto') === '1' && globo) {
      globo.style.display = 'none';
    }
  }

  // ==========================================================================
  // 8. INICIALIZACIÓN Y API PÚBLICA (WINDOW.SOFIA)
  // ==========================================================================

  function moduloSofia() {
    cargarDatos();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', crearElementosDOM);
    } else {
      crearElementosDOM();
    }
  }

  moduloSofia();

  window.sofIA = {
    abrir: abrirSofia,
    cerrar: cerrarSofia,
    preguntar: procesarConsultaUsuario,
    responder: responderPregunta,
    inicializar: cargarDatos,
  };
})();
