// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add animation to feature cards when they come into view
const featureCards = document.querySelectorAll('.feature-card');
const characterCards = document.querySelectorAll('.character-card');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize feature cards with opacity 0 and observe them
featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(card);
});

// Initialize character cards with opacity 0 and observe them
characterCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(card);
});

// Add hover effect to character cards
characterCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add mobile menu toggle functionality
const nav = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

// Create mobile menu button
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.classList.add('mobile-menu-btn');
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.style.display = 'none';

// Insert mobile menu button after logo
logo.parentNode.insertBefore(mobileMenuBtn, logo.nextSibling);

// Style mobile menu button
mobileMenuBtn.style.background = 'none';
mobileMenuBtn.style.border = 'none';
mobileMenuBtn.style.color = '#ffffff';
mobileMenuBtn.style.fontSize = '1.5rem';
mobileMenuBtn.style.cursor = 'pointer';

// Handle mobile menu toggle
let isMenuOpen = false;
mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    nav.style.display = isMenuOpen ? 'flex' : 'none';
});

// Handle responsive menu
function handleResponsiveMenu() {
    if (window.innerWidth <= 768) {
        mobileMenuBtn.style.display = 'block';
        nav.style.display = 'none';
    } else {
        mobileMenuBtn.style.display = 'none';
        nav.style.display = 'flex';
    }
}

// Initial check and event listener for window resize
handleResponsiveMenu();
window.addEventListener('resize', handleResponsiveMenu); 