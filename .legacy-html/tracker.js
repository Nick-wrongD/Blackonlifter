/* ═══════════════════════════════════
   VIDEO LIBRARY
═══════════════════════════════════ */
const videos = [
    {
        id: 'ultWZbUMPL8', title: 'Barbell Back Squat', cat: 'compound,legs',
        desc: 'Master the king of all lifts — depth, bracing, and foot placement.',
        muscle: 'Quads, Glutes, Hamstrings', level: 'Intermediate', equip: 'Barbell'
    },
    {
        id: 'op9kVnSso6Q', title: 'Conventional Deadlift', cat: 'compound',
        desc: 'The most primitive display of strength. Full setup and execution guide.',
        muscle: 'Hamstrings, Glutes, Back', level: 'Intermediate', equip: 'Barbell'
    },
    {
        id: 'rT7DgCr-3pg', title: 'Bench Press', cat: 'compound,push',
        desc: 'Build a thick, powerful chest with proper setup, arch, and bar path.',
        muscle: 'Chest, Shoulders, Triceps', level: 'Beginner', equip: 'Barbell'
    },
    {
        id: 'eGo4IYlbE5g', title: 'Pull-Up', cat: 'compound,pull',
        desc: 'The ultimate upper body pulling exercise — full range, zero cheating.',
        muscle: 'Lats, Biceps, Rear Delts', level: 'Intermediate', equip: 'Bodyweight'
    },
    {
        id: '2yjwXTZbDtM', title: 'Overhead Press', cat: 'compound,push',
        desc: 'Build cannonball shoulders with this strict overhead pressing tutorial.',
        muscle: 'Shoulders, Triceps', level: 'Intermediate', equip: 'Barbell'
    },
    {
        id: 'jEy_czb3RKA', title: 'Romanian Deadlift', cat: 'legs',
        desc: 'Target your posterior chain with the most effective hamstring builder.',
        muscle: 'Hamstrings, Glutes', level: 'Beginner', equip: 'Barbell'
    },
    {
        id: 'XjEMFVB82ck', title: 'Dumbbell Curl', cat: 'pull',
        desc: 'Bicep peak and thickness — full technique and tempo breakdown.',
        muscle: 'Biceps, Brachialis', level: 'Beginner', equip: 'Dumbbells'
    },
    {
        id: '0326dy_-CzM', title: 'Plank', cat: 'core',
        desc: 'Core stability, anti-rotation, and full body tension — mastered.',
        muscle: 'Core, Glutes', level: 'Beginner', equip: 'Bodyweight'
    },
    {
        id: 'IODxDxX7oi4', title: 'Barbell Hip Thrust', cat: 'legs',
        desc: 'The most effective glute builder in existence. Science-backed form guide.',
        muscle: 'Glutes, Hamstrings', level: 'Beginner', equip: 'Barbell'
    },
    {
        id: 'DHXn6rNFaWE', title: 'Cable Row', cat: 'pull',
        desc: 'Build width and thickness — proper scapular movement and pull mechanics.',
        muscle: 'Lats, Rhomboids, Biceps', level: 'Beginner', equip: 'Cable Machine'
    },
    {
        id: '_nqoMAh5dkA', title: 'Tricep Dip', cat: 'push',
        desc: 'Build massive arms and a powerful chest with this bodyweight compound.',
        muscle: 'Triceps, Chest, Shoulders', level: 'Intermediate', equip: 'Parallel Bars'
    },
    {
        id: 'mnBiND0g9I0', title: 'Hanging Leg Raise', cat: 'core',
        desc: 'The ultimate lower ab builder. Full compression and control guide.',
        muscle: 'Core, Hip Flexors', level: 'Intermediate', equip: 'Pull-Up Bar'
    }
];

/* ═══════════════════════════════════
   EXERCISE LOG STATE
═══════════════════════════════════ */
let logEntries = JSON.parse(localStorage.getItem('bol_log') || '[]');
let prRecords = JSON.parse(localStorage.getItem('bol_pr') || '{}');
let weekData = JSON.parse(localStorage.getItem('bol_week') || '{}');
let sessionStart = Date.now();
let sessionTimer;

/* ═══════════════════════════════════
   TIMER STATE
═══════════════════════════════════ */
let timerDuration = 120;
let timerRemaining = 120;
let timerInterval = null;
let timerRunning = false;

/* ═══════════════════════════════════
   BOOT
═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    initTrackerParticles();
    initVideoGallery();
    renderLog();
    renderPRBoard();
    initTimer();
    initSessionClock();
    initChart();
    bindFormEvents();
});

/* ═══════════════════════════════════
   PARTICLES (tracker hero)
═══════════════════════════════════ */
function initTrackerParticles() {
    const canvas = document.getElementById('trackerCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.tracker-hero')?.offsetHeight || 400;

    const particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.8 + 0.4,
            vy: -(Math.random() * 0.5 + 0.15),
            vx: (Math.random() - 0.5) * 0.25,
            opacity: Math.random() * 0.25 + 0.05,
            life: Math.random() * 0.5 + 0.5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.y += p.vy; p.x += p.vx; p.life -= 0.001;
            if (p.life <= 0 || p.y < -10) {
                particles[i] = {
                    x: Math.random() * canvas.width,
                    y: canvas.height + 5,
                    size: Math.random() * 1.8 + 0.4,
                    vy: -(Math.random() * 0.5 + 0.15),
                    vx: (Math.random() - 0.5) * 0.25,
                    opacity: Math.random() * 0.25 + 0.05,
                    life: Math.random() * 0.5 + 0.5
                };
            }
            ctx.save();
            ctx.globalAlpha = p.opacity * p.life;
            ctx.fillStyle = '#00e5ff';
            ctx.shadowColor = '#00e5ff';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
        requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector('.tracker-hero')?.offsetHeight || 400;
    });
}

/* ═══════════════════════════════════
   VIDEO GALLERY
═══════════════════════════════════ */
function initVideoGallery() {
    renderVideoGrid(videos);

    // Category filter
    document.querySelectorAll('.video-cat').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.video-cat').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.cat;
            renderVideoGrid(cat === 'all' ? videos : videos.filter(v => v.cat.includes(cat)));
        });
    });

    // Search
    document.getElementById('videoSearch')?.addEventListener('input', e => {
        const q = e.target.value.toLowerCase().trim();
        const filtered = q
            ? videos.filter(v => v.title.toLowerCase().includes(q) || v.muscle.toLowerCase().includes(q))
            : videos;
        renderVideoGrid(filtered);
    });
}

function renderVideoGrid(list) {
    const grid = document.getElementById('videoGrid');
    if (!grid) return;
    grid.innerHTML = '';

    list.forEach((v, i) => {
        const thumb = document.createElement('div');
        thumb.className = 'video-thumb';
        if (i === 0) thumb.classList.add('active');
        thumb.innerHTML = `
            <img class="video-thumb-img"
                 src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg"
                 alt="${v.title}" loading="lazy"/>
            <div class="video-thumb-play"><i class="fas fa-play"></i></div>
            <div class="video-thumb-label">${v.title}</div>`;
        thumb.addEventListener('click', () => loadVideo(v, thumb));
        grid.appendChild(thumb);
    });

    if (list.length > 0) loadVideo(list[0], grid.querySelector('.video-thumb'));
}

function loadVideo(v, thumbEl) {
    document.querySelectorAll('.video-thumb').forEach(t => t.classList.remove('active'));
    thumbEl?.classList.add('active');

    const player = document.getElementById('videoPlayer');
    if (player) player.src = `https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`;

    const t = document.getElementById('videoTitle');
    const d = document.getElementById('videoDesc');
    const m = document.getElementById('videoMuscle');
    const l = document.getElementById('videoLevel');
    const eq = document.getElementById('videoEquip');

    if (t) t.textContent = v.title + ' — Full Tutorial';
    if (d) d.textContent = v.desc;
    if (m) m.innerHTML = `<i class="fas fa-crosshairs"></i> ${v.muscle}`;
    if (l) l.innerHTML = `<i class="fas fa-signal"></i> ${v.level}`;
    if (eq) eq.innerHTML = `<i class="fas fa-weight-hanging"></i> ${v.equip}`;
}

/* ═══════════════════════════════════
   FORM & LOG
═══════════════════════════════════ */
function bindFormEvents() {
    document.getElementById('addExerciseBtn')?.addEventListener('click', addExercise);
    document.getElementById('clearLogBtn')?.addEventListener('click', clearLog);
    document.getElementById('exportLogBtn')?.addEventListener('click', exportLog);
    document.getElementById('clearPRBtn')?.addEventListener('click', () => {
        if (confirm('Clear all personal records?')) {
            prRecords = {};
            localStorage.setItem('bol_pr', '{}');
            renderPRBoard();
        }
    });

    // Enter key on last field adds exercise
    document.getElementById('exerciseNotes')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') addExercise();
    });
}

function addExercise() {
    const name = document.getElementById('exerciseName')?.value.trim();
    const cat = document.getElementById('exerciseCategory')?.value;
    const sets = parseInt(document.getElementById('exerciseSets')?.value) || 0;
    const reps = parseInt(document.getElementById('exerciseReps')?.value) || 0;
    const weight = parseFloat(document.getElementById('exerciseWeight')?.value) || 0;
    const notes = document.getElementById('exerciseNotes')?.value.trim();

    if (!name) { flashInput('exerciseName'); return; }
    if (!sets) { flashInput('exerciseSets'); return; }
    if (!reps) { flashInput('exerciseReps'); return; }

    const volume = sets * reps * weight;
    const entry = { id: Date.now(), name, cat, sets, reps, weight, notes, volume, time: new Date().toLocaleTimeString() };

    // Check PR
    let isPR = false;
    if (!prRecords[name] || weight > prRecords[name].weight) {
        prRecords[name] = { weight, reps, sets, date: new Date().toLocaleDateString() };
        localStorage.setItem('bol_pr', JSON.stringify(prRecords));
        isPR = true;
        renderPRBoard();
    }

    logEntries.unshift({ ...entry, isPR });
    localStorage.setItem('bol_log', JSON.stringify(logEntries));

    // Update weekly data
    const today = new Date().toLocaleDateString('en-US', { weekday: 'short' });
    if (!weekData[today]) weekData[today] = { volume: 0, sets: 0 };
    weekData[today].volume += volume;
    weekData[today].sets += sets;
    localStorage.setItem('bol_week', JSON.stringify(weekData));

    renderLog();
    updateStats();
    updateChart();
    clearForm();

    // Auto-start rest timer
    resetTimer();
    startTimer();

    if (isPR) showTrackerNotif(`🏆 New PR! ${name} — ${weight}kg`, 'pr');
    else showTrackerNotif(`✓ Logged: ${name}`);
}

function flashInput(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.borderColor = '#ff5252';
    el.style.boxShadow = '0 0 0 3px rgba(255,82,82,0.12)';
    el.focus();
    setTimeout(() => { el.style.borderColor = ''; el.style.boxShadow = ''; }, 1500);
}

function clearForm() {
    ['exerciseName', 'exerciseSets', 'exerciseReps', 'exerciseWeight', 'exerciseNotes']
        .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
}

function renderLog() {
    const container = document.getElementById('exerciseLog');
    const empty = document.getElementById('logEmpty');
    if (!container) return;

    // Remove old items (keep empty state el)
    container.querySelectorAll('.log-item').forEach(el => el.remove());

    if (!logEntries.length) { if (empty) empty.style.display = 'flex'; return; }
    if (empty) empty.style.display = 'none';

    logEntries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'log-item';
        item.dataset.id = entry.id;
        item.innerHTML = `
            <div class="log-item-icon"><i class="fas fa-dumbbell"></i></div>
            <div class="log-item-info">
                <div class="log-item-name">${entry.name}</div>
                <div class="log-item-meta">
                    <span class="log-chip"><i class="fas fa-layer-group"></i> ${entry.sets} sets</span>
                    <span class="log-chip"><i class="fas fa-redo"></i> ${entry.reps} reps</span>
                    ${entry.weight ? `<span class="log-chip"><i class="fas fa-weight-hanging"></i> ${entry.weight}kg</span>` : ''}
                    <span class="log-chip"><i class="fas fa-clock"></i> ${entry.time}</span>
                </div>
                ${entry.notes ? `<div class="log-item-note">${entry.notes}</div>` : ''}
            </div>
            ${entry.volume ? `<div class="log-item-vol">${entry.volume.toFixed(0)}<small>kg</small></div>` : ''}
            ${entry.isPR ? `<div class="log-item-pr">PR</div>` : ''}
            <button class="log-item-delete" onclick="deleteEntry(${entry.id})"><i class="fas fa-times"></i></button>`;
        container.appendChild(item);
    });

    updateStats();
}

function deleteEntry(id) {
    logEntries = logEntries.filter(e => e.id !== id);
    localStorage.setItem('bol_log', JSON.stringify(logEntries));
    renderLog();
    updateStats();
}

function clearLog() {
    if (!confirm('Clear all exercises from today\'s log?')) return;
    logEntries = [];
    localStorage.setItem('bol_log', '[]');
    renderLog();
}

function exportLog() {
    if (!logEntries.length) { showTrackerNotif('Nothing to export yet.'); return; }
    const lines = logEntries.map(e =>
        `${e.name} | ${e.sets}×${e.reps} @ ${e.weight}kg | Vol: ${e.volume.toFixed(0)}kg | ${e.time}${e.notes ? ' | ' + e.notes : ''}`
    );
    const blob = new Blob(['BlackOnLifter Training Log\n' + new Date().toLocaleDateString() + '\n\n' + lines.join('\n')], { type: 'text/plain' });
    const a = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(blob),
        download: `bol-log-${new Date().toISOString().slice(0, 10)}.txt`
    });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    showTrackerNotif('Log exported!');
}

/* ═══════════════════════════════════
   STATS
═══════════════════════════════════ */
function updateStats() {
    const totalSets = logEntries.reduce((s, e) => s + e.sets, 0);
    const totalVol = logEntries.reduce((s, e) => s + e.volume, 0);
    const uniqueEx = new Set(logEntries.map(e => e.name)).size;
    document.getElementById('statSets')?.(() => { })
    const ss = document.getElementById('statSets');
    const se = document.getElementById('statExercises');
    const sv = document.getElementById('statVolume');
    if (ss) ss.textContent = totalSets;
    if (se) se.textContent = uniqueEx;
    if (sv) sv.textContent = totalVol.toFixed(0);
}

/* ═══════════════════════════════════
   SESSION CLOCK
═══════════════════════════════════ */
function initSessionClock() {
    sessionStart = Date.now();
    sessionTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
        const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
        const s = String(elapsed % 60).padStart(2, '0');
        const el = document.getElementById('statTime');
        if (el) el.textContent = `${m}:${s}`;
    }, 1000);
}

/* ═══════════════════════════════════
   REST TIMER
═══════════════════════════════════ */
function initTimer() {
    document.getElementById('timerStart')?.addEventListener('click', startTimer);
    document.getElementById('timerPause')?.addEventListener('click', pauseTimer);
    document.getElementById('timerReset')?.addEventListener('click', resetTimer);

    document.querySelectorAll('.timer-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.timer-preset').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            timerDuration = parseInt(btn.dataset.secs);
            timerRemaining = timerDuration;
            resetTimer(false);
            updateTimerDisplay();
        });
    });

    updateTimerDisplay();
}

function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    const total = timerDuration;
    timerInterval = setInterval(() => {
        timerRemaining--;
        updateTimerDisplay();
        updateTimerBar(timerRemaining / total);
        const display = document.getElementById('restTimerDisplay');
        if (timerRemaining <= 10) display?.classList.add('urgent');
        if (timerRemaining <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            display?.classList.remove('urgent');
            display?.classList.add('done');
            showTrackerNotif('✓ Rest complete — get back to it!');
            setTimeout(() => { display?.classList.remove('done'); resetTimer(); }, 2000);
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer(updateDisplay = true) {
    clearInterval(timerInterval);
    timerRunning = false;
    timerRemaining = timerDuration;
    document.getElementById('restTimerDisplay')?.classList.remove('urgent', 'done');
    updateTimerBar(1);
    if (updateDisplay) updateTimerDisplay();
}

function updateTimerDisplay() {
    const m = String(Math.floor(timerRemaining / 60)).padStart(2, '0');
    const s = String(timerRemaining % 60).padStart(2, '0');
    const el = document.getElementById('restTimerDisplay');
    if (el) el.textContent = `${m}:${s}`;
}

function updateTimerBar(fraction) {
    const bar = document.getElementById('timerBar');
    if (bar) bar.style.width = `${Math.max(0, fraction * 100)}%`;
}

/* ═══════════════════════════════════
   PR BOARD
═══════════════════════════════════ */
function renderPRBoard() {
    const board = document.getElementById('prBoard');
    if (!board) return;
    const entries = Object.entries(prRecords);
    if (!entries.length) {
        board.innerHTML = '<div class="pr-empty">No PRs yet. Log a heavy set to set a record.</div>';
        return;
    }
    board.innerHTML = entries.map(([name, data]) => `
        <div class="pr-item">
            <i class="fas fa-trophy pr-trophy"></i>
            <div class="pr-info">
                <div class="pr-name">${name}</div>
                <div class="pr-detail">${data.sets} sets × ${data.reps} reps</div>
            </div>
            <div style="text-align:right;">
                <div class="pr-value">${data.weight}kg</div>
                <div class="pr-date">${data.date}</div>
            </div>
        </div>`).join('');
}

/* ═══════════════════════════════════
   PROGRESS CHART (pure canvas)
═══════════════════════════════════ */
let chartData = { labels: [], volume: [], sets: [] };

function initChart() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date().getDay();
    const labels = [];
    for (let i = 6; i >= 0; i--) {
        labels.push(days[(today - i + 7) % 7]);
    }
    chartData.labels = labels;
    chartData.volume = labels.map(d => weekData[d]?.volume || 0);
    chartData.sets = labels.map(d => (weekData[d]?.sets || 0) * 50);
    drawChart();
}

function updateChart() {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'short' });
    const idx = chartData.labels.indexOf(today);
    if (idx >= 0) {
        chartData.volume[idx] = weekData[today]?.volume || 0;
        chartData.sets[idx] = (weekData[today]?.sets || 0) * 50;
    }
    drawChart();
}

