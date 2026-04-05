// Particle canvas for choose page
(function initChooseCanvas() {
    const canvas = document.getElementById('chooseCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = document.querySelector('.choose-hero')?.offsetHeight || 360;

    const particles = Array.from({ length: 45 }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        size:    Math.random() * 2 + 0.5,
        vy:      -(Math.random() * 0.5 + 0.18),
        vx:      (Math.random() - 0.5) * 0.28,
        opacity: Math.random() * 0.28 + 0.06,
        life:    Math.random() * 0.5 + 0.5
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.y += p.vy; p.x += p.vx; p.life -= 0.001;
            if (p.life <= 0 || p.y < -10) {
                particles[i] = { x: Math.random() * canvas.width, y: canvas.height + 5, size: Math.random() * 2 + 0.5, vy: -(Math.random() * 0.5 + 0.18), vx: (Math.random() - 0.5) * 0.28, opacity: Math.random() * 0.28 + 0.06, life: Math.random() * 0.5 + 0.5 };
            }
            ctx.save();
            ctx.globalAlpha = p.opacity * p.life;
            ctx.fillStyle   = '#00e5ff';
            ctx.shadowColor = '#00e5ff';
            ctx.shadowBlur  = 10;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
        });
        requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; });
})();

// Level routing
function selectLevel(level) {
    const destinations = {
        beginner:     'tracker.html?level=beginner',
        intermediate: 'intermediate.html',
        advanced:     'advanced.html',
        hypertrophy:  'hypertrophy.html',
        athlete:      'athlete.html'
    };
    const card = document.querySelector(`[data-level="${level}"]`);
    if (card) {
        card.style.transform = 'scale(0.97)';
        card.style.opacity   = '0.75';
    }
    setTimeout(() => { window.location.href = destinations[level]; }, 300);
}