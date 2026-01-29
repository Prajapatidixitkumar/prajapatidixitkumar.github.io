// Professional Presentation JavaScript
// Student Attendance Management System
// Light Mode Only - No Theme Toggle

document.addEventListener('DOMContentLoaded', function () {

    // Hamburger Menu Toggle for Mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInside = hamburger.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function () {
        // Scroll top button visibility
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }

        // Add scrolled class to navbar
        if (window.pageYOffset > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Highlight active navigation link
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.borderBottom = 'none';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.borderBottom = '2px solid white';
            }
        });
    });

    // Advanced Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, observerOptions);

    // Observe all content cards and elements
    const animatedElements = document.querySelectorAll('.content-card, .feature-box, .db-table-card, .solution-item, .objective-box, .learning-card');
    animatedElements.forEach(element => {
        element.classList.add('reveal');
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        observer.observe(element);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.querySelector('.timeline-content').style.transform = 'scale(1.02)';
            this.querySelector('.timeline-content').style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseleave', function () {
            this.querySelector('.timeline-content').style.transform = 'scale(1)';
            this.querySelector('.timeline-content').style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });

    // Counter animation for statistics
    const statValues = document.querySelectorAll('.stat-value');
    let hasAnimated = false;

    function animateCounter(element, target) {
        const isPercentage = target.includes('%');
        const numericTarget = isPercentage ? parseInt(target) : (target === '3NF' ? 3 : parseInt(target));

        if (isNaN(numericTarget)) {
            element.textContent = target;
            return;
        }

        let current = 0;
        const increment = numericTarget / 50;
        const duration = 1500;
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
                clearInterval(timer);
                element.textContent = target;
            } else {
                element.textContent = isPercentage ? Math.floor(current) + '%' : Math.floor(current);
            }
        }, stepTime);
    }

    const conclusionSection = document.querySelector('.conclusion-section');

    const statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statValues.forEach(stat => {
                    const target = stat.textContent;
                    animateCounter(stat, target);
                });
            }
        });
    }, { threshold: 0.5 });

    if (conclusionSection) {
        statsObserver.observe(conclusionSection);
    }

    // Add click-to-copy for code boxes
    const codeBoxes = document.querySelectorAll('.code-box');
    codeBoxes.forEach(box => {
        box.style.cursor = 'pointer';
        box.title = 'Click to copy code';

        box.addEventListener('click', function () {
            const code = this.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                // Show copied message
                const message = document.createElement('div');
                message.textContent = '✓ Code copied!';
                message.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-weight: bold;
                    z-index: 9999;
                    animation: fadeIn 0.3s;
                `;
                document.body.appendChild(message);

                setTimeout(() => {
                    message.style.animation = 'fadeOut 0.3s';
                    setTimeout(() => message.remove(), 300);
                }, 2000);
            });
        });
    });

    // Console branding
    console.log('%c🎓 Student Attendance Management System', 'color: #667eea; font-size: 24px; font-weight: bold;');
    console.log('%cProfessional Presentation Mode', 'color: #764ba2; font-size: 16px;');
    console.log('%cGovernment Polytechnic College - 2026', 'color: #10b981; font-size: 14px;');
    console.log('%c\n📱 Mobile: React Native + Expo\n🗄️ Backend: Supabase + PostgreSQL\n🔐 Security: Row Level Security\n', 'color: #666; font-size: 12px;');

    // Keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        // Press 'T' to scroll to top
        if (e.key === 't' || e.key === 'T') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Press 'B' to scroll to bottom
        if (e.key === 'b' || e.key === 'B') {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    });

    // Print button functionality (optional)
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '🖨️';
    printBtn.title = 'Print';

    // Detect if mobile
    const isMobile = window.innerWidth <= 768;

    printBtn.style.cssText = `
        position: fixed;
        bottom: ${isMobile ? '75px' : '100px'};
        right: ${isMobile ? '15px' : '30px'};
        width: ${isMobile ? '48px' : '50px'};
        height: ${isMobile ? '48px' : '50px'};
        padding: 0;
        background: white;
        color: #667eea;
        border: 2px solid #667eea;
        border-radius: 50%;
        font-size: ${isMobile ? '1.2rem' : '1.5rem'};
        font-weight: bold;
        cursor: pointer;
        z-index: 998;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;

    printBtn.addEventListener('click', function () {
        window.print();
    });

    printBtn.addEventListener('mouseenter', function () {
        this.style.background = '#667eea';
        this.style.color = 'white';
        this.style.transform = 'scale(1.1)';
    });

    printBtn.addEventListener('mouseleave', function () {
        this.style.background = 'white';
        this.style.color = '#667eea';
        this.style.transform = 'scale(1)';
    });

    // Adjust on window resize
    window.addEventListener('resize', function () {
        const mobile = window.innerWidth <= 768;
        printBtn.style.bottom = mobile ? '75px' : '100px';
        printBtn.style.right = mobile ? '15px' : '30px';
        printBtn.style.width = mobile ? '48px' : '50px';
        printBtn.style.height = mobile ? '48px' : '50px';
        printBtn.style.fontSize = mobile ? '1.2rem' : '1.5rem';
    });

    document.body.appendChild(printBtn);

    // Add fade-in animation on page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);

    // Mermaid diagram rendering feedback
    setTimeout(() => {
        const mermaidDiagrams = document.querySelectorAll('.mermaid');
        mermaidDiagrams.forEach(diagram => {
            diagram.style.minHeight = '200px';
            diagram.style.display = 'flex';
            diagram.style.alignItems = 'center';
            diagram.style.justifyContent = 'center';
        });
    }, 1000);
});

// Add CSS for fade animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
