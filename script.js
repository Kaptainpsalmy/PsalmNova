// ===== Portfolio Data - Easy to Update =====

// Services data - Add/remove services here
const servicesData = [
    {
        icon: 'ri-code-s-slash-line',
        title: 'Full Python Development',
        description: 'End-to-end Python solutions from scripting to complex applications'
    },
    {
        icon: 'ri-server-line',
        title: 'Backend Development',
        description: 'Flask & Django development with RESTful APIs and database integration'
    },
    {
        icon: 'ri-brain-line',
        title: 'AI & Machine Learning',
        description: 'Intelligent systems, predictive models, and machine learning solutions'
    },
    {
        icon: 'ri-line-chart-line',
        title: 'Data Science',
        description: 'Data analysis, visualization, and insights generation'
    },
    {
        icon: 'ri-robot-line',
        title: 'Automation Engineering',
        description: 'Process automation, workflow optimization, and task automation'
    },
    {
        icon: 'ri-bug-line',
        title: 'Software Testing',
        description: 'Comprehensive testing strategies and quality assurance'
    },
    {
        icon: 'ri-database-2-line',
        title: 'Database Development',
        description: 'Database design, optimization, and management'
    },
    {
        icon: 'ri-article-line',
        title: 'Academic Writing',
        description: 'Research papers, thesis, and academic documentation'
    },
    {
        icon: 'ri-money-dollar-circle-line',
        title: 'Grant Writing',
        description: 'Research grant proposals and funding applications'
    }
];

// Projects data - Add/remove projects here
const projectsData = [
    {
    title: "Movie & TV Show Explorer",
    description: "A dynamic movie and TV discovery platform built with Flask and TMDB API. Features real-time search, trending movies, detailed pages, categories, and an admin panel for managing recommendations. Designed with a responsive UI, glassmorphism effects, and optimized for fast API-driven browsing.",
    tools: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "TMDB API", "Vercel"],
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=60",
    link: "https://psalmnova-movie-explorer.vercel.app/"
},

    {
    title: "Morse Code Converter",
    description: "A web-based Morse Code Translator built with Flask that converts text to Morse code and Morse code back to text. Designed for speed, accuracy, and a clean UI.",
    tools: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60",
    link: "https://morse-code-converter-7hfe.onrender.com/"
},
    {
        title: "Automated Data Pipeline",
        description: "A scalable data processing system that automates ETL workflows and generates real-time analytics dashboards.",
        tools: ["Python", "Pandas", "Docker", "PostgreSQL"],
        image: "Project 2",
        link: "https://github.com/yourusername/project2"
    },
    {
        title: "Academic Thesis Manager",
        description: "Comprehensive tool for managing thesis projects, including citation management and progress tracking.",
        tools: ["Django", "React", "SQLite", "Bootstrap"],
        image: "Project 3",
        link: "https://github.com/yourusername/project3"
    },
    {
        title: "ML Model Deployment Platform",
        description: "Platform for deploying, monitoring, and scaling machine learning models in production environments.",
        tools: ["Flask", "Docker", "Kubernetes", "MongoDB"],
        image: "Project 4",
        link: "https://github.com/yourusername/project4"
    }
];

// Certifications data - Add your certifications here
const certificationsData = [
    {
        icon: 'ri-award-line',
        title: 'Python Professional Certification',
        issuer: 'Python Institute'
    },
    {
        icon: 'ri-award-line',
        title: 'Machine Learning Specialist',
        issuer: 'Coursera'
    },
    {
        icon: 'ri-award-line',
        title: 'Full Stack Development',
        issuer: 'FreeCodeCamp'
    },
    
];

// Skills data with real devicon classes
const skillsData = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'Django', icon: 'devicon-django-plain' },
    { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' }
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
    servicesGrid.innerHTML = servicesData.map(service => `
        <div class="service-card glass-card">
            <i class="${service.icon} service-icon"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card glass-card">
            <div class="project-image">
    <img src="${project.image}" alt="${project.title}">
</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tools">
                    ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="btn btn-secondary project-link">
                    View Project
                </a>
            </div>
        </div>
    `).join('');
}

// Populate certifications section
function populateCertifications() {
    const certificationsGrid = document.querySelector('.certifications-grid');
    certificationsGrid.innerHTML = certificationsData.map(cert => `
        <div class="certification-card glass-card">
            <i class="${cert.icon} cert-icon"></i>
            <h3>${cert.title}</h3>
            <p>${cert.issuer}</p>
        </div>
    `).join('');
}

// Populate skills section
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = skillsData.map(skill => `
        <div class="skill-item glass-card">
            <i class="${skill.icon} skill-icon"></i>
            <span>${skill.name}</span>
        </div>
    `).join('');
}

// ===== Event Listeners Setup =====
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);
    
    // Back to top button
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Hamburger menu for mobile
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.substring(1));
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
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// ===== Smooth Scrolling =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Update URL without page reload
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
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
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
                
                // Update active navigation link
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
    
    // Get form data
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    
    // Here you would typically send the data to Formspree
    // For now, we'll just show a success message
    showNotification('Message sent successfully!', 'success');
    
    // Reset form
    e.target.reset();
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add styles if not already added
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
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ===== Export functions for global access =====
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
