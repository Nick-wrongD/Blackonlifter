/* ═══════════════════════════════════════════════════════
   HYPERTROPHY.JS — BlackOnLifter Hypertrophy Mode
   6-Day PPL×2 | Aesthetic Bodybuilding
   Purple particle canvas + day switching + accordion
═══════════════════════════════════════════════════════ */

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
    initHypCanvas();
    restoreHypState();
    initNavScroll();
    initScrollTop();
    initVolumeTracker();
});

/* ═══════════════════════════════════
   PARTICLE CANVAS — Purple / Violet
═══════════════════════════════════ */
function initHypCanvas() {
    const canvas = document.getElementById('hypCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function setSize() {
        canvas.width  = window.innerWidth;
        canvas.height = document.querySelector('.hyp-hero')?.offsetHeight || 580;
    }
    setSize();

    const particles = Array.from({ length: 65 }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        size:    Math.random() * 2.2 + 0.4,
        vy:      -(Math.random() * 0.55 + 0.16),
        vx:      (Math.random() - 0.5) * 0.28,
        opacity: Math.random() * 0.30 + 0.05,
        life:    Math.random() * 0.5 + 0.5,
        pink:    Math.random() > 0.70   // 30% pink, 70% purple
    }));

    function spawnParticle(i) {
        particles[i] = {
            x:       Math.random() * canvas.width,
            y:       canvas.height + 5,
            size:    Math.random() * 2.2 + 0.4,
            vy:      -(Math.random() * 0.55 + 0.16),
            vx:      (Math.random() - 0.5) * 0.28,
            opacity: Math.random() * 0.30 + 0.05,
            life:    Math.random() * 0.5 + 0.5,
            pink:    Math.random() > 0.70
        };
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.y    += p.vy;
            p.x    += p.vx;
            p.life -= 0.001;
            if (p.life <= 0 || p.y < -10) { spawnParticle(i); return; }

            const color = p.pink ? '#e879f9' : '#a855f7';
            ctx.save();
            ctx.globalAlpha = p.opacity * p.life;
            ctx.fillStyle   = color;
            ctx.shadowColor = color;
            ctx.shadowBlur  = 14;
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
function switchHypDay(dayId) {
    document.querySelectorAll('.hyp-day-section').forEach(s => s.classList.remove('hyp-active-day'));
    document.querySelectorAll('.hyp-day-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.hyp-split-day').forEach(c => c.classList.remove('active-split-day'));

    const target = document.getElementById(dayId);
    if (target) target.classList.add('hyp-active-day');

    const tab = document.querySelector(`[data-hyp-day="${dayId}"]`);
    if (tab) tab.classList.add('active');

    const splitCard = document.querySelector(`[data-hyp-split="${dayId}"]`);
    if (splitCard) splitCard.classList.add('active-split-day');

    try { localStorage.setItem('hyp_activeDay', dayId); } catch(e) {}

    const tabsEl = document.querySelector('.hyp-day-tabs');
    if (tabsEl) {
        const offset = tabsEl.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
}

function jumpHypToDay(dayId) {
    switchHypDay(dayId);
}

/* ═══════════════════════════════════
   EXERCISE ACCORDION
═══════════════════════════════════ */
function toggleHypExercise(header) {
    const item   = header.closest('.hyp-exercise-item');
    const isOpen = item.classList.contains('open');

    header.closest('.hyp-exercise-list')
          ?.querySelectorAll('.hyp-exercise-item.open')
          .forEach(el => { if (el !== item) el.classList.remove('open'); });

    item.classList.toggle('open', !isOpen);

    if (!isOpen) {
        item.querySelectorAll('iframe[data-src]').forEach(iframe => {
            iframe.src = iframe.dataset.src;
            delete iframe.dataset.src;
        });
    }
}

/* ═══════════════════════════════════
   RESTORE STATE
═══════════════════════════════════ */
function restoreHypState() {
    try {
        const savedDay = localStorage.getItem('hyp_activeDay');
        const validDays = ['hyp-push-a','hyp-pull-a','hyp-legs-a','hyp-rest','hyp-push-b','hyp-pull-b','hyp-legs-b'];
        if (savedDay && validDays.includes(savedDay) && document.getElementById(savedDay)) {
            document.querySelectorAll('.hyp-day-section').forEach(s => s.classList.remove('hyp-active-day'));
            document.querySelectorAll('.hyp-day-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.hyp-split-day').forEach(c => c.classList.remove('active-split-day'));

            document.getElementById(savedDay).classList.add('hyp-active-day');
            const tab = document.querySelector(`[data-hyp-day="${savedDay}"]`);
            if (tab) tab.classList.add('active');
            const splitCard = document.querySelector(`[data-hyp-split="${savedDay}"]`);
            if (splitCard) splitCard.classList.add('active-split-day');
        }
    } catch(e) {}
}

/* ═══════════════════════════════════
   NAVBAR SCROLL EFFECT
═══════════════════════════════════ */
function initNavScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 40);
    }, { passive: true });
}

/* ═══════════════════════════════════
   SCROLL TOP
═══════════════════════════════════ */
function initScrollTop() {
    const btn = document.getElementById('hypScrollTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ═══════════════════════════════════
   VOLUME TRACKER ANIMATION
═══════════════════════════════════ */
function initVolumeTracker() {
    const fills = document.querySelectorAll('.volume-bar-fill[data-width]');
    if (!fills.length) return;

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.width = e.target.dataset.width;
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });

    fills.forEach(f => {
        f.style.width = '0%';
        obs.observe(f);
    });
}