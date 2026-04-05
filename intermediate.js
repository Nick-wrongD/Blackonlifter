/* ═══════════════════════════════════════════════════════
   INTERMEDIATE.JS — BlackOnLifter Intermediate Mode
   Particle canvas + day switching + exercise accordion
═══════════════════════════════════════════════════════ */

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
    initIPCanvas();
    restoreIPState();
});

/* ═══════════════════════════════════
   PARTICLE CANVAS
═══════════════════════════════════ */
function initIPCanvas() {
    const canvas = document.getElementById('ipCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function setSize() {
        canvas.width  = window.innerWidth;
        canvas.height = document.querySelector('.ip-hero')?.offsetHeight || 500;
    }
    setSize();

    // Cyan + subtle gold mix — matches the intermediate theme
    const particles = Array.from({ length: 55 }, (_, i) => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        size:    Math.random() * 1.8 + 0.4,
        vy:      -(Math.random() * 0.5 + 0.15),
        vx:      (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.25 + 0.05,
        life:    Math.random() * 0.5 + 0.5,
        gold:    Math.random() > 0.82   // ~18% gold particles
    }));

    function spawnParticle(i) {
        particles[i] = {
            x:       Math.random() * canvas.width,
            y:       canvas.height + 5,
            size:    Math.random() * 1.8 + 0.4,
            vy:      -(Math.random() * 0.5 + 0.15),
            vx:      (Math.random() - 0.5) * 0.25,
            opacity: Math.random() * 0.25 + 0.05,
            life:    Math.random() * 0.5 + 0.5,
            gold:    Math.random() > 0.82
        };
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.y    += p.vy;
            p.x    += p.vx;
            p.life -= 0.001;
            if (p.life <= 0 || p.y < -10) { spawnParticle(i); return; }

            const color = p.gold ? '#ffab40' : '#00e5ff';
            ctx.save();
            ctx.globalAlpha = p.opacity * p.life;
            ctx.fillStyle   = color;
            ctx.shadowColor = color;
            ctx.shadowBlur  = 10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
        requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', setSize);
}

/* ═══════════════════════════════════
   DAY SWITCHING
═══════════════════════════════════ */
function switchIPDay(dayId) {
    // Hide all sections
    document.querySelectorAll('.ip-day-section')
            .forEach(s => s.classList.remove('ip-active-day'));

    // Deactivate all tabs
    document.querySelectorAll('.ip-day-tab')
            .forEach(t => t.classList.remove('active'));

    // Deactivate all overview cards
    document.querySelectorAll('.ip-overview-card')
            .forEach(c => c.classList.remove('active-ip-card'));

    // Show target section
    const target = document.getElementById(dayId);
    if (target) target.classList.add('ip-active-day');

    // Activate matching tab
    const tab = document.querySelector(`[data-ip-day="${dayId}"]`);
    if (tab) tab.classList.add('active');

    // Activate matching overview card
    const overviewMap = {
        'ip-day1':       0,
        'ip-day2':       1,
        'ip-day-rest1':  2,
        'ip-day3':       3,
        'ip-day-rest2':  4,
        'ip-day4':       5
    };
    const cards = document.querySelectorAll('.ip-overview-card');
    const idx   = overviewMap[dayId];
    if (idx !== undefined && cards[idx]) cards[idx].classList.add('active-ip-card');

    // Save state
    try { localStorage.setItem('ip_activeDay', dayId); } catch(e) {}

    // Smooth scroll to tabs
    const tabsEl = document.querySelector('.ip-day-tabs');
    if (tabsEl) {
        const offset = tabsEl.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
}

/* ═══════════════════════════════════
   EXERCISE ACCORDION
═══════════════════════════════════ */
function toggleIPExercise(header) {
    const item   = header.closest('.ip-exercise-item');
    const isOpen = item.classList.contains('open');

    // Close all siblings in the same list
    header.closest('.ip-exercise-list')
          ?.querySelectorAll('.ip-exercise-item.open')
          .forEach(el => { if (el !== item) el.classList.remove('open'); });

    item.classList.toggle('open', !isOpen);

    // Lazy-load iframes: promote data-src → src on open
    if (!isOpen) {
        item.querySelectorAll('iframe[data-src]').forEach(iframe => {
            iframe.src = iframe.dataset.src;
            delete iframe.dataset.src;
        });
    }
}

/* ═══════════════════════════════════
   RESTORE STATE FROM LOCALSTORAGE
═══════════════════════════════════ */
function restoreIPState() {
    try {
        const savedDay = localStorage.getItem('ip_activeDay');
        if (savedDay && document.getElementById(savedDay)) {
            // Silently activate saved day without scrolling on load
            document.querySelectorAll('.ip-day-section')
                    .forEach(s => s.classList.remove('ip-active-day'));
            document.querySelectorAll('.ip-day-tab')
                    .forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.ip-overview-card')
                    .forEach(c => c.classList.remove('active-ip-card'));

            document.getElementById(savedDay).classList.add('ip-active-day');

            const tab = document.querySelector(`[data-ip-day="${savedDay}"]`);
            if (tab) tab.classList.add('active');

            const overviewMap = {
                'ip-day1': 0, 'ip-day2': 1,
                'ip-day-rest1': 2, 'ip-day3': 3,
                'ip-day-rest2': 4, 'ip-day4': 5
            };
            const cards = document.querySelectorAll('.ip-overview-card');
            const idx   = overviewMap[savedDay];
            if (idx !== undefined && cards[idx]) cards[idx].classList.add('active-ip-card');
        }
    } catch(e) {}
}

/* ═══════════════════════════════════
   NAVBAR SCROLL EFFECT
═══════════════════════════════════ */
(function initNavScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }, { passive: true });
})();

/* ═══════════════════════════════════
   SCROLL-TO-TOP BUTTON
═══════════════════════════════════ */
(function initScrollTop() {
    const btn = document.getElementById('ipScrollTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
})();