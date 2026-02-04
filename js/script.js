document.addEventListener('DOMContentLoaded', () => {
    // Inicializa animações de scroll
    AOS.init({ duration: 1000, once: true });

    // Header dinâmico
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    });

    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Brilho no nome do Desenvolvedor
    const autor = document.querySelector('.autor');
    autor.addEventListener('mouseover', () => { autor.style.textShadow = "0 0 20px #0076FF"; });
    autor.addEventListener('mouseleave', () => { autor.style.textShadow = "none"; });
});e