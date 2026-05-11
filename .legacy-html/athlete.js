/* ═══════════════════════════════════
   PARTICLES
═══════════════════════════════════ */
(function initAthleteCanvas() {
    const canvas = document.getElementById('athleteCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function setSize() {
        canvas.width  = window.innerWidth;
        canvas.height = document.querySelector('.athlete-hero')?.offsetHeight || 500;
    }
    setSize();

    const particles = Array.from({ length: 50 }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        size:    Math.random() * 1.8 + 0.4,
        vy:      -(Math.random() * 0.5 + 0.15),
        vx:      (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.25 + 0.05,
        life:    Math.random() * 0.5 + 0.5,
        gold:    Math.random() > 0.8
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.y += p.vy; p.x += p.vx; p.life -= 0.001;
            if (p.life <= 0 || p.y < -10) {
                particles[i] = { x: Math.random() * canvas.width, y: canvas.height + 5, size: Math.random() * 1.8 + 0.4, vy: -(Math.random() * 0.5 + 0.15), vx: (Math.random() - 0.5) * 0.25, opacity: Math.random() * 0.25 + 0.05, life: Math.random() * 0.5 + 0.5, gold: Math.random() > 0.8 };
                return;
            }
            const color = particles[i].gold ? '#ffab40' : '#00e5ff';
            ctx.save();
            ctx.globalAlpha = p.opacity * p.life;
            ctx.fillStyle   = color;
            ctx.shadowColor = color;
            ctx.shadowBlur  = 10;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
        });
        requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', setSize);
})();

/* ═══════════════════════════════════
   DAY SWITCHING
═══════════════════════════════════ */
function switchDay(day) {
    document.querySelectorAll('.day-section').forEach(s => s.classList.remove('active-day'));
    document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`day-${day}`)?.classList.add('active-day');
    document.querySelector(`[data-day="${day}"]`)?.classList.add('active');
}

function jumpToDay(day) {
    switchDay(day);
    document.querySelector('.day-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ═══════════════════════════════════
   EXERCISE ACCORDION
═══════════════════════════════════ */
function toggleExercise(header) {
    const item = header.closest('.exercise-item');
    const isOpen = item.classList.contains('open');

    // Close all others in same list
    header.closest('.exercise-list')
          ?.querySelectorAll('.exercise-item.open')
          .forEach(el => {
              if (el !== item) el.classList.remove('open');
          });

    item.classList.toggle('open', !isOpen);

    // Load iframe if has data-src
    if (!isOpen) {
        item.querySelectorAll('iframe[data-src]').forEach(iframe => {
            if (iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
                delete iframe.dataset.src;
            }
        });
    }
}

/* ═══════════════════════════════════
   PROGRESSION TOGGLE
═══════════════════════════════════ */
function toggleProgression(panelId, checkbox) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    if (checkbox.checked) {
        panel.classList.add('visible');
        panel.style.display = 'block';
        // Persist
        try { localStorage.setItem(`bol_prog_${panelId}`, '1'); } catch(e) {}
    } else {
        panel.classList.remove('visible');
        panel.style.display = 'none';
        try { localStorage.removeItem(`bol_prog_${panelId}`); } catch(e) {}
    }
}

/* ═══════════════════════════════════
   RESTORE PROGRESSION STATE
═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    ['pullupProgress'].forEach(id => {
        try {
            if (localStorage.getItem(`bol_prog_${id}`)) {
                const checkbox = document.getElementById(`${id}Check`);
                const panel    = document.getElementById(id);
                if (checkbox) checkbox.checked = true;
                if (panel)    { panel.style.display = 'block'; panel.classList.add('visible'); }
            }
        } catch(e) {}
    });
});

/* ═══════════════════════════════════
   ADDING VIDEO SOURCES
   
   To add your own videos, open athlete.html
   and find the <iframe> for each exercise.
   Change:
       src=""
   to:
       src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
   
   OR if you have local videos:
       src="videos/pullups.mp4"
   
   The video-empty-state div will
   automatically hide once an iframe has src.
═══════════════════════════════════ */

/* Hide empty state when iframe has a real src */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.video-frame-wrap iframe').forEach(iframe => {
        if (iframe.src && iframe.src !== window.location.href) {
            const emptyState = iframe.parentElement?.querySelector('.video-empty-state');
            if (emptyState) emptyState.style.display = 'none';
        }
    });
});