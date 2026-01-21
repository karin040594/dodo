document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If it's the recipe section, trigger the timeline animation
                if (entry.target.id === 'recipe') {
                    animateTimeline();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Timeline staggered animation
    function animateTimeline() {
        const steps = document.querySelectorAll('.step-item');
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('visible');
            }, index * 200); // 200ms delay between each step
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple parallax effect for hero image
    const heroImage = document.querySelector('.hero-image');
    document.addEventListener('mousemove', (e) => {
        if (heroImage) {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            heroImage.style.transform = `rotate(-5deg) translate(${x}px, ${y}px)`;
        }
    });

    // Console message
    console.log('%c Dubai Sweets ', 'background: #1A3C34; color: #D4AF37; font-size: 20px; font-weight: bold; padding: 5px; border-radius: 5px;');
});
