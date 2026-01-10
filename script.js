function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'animate-in');
                const children = entry.target.querySelectorAll('.details-container, article, .contact-info-container');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '0';
                        child.style.transform = 'translateY(20px)';
                        child.style.transition = 'all 0.6s ease';
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        observer.observe(section);
        if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            section.style.animationDelay = `${index * 0.1}s`;
        } else {
            section.style.opacity = '1';
            section.style.transform = 'none';
        }
    });

    const detailContainers = document.querySelectorAll('.details-container, .contact-info-container');
    detailContainers.forEach(container => {
        observer.observe(container);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const profileSection = document.getElementById('profile');
        if (profileSection && scrolled < window.innerHeight) {
            const profilePic = profileSection.querySelector('.section__pic-container');
            if (profilePic && window.innerWidth > 600) {
                profilePic.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
});