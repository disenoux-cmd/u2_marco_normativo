const topics = [
  {
    id: "legal",
    coordinate: "Capa base · Marco legal",
    title: "Artículo 23: la base de todo",
    content: `
      <h3>¿Qué define?</h3>
      <p>La Ley General de Educación (Ley 115 de 1994) establece en su Artículo 23 las <strong>áreas obligatorias y fundamentales</strong> que las instituciones educativas deben ofrecer para cumplir los objetivos de la educación básica.</p>
      <div class="stat-line"><b>80%</b><span>Es la proporción mínima del plan de estudios que deben ocupar estas áreas fundamentales.</span></div>
      <h3>Las nueve áreas fundamentales</h3>
      <ol>
        <li>Ciencias naturales y educación ambiental.</li>
        <li>Ciencias sociales, historia, geografía, constitución política y democracia.</li>
        <li>Educación artística y cultural.</li>
        <li>Educación ética y en valores humanos.</li>
        <li>Educación física, recreación y deportes.</li>
        <li>Educación religiosa, respetando la garantía constitucional de que ninguna persona puede ser obligada a recibirla en establecimientos del Estado.</li>
        <li>Humanidades, lengua castellana e idiomas extranjeros.</li>
        <li>Matemáticas.</li>
        <li>Tecnología e informática.</li>
      </ol>
      <div class="field-note"><strong>Lectura para tu práctica:</strong> cuando enseñas tu asignatura, activas una de las áreas que el país considera fundamental para el desarrollo integral de las y los estudiantes.</div>`
  },
  {
    id: "guides",
    coordinate: "Capa de orientación · Sentido pedagógico",
    title: "Lineamientos: hacia dónde miramos",
    content: `
      <h3>Brújulas, no camisas de fuerza</h3>
      <p>Los Lineamientos Curriculares son orientaciones epistemológicas, pedagógicas y curriculares definidas por el Ministerio de Educación Nacional con apoyo de la comunidad académica y educativa.</p>
      <p>Sirven como referentes conceptuales para fundamentar, diseñar y planear las áreas obligatorias en los Proyectos Educativos Institucionales (PEI). Cada institución y cada docente los articula con su experiencia, formación, contexto e investigación pedagógica.</p>
      <h3>¿Cómo se ve en la práctica?</h3>
      <ul>
        <li>En <strong>Ciencias Naturales</strong>, orientan hacia la indagación científica y ética.</li>
        <li>En <strong>Inglés</strong>, fundamentan una concepción comunicativa del aprendizaje de una segunda lengua.</li>
      </ul>
      <div class="field-note"><strong>Pregunta guía:</strong> ¿qué enfoque de aprendizaje debe orientar las decisiones de mi área?</div>`
  },
  {
    id: "ebc",
    coordinate: "Capa de horizonte · Metas de calidad",
    title: "EBC: saber y saber hacer en contexto",
    content: `
      <h3>Un horizonte común de calidad</h3>
      <p>Los Estándares Básicos de Competencias son parámetros nacionales claros sobre lo que todo niño, niña y joven debe <strong>saber y saber hacer</strong> para alcanzar el nivel de calidad esperado durante su paso por el sistema educativo.</p>
      <h3>Metas acumulativas por ciclos</h3>
      <p>No funcionan como planes anuales. Definen metas rigurosas y progresivas para grupos de grados:</p>
      <p><strong>1°–3° · 4°–5° · 6°–7° · 8°–9° · 10°–11°</strong></p>
      <h3>Evaluar para acercarnos a la meta</h3>
      <p>Son un referente técnico para las evaluaciones formativas del aula y para evaluaciones externas como las pruebas Saber. Permiten identificar qué tan cerca se encuentra una comunidad educativa del horizonte de calidad y orientar planes de mejoramiento, respetando la autonomía escolar.</p>
      <div class="field-note"><strong>Diferencia clave:</strong> los EBC señalan la meta acumulativa del ciclo; no dictan una actividad ni una secuencia única.</div>`
  },
  {
    id: "dba",
    coordinate: "Capa de trayecto · Aprendizajes estructurantes",
    title: "DBA: los peldaños de la ruta",
    content: `
      <h3>¿Qué hacen visibles?</h3>
      <p>Los Derechos Básicos de Aprendizaje explicitan aprendizajes estructurantes para un grado y un área. Integran <strong>conocimientos, habilidades y actitudes</strong> dentro de un contexto cultural e histórico.</p>
      <h3>Coherencia año a año</h3>
      <p>Se organizan en coherencia con los Lineamientos y los EBC. Ayudan a construir rutas de enseñanza para que los aprendizajes de cada año acerquen a las y los estudiantes a las metas del ciclo.</p>
      <h3>El poder de la flexibilidad curricular</h3>
      <p>Los DBA <strong>no son un currículo rígido</strong>. Se articulan con el PEI, los planes de área, las metodologías y el contexto. Aunque están formulados por grado, pueden trasladarse de un grado a otro según las necesidades, los ritmos de aprendizaje y las particularidades del territorio.</p>
      <div class="field-note"><strong>Decisión profesional:</strong> mover o priorizar un DBA no es improvisar; es ejercer autonomía con intención pedagógica y una meta clara.</div>`
  },
  {
    id: "area",
    coordinate: "Capa de territorio · Disciplina",
    title: "La norma cobra vida en el aula",
    content: `
      <div class="discipline-tabs" role="tablist" aria-label="Expectativas por área">
        <button type="button" role="tab" aria-selected="true" aria-controls="english-panel" id="english-tab" tabindex="0">Inglés</button>
        <button type="button" role="tab" aria-selected="false" aria-controls="stem-panel" id="stem-tab" tabindex="-1">STEM</button>
      </div>
      <section class="discipline-panel" id="english-panel" role="tabpanel" aria-labelledby="english-tab">
        <h3>Experiencias auténticas de comunicación</h3>
        <p>Las clases de Inglés deben centrar el aprendizaje en la participación activa y el uso constante del idioma.</p>
        <ul>
          <li>Integrar <strong>listening, speaking, reading y writing</strong>.</li>
          <li>Implementar rutinas explícitas en inglés: saludos, <em>attention grabbers</em>, comandos y roles colaborativos.</li>
        </ul>
      </section>
      <section class="discipline-panel" id="stem-panel" role="tabpanel" aria-labelledby="stem-tab" hidden>
        <h3>Indagar y transformar el entorno</h3>
        <p>Las clases STEM deben promover experimentación y solución de problemas complejos conectados con la vida real.</p>
        <ul>
          <li>Formular preguntas, analizar datos, plantear hipótesis y diseñar prototipos funcionales.</li>
          <li>Abordar retos del entorno como el agua, el reciclaje o la energía.</li>
          <li>Integrar ciencia, tecnología, ingeniería y matemáticas con equidad de género y pertenencia.</li>
        </ul>
      </section>
      <div class="field-note"><strong>La conexión:</strong> el referente nacional gana sentido cuando se traduce en experiencias propias de la disciplina y relevantes para el contexto.</div>`
  },
  {
    id: "time",
    coordinate: "Conexión clave · Recurso irrecuperable",
    title: "El escudo curricular del tiempo efectivo",
    content: `
      <h3>Cada minuto ocurre una sola vez</h3>
      <p>Sin una planeación alineada con los referentes nacionales, la clase puede caer en improvisación operativa: transiciones desordenadas, explicaciones confusas, tareas de relleno y repetición de instrucciones que restan tiempo al aprendizaje real.</p>
      <h3>Dominar el marco permite</h3>
      <ul>
        <li><strong>Definir objetivos precisos:</strong> aclarar qué habilidad deben desarrollar las y los estudiantes y reducir tiempos muertos.</li>
        <li><strong>Estructurar instrucciones claras:</strong> traducir la meta curricular en pasos específicos, concretos, observables y secuenciales.</li>
        <li><strong>Liberar tiempo para lo significativo:</strong> dedicar más minutos a indagar, preguntar, colaborar, recibir retroalimentación y pensar sobre el propio aprendizaje.</li>
      </ul>
      <div class="field-note"><strong>Idea central:</strong> proteger el tiempo efectivo de clase es una condición para liderar un aprendizaje transformador.</div>`
  }
];

const dialog = document.querySelector("#topic-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCoordinate = document.querySelector("#dialog-coordinate");
const dialogContent = document.querySelector("#dialog-content");
const dialogPosition = document.querySelector("#dialog-position");
const dialogProgress = document.querySelector("#dialog-progress");
const previousButton = document.querySelector(".dialog-prev");
const nextButton = document.querySelector(".dialog-next");
const visitedCount = document.querySelector("#visited-count");
const journeyFill = document.querySelector("#journey-fill");
let activeTopicIndex = 0;

let visited = new Set();
try {
  visited = new Set(JSON.parse(localStorage.getItem("marco-curricular-visited") || "[]"));
} catch {
  visited = new Set();
}

function saveProgress() {
  try {
    localStorage.setItem("marco-curricular-visited", JSON.stringify([...visited]));
  } catch {
    // Progress remains available for the current session when storage is blocked.
  }
}

function updateProgress() {
  visitedCount.textContent = visited.size;
  journeyFill.style.transform = `scaleX(${visited.size / topics.length})`;
  document.querySelectorAll("[data-topic]").forEach((button) => {
    button.classList.toggle("is-visited", visited.has(button.dataset.topic));
  });
}

function initializeTabs() {
  const tabs = dialogContent.querySelectorAll('[role="tab"]');
  function selectTab(tab) {
      tabs.forEach((item) => item.setAttribute("aria-selected", String(item === tab)));
      tabs.forEach((item) => item.setAttribute("tabindex", item === tab ? "0" : "-1"));
      dialogContent.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
        panel.hidden = panel.id !== tab.getAttribute("aria-controls");
      });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const offset = event.key === "ArrowRight" ? 1 : -1;
      const nextTab = tabs[(index + offset + tabs.length) % tabs.length];
      selectTab(nextTab);
      nextTab.focus();
    });
  });
}

function renderTopic(index) {
  activeTopicIndex = index;
  const topic = topics[index];
  dialogTitle.textContent = topic.title;
  dialogCoordinate.textContent = topic.coordinate;
  dialogContent.innerHTML = topic.content;
  dialogContent.scrollTop = 0;
  dialogPosition.textContent = `${index + 1} de ${topics.length}`;
  dialogProgress.style.transform = `scaleX(${(index + 1) / topics.length})`;
  previousButton.disabled = index === 0;
  nextButton.textContent = "";
  nextButton.append(index === topics.length - 1 ? "Cerrar ficha" : "Siguiente");
  if (index !== topics.length - 1) {
    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrow.setAttribute("viewBox", "0 0 24 24");
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = '<path d="m9 18 6-6-6-6"/>';
    nextButton.append(arrow);
  }
  visited.add(topic.id);
  saveProgress();
  updateProgress();
  initializeTabs();
}

function openTopic(topicId) {
  const index = topics.findIndex((topic) => topic.id === topicId);
  if (index < 0) return;
  renderTopic(index);
  if (!dialog.open) dialog.showModal();
}

document.querySelectorAll("[data-topic]").forEach((button) => {
  button.addEventListener("click", () => openTopic(button.dataset.topic));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
previousButton.addEventListener("click", () => renderTopic(activeTopicIndex - 1));
nextButton.addEventListener("click", () => {
  if (activeTopicIndex === topics.length - 1) dialog.close();
  else renderTopic(activeTopicIndex + 1);
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const feedback = document.querySelector("#feedback");
const answerMessages = {
  a: { title: "Esta ruta confunde cobertura con aprendizaje.", body: "Avanzar con prisa puede aumentar la fricción y el desinterés. Cubrir temas no garantiza que las y los estudiantes construyan comprensión.", correct: false },
  b: { title: "La nivelación necesita aprendizaje activo.", body: "Memorizar teoría fuera del aula no reemplaza los andamiajes situados, el uso del conocimiento y la interacción entre pares.", correct: false },
  c: { title: "¡Excelente decisión, Eco!", body: "La flexibilidad de los DBA permite priorizar necesidades reales y concentrar el tiempo de clase en un aprendizaje activo, estructurado y de alto impacto.", correct: true }
};

document.querySelectorAll("[data-answer]").forEach((button) => {
  button.addEventListener("click", () => {
    const result = answerMessages[button.dataset.answer];
    document.querySelectorAll("[data-answer]").forEach((answer) => answer.classList.remove("is-correct", "is-wrong"));
    button.classList.add(result.correct ? "is-correct" : "is-wrong");
    feedback.innerHTML = `<strong>${result.title}</strong>${result.body}`;
    feedback.hidden = false;
    feedback.focus({ preventScroll: true });
  });
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  visited.clear();
  saveProgress();
  updateProgress();
  document.querySelector("#inicio").scrollIntoView();
});

updateProgress();
