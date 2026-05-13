// ===== Portfolio Data - Easy to Update =====

// Services data - UPDATED with AI Agent focus
const servicesData = [
    {
        icon: 'ri-robot-line',
        title: 'Agentic AI Systems',
        description: 'Autonomous AI agents, multi-agent architectures, tool integration, and LLM-powered workflows'
    },
    {
        icon: 'ri-brain-line',
        title: 'RAG & LLM Solutions',
        description: 'Retrieval-Augmented Generation systems, LLM integration, and intelligent document processing'
    },
    {
    icon: 'ri-server-line',
        title: 'Backend Development',
        description: 'FastAPI, Django, Node.js, Laravel - RESTful APIs, authentication, microservices, and scalable architectures'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Full Stack Python',
        description: 'End-to-end Python solutions from backend APIs to AI-powered applications'
    },
    {
        icon: 'ri-database-2-line',
        title: 'Database & Caching',
        description: 'PostgreSQL, Redis, MongoDB - optimized queries and high-performance caching strategies'
    },
    {
        icon: 'ri-cloud-line',
        title: 'Containerization & Deployment',
        description: 'Docker containerization, production deployments, and scalable infrastructure'
    },
    {
        icon: 'ri-line-chart-line',
        title: 'Data Science & Analytics',
        description: 'Predictive analytics, feature engineering, and data pipeline development'
    },
    {
        icon: 'ri-flask-line',
        title: 'Async Processing',
        description: 'Background workers, task queues, and real-time processing with Redis'
    }
];

// Projects data - UPDATED with current projects
const projectsData = [
{
    title: "Smart Flight Agent – Autonomous AI System for Flight Monitoring & Prediction",
    description: "Production-grade autonomous AI agent system that searches flights, monitors prices, predicts trends, and sends alerts. Implemented agent-based architecture with task planning, tool integration, and reasoning modules. Built backend APIs with FastAPI, integrated background workers with Redis for continuous monitoring, and connected external flight data services. Features include price trend prediction, automated alerts, and optimal booking recommendations.",
    tools: ["Python", "FastAPI", "Redis", "Agentic AI", "LLM Integration", "Background Workers", "REST API", "Docker"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=60",
    link: "#"
},
{
    title: "SabreCWA Assessment Platform – Scalable Test & Evaluation System",
    description: "Full-featured backend system for test creation, session management, and real-time assessment workflows. Built RESTful APIs for authentication, question management, test lifecycle (create, publish, close), and session tracking. Features include file uploads via presigned URLs, real-time session monitoring, analytics, and role-based admin controls.",
    tools: ["Python", "FastAPI", "PostgreSQL", "JWT Auth", "REST API", "File Upload", "Analytics"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60",
    link: "#"
},
{
    title: "SickleSense – Sickle Cell Early Warning System",
    description: "Digital health platform predicting sickle cell pain crises with personalized guidance. Built entire backend system integrating user management, health logging, early-warning logic, and machine learning predictions. Features crisis risk estimation and actionable recommendations.",
    tools: ["Python", "Flask", "PostgreSQL", "JWT Auth", "scikit-learn", "REST API", "Cloud Deployment"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=60",
    link: "https://Sickle-sense.vercel.app"
},
{
    title: "LAUTECH Smart Assistant – NLP FAQ Chatbot",
    description: "Intelligent university FAQ chatbot using TF-IDF vectorization with cosine similarity for semantic matching. Features fuzzy matching for typo handling, confidence scoring, fallback handlers, and adaptive learning. Includes JWT-protected admin dashboard with analytics and bulk import/export.",
    tools: ["Python", "Flask", "scikit-learn", "NLTK", "TF-IDF", "PostgreSQL", "JWT Auth", "Vercel"],
    image: "https://media.istockphoto.com/id/1465545513/photo/chatbot.webp?a=1&b=1&s=612x612&w=0&k=20&c=4ffIHW4R87I81mtBWwFj57casqjDSTcHXFHDD1Xqi2A=",
    link: "https://lautech-chatbot.vercel.app/"
},
{
    title: "Language Translation Tool",
    description: "Production-ready multilingual translation platform supporting 100+ languages with automatic language detection and text-to-speech. Features translation history, keyboard shortcuts, offline detection, dark/light mode, and robust error handling.",
    tools: ["Python", "Flask", "Google Translate API", "gTTS", "JavaScript", "Responsive UI", "Vercel"],
    image: "https://media.istockphoto.com/id/2203038750/photo/translate-foreign-language-online-internet-software-button.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gi8H0E2odJzF-5iYWtjMr0cFFd5_MKITYoOHRqGYGRo=",
    link: "https://language-translation-too-indol.vercel.app"
},
{
    title: "AutoEDA – Automated Data Cleaning & Exploratory Analysis",
    description: "Full-stack data analysis web app that automatically cleans CSV datasets, detects column types, handles missing values, and generates visualizations including histograms, correlation heatmaps, and outlier boxplots.",
    tools: ["Python", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "Vercel"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60",
    link: "https://autoeda-one.vercel.app"
},
{
    title: "Movie & TV Show Explorer",
    description: "Dynamic movie discovery platform with real-time search, trending movies, detailed pages, categories, and admin panel. Features responsive UI with glassmorphism effects and optimized API-driven browsing.",
    tools: ["Python", "Flask", "SQLite", "TMDB API", "JavaScript", "CSS3", "Vercel"],
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=60",
    link: "https://psalmnova-movie-explorer.vercel.app/"
}
];

// Certifications data
const certificationsData = [
    {
        icon: 'ri-award-line',
        title: 'IBM Data Science Methodology',
        issuer: 'IBM (2026)'
    },
    {
        icon: 'ri-award-line',
        title: 'Tools for Data Science',
        issuer: 'IBM (2026)'
    },
    {
        icon: 'ri-award-line',
        title: 'What is Data Science?',
        issuer: 'IBM (2026)'
    },
    {
        icon: 'ri-award-line',
        title: 'Python Certification',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/iframe/eefa525fc35f'
    },
    {
        icon: 'ri-award-line',
        title: 'Backend Developer – SickleSense Project',
        issuer: 'Futurize Founder Academy 2025'
    }
];

// Skills data - UPDATED with current stack
const skillsData = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
    { name: 'Django', icon: 'devicon-django-plain' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'Laravel', icon: 'devicon-laravel-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'Redis', icon: 'devicon-redis-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Next.js', icon: 'devicon-nextjs-original' },
    { name: 'scikit-learn', icon: 'devicon-scikitlearn-plain' },
    { name: 'Pandas', icon: 'devicon-pandas-original' },
    { name: 'NumPy', icon: 'devicon-numpy-original' }
];

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const backToTopBtn = document.getElementById('backToTop');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// ===== Initialize Portfolio =====
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupEventListeners();
    setupIntersectionObserver();
});

// ===== Portfolio Initialization =====
function initializePortfolio() {
    populateServices();
    populateProjects();
    populateCertifications();
    populateSkills();
}

// Populate services section
function populateServices() {
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map(service => `
            <div class="service-card glass-card">
                <i class="${service.icon} service-icon"></i>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    }
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card glass-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60'">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tools">
                        ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                    </div>
                    <a href="${project.link}" target="_blank" class="btn btn-secondary project-link">
                        <i class="ri-external-link-line"></i> View Project
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// Populate certifications section
function populateCertifications() {
    const certificationsGrid = document.querySelector('.certifications-grid');
    if (certificationsGrid) {
        certificationsGrid.innerHTML = certificationsData.map(cert => `
            <div class="certification-card glass-card">
                <i class="${cert.icon} cert-icon"></i>
                <h3>${cert.title}</h3>
                <p>${cert.issuer}</p>
                ${cert.link ? `<a href="${cert.link}" target="_blank" class="cert-link">Verify</a>` : ''}
            </div>
        `).join('');
    }
}

// Populate skills section
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skillsData.map(skill => `
            <div class="skill-item glass-card">
                <i class="${skill.icon} skill-icon"></i>
                <span>${skill.name}</span>
            </div>
        `).join('');
    }
}

// ===== Event Listeners Setup =====
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);

    // Back to top button
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Hamburger menu for mobile
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                scrollToSection(targetId.substring(1));
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

// ===== Scroll Handling =====
function handleScroll() {
    // Navbar background on scroll
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Back to top button visibility
    if (backToTopBtn) {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
}

// ===== Smooth Scrolling =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        history.pushState(null, null, `#${sectionId}`);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== Mobile Menu =====
function toggleMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
}

function closeMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// ===== Intersection Observer for Section Animations =====
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                const sectionId = entry.target.getAttribute('data-section');
                updateActiveNavLink(sectionId);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===== Active Navigation Link Update =====
function updateActiveNavLink(activeSection) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === activeSection) {
            link.classList.add('active');
        }
    });
}

// ===== Form Handling =====
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    showNotification('Message sent successfully!', 'success');
    e.target.reset();
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--bg-glass);
                backdrop-filter: blur(20px);
                border: 1px solid var(--border-glass);
                padding: 1rem 1.5rem;
                border-radius: var(--radius-md);
                color: var(--text-primary);
                box-shadow: var(--shadow);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 1rem;
                animation: slideIn 0.3s ease;
            }
            .notification.success {
                border-left: 4px solid var(--secondary-color);
            }
            .notification button {
                background: none;
                border: none;
                color: var(--text-primary);
                font-size: 1.2rem;
                cursor: pointer;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}


// ===== Export functions for global access =====
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;