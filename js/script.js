document.addEventListener('DOMContentLoaded', () => {
    // Inicializa animações AOS
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
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Brilho no nome do Desenvolvedor
    const autor = document.querySelector('.autor');
    autor.addEventListener('mouseover', () => { autor.style.textShadow = "0 0 20px #0076FF"; });
    autor.addEventListener('mouseleave', () => { autor.style.textShadow = "none"; });

    // FRASE DIGITANDO
    const texto = "Onde o detalhe encontra a perfeição.";
    const elemento = document.getElementById("frase-animada");
    let i = 0; let jaAnimou = false;

    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, 70);
        }
    }

    window.addEventListener('scroll', () => {
        if(!elemento) return;
        const rect = elemento.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85 && !jaAnimou) {
            jaAnimou = true;
            digitar();
        }
    }, { passive: true });
});
