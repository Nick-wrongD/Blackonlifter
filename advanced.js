/* ═══════════════════════════════════════════════════════
   ADVANCED.JS — BlackOnLifter Advanced Mode
   Particle canvas + day switching + exercise accordion
═══════════════════════════════════════════════════════ */

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
    initAdvCanvas();
    restoreAdvState();
    initNavScroll();
    initScrollTop();
    initVolumeTracker();
    initRPEGuide();
});

/* ═══════════════════════════════════
   PARTICLE CANVAS
═══════════════════════════════════ */
function initAdvCanvas() {
    const canvas = document.getElementById('advCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function setSize() {
        canvas.width  = window.innerWidth;
        canvas.height = document.querySelector('.adv-hero')?.offsetHeight || 550;
    }
    setSize();

    // Red + orange fire particles
    const particles = Array.from({ length: 60 }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        size:    Math.random() * 2 + 0.4,
        vy:      -(Math.random() * 0.55 + 0.18),
        vx:      (Math.random() - 0.5) * 0.28,
        opacity: Math.random() * 0.28 + 0.05,
        life:    Math.random() * 0.5 + 0.5,
        orange:  Math.random() > 0.65  // 35% red, 65% orange/gold mix
    }));

    function spawnParticle(i) {
        particles[i] = {
            x:       Math.random() * canvas.width,
            y:       canvas.height + 5,
            size:    Math.random() * 2 + 0.4,
            vy:      -(Math.random() * 0.55 + 0.18),
            vx:      (Math.random() - 0.5) * 0.28,
            opacity: Math.random() * 0.28 + 0.05,
            life:    Math.random() * 0.5 + 0.5,
            orange:  Math.random() > 0.65
        };
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.y    += p.vy;
            p.x    += p.vx;
            p.life -= 0.001;
            if (p.life <= 0 || p.y < -10) { spawnParticle(i); return; }

            const color = p.orange ? '#ff6a00' : '#ff3d3d';
            ctx.save();
            ctx.globalAlpha = p.opacity * p.life;
            ctx.fillStyle   = color;
            ctx.shadowColor = color;
            ctx.shadowBlur  = 12;
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
const DAY_ORDER = ['adv-chest','adv-back','adv-shoulders','adv-arms','adv-legs','adv-rest'];

function switchAdvDay(dayId) {
    document.querySelectorAll('.adv-day-section').forEach(s => s.classList.remove('adv-active-day'));
    document.querySelectorAll('.adv-day-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.adv-split-day').forEach(c => c.classList.remove('active-split-day'));

    const target = document.getElementById(dayId);
    if (target) target.classList.add('adv-active-day');

    const tab = document.querySelector(`[data-adv-day="${dayId}"]`);
    if (tab) tab.classList.add('active');

    const splitCard = document.querySelector(`[data-adv-split="${dayId}"]`);
    if (splitCard) splitCard.classList.add('active-split-day');

    try { localStorage.setItem('adv_activeDay', dayId); } catch(e) {}

    const tabsEl = document.querySelector('.adv-day-tabs');
    if (tabsEl) {
        const offset = tabsEl.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
}

function jumpAdvToDay(dayId) {
    switchAdvDay(dayId);
}

/* ═══════════════════════════════════
   EXERCISE ACCORDION
═══════════════════════════════════ */
function toggleAdvExercise(header) {
    const item   = header.closest('.adv-exercise-item');
    const isOpen = item.classList.contains('open');

    header.closest('.adv-exercise-list')
          ?.querySelectorAll('.adv-exercise-item.open')
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
function restoreAdvState() {
    try {
        const savedDay = localStorage.getItem('adv_activeDay');
        const validDays = ['adv-chest','adv-back','adv-shoulders','adv-arms','adv-legs','adv-rest'];
        if (savedDay && validDays.includes(savedDay) && document.getElementById(savedDay)) {
            document.querySelectorAll('.adv-day-section').forEach(s => s.classList.remove('adv-active-day'));
            document.querySelectorAll('.adv-day-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.adv-split-day').forEach(c => c.classList.remove('active-split-day'));

            document.getElementById(savedDay).classList.add('adv-active-day');
            const tab = document.querySelector(`[data-adv-day="${savedDay}"]`);
            if (tab) tab.classList.add('active');
            const splitCard = document.querySelector(`[data-adv-split="${savedDay}"]`);
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
   SCROLL TOP BUTTON
═══════════════════════════════════ */
function initScrollTop() {
    const btn = document.getElementById('advScrollTop');
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

/* ═══════════════════════════════════
   RPE GUIDE ANIMATION
═══════════════════════════════════ */
function initRPEGuide() {
    const fills = document.querySelectorAll('.adv-rpe-fill[data-width]');
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
        f.style.transition = 'width 1s cubic-bezier(0.22,1,0.36,1)';
        obs.observe(f);
    });
}

/* ═══════════════════════════════════
   NOTIFICATION
═══════════════════════════════════ */
function showAdvNotif(msg) {
    document.querySelector('.adv-notif')?.remove();
    const n = document.createElement('div');
    n.className = 'adv-notif';
    n.textContent = msg;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 2800);
}