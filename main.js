import './style.css'

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal-left, .reveal-right');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Mobile Menu Toggle (Simple implementation)
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    // In a real scenario, we'd toggle a class to show/hide the menu
    // For now, let's just alert or log, or implement a basic toggle if CSS supports it
    // Since I hid nav-links with display:none in mobile, I need to toggle a class that changes that.
    
    // Let's add a 'mobile-active' class to nav-links
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(255,255,255,0.95)';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        
        // Change link colors for mobile menu
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => link.style.color = '#212121');
    }
});

// Add some CSS for the reveal animation dynamically or ensure it's in CSS
// I'll add the classes here to be sure they work if not fully covered in CSS
const style = document.createElement('style');
style.innerHTML = `
    .reveal-left {
        opacity: 0;
        transform: translateX(-50px);
        transition: all 1s ease;
    }
    .reveal-right {
        opacity: 0;
        transform: translateX(50px);
        transition: all 1s ease;
    }
    .active {
        opacity: 1;
        transform: translateX(0);
    }
`;
document.head.appendChild(style);