function drawChart() {
    const canvas = document.getElementById('progressChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 500;
    const H = 200;
    canvas.width = W;
    canvas.height = H;

    ctx.clearRect(0, 0, W, H);

    const pad = { top: 20, right: 20, bottom: 34, left: 16 };
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;
    const n = chartData.labels.length;
    const allVals = [...chartData.volume, ...chartData.sets];
    const maxVal = Math.max(...allVals, 100);
    const step = chartW / (n - 1);

    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = pad.top + (chartH / 4) * i;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + chartW, y); ctx.stroke();
    }

    // Draw line
    const drawLine = (data, color, fillColor) => {
        const pts = data.map((v, i) => ({
            x: pad.left + i * step,
            y: pad.top + chartH - (v / maxVal) * chartH
        }));

        // Fill
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pad.top + chartH);
        pts.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(pts[pts.length - 1].x, pad.top + chartH);
        ctx.closePath();
        ctx.fillStyle = fillColor;
        ctx.fill();

        // Line
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        pts.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Dots
        pts.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
        });
    };

    drawLine(
        chartData.sets,
        'rgba(0,229,255,0.35)',
        'rgba(0,229,255,0.04)'
    );
    drawLine(
        chartData.volume,
        '#00e5ff',
        'rgba(0,229,255,0.08)'
    );

    // X labels
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.font = '11px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    chartData.labels.forEach((label, i) => {
        ctx.fillText(label, pad.left + i * step, H - 6);
    });
}

/* ═══════════════════════════════════
   NOTIFICATIONS
═══════════════════════════════════ */
function showTrackerNotif(msg, type = 'default') {
    document.querySelector('.tracker-notif')?.remove();
    const n = document.createElement('div');
    n.className = 'tracker-notif';

    const bg = type === 'pr'
        ? 'linear-gradient(135deg,#ffab40,#ff8f00)'
        : 'linear-gradient(135deg,#00e5ff,#00b8d4)';

    const color = '#050808';

    Object.assign(n.style, {
        position: 'fixed', top: '80px', right: '20px',
        background: bg, color, padding: '14px 20px',
        borderRadius: '14px', zIndex: '100000',
        fontWeight: '800', fontSize: '12px',
        letterSpacing: '1px', textTransform: 'uppercase',
        boxShadow: type === 'pr'
            ? '0 14px 40px rgba(255,171,64,0.35)'
            : '0 14px 40px rgba(0,229,255,0.25)',
        animation: 'notifIn 0.35s ease forwards',
        maxWidth: '320px'
    });
    n.textContent = msg;
    document.body.appendChild(n);

    const notifStyle = document.createElement('style');
    notifStyle.id = 'notif-style';
    if (!document.getElementById('notif-style')) {
        notifStyle.textContent = `
            @keyframes notifIn{from{transform:translateX(80px);opacity:0;}to{transform:translateX(0);opacity:1;}}
            @keyframes notifOut{from{transform:translateX(0);opacity:1;}to{transform:translateX(80px);opacity:0;}}
        `;
        document.head.appendChild(notifStyle);
    }

    setTimeout(() => {
        n.style.animation = 'notifOut 0.35s ease forwards';
        setTimeout(() => n.remove(), 400);
    }, type === 'pr' ? 4000 : 2500);
}