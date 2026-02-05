document.addEventListener('DOMContentLoaded', () => {
    // 1. INICIALIZAÇÃO DE ANIMAÇÕES (AOS)
    AOS.init({ duration: 1000, once: true });

    // 2. HEADER DINÂMICO
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (header) {
            window.scrollY > 50 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
        }
    }, { passive: true });

    // 3. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 4. MOTOR DE DIGITAÇÃO ULTRA RÁPIDO
    function iniciarDigitacao(idElemento, textoParaDigitar, velocidade) {
        let indice = 0;
        const alvo = document.getElementById(idElemento);
        if(!alvo) return;

        alvo.innerHTML = "";
        alvo.style.transition = "none"; // Garante que o CSS não freie o JS

        function executar() {
            if (indice < textoParaDigitar.length) {
                alvo.innerHTML += textoParaDigitar.charAt(indice);
                indice++;
                setTimeout(executar, velocidade);
            }
        }
        executar();
    }

    // --- EXECUÇÃO ---
    // Topo: 10ms (Instantâneo)
    iniciarDigitacao("titulo-hero", "Transformando estética em arte.", 10);

    // Rodapé: 25ms (Rápido no scroll)
    const fraseTexto = "Onde o detalhe encontra a perfeição.";
    const elementoFrase = document.getElementById("frase-animada");
    let jaAnimouFrase = false;

    window.addEventListener('scroll', () => {
        if(!elementoFrase) return;
        const rect = elementoFrase.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85 && !jaAnimouFrase) {
            jaAnimouFrase = true;
            iniciarDigitacao("frase-animada", fraseTexto, 25);
        }
    }, { passive: true });
});
