/* ════════════════════════
   PDF DATA
════════════════════════ */
const pdfData = [
    {
        id: 1, title: "Legs of Steel", featured: true,
        description: "A foundational lower-body strength system built to forge raw power, size, and brutal training capacity.",
        category: "strength", pages: 45, size: "2.3 MB", url: "https://bit.ly/47Ropkr"
    }
];

/* ════════════════════════
   PARTICLE SYSTEM
════════════════════════ */
class ParticleSystem {
    constructor(canvasId, heroSelector) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.max = 55;
        this.heroSelector = heroSelector;
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = document.querySelector(this.heroSelector)?.offsetHeight || window.innerHeight;
    }

    init() {
        for (let i = 0; i < this.max; i++) this.create(true);
        this.animate();
    }

    create(initial = false) {
        this.particles.push({
            x: Math.random() * this.canvas.width,
            y: initial ? Math.random() * this.canvas.height : this.canvas.height + 10,
            size: Math.random() * 2.2 + 0.6,
            vy: -(Math.random() * 0.7 + 0.2),
            vx: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.32 + 0.06,
            life: Math.random() * 0.5 + 0.5
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach((p, i) => {
            p.y += p.vy;
            p.x += p.vx;
            p.life -= 0.0011;
            if (p.life <= 0 || p.y < -20) {
                this.particles.splice(i, 1);
                this.create();
                return;
            }
            this.ctx.save();
            this.ctx.globalAlpha = p.opacity * p.life;
            this.ctx.fillStyle = '#00e5ff';
            this.ctx.shadowColor = '#00e5ff';
            this.ctx.shadowBlur = 12;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
        requestAnimationFrame(() => this.animate());
    }
}

/* ════════════════════════
   BOOT
════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem('particleCanvas', '.hero-section');
    initNavigation();
    initWorkoutSection();
    initScrollEffects();
    initLoadingScreen();
    initHeroParallax();
    initPrimalEffects();
    initMountainParallax();
});

/* ════════════════════════
   NAV
════════════════════════ */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 40);
    });

    toggle?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href?.startsWith('#')) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            navLinks?.classList.remove('active');
            toggle?.classList.remove('active');
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });
}

/* ════════════════════════
   HERO PARALLAX
════════════════════════ */
function initHeroParallax() {
    const hero = document.querySelector('.hero-section');
    const layers = document.querySelectorAll('.hero-bg-layer');
    if (!hero || !layers.length) return;

    hero.addEventListener('mousemove', e => {
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        layers.forEach((l, i) => {
            const d = (i + 1) * 7;
            l.style.transform = `scale(1.06) translate(${x * d}px,${y * d}px)`;
        });
    });

    hero.addEventListener('mouseleave', () => {
        layers.forEach(l => {
            l.style.transform = 'scale(1.04) translate(0,0)';
        });
    });
}

