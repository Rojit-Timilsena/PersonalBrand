// Wait until the DOM is fully loaded
window.onload = () => {
    // Dark Mode Toggle
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Typing Effect for "AI Developer / SEO Specialist"
    const heading = document.getElementById('dynamic-heading');
    if (heading) {
        const text = "Software Developer / SEO Specialist";
        let idx = 0;

        function typeEffect() {
            if (idx < text.length) {
                heading.innerHTML += text.charAt(idx);
                idx++;
                setTimeout(typeEffect, 50); // Faster typing speed (50 ms)
            }
        }

        typeEffect();
    }

    // Smooth Scroll to Section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive Scroll Effect - Fade in content when scrolling
    const container = document.querySelector('.container');
    if (container) {
        window.addEventListener('scroll', () => {
            const containerPos = container.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
            if (containerPos < screenPos) {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }
        });
    }
};

