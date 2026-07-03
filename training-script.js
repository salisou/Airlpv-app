// Course Data Structure
const coursesData = [
    {
        id: 1,
        name: 'HTML & CSS',
        icon: 'fab fa-html5',
        level: 'Principiante',
        duration: '4 settimane',
        lessons: 24,
        description: 'Impara i fondamenti dello sviluppo web con HTML e CSS. Costruisci layout responsive e moderni.',
        category: 'Web Development',
        modules: [
            {
                id: 1,
                title: 'Introduzione a HTML',
                overview: 'HTML è il linguaggio di marcatura utilizzato per creare la struttura di una pagina web.',
                why: 'È fondamentale per ogni sviluppatore web poiché forma la base di ogni sito internet.',
                explanation: `<p>HTML sta per HyperText Markup Language. Utilizza i tag per descrivere il contenuto di una pagina:</p>
                <p><strong>Tag comuni:</strong></p>
                <ul><li>&lt;h1&gt; - Titolo principale</li><li>&lt;p&gt; - Paragrafo</li><li>&lt;a&gt; - Link</li><li>&lt;img&gt; - Immagine</li><li>&lt;div&gt; - Contenitore</li></ul>`,
                examples: [
                    {
                        title: 'Pagina HTML Base',
                        code: `<!DOCTYPE html>
<html>
  <head>
    <title>La mia pagina</title>
  </head>
  <body>
    <h1>Benvenuto</h1>
    <p>Questo è il mio primo sito web!</p>
  </body>
</html>`
                    },
                    {
                        title: 'Struttura con Sezioni',
                        code: `<body>
  <header>
    <h1>Il mio Sito</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Chi Siamo</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Benvenuto</h2>
      <p>Contenuto principale</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2026</p>
  </footer>
</body>`
                    }
                ],
                exercises: [
                    { title: 'Crea la tua prima pagina', description: 'Crea un file HTML con titolo, paragrafo e un link' },
                    { title: 'Struttura semantica', description: 'Converti il codice HTML in struttura semantica con header, main e footer' }
                ],
                quiz: [
                    { question: 'Qual è la struttura base di un documento HTML?', options: ['<html> <body> <p>', '<html> <head> <body>', '<page> <content> <end>'] },
                    { question: 'Qual tag si usa per un titolo principale?', options: ['<title>', '<h1>', '<head>'] }
                ]
            },
            {
                id: 2,
                title: 'CSS - Styling e Layout',
                overview: 'CSS permette di stilizzare e posizionare gli elementi HTML sulla pagina.',
                why: 'Il CSS trasforma una pagina HTML plain in un design moderno e accattivante.',
                explanation: `<p>CSS sta per Cascading Style Sheets. Consente di controllare l'aspetto degli elementi:</p>
                <p><strong>Proprietà comuni:</strong></p>
                <ul><li>color - Colore del testo</li><li>background-color - Sfondo</li><li>font-size - Dimensione font</li><li>padding - Spazio interno</li><li>margin - Spazio esterno</li><li>display - Tipo di visualizzazione</li></ul>`,
                examples: [
                    {
                        title: 'CSS Base',
                        code: `/* Selettore elemento */
p {
  color: blue;
  font-size: 16px;
}

/* Selettore classe */
.titolo {
  color: red;
  font-size: 24px;
  font-weight: bold;
}

/* Selettore ID */
#navbar {
  background-color: #333;
  padding: 10px;
}`
                    },
                    {
                        title: 'Flexbox Layout',
                        code: `.container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
}

.item {
  flex: 1;
  background: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
}`
                    }
                ],
                exercises: [
                    { title: 'Stilizza un layout', description: 'Crea un layout con header, sidebar e main usando Flexbox' },
                    { title: 'Responsive Design', description: 'Aggiungi media query per rendere il layout responsive' }
                ],
                quiz: [
                    { question: 'Come centrare un elemento con Flexbox?', options: ['margin: auto', 'justify-content: center; align-items: center', 'position: center'] },
                    { question: 'Qual è la differenza tra padding e margin?', options: ['Nessuna differenza', 'Padding è interno, margin è esterno', 'Margin è interno, padding è esterno'] }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'JavaScript',
        icon: 'fab fa-js-square',
        level: 'Principiante',
        duration: '6 settimane',
        lessons: 36,
        description: 'Padroneggia JavaScript e crea applicazioni web interattive e dinamiche.',
        category: 'Web Development',
        modules: [
            {
                id: 1,
                title: 'Variabili e Tipi di Dati',
                overview: 'Le variabili sono contenitori per memorizzare dati in JavaScript.',
                why: 'Comprendere le variabili e i tipi di dati è essenziale per scrivere codice JavaScript corretto.',
                explanation: `<p>JavaScript ha diversi tipi di dati:</p>
                <ul><li>String - Testo</li><li>Number - Numeri</li><li>Boolean - Vero/Falso</li><li>Object - Oggetti</li><li>Array - Liste</li></ul>`,
                examples: [
                    {
                        title: 'Dichiarare Variabili',
                        code: `// Dichiarazioni
let nome = 'Giovanni';
const eta = 25;
var città = 'Roma';

// Tipi di dati
let numero = 42;
let decimale = 3.14;
let attivo = true;
let oggetto = { nome: 'Test', valore: 100 };
let array = [1, 2, 3, 4, 5];`
                    },
                    {
                        title: 'Operazioni con Stringhe',
                        code: `let nome = 'Mario';
let cognome = 'Rossi';

// Concatenazione
let nomecompleto = nome + ' ' + cognome;
console.log(nomecompleto); // Mario Rossi

// Template literal
let messaggio = \`Ciao, mi chiamo \${nome} \${cognome}!\`;
console.log(messaggio);`
                    }
                ],
                exercises: [
                    { title: 'Crea variabili', description: 'Crea variabili per nome, età, città e stampa i loro valori' },
                    { title: 'Operazioni matematiche', description: 'Crea due variabili numeriche e esegui operazioni di addizione, sottrazione, moltiplicazione' }
                ],
                quiz: [
                    { question: 'Qual è la differenza tra let e const?', options: ['Nessuna', 'let può essere riassegnato, const no', 'const è più veloce'] },
                    { question: 'Come concatenare stringhe con template literals?', options: ['Con +', 'Con backtick e ${}', 'Con concat()'] }
                ]
            },
            {
                id: 2,
                title: 'Funzioni',
                overview: 'Le funzioni sono blocchi di codice riutilizzabili che eseguono compiti specifici.',
                why: 'Le funzioni rendono il codice più organizzato, riutilizzabile e manutenibile.',
                explanation: `<p>Una funzione è un blocco di codice che esegue un'azione specifica. Puoi passare parametri e ottenere risultati.</p>`,
                examples: [
                    {
                        title: 'Funzioni Base',
                        code: `// Dichiarazione funzione
function saluta(nome) {
  return \`Ciao, \${nome}!\`;
}

console.log(saluta('Maria')); // Ciao, Maria!

// Arrow function
const somma = (a, b) => a + b;
console.log(somma(5, 3)); // 8`
                    },
                    {
                        title: 'Funzioni Avanzate',
                        code: `// Funzione con valore di default
function calcola(x, y = 10) {
  return x * y;
}

console.log(calcola(5)); // 50
console.log(calcola(5, 2)); // 10

// Funzione che ritorna una funzione
const moltiplicatore = (fattore) => {
  return (numero) => numero * fattore;
};

const raddoppia = moltiplicatore(2);
console.log(raddoppia(5)); // 10`
                    }
                ],
                exercises: [
                    { title: 'Funzione di calcolo', description: 'Crea una funzione che calcola l\'area di un rettangolo' },
                    { title: 'Funzione ricorsiva', description: 'Crea una funzione che calcola il fattoriale di un numero' }
                ],
                quiz: [
                    { question: 'Come dichiarare una arrow function?', options: ['function f() {}', 'const f = () => {}', 'arrow f()'] },
                    { question: 'Cosa fa return in una funzione?', options: ['Termina il programma', 'Ritorna un valore e termina la funzione', 'Ripete la funzione'] }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Python',
        icon: 'fab fa-python',
        level: 'Principiante',
        duration: '5 settimane',
        lessons: 30,
        description: 'Impara Python, uno dei linguaggi più popolari e versatili per il web development e data science.',
        category: 'Backend Development',
        modules: [
            {
                id: 1,
                title: 'Basi di Python',
                overview: 'Python è un linguaggio semplice ma potente, ideale per principianti.',
                why: 'Python è usato in web development, data science, AI e scripting.',
                explanation: `<p>Python è noto per la sua sintassi semplice e leggibile.</p>`,
                examples: [
                    {
                        title: 'Hello World',
                        code: `# Stampa testo
print("Ciao, Mondo!")

# Variabili
name = "Giovanni"
eta = 25

print(f"Mi chiamo {name} e ho {eta} anni")`
                    },
                    {
                        title: 'Operazioni Matematiche',
                        code: `# Operazioni
a = 10
b = 3

print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a // b) # 3
print(a ** b) # 1000`
                    }
                ],
                exercises: [
                    { title: 'Calcolo IMC', description: 'Crea uno script che calcola l\'Indice di Massa Corporea' },
                    { title: 'Conversione temperature', description: 'Crea funzioni per convertire tra Celsius e Fahrenheit' }
                ],
                quiz: [
                    { question: 'Come dichiarare una variabile in Python?', options: ['var x = 5', 'x = 5', 'let x = 5'] },
                    { question: 'Come stampare variabili con format string?', options: ['print(a + b)', 'print(f"{a} {b}")', 'print(a, b)'] }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'React',
        icon: 'fab fa-react',
        level: 'Intermedio',
        duration: '8 settimane',
        lessons: 48,
        description: 'Crea applicazioni web moderne con React e diventa un esperto di frontend development.',
        category: 'Web Development',
        modules: [
            {
                id: 1,
                title: 'Componenti React',
                overview: 'I componenti sono i blocchi costruttivi di un\'applicazione React.',
                why: 'I componenti rendono il codice riutilizzabile, modulare e facile da mantenere.',
                explanation: `<p>Un componente React è una funzione JavaScript che ritorna JSX.</p>`,
                examples: [
                    {
                        title: 'Componente Funzionale',
                        code: `function Welcome() {
  return <h1>Benvenuto in React!</h1>;
}

export default Welcome;`
                    },
                    {
                        title: 'Componente con Props',
                        code: `function Saluto({ nome }) {
  return <h1>Ciao, {nome}!</h1>;
}

// Utilizzo
<Saluto nome="Maria" />`
                    }
                ],
                exercises: [
                    { title: 'Crea un componente Card', description: 'Crea un componente che mostra una scheda con titolo, descrizione e bottone' },
                    { title: 'Lista di elementi', description: 'Crea un componente che mostra una lista di prodotti' }
                ],
                quiz: [
                    { question: 'Cosa sono i props in React?', options: ['Variabili locali', 'Parametri passati a un componente', 'Metodi'] },
                    { question: 'Qual è la sintassi di JSX?', options: ['HTML nel JavaScript', 'HTML puro', 'JavaScript nel HTML'] }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Node.js',
        icon: 'fab fa-node-js',
        level: 'Intermedio',
        duration: '7 settimane',
        lessons: 42,
        description: 'Sviluppa applicazioni backend scalabili e API REST con Node.js e Express.',
        category: 'Backend Development',
        modules: [
            {
                id: 1,
                title: 'Fondamenti di Node.js',
                overview: 'Node.js permette di usare JavaScript lato server.',
                why: 'Node.js è veloce, scalabile e usa JavaScript su frontend e backend.',
                explanation: `<p>Node.js è un runtime JavaScript per il server-side development.</p>`,
                examples: [
                    {
                        title: 'Server HTTP Base',
                        code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Ciao da Node.js!</h1>');
});

server.listen(3000, () => {
  console.log('Server su http://localhost:3000');
});`
                    }
                ],
                exercises: [
                    { title: 'Crea un server', description: 'Crea un server Node.js che risponde con JSON' },
                    { title: 'Routing', description: 'Aggiungi routing GET, POST a diverse URL' }
                ],
                quiz: [
                    { question: 'Come importare un modulo in Node.js?', options: ['import module', 'require(module)', 'include module'] },
                    { question: 'Qual è la porta di default per un server Node.js?', options: ['3000', '5000', '8080'] }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'SQL',
        icon: 'fas fa-database',
        level: 'Principiante',
        duration: '4 settimane',
        lessons: 24,
        description: 'Impara SQL e gestisci database con query avanzate e ottimizzazione.',
        category: 'Backend Development',
        modules: [
            {
                id: 1,
                title: 'Query SELECT Base',
                overview: 'SELECT è il comando fondamentale per recuperare dati da un database.',
                why: 'SELECT è il comando più usato nel 95% delle query SQL quotidiane.',
                explanation: `<p>SELECT recupera dati da una tabella secondo criteri specificati.</p>`,
                examples: [
                    {
                        title: 'Select Base',
                        code: `-- Tutti i record
SELECT * FROM utenti;

-- Colonne specifiche
SELECT nome, email FROM utenti;

-- Con WHERE
SELECT * FROM utenti WHERE eta > 18;

-- Con ORDER BY
SELECT * FROM utenti ORDER BY nome ASC;`
                    }
                ],
                exercises: [
                    { title: 'Query filtri', description: 'Scrivi query per filtrare utenti per diversi criteri' },
                    { title: 'Ordinamento e limite', description: 'Usa ORDER BY e LIMIT in query complesse' }
                ],
                quiz: [
                    { question: 'Cosa fa la clausola WHERE?', options: ['Ordina i risultati', 'Filtra i record', 'Conta i record'] },
                    { question: 'Come limitare a 10 record?', options: ['LIMIT 10', 'TOP 10', 'MAX 10'] }
                ]
            }
        ]
    }
];

// Language Categories
const categories = [
    { name: 'Web Development', icon: 'fas fa-globe', count: 3 },
    { name: 'Backend Development', icon: 'fas fa-server', count: 2 },
    { name: 'Mobile Development', icon: 'fas fa-mobile-alt', count: 1 },
    { name: 'Data Science', icon: 'fas fa-chart-bar', count: 1 }
];

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadCourses();
    setupEventListeners();
    setupHamburgerMenu();
});

// Load Categories
function loadCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    container.innerHTML = categories.map(cat => `
        <button class="category-btn" onclick="filterByCategory('${cat.name}')">
            <i class="${cat.icon}"></i>
            <div>${cat.name}</div>
            <small>${cat.count} corsi</small>
        </button>
    `).join('');
}

// Load Courses
function loadCourses() {
    const container = document.getElementById('coursesContainer');
    if (!container) return;
    
    container.innerHTML = coursesData.map(course => `
        <div class="course-card" onclick="openCourseModal(${course.id})">
            <div class="course-header">
                <i class="${course.icon}"></i>
                <h3>${course.name}</h3>
                <p>${course.category}</p>
            </div>
            <div class="course-body">
                <div class="course-info">
                    <span class="badge course-badge-${course.level.toLowerCase().replace(' ', '-')}"><i class="fas fa-star"></i> ${course.level}</span>
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                </div>
                <p class="course-description">${course.description}</p>
                <p style="color: #999; font-size: 0.9rem;"><i class="fas fa-book"></i> ${course.lessons} lezioni</p>
                <button class="course-btn" onclick="event.stopPropagation()">Scopri di più</button>
            </div>
        </div>
    `).join('');
}

// Open Course Modal
function openCourseModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    document.getElementById('courseTitle').textContent = course.name;
    document.getElementById('courseLevel').textContent = course.level;
    document.getElementById('courseDuration').textContent = course.duration;
    document.getElementById('courseLessons').textContent = course.lessons + ' lezioni';
    document.getElementById('courseDescription').textContent = course.description;
    
    // Load modules
    const modulesContainer = document.getElementById('modulesContainer');
    modulesContainer.innerHTML = course.modules.map(module => `
        <div class="module-item" onclick="openModuleModal(${course.id}, ${module.id})">
            <div class="module-item-title"><i class="fas fa-file-alt"></i> ${module.title}</div>
            <div class="module-item-description">${module.overview}</div>
        </div>
    `).join('');
    
    // Store current course
    window.currentCourseId = courseId;
    
    // Open modal
    document.getElementById('courseModal').classList.add('active');
    document.getElementById('courseModal').setAttribute('aria-hidden', 'false');
}

// Open Module Modal
function openModuleModal(courseId, moduleId) {
    const course = coursesData.find(c => c.id === courseId);
    const module = course.modules.find(m => m.id === moduleId);
    
    if (!module) return;
    
    document.getElementById('moduleTitle').textContent = module.title;
    document.getElementById('moduleOverview').textContent = module.overview;
    document.getElementById('moduleWhy').textContent = module.why;
    
    // Explanation
    document.getElementById('moduleExplanation').innerHTML = module.explanation;
    
    // Examples
    const examplesHTML = module.examples.map(ex => `
        <h4>${ex.title}</h4>
        <div class="code-example"><code>${escapeHtml(ex.code)}</code></div>
    `).join('');
    document.getElementById('moduleExamples').innerHTML = examplesHTML;
    
    // Exercises
    const exercisesHTML = module.exercises.map(ex => `
        <div class="exercise-item">
            <div class="exercise-title"><i class="fas fa-dumbbell"></i> ${ex.title}</div>
            <div class="exercise-description">${ex.description}</div>
            <button class="btn-primary" style="margin-top: 10px;">Inizia esercizio</button>
        </div>
    `).join('');
    document.getElementById('moduleExercises').innerHTML = exercisesHTML;
    
    // Quiz
    const quizHTML = module.quiz.map((q, idx) => `
        <div class="quiz-item">
            <div class="quiz-title"><strong>Domanda ${idx + 1}:</strong> ${q.question}</div>
            <div class="quiz-options">
                ${q.options.map((opt, optIdx) => `
                    <div class="quiz-option" onclick="checkAnswer(this, ${optIdx === 0})">
                        <input type="radio" name="quiz-${idx}" value="${optIdx}">
                        ${opt}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    document.getElementById('moduleQuiz').innerHTML = quizHTML;
    
    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="overview"]').classList.add('active');
    document.querySelector('#overview').classList.add('active');
    
    // Open modal
    document.getElementById('moduleModal').classList.add('active');
    document.getElementById('moduleModal').setAttribute('aria-hidden', 'false');
}

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remove active from all
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active to clicked
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Close modals
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('courseModal').classList.remove('active');
    document.getElementById('courseModal').setAttribute('aria-hidden', 'true');
});

document.getElementById('closeModuleModal').addEventListener('click', function() {
    document.getElementById('moduleModal').classList.remove('active');
    document.getElementById('moduleModal').setAttribute('aria-hidden', 'true');
});

// Close modal on background click
document.getElementById('courseModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        this.setAttribute('aria-hidden', 'true');
    }
});

document.getElementById('moduleModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        this.setAttribute('aria-hidden', 'true');
    }
});

// Search functionality
document.getElementById('searchCourses').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = coursesData.filter(course => 
        course.name.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)
    );
    displayCourses(filtered);
});

// Level filter
document.getElementById('levelFilter').addEventListener('change', function(e) {
    const level = e.target.value;
    const filtered = level ? coursesData.filter(course => course.level === level) : coursesData;
    displayCourses(filtered);
});

// Display filtered courses
function displayCourses(courses) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = courses.map(course => `
        <div class="course-card" onclick="openCourseModal(${course.id})">
            <div class="course-header">
                <i class="${course.icon}"></i>
                <h3>${course.name}</h3>
                <p>${course.category}</p>
            </div>
            <div class="course-body">
                <div class="course-info">
                    <span class="badge course-badge-${course.level.toLowerCase().replace(' ', '-')}"><i class="fas fa-star"></i> ${course.level}</span>
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                </div>
                <p class="course-description">${course.description}</p>
                <p style="color: #999; font-size: 0.9rem;"><i class="fas fa-book"></i> ${course.lessons} lezioni</p>
                <button class="course-btn" onclick="event.stopPropagation()">Scopri di più</button>
            </div>
        </div>
    `).join('');
}

// Filter by category
function filterByCategory(category) {
    const filtered = coursesData.filter(course => course.category === category);
    displayCourses(filtered);
    // Scroll to courses
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

// Download resources
function downloadResource(fileName) {
    alert(`Download di ${fileName} iniziato! (Demo)`);
    // In una vera applicazione, qui ci sarebbe il logic per il download
}

// Check quiz answers
function checkAnswer(element, isCorrect) {
    if (isCorrect) {
        element.style.background = '#d1fae5';
        element.style.borderColor = '#10b981';
        alert('✅ Risposta corretta!');
    } else {
        element.style.background = '#fee2e2';
        element.style.borderColor = '#ef4444';
        alert('❌ Risposta sbagliata. Riprova!');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Download buttons in modal
    if (document.getElementById('downloadExercises')) {
        document.getElementById('downloadExercises').addEventListener('click', function() {
            downloadResource('exercises.zip');
        });
    }
    if (document.getElementById('downloadProjects')) {
        document.getElementById('downloadProjects').addEventListener('click', function() {
            downloadResource('projects.zip');
        });
    }
    if (document.getElementById('downloadSourceCode')) {
        document.getElementById('downloadSourceCode').addEventListener('click', function() {
            downloadResource('sourcecode.zip');
        });
    }
}

// Setup hamburger menu
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }
}

// Escape HTML for code display
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