/* ════════════════════════
   MOUNTAIN PARALLAX
   Subtle depth effect on
   the hero mountain layer
════════════════════════ */
function initMountainParallax() {
    const mountainLayer = document.querySelector('.hero-mountain-layer');
    if (!mountainLayer) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const factor = scrollY * 0.12;
                mountainLayer.style.transform = `translateY(${factor}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ════════════════════════
   PRIMAL EFFECTS
════════════════════════ */
function initPrimalEffects() {
    const animate = (els, base = 0.3, step = 0.18) => {
        els.forEach((el, i) => {
            el.style.cssText += `opacity:0;transform:translateY(28px);transition:opacity 0.8s ease ${base + i * step}s,transform 0.8s ease ${base + i * step}s;`;
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });
    };

    animate(document.querySelectorAll('.title-sm,.title-a,.title-main'), 0.2, 0.15);
    animate(document.querySelectorAll('.eyebrow'), 0.1, 0);
    animate(document.querySelectorAll('.hero-buttons .btn'), 0.7, 0.12);
    animate(document.querySelectorAll('.metric-card'), 0.9, 0.10);
}

/* ════════════════════════
   WORKOUT SECTION
════════════════════════ */
function initWorkoutSection() {
    renderPDFCards(pdfData);
    setupSearch();
    setupFilters();
    setupDownloadAll();
}

function renderPDFCards(pdfs) {
    const grid = document.getElementById('pdfGrid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;
    grid.innerHTML = '';
    if (!pdfs.length) {
        if (noResults) noResults.style.display = 'block';
        return;
    }
    if (noResults) noResults.style.display = 'none';
    pdfs.forEach((pdf, i) => {
        const card = createPDFCard(pdf);
        card.style.animation = `logSlideIn 0.5s ease ${i * 0.08}s both`;
        grid.appendChild(card);
    });
}

/* Claw corner in PDF cards */
const CLAW_IMG = `<img src="claw.png" alt="" class="pdf-claw-corner" />`;

function createPDFCard(pdf) {
    const card = document.createElement('div');
    card.className = 'pdf-card';
    card.dataset.category = pdf.category;
    card.innerHTML = `
        ${CLAW_IMG}
        <div class="pdf-badge"><i class="fas fa-layer-group"></i>${pdf.featured ? 'Featured Resource' : 'Training Resource'}</div>
        <div class="pdf-icon"><i class="fas fa-file-pdf"></i></div>
        <h3>${pdf.title}</h3>
        <p>${pdf.description}</p>
        <div class="pdf-meta">
            <span><i class="fas fa-tag"></i>${getCat(pdf.category)}</span>
            <span><i class="fas fa-file-lines"></i>${pdf.pages} pages</span>
            <span><i class="fas fa-hard-drive"></i>${pdf.size}</span>
        </div>
        <button class="pdf-download-btn" onclick="downloadPDF('${pdf.url}','${pdf.title}')">
            <i class="fas fa-download"></i>Download Guide
        </button>`;
    return card;
}

const CATS = {
    strength: 'Strength Training',
    cardio: 'Cardio',
    nutrition: 'Nutrition',
    bodyweight: 'Bodyweight',
    flexibility: 'Flexibility'
};

function getCat(c) { return CATS[c] || c; }

function setupSearch() {
    const inp = document.getElementById('searchInput');
    const clr = document.getElementById('clearSearch');
    if (!inp || !clr) return;

    inp.addEventListener('input', e => {
        const t = e.target.value.toLowerCase().trim();
        clr.style.display = t ? 'block' : 'none';
        filterPDFs(t, activeCategory());
    });

    clr.addEventListener('click', () => {
        inp.value = '';
        clr.style.display = 'none';
        filterPDFs('', activeCategory());
    });
}

function activeCategory() {
    return document.querySelector('.filter-tag.active')?.dataset.category || 'all';
}

function setupFilters() {
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            filterPDFs(
                document.getElementById('searchInput')?.value.toLowerCase().trim() || '',
                tag.dataset.category
            );
        });
    });
}

function filterPDFs(search, cat) {
    let filtered = [...pdfData];
    if (cat !== 'all') filtered = filtered.filter(p => p.category === cat);
    if (search) filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search) ||
        getCat(p.category).toLowerCase().includes(search)
    );
    renderPDFCards(filtered);
}

function downloadPDF(url, title) {
    const a = Object.assign(document.createElement('a'), {
        href: url,
        target: '_blank',
        rel: 'noopener noreferrer'
    });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showNotification(`Opening: ${title}`);
}

function setupDownloadAll() {
    document.getElementById('downloadAllBtn')?.addEventListener('click', () => {
        pdfData.forEach(p => downloadPDF(p.url, p.title));
        showNotification(`Opening ${pdfData.length} resource(s)`);
    });
}

/* ════════════════════════
   NOTIFICATION
════════════════════════ */
function showNotification(msg) {
    document.querySelector('.site-notif')?.remove();
    const n = document.createElement('div');
    n.className = 'site-notif';
    n.textContent = msg;
    Object.assign(n.style, {
        position: 'fixed',
        top: '90px',
        right: '22px',
        background: 'linear-gradient(135deg,#00e5ff,#00b8d4)',
        color: '#050808',
        padding: '14px 20px',
        borderRadius: '14px',
        boxShadow: '0 18px 45px rgba(0,229,255,0.24)',
        zIndex: '100000',
        fontWeight: '800',
        fontSize: '12px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        animation: 'logSlideIn 0.3s ease forwards'
    });
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 2800);
}

/* ════════════════════════
   SCROLL & REVEAL
════════════════════════ */
function initScrollEffects() {
    const btn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        btn?.classList.toggle('visible', window.scrollY > 500);
    });
    btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('revealed');
        });
    }, { threshold: 0.10, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(
        '.library-meta-card,.contact-card,.footer-column,.footer-brand'
    ).forEach(el => {
        el.style.cssText += 'opacity:0;transform:translateY(24px);transition:all 0.7s ease;';
        obs.observe(el);
    });

    const s = document.createElement('style');
    s.textContent = `
        .revealed{opacity:1!important;transform:translateY(0)!important;}
        @keyframes logSlideIn{
            from{opacity:0;transform:translateY(-12px);}
            to{opacity:1;transform:translateY(0);}
        }
    `;
    document.head.appendChild(s);
}

/* ════════════════════════
   LOADING
════════════════════════ */
function initLoadingScreen() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loadingOverlay')?.classList.add('hidden');
        }, 800);
    });
}
