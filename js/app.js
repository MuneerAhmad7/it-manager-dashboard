// ── Tab switching ──
function show(tabId) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  document.querySelectorAll('[data-tab="' + tabId + '"]').forEach(t => t.classList.add('active'));
  // Close mobile nav
  document.getElementById('mobileNav').classList.remove('open');
}

document.querySelectorAll('.nav-tab').forEach(btn => {
  btn.addEventListener('click', () => show(btn.dataset.tab));
});

// ── Mobile menu ──
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

// ── Report switcher ──
document.querySelectorAll('.rsw').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.rsw').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.report-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('report-' + btn.dataset.report).classList.add('active');
  });
});

// ── Copy template ──
function copyReport(type) {
  const text = document.getElementById('text-' + type).textContent;
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  });
}
