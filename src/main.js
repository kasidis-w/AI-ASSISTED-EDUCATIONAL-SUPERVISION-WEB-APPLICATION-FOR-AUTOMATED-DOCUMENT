import './style.css';

const iconPaths = {
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.3"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.3"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.3"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.3"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16M8 7h8M8 11h8"/>',
  clipboard: '<rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 5.2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.2M8.5 10h7M8.5 14h7M8.5 18h4"/>',
  upload: '<path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>',
  spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"/>',
  sliders: '<path d="M4 6h9m4 0h3M4 12h3m4 0h9M4 18h9m4 0h3"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="15" cy="18" r="2"/>',
  history: '<path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 8v6M23 11h-6"/>',
  school: '<path d="m3 10 9-7 9 7M5 9v11h14V9M9 20v-6h6v6M3 21h18"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 10h18"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="m9 12 2 2 4-4"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v3h16v-3"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  chart: '<path d="M4 20V10m5 10V4m5 16v-7m5 7V7"/><path d="M2 21h20"/>',
  edit: '<path d="m15 5 4 4M4 20l4-.8L19 8a2.8 2.8 0 0 0-4-4L4 15z"/>',
  logout: '<path d="M10 17l5-5-5-5m5 5H3M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>'
};

const ico = (name, size = 18) => `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.file}</svg>`;
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const fallback = {
  visits: [{ id: 'v1', school: 'โรงเรียนบ้านแม่ขะจาน', project: 'พัฒนาการอ่านออกเขียนได้', visitDate: '2026-09-18', quarter: 'ไตรมาส 3/2569', inspector: 'ศน. พิมพ์ชนก', status: 'เสร็จสิ้น', result: 'ดำเนินงานได้ตามแผน', note: 'นักเรียนชั้น ป.2 อ่านคำพื้นฐานได้เพิ่มขึ้น' }],
  documents: [{ id: 'd1', name: 'แผนการนิเทศภาคเรียนที่ 1', category: 'แผนการนิเทศ', school: 'ทุกสถานศึกษา', updated: '18 ก.ย. 2569', type: 'PDF', size: '2.4 MB' }],
  reports: [{ id: 'r1', title: 'รายงานผลการนิเทศ ไตรมาส 3/2569', quarter: 'ไตรมาส 3/2569', updated: '20 ก.ย. 2569', status: 'ฉบับร่าง', content: 'ภาพรวมการนิเทศไตรมาส 3/2569\n\nจากการนิเทศสถานศึกษา พบความก้าวหน้าด้านการพัฒนาการอ่านออกเขียนได้\n\nข้อเสนอแนะ\n1. ติดตามผลการดำเนินงานอย่างต่อเนื่อง' }],
  templates: [{ id: 't1', name: 'แม่แบบรายงานนิเทศมาตรฐาน', header: 'รายงานผลการนิเทศการศึกษา', organization: 'สำนักงานเขตพื้นที่การศึกษา', sections: 'บทสรุปผู้บริหาร, วัตถุประสงค์, ผลการนิเทศ, ข้อเสนอแนะ' }],
  users: [{ id: 'u1', name: 'พิมพ์ชนก ใจดี', email: 'pimchanok@edu.local', role: 'ศึกษานิเทศก์', school: 'สำนักงานเขตพื้นที่ฯ', status: 'ใช้งาน', initials: 'พจ' }, { id: 'u3', name: 'อรทัย แสงทอง', email: 'orathai@edu.local', role: 'ผู้ดูแลระบบ', school: 'สำนักงานเขตพื้นที่ฯ', status: 'ใช้งาน', initials: 'อส' }],
  schools: [{ id: 's1', name: 'โรงเรียนบ้านแม่ขะจาน', district: 'อำเภอเวียงป่าเป้า', level: 'ประถมศึกษา', director: 'นายสมชาย วงศ์ดี', phone: '053-782-410', status: 'เปิดใช้งาน' }],
  projects: [{ id: 'p1', name: 'พัฒนาการอ่านออกเขียนได้', owner: 'พิมพ์ชนก ใจดี', schools: 8, period: 'พ.ค.–ก.ย. 2569', status: 'กำลังดำเนินงาน' }],
  references: [{ id: 'ref1', name: 'คู่มือการนิเทศเพื่อพัฒนาคุณภาพการศึกษา', category: 'คู่มือ', year: '2569', source: 'กลุ่มนิเทศฯ', files: 1 }],
  audit: [{ id: 'a1', actor: 'อรทัย แสงทอง', action: 'ปรับปรุงข้อมูลสถานศึกษา', target: 'โรงเรียนบ้านห้วยไคร้', time: 'วันนี้ 09:42', result: 'สำเร็จ' }]
};

let data = structuredClone(fallback);
let role = localStorage.getItem('supervision-role') || '';
let page = role === 'admin' ? 'admin-home' : 'home';
let toastTimer;

function persist() {
  localStorage.setItem('supervision-data', JSON.stringify(data));
  fetch('/api/state', { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) }).catch(() => {});
}

try {
  const saved = JSON.parse(localStorage.getItem('supervision-data') || 'null');
  if (saved) data = { ...data, ...saved };
} catch { /* ใช้ข้อมูลตัวอย่างเมื่อข้อมูลในเบราว์เซอร์อ่านไม่ได้ */ }

async function hydrate() {
  try {
    const response = await fetch('/api/state');
    if (!response.ok) return;
    const serverData = await response.json();
    if (!localStorage.getItem('supervision-data')) data = { ...data, ...serverData };
    render();
  } catch { /* ใช้ข้อมูลตัวอย่างในเครื่องเมื่อ API ยังไม่ทำงาน */ }
}

const navByRole = {
  supervisor: [
    { label: 'เมนูหลัก', items: [{ id: 'home', title: 'ภาพรวมการนิเทศ', icon: 'grid' }] },
    { label: 'งานนิเทศ', items: [
      { id: 'documents', title: 'เอกสารนิเทศ', icon: 'book' },
      { id: 'visits', title: 'บันทึกการนิเทศ', icon: 'clipboard' },
      { id: 'imports', title: 'คลังเอกสาร', icon: 'upload' },
      { id: 'reports', title: 'รายงานไตรมาส', icon: 'spark' },
      { id: 'templates', title: 'แม่แบบนิเทศ', icon: 'sliders' },
      { id: 'history', title: 'ประวัติการนิเทศ', icon: 'history' }
    ] }
  ],
  admin: [
    { label: 'เมนูหลัก', items: [{ id: 'admin-home', title: 'ภาพรวมระบบ', icon: 'grid' }] },
    { label: 'จัดการระบบ', items: [
      { id: 'users', title: 'บัญชีผู้ใช้งาน', icon: 'users' },
      { id: 'schools', title: 'สถานศึกษา', icon: 'school' },
      { id: 'projects', title: 'โครงการและผู้รับผิดชอบ', icon: 'folder' },
      { id: 'references', title: 'คลังเอกสารอ้างอิง', icon: 'book' },
      { id: 'audit', title: 'ประวัติการใช้งาน', icon: 'shield' }
    ] }
  ]
};

const pageTitles = {
  home: 'ภาพรวมการนิเทศ', documents: 'เอกสารนิเทศ', visits: 'บันทึกการนิเทศ', imports: 'คลังเอกสาร', reports: 'รายงานไตรมาส', templates: 'แม่แบบนิเทศ', history: 'ประวัติการนิเทศ',
  'admin-home': 'ภาพรวมระบบ', users: 'บัญชีผู้ใช้งาน', schools: 'สถานศึกษา', projects: 'โครงการและผู้รับผิดชอบ', references: 'คลังเอกสารอ้างอิง', audit: 'ประวัติการใช้งานระบบ'
};

function currentUser() {
  return role === 'admin' ? { name: 'อรทัย แสงทอง', initials: 'อส', title: 'ผู้ดูแลระบบ' } : { name: 'พิมพ์ชนก ใจดี', initials: 'พจ', title: 'ศึกษานิเทศก์' };
}

function loginView() {
  return `<main class="login-screen"><section class="login-brand"><div class="login-brand-inner"><div class="brand-mark brand-mark-large">น</div><div class="brand-name brand-name-light">นิเทศ<span>ดี</span></div><p>พื้นที่ทำงานเพื่อการนิเทศ<br>และพัฒนาคุณภาพการศึกษา</p><div class="login-orbit"></div><div class="login-motif">${ico('book', 88)}</div><div class="login-foot">SUPERVISION WORKSPACE <span>•</span> 2569</div></div></section><section class="login-panel"><div class="login-panel-inner"><div class="login-mobile-brand"><div class="brand-mark">น</div><div class="brand-name">นิเทศ<span>ดี</span></div></div><div class="eyebrow">ยินดีต้อนรับ</div><h1>เข้าสู่ระบบ</h1><p class="muted login-desc">เลือกบทบาทเพื่อเข้าใช้งานพื้นที่สาธิต</p><div class="role-options"><button class="role-card ${role === 'supervisor' ? 'selected' : ''}" data-action="choose-role" data-role="supervisor"><span class="role-icon role-icon-blue">${ico('clipboard', 21)}</span><span class="role-copy"><strong>ศึกษานิเทศก์</strong><small>บันทึกและติดตามผลการนิเทศ</small></span><span class="role-radio"></span></button><button class="role-card ${role === 'admin' ? 'selected' : ''}" data-action="choose-role" data-role="admin"><span class="role-icon role-icon-gold">${ico('shield', 21)}</span><span class="role-copy"><strong>ผู้ดูแลระบบ</strong><small>จัดการข้อมูลและผู้ใช้งาน</small></span><span class="role-radio"></span></button></div><button class="button button-primary button-wide login-submit" data-action="login">เข้าสู่พื้นที่ทำงาน ${ico('arrow', 17)}</button><div class="login-note">${ico('shield', 14)} เข้าใช้งานด้วยบัญชีสาธิต ไม่มีการส่งข้อมูลออกภายนอก</div><div class="login-footer">© 2569 ระบบศึกษานิเทศก์ <span>•</span> เวอร์ชันสาธิต</div></div></section></main>`;
}

function shell() {
  const user = currentUser();
  const groups = navByRole[role === 'admin' ? 'admin' : 'supervisor'];
  return `<div class="app-shell"><aside class="sidebar"><a class="brand" href="#" data-action="go" data-page="${role === 'admin' ? 'admin-home' : 'home'}"><span class="brand-mark">น</span><span class="brand-text"><b>นิเทศ<span>ดี</span></b><small>SUPERVISION WORKSPACE</small></span></a><div class="sidebar-label">พื้นที่ทำงาน</div><nav class="side-nav">${groups.map(group => `<div class="nav-group"><div class="nav-group-title">${group.label}</div>${group.items.map(item => `<button class="nav-item ${page === item.id ? 'active' : ''}" data-action="go" data-page="${item.id}">${ico(item.icon, 18)}<span>${item.title}</span>${page === item.id ? '<i></i>' : ''}</button>`).join('')}</div>`).join('')}</nav><div class="sidebar-bottom"><div class="sidebar-help">${ico('book', 17)}<div><b>คู่มือใช้งาน</b><small>ดูขั้นตอนการใช้งานระบบ</small></div><span>↗</span></div><button class="user-mini" data-action="switch-role"><span class="avatar">${user.initials}</span><span class="user-mini-copy"><b>${user.name}</b><small>${user.title}</small></span>${ico('more', 17)}</button></div></aside><main class="main-area"><header class="topbar"><div class="topbar-left"><div class="breadcrumbs">ระบบศึกษานิเทศก์ <span>/</span> <b>${pageTitles[page] || 'ภาพรวม'}</b></div><button class="mobile-menu" data-action="mobile-menu" aria-label="เมนู">☰</button></div><div class="topbar-right"><label class="search-box">${ico('search', 17)}<input id="global-search" placeholder="ค้นหาในหน้านี้" aria-label="ค้นหาในหน้านี้"><kbd>⌘ K</kbd></label><button class="icon-button notification-button" aria-label="การแจ้งเตือน">${ico('bell', 18)}<i></i></button><span class="topbar-divider"></span><button class="profile-button" data-action="switch-role"><span class="avatar">${user.initials}</span><span><b>${user.name}</b><small>${user.title}</small></span><span class="chevron-down">⌄</span></button></div></header><section class="page-content">${pageContent()}</section><footer class="app-footer"><span>© 2569 ระบบศึกษานิเทศก์</span><span>พื้นที่ทำงานสำหรับพัฒนาคุณภาพการศึกษา</span></footer></main><div id="modal-root"></div><div id="toast-root" aria-live="polite"></div></div>`;
}

function statCard(label, value, caption, icon, color = 'blue', trend = '') {
  return `<article class="stat-card"><div class="stat-top"><span class="stat-icon ${color}">${ico(icon, 20)}</span>${trend ? `<span class="stat-trend">${trend}</span>` : ''}</div><div class="stat-value">${value}</div><div class="stat-label">${label}</div><div class="stat-caption">${caption}</div></article>`;
}

function statusPill(text) {
  const good = ['เสร็จสิ้น', 'ใช้งาน', 'เปิดใช้งาน', 'สำเร็จ', 'ดำเนินงานได้ตามแผน'].includes(text);
  const waiting = ['รอติดตาม', 'ฉบับร่าง', 'รอมอบหมาย', 'อยู่ระหว่างพัฒนา'].includes(text);
  return `<span class="status-pill ${good ? 'good' : waiting ? 'waiting' : 'neutral'}"><i></i>${escapeHtml(text || '—')}</span>`;
}

function topHeading(eyebrow, title, desc, action = '') {
  return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div>${action ? `<div class="heading-actions">${action}</div>` : ''}</div>`;
}

function button(label, action, kind = 'primary', extra = '') {
  return `<button class="button button-${kind}" data-action="${action}" ${extra}>${label}</button>`;
}

function dashboard() {
  const visits = data.visits || [];
  const thisQuarter = visits.filter(v => v.quarter === 'ไตรมาส 3/2569');
  const recent = visits.slice(0, 4);
  const quarterDone = thisQuarter.filter(v => v.status === 'เสร็จสิ้น').length;
  return `${topHeading('วันพุธที่ 30 กันยายน 2569', 'สวัสดีค่ะ, พิมพ์ชนก <span class="wave">✦</span>', 'ติดตามความก้าวหน้าและจัดการงานนิเทศของคุณได้จากที่นี่', button(`${ico('plus', 17)} บันทึกการนิเทศ`, 'new-visit'))}
    <section class="welcome-banner"><div class="welcome-copy"><span class="banner-kicker">สรุปการทำงานของคุณ</span><h2>ทุกการนิเทศ<br>ช่วยให้การเรียนรู้ก้าวหน้า</h2><p>ข้อมูลอัปเดตล่าสุดจากการนิเทศและโครงการที่คุณดูแล</p><button class="banner-link" data-action="go" data-page="history">ดูประวัติการนิเทศ ${ico('arrow', 16)}</button></div><div class="banner-decoration"><div class="sun-disc"></div><div class="banner-line line-one"></div><div class="banner-line line-two"></div><div class="banner-illustration"><span class="ill-book">${ico('book', 42)}</span><span class="ill-spark">✦</span></div><div class="banner-stat"><span>ไตรมาส 3</span><b>2569</b></div></div></section>
    <div class="section-title-row"><div><h2>ภาพรวมการนิเทศ</h2><p>ข้อมูลของไตรมาส 3 ประจำปี 2569</p></div><button class="select-button">ไตรมาส 3 / 2569 <span>⌄</span></button></div>
    <div class="stat-grid">${statCard('ครั้งที่นิเทศ', thisQuarter.length || 12, 'จากแผนการนิเทศทั้งหมด 16 ครั้ง', 'clipboard', 'blue', '<span>↗</span> 18%')}${statCard('สถานศึกษาที่ติดตาม', new Set(thisQuarter.map(v => v.school)).size || 8, 'จากสถานศึกษาที่ได้รับมอบหมาย 12 แห่ง', 'school', 'gold', '')}${statCard('ดำเนินการเรียบร้อย', quarterDone || 9, 'บันทึกผลครบถ้วนแล้ว', 'check', 'green', '')}${statCard('รอติดตามผล', Math.max(1, thisQuarter.length - quarterDone), 'มีแผนติดตามในเดือนตุลาคม', 'history', 'lavender', '')}</div>
    <div class="dashboard-grid"><section class="panel progress-panel"><div class="panel-heading"><div><h3>ความก้าวหน้าการนิเทศ</h3><p>จำนวนครั้งที่นิเทศแยกตามเดือน</p></div><button class="panel-more" aria-label="เพิ่มเติม">${ico('more', 19)}</button></div><div class="chart-legend"><span><i class="legend-blue"></i> นิเทศแล้ว</span><span><i class="legend-gray"></i> ตามแผน</span></div><div class="bar-chart"><div class="chart-y"><span>8</span><span>6</span><span>4</span><span>2</span><span>0</span></div><div class="chart-body"><div class="gridline g1"></div><div class="gridline g2"></div><div class="gridline g3"></div><div class="gridline g4"></div>${[['มิ.ย.',4,7],['ก.ค.',5,7],['ส.ค.',7,8],['ก.ย.',6,8],['ต.ค.',0,7],['พ.ย.',0,6]].map(([month,done,planned]) => `<div class="bar-group"><div class="bars"><span class="bar planned" style="height:${planned * 13}px"></span><span class="bar done" style="height:${done * 13}px"></span></div><span class="bar-label">${month}</span></div>`).join('')}</div></div><div class="chart-footer"><span>ดำเนินการแล้ว <b>${quarterDone || 9} ครั้ง</b></span><span>เป้าหมายทั้งไตรมาส <b>16 ครั้ง</b></span></div></section>
    <section class="panel focus-panel"><div class="panel-heading"><div><h3>สิ่งที่ต้องติดตาม</h3><p>รายการที่ควรดำเนินการต่อ</p></div><span class="count-badge">${Math.max(2, visits.filter(v => v.status !== 'เสร็จสิ้น').length)}</span></div><div class="focus-list"><button class="focus-item" data-action="go" data-page="visits"><span class="focus-dot gold-dot"></span><span><b>บันทึกผลการนิเทศให้ครบ</b><small>โรงเรียนชุมชนสันกำแพง · 1 รายการ</small></span><span class="focus-chevron">›</span></button><button class="focus-item" data-action="go" data-page="reports"><span class="focus-dot blue-dot"></span><span><b>จัดทำรายงานประจำไตรมาส</b><small>กำหนดส่ง 10 ต.ค. 2569</small></span><span class="focus-chevron">›</span></button><button class="focus-item" data-action="go" data-page="imports"><span class="focus-dot green-dot"></span><span><b>แนบหลักฐานประกอบโครงการ</b><small>เอกสารล่าสุดเมื่อ 18 ก.ย. 2569</small></span><span class="focus-chevron">›</span></button></div><button class="view-all-link" data-action="go" data-page="reports">ไปที่รายงาน ${ico('arrow', 15)}</button></section></div>
    <section class="panel recent-panel"><div class="panel-heading"><div><h3>การนิเทศล่าสุด</h3><p>รายการบันทึกล่าสุดของคุณ</p></div><button class="text-link" data-action="go" data-page="history">ดูทั้งหมด ${ico('arrow', 15)}</button></div><div class="table-wrap"><table><thead><tr><th>สถานศึกษา / โครงการ</th><th>วันที่นิเทศ</th><th>ผลการนิเทศ</th><th>สถานะ</th><th></th></tr></thead><tbody>${recent.map(v => `<tr><td><div class="primary-cell">${escapeHtml(v.school)}</div><div class="secondary-cell">${escapeHtml(v.project)}</div></td><td>${formatDate(v.visitDate)}</td><td>${escapeHtml(v.result)}</td><td>${statusPill(v.status)}</td><td><button class="row-action" data-action="view-visit" data-id="${v.id}">${ico('arrow', 16)}</button></td></tr>`).join('')}</tbody></table></div></section>`;
}

function adminDashboard() {
  return `${topHeading('ภาพรวมการบริหาร', 'ภาพรวมระบบ', 'สรุปข้อมูลบัญชี สถานศึกษา และโครงการในระบบ')}
    <section class="welcome-banner admin-banner"><div class="welcome-copy"><span class="banner-kicker">ADMIN WORKSPACE</span><h2>ระบบพร้อมใช้งาน<br>ข้อมูลล่าสุดครบถ้วน</h2><p>จัดการผู้ใช้งานและข้อมูลการนิเทศได้จากหน้ารวมนี้</p><button class="banner-link" data-action="go" data-page="audit">ตรวจสอบประวัติระบบ ${ico('arrow', 16)}</button></div><div class="banner-decoration"><div class="sun-disc"></div><div class="banner-line line-one"></div><div class="banner-line line-two"></div><div class="banner-illustration"><span class="ill-book">${ico('shield', 42)}</span><span class="ill-spark">✦</span></div><div class="banner-stat"><span>สถานะ</span><b>ปกติ</b></div></div></section>
    <div class="stat-grid admin-stats">${statCard('บัญชีผู้ใช้งาน', data.users.length, 'บัญชีในระบบ', 'users', 'blue', '')}${statCard('สถานศึกษา', data.schools.length, 'หน่วยงานในความดูแล', 'school', 'gold', '')}${statCard('โครงการที่ดำเนินงาน', data.projects.filter(p => p.status === 'กำลังดำเนินงาน').length, 'โครงการที่มีเจ้าของแล้ว', 'folder', 'green', '')}${statCard('รายการรอมอบหมาย', data.projects.filter(p => p.status === 'รอมอบหมาย').length, 'โครงการที่ยังไม่มีผู้รับผิดชอบ', 'history', 'lavender', '')}</div>
    <div class="dashboard-grid admin-dashboard-grid"><section class="panel"><div class="panel-heading"><div><h3>งานจัดการระบบ</h3><p>ทางลัดไปยังรายการที่ใช้บ่อย</p></div></div><div class="admin-shortcuts"><button data-action="go" data-page="users"><span class="shortcut-icon blue">${ico('users', 19)}</span><span><b>บัญชีผู้ใช้งาน</b><small>${data.users.filter(u => u.status === 'ใช้งาน').length} บัญชีใช้งานอยู่</small></span>${ico('arrow', 16)}</button><button data-action="go" data-page="projects"><span class="shortcut-icon gold">${ico('folder', 19)}</span><span><b>มอบหมายเจ้าของโครงการ</b><small>รอมอบหมาย ${data.projects.filter(p => p.status === 'รอมอบหมาย').length} โครงการ</small></span>${ico('arrow', 16)}</button><button data-action="go" data-page="schools"><span class="shortcut-icon green">${ico('school', 19)}</span><span><b>ข้อมูลสถานศึกษา</b><small>${data.schools.length} แห่งในระบบ</small></span>${ico('arrow', 16)}</button></div></section><section class="panel"><div class="panel-heading"><div><h3>กิจกรรมล่าสุด</h3><p>การเปลี่ยนแปลงข้อมูลในระบบ</p></div><button class="text-link" data-action="go" data-page="audit">ดูประวัติ ${ico('arrow', 15)}</button></div><div class="mini-audit">${data.audit.slice(0,4).map((log,i) => `<div class="mini-audit-row"><span class="audit-avatar av-${i%4}">${escapeHtml(log.actor.slice(0,1))}</span><span><b>${escapeHtml(log.action)}</b><small>${escapeHtml(log.actor)} · ${escapeHtml(log.time)}</small></span></div>`).join('')}</div></section></div>`;
}

function formatDate(date) {
  if (!date) return '—';
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split('-');
    return `${day} ${['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'][Number(month)-1]} ${Number(year)+543}`;
  }
  return date;
}

function documentPage() {
  const rows = data.documents.map(doc => `<tr><td><div class="doc-name-cell"><span class="file-type ${doc.type?.toLowerCase()}">${escapeHtml(doc.type || 'FILE')}</span><span><b>${escapeHtml(doc.name)}</b><small>${escapeHtml(doc.size || '—')}</small></span></div></td><td>${escapeHtml(doc.category || 'เอกสารนิเทศ')}</td><td>${escapeHtml(doc.school || 'ทุกสถานศึกษา')}</td><td>${escapeHtml(doc.updated || '—')}</td><td><button class="row-action" data-action="view-doc" data-id="${doc.id}">${ico('arrow',16)}</button></td></tr>`).join('');
  return `${topHeading('งานนิเทศ', 'เอกสารนิเทศ', 'เรียกดูเอกสารและแบบฟอร์มที่เกี่ยวข้องกับการนิเทศ', button(`${ico('upload',17)} เพิ่มเอกสาร`, 'go-import'))}<div class="filter-row"><label class="filter-search">${ico('search',17)}<input class="table-search" placeholder="ค้นหาชื่อเอกสาร"></label><select class="filter-select" id="document-category"><option value="">ทุกหมวดหมู่</option>${[...new Set(data.documents.map(d=>d.category))].map(c=>`<option>${escapeHtml(c)}</option>`).join('')}</select><span class="results-count">${data.documents.length} รายการ</span></div><section class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>ชื่อเอกสาร</th><th>หมวดหมู่</th><th>สถานศึกษา</th><th>อัปเดตล่าสุด</th><th></th></tr></thead><tbody id="filterable-rows">${rows || emptyRow(5, 'ยังไม่มีเอกสาร')}</tbody></table></div></section>`;
}

function visitsPage(historyOnly = false) {
  const action = historyOnly ? '' : button(`${ico('plus',17)} บันทึกการนิเทศ`, 'new-visit');
  const title = historyOnly ? 'ประวัติการนิเทศ' : 'บันทึกการนิเทศ';
  const desc = historyOnly ? 'ดูรายการนิเทศเดิมและผลการติดตามย้อนหลัง' : 'บันทึกผลการลงพื้นที่และข้อเสนอแนะเพื่อใช้ติดตามงาน';
  const rows = [...data.visits].sort((a,b) => b.visitDate.localeCompare(a.visitDate)).map(v => `<tr><td><div class="primary-cell">${escapeHtml(v.school)}</div><div class="secondary-cell">${escapeHtml(v.project)}</div></td><td>${formatDate(v.visitDate)}</td><td>${escapeHtml(v.inspector || 'ศน. พิมพ์ชนก')}</td><td>${escapeHtml(v.quarter || '—')}</td><td>${statusPill(v.status)}</td><td><button class="row-action" data-action="view-visit" data-id="${v.id}">${ico('arrow',16)}</button></td></tr>`).join('');
  return `${topHeading(historyOnly ? 'งานนิเทศ' : 'งานนิเทศ', title, desc, action)}<div class="filter-row"><label class="filter-search">${ico('search',17)}<input class="table-search" placeholder="ค้นหาสถานศึกษาหรือโครงการ"></label><select class="filter-select" id="visit-quarter"><option value="">ทุกไตรมาส</option>${[...new Set(data.visits.map(v=>v.quarter).filter(Boolean))].map(q=>`<option>${escapeHtml(q)}</option>`).join('')}</select><select class="filter-select" id="visit-status"><option value="">ทุกสถานะ</option><option>เสร็จสิ้น</option><option>รอติดตาม</option></select><span class="results-count">${data.visits.length} รายการ</span></div><section class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>สถานศึกษา / โครงการ</th><th>วันที่นิเทศ</th><th>ผู้รับผิดชอบ</th><th>รอบรายงาน</th><th>สถานะ</th><th></th></tr></thead><tbody id="filterable-rows">${rows || emptyRow(6, 'ยังไม่มีบันทึกการนิเทศ')}</tbody></table></div></section>`;
}

function importsPage() {
  const imported = [...data.documents].reverse();
  return `${topHeading('งานนิเทศ', 'คลังเอกสาร', 'นำเข้าและจัดเก็บเอกสารประกอบการนิเทศไว้ในคลังกลาง', button(`${ico('upload',17)} นำเข้าเอกสาร`, 'open-import'))}<section class="import-drop" id="import-drop"><div class="upload-art"><span>${ico('upload',26)}</span><i></i><b></b></div><h2>เพิ่มเอกสารเข้าสู่คลัง</h2><p>เลือกไฟล์ที่ต้องการนำเข้า หรือวางไฟล์ลงในพื้นที่นี้</p><small>รองรับ PDF, DOCX, XLSX, JPG, PNG</small><button class="button button-secondary" data-action="open-import">เลือกไฟล์จากอุปกรณ์</button></section><section class="panel imported-panel"><div class="panel-heading"><div><h3>เอกสารในคลัง</h3><p>รายการเอกสารนิเทศและไฟล์ที่นำเข้าล่าสุด</p></div><span class="count-badge">${data.documents.length}</span></div><div class="table-wrap"><table><thead><tr><th>ชื่อเอกสาร</th><th>หมวดหมู่</th><th>สถานศึกษา</th><th>เพิ่มเมื่อ</th><th>ขนาด</th></tr></thead><tbody>${imported.map(d=>`<tr><td><div class="doc-name-cell"><span class="file-type ${String(d.type||'file').toLowerCase()}">${escapeHtml(d.type||'FILE')}</span><span><b>${escapeHtml(d.name)}</b></span></div></td><td>${escapeHtml(d.category||'เอกสารประกอบ')}</td><td>${escapeHtml(d.school||'ทุกสถานศึกษา')}</td><td>${escapeHtml(d.updated||'วันนี้')}</td><td>${escapeHtml(d.size||'—')}</td></tr>`).join('') || emptyRow(5,'ยังไม่มีเอกสารในคลัง')}</tbody></table></div></section>`;
}

function reportsPage() {
  const report = data.reports[0];
  return `${topHeading('งานนิเทศ', 'รายงานไตรมาส', 'สังเคราะห์ แก้ไข และส่งออกรายงานสรุปผลการนิเทศ', `${button(`${ico('spark',17)} สังเคราะห์รายงาน`, 'synthesize')} ${button(`${ico('download',17)} ส่งออกเล่มรายงาน`, 'export-report', 'secondary')}`)}<section class="report-intro"><div class="report-symbol">${ico('spark',22)}</div><div><b>สรุปผลการนิเทศรายไตรมาส</b><p>ระบบจะใช้ข้อมูลบันทึกการนิเทศในไตรมาสที่เลือกเพื่อสร้างร่างรายงาน</p></div><select class="filter-select report-quarter" id="report-quarter"><option>ไตรมาส 3/2569</option><option>ไตรมาส 2/2569</option><option>ไตรมาส 1/2569</option></select></section><section class="panel report-editor"><div class="panel-heading"><div><div class="editor-title"><h3>${escapeHtml(report?.title || 'ร่างรายงานใหม่')}</h3>${statusPill(report?.status || 'ฉบับร่าง')}</div><p>แก้ไขเนื้อหาร่างได้ก่อนส่งออก · อัปเดต ${escapeHtml(report?.updated || '—')}</p></div><button class="panel-more" aria-label="ตัวเลือก">${ico('more',19)}</button></div><label class="field-label" for="report-content">เนื้อหารายงาน</label><textarea class="report-textarea" id="report-content" placeholder="กดสังเคราะห์รายงานเพื่อสร้างร่างจากบันทึกการนิเทศ">${escapeHtml(report?.content || '')}</textarea><div class="editor-footer"><span>${ico('shield',14)} ${ico('spark',14)} โหมดสาธิต · สร้างร่างจากข้อมูลการนิเทศในระบบ</span><button class="button button-secondary" data-action="save-report">${ico('check',16)} บันทึกร่าง</button></div></section><div class="notice-line">การเชื่อมต่อผู้ให้บริการ AI จริงต้องตั้งค่า API ก่อนใช้งาน</div>`;
}

function templatesPage() {
  const t = data.templates[0] || {};
  return `${topHeading('งานนิเทศ', 'แม่แบบนิเทศ', 'ปรับแต่งโครงสร้างแม่แบบรายงานสำหรับการนิเทศ', button(`${ico('check',16)} บันทึกแม่แบบ`, 'save-template'))}<div class="template-layout"><section class="panel template-form"><div class="panel-heading"><div><h3>ตั้งค่าแม่แบบรายงาน</h3><p>ปรับชื่อและส่วนประกอบของเอกสาร</p></div><span class="template-mark">${ico('sliders',19)}</span></div><form id="template-form"><label class="form-field"><span>ชื่อแม่แบบ</span><input name="name" value="${escapeHtml(t.name||'แม่แบบรายงานนิเทศ')}" required></label><label class="form-field"><span>หัวรายงาน</span><input name="header" value="${escapeHtml(t.header||'รายงานผลการนิเทศการศึกษา')}" required></label><label class="form-field"><span>หน่วยงาน</span><input name="organization" value="${escapeHtml(t.organization||'สำนักงานเขตพื้นที่การศึกษา')}" required></label><label class="form-field"><span>หัวข้อในรายงาน</span><textarea name="sections" rows="4">${escapeHtml(t.sections||'บทสรุปผู้บริหาร, วัตถุประสงค์, ผลการนิเทศ, ข้อเสนอแนะ')}</textarea><small>คั่นแต่ละหัวข้อด้วยเครื่องหมายจุลภาค</small></label></form></section><section class="template-preview"><div class="preview-label">ตัวอย่างเอกสาร</div><article class="paper-preview"><div class="paper-emblem">น</div><small>${escapeHtml(t.organization||'สำนักงานเขตพื้นที่การศึกษา')}</small><h3>${escapeHtml(t.header||'รายงานผลการนิเทศการศึกษา')}</h3><div class="paper-rule"></div><div class="paper-placeholder">ไตรมาส 3 ประจำปี 2569</div>${String(t.sections||'บทสรุปผู้บริหาร, วัตถุประสงค์, ผลการนิเทศ, ข้อเสนอแนะ').split(',').map((s,i)=>`<div class="paper-section"><b>${String(i+1).padStart(2,'0')}</b><span>${escapeHtml(s.trim())}</span><i></i></div>`).join('')}<div class="paper-footer">แม่แบบรายงานนิเทศมาตรฐาน</div></article></section></div>`;
}

function adminTablePage(type) {
  const configs = {
    users: { eyebrow:'จัดการระบบ', title:'บัญชีผู้ใช้งาน', desc:'จัดการบัญชีและสิทธิ์การเข้าใช้งานระบบ', add:'เพิ่มบัญชีผู้ใช้', fields:[['name','ชื่อ–นามสกุล'],['email','อีเมล'],['role','บทบาท','select',['ศึกษานิเทศก์','ผู้ดูแลระบบ']],['school','หน่วยงาน']], headers:['ผู้ใช้งาน','บทบาท','หน่วยงาน','สถานะ',''], row:u=>`<td><div class="user-cell"><span class="avatar small-avatar">${escapeHtml(u.initials||u.name.slice(0,1))}</span><span><b>${escapeHtml(u.name)}</b><small>${escapeHtml(u.email)}</small></span></div></td><td>${escapeHtml(u.role)}</td><td>${escapeHtml(u.school||'—')}</td><td>${statusPill(u.status)}</td><td>${actionsFor(u,'users')}</td>` },
    schools: { eyebrow:'จัดการระบบ', title:'สถานศึกษา', desc:'จัดการข้อมูลสถานศึกษาในพื้นที่รับผิดชอบ', add:'เพิ่มสถานศึกษา', fields:[['name','ชื่อสถานศึกษา'],['district','อำเภอ'],['level','ระดับการศึกษา'],['director','ผู้อำนวยการ'],['phone','เบอร์โทรศัพท์']], headers:['สถานศึกษา','อำเภอ','ระดับการศึกษา','ผู้บริหาร','สถานะ',''], row:s=>`<td><b>${escapeHtml(s.name)}</b></td><td>${escapeHtml(s.district)}</td><td>${escapeHtml(s.level)}</td><td>${escapeHtml(s.director||'—')}</td><td>${statusPill(s.status)}</td><td>${actionsFor(s,'schools')}</td>` },
    projects: { eyebrow:'จัดการระบบ', title:'โครงการและผู้รับผิดชอบ', desc:'มอบหมายเจ้าของโครงการและติดตามสถานะการดำเนินงาน', add:'เพิ่มโครงการ', fields:[['name','ชื่อโครงการ'],['owner','เจ้าของโครงการ','select',data.users.filter(u=>u.role==='ศึกษานิเทศก์').map(u=>u.name)],['schools','จำนวนสถานศึกษา'],['period','ช่วงเวลาดำเนินงาน']], headers:['โครงการ','เจ้าของโครงการ','สถานศึกษา','ช่วงเวลา','สถานะ',''], row:p=>`<td><b>${escapeHtml(p.name)}</b></td><td><div class="owner-cell"><span class="avatar tiny-avatar">${escapeHtml((p.owner||'–').slice(0,1))}</span>${escapeHtml(p.owner)}</div></td><td>${escapeHtml(p.schools)} แห่ง</td><td>${escapeHtml(p.period)}</td><td>${statusPill(p.status)}</td><td>${actionsFor(p,'projects')}</td>` },
    references: { eyebrow:'จัดการระบบ', title:'คลังเอกสารอ้างอิง', desc:'จัดการคู่มือ แนวทาง และเอกสารประกอบการนิเทศ', add:'เพิ่มเอกสารอ้างอิง', fields:[['name','ชื่อเอกสาร'],['category','หมวดหมู่','select',['คู่มือ','มาตรฐาน','แนวทาง','แบบฟอร์ม']],['year','ปีเอกสาร'],['source','แหล่งที่มา']], headers:['ชื่อเอกสาร','หมวดหมู่','ปี','แหล่งที่มา','ไฟล์',''], row:r=>`<td><div class="doc-name-cell"><span class="file-type pdf">PDF</span><b>${escapeHtml(r.name)}</b></div></td><td>${escapeHtml(r.category)}</td><td>${escapeHtml(r.year)}</td><td>${escapeHtml(r.source)}</td><td>${escapeHtml(r.files||1)} ไฟล์</td><td>${actionsFor(r,'references')}</td>` }
  };
  const c = configs[type];
  const rows = data[type] || [];
  return `${topHeading(c.eyebrow,c.title,c.desc,button(`${ico('plus',17)} ${c.add}`,'add-item', 'primary', `data-type="${type}"`))}<div class="filter-row"><label class="filter-search">${ico('search',17)}<input class="table-search" placeholder="ค้นหา${c.title}"></label><span class="results-count">${rows.length} รายการ</span></div><section class="panel table-panel"><div class="table-wrap"><table><thead><tr>${c.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody id="filterable-rows">${rows.map(item=>`<tr data-search="${escapeHtml(Object.values(item).join(' '))}">${c.row(item)}</tr>`).join('') || emptyRow(c.headers.length, 'ยังไม่มีรายการ')}</tbody></table></div></section>`;
}

function actionsFor(item, type) {
  if (type === 'users') return `<button class="row-action" title="แก้ไขบัญชี" data-action="edit-item" data-type="${type}" data-id="${item.id}">${ico('edit',16)}</button><button class="row-action" title="เปลี่ยนสถานะ" data-action="toggle-user" data-id="${item.id}">${ico('shield',16)}</button>`;
  return `<button class="row-action" title="แก้ไข" data-action="edit-item" data-type="${type}" data-id="${item.id}">${ico('edit',16)}</button><button class="row-action danger-action" title="ลบรายการ" data-action="delete-item" data-type="${type}" data-id="${item.id}">${ico('close',16)}</button>`;
}

function auditPage() {
  return `${topHeading('จัดการระบบ','ประวัติการใช้งานระบบ','ตรวจสอบกิจกรรมและการเปลี่ยนแปลงที่เกิดขึ้นในระบบ')}<div class="filter-row"><label class="filter-search">${ico('search',17)}<input class="table-search" placeholder="ค้นหาผู้ใช้งานหรือกิจกรรม"></label><select class="filter-select"><option>ทุกกิจกรรม</option><option>เข้าสู่ระบบ</option><option>บันทึกการนิเทศ</option><option>จัดการข้อมูล</option></select><span class="results-count">${data.audit.length} รายการ</span></div><section class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>ผู้ใช้งาน</th><th>กิจกรรม</th><th>รายการที่เกี่ยวข้อง</th><th>เวลา</th><th>ผลลัพธ์</th></tr></thead><tbody id="filterable-rows">${data.audit.map(log=>`<tr><td><div class="primary-cell">${escapeHtml(log.actor)}</div></td><td>${escapeHtml(log.action)}</td><td>${escapeHtml(log.target)}</td><td>${escapeHtml(log.time)}</td><td>${statusPill(log.result)}</td></tr>`).join('')||emptyRow(5,'ยังไม่มีประวัติ')}</tbody></table></div></section>`;
}

function emptyRow(span, text) { return `<tr><td colspan="${span}" class="empty-row">${text}</td></tr>`; }

function pageContent() {
  switch (page) {
    case 'home': return dashboard();
    case 'documents': return documentPage();
    case 'visits': return visitsPage();
    case 'imports': return importsPage();
    case 'reports': return reportsPage();
    case 'templates': return templatesPage();
    case 'history': return visitsPage(true);
    case 'admin-home': return adminDashboard();
    case 'users': case 'schools': case 'projects': case 'references': return adminTablePage(page);
    case 'audit': return auditPage();
    default: return dashboard();
  }
}

function render() {
  document.querySelector('#app').innerHTML = role ? shell() : loginView();
}

function logAction(action, target) {
  const user = currentUser();
  data.audit.unshift({ id:`a${Date.now()}`, actor:user.name, action, target, time:'วันนี้ ' + new Intl.DateTimeFormat('th-TH',{hour:'2-digit',minute:'2-digit'}).format(new Date()), result:'สำเร็จ' });
  persist();
}

function toast(message, type = 'success') {
  const root = document.querySelector('#toast-root');
  if (!root) return;
  root.innerHTML = `<div class="toast ${type}"><span>${type === 'success' ? ico('check',16) : ico('shield',16)}</span>${escapeHtml(message)}</div>`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { if (root) root.innerHTML = ''; }, 2800);
}

function setPage(nextPage) {
  page = nextPage;
  document.querySelector('.sidebar')?.classList.remove('mobile-open');
  render();
}

const configs = {
  visit: { title:'บันทึกการนิเทศ', collection:'visits', fields:[['school','สถานศึกษา','select',()=>data.schools.map(s=>s.name)],['project','โครงการ','select',()=>data.projects.map(p=>p.name)],['visitDate','วันที่นิเทศ','date'],['quarter','ไตรมาส','select',['ไตรมาส 3/2569','ไตรมาส 2/2569','ไตรมาส 1/2569']],['result','ผลการนิเทศ','select',['ดำเนินงานได้ตามแผน','ควรติดตามต่อเนื่อง','อยู่ระหว่างพัฒนา']],['note','บันทึกผลและข้อเสนอแนะ','textarea']] },
  import: { title:'นำเข้าเอกสาร', collection:'documents', fields:[['file','เลือกไฟล์','file'],['category','หมวดหมู่','select',['เอกสารนิเทศ','เอกสารอ้างอิง','หลักฐานประกอบ','ผลการประเมิน']],['school','สถานศึกษา','select',()=>['ทุกสถานศึกษา',...data.schools.map(s=>s.name)]] ] }
};

function openModal(kind, id = '') {
  const root = document.querySelector('#modal-root');
  if (!root) return;
  if (kind === 'view-visit') {
    const v = data.visits.find(x=>x.id===id);
    if (!v) return;
    root.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal" data-modal><button class="modal-close" data-action="close-modal">${ico('close',19)}</button><div class="eyebrow">รายละเอียดการนิเทศ</div><h2>${escapeHtml(v.school)}</h2><p class="muted">${escapeHtml(v.project)} · ${formatDate(v.visitDate)}</p><div class="detail-grid"><span>ผู้รับผิดชอบ</span><b>${escapeHtml(v.inspector||'ศน. พิมพ์ชนก')}</b><span>ไตรมาส</span><b>${escapeHtml(v.quarter||'—')}</b><span>ผลการนิเทศ</span><b>${escapeHtml(v.result)}</b><span>สถานะ</span><b>${statusPill(v.status)}</b></div><div class="detail-note"><b>บันทึกและข้อเสนอแนะ</b><p>${escapeHtml(v.note||'—')}</p></div><div class="modal-actions"><button class="button button-secondary" data-action="close-modal">ปิด</button></div></section></div>`;
    return;
  }
  if (kind === 'view-doc') {
    const doc = data.documents.find(x=>x.id===id);
    if (!doc) return;
    root.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal" data-modal><button class="modal-close" data-action="close-modal">${ico('close',19)}</button><span class="file-type pdf large-file">${escapeHtml(doc.type||'FILE')}</span><div class="eyebrow">รายละเอียดเอกสาร</div><h2>${escapeHtml(doc.name)}</h2><div class="detail-grid"><span>หมวดหมู่</span><b>${escapeHtml(doc.category||'เอกสารนิเทศ')}</b><span>สถานศึกษา</span><b>${escapeHtml(doc.school||'ทุกสถานศึกษา')}</b><span>อัปเดตล่าสุด</span><b>${escapeHtml(doc.updated||'—')}</b><span>ขนาดไฟล์</span><b>${escapeHtml(doc.size||'—')}</b></div><div class="modal-actions">${doc.fileUrl?`<a class="button button-primary" href="${escapeHtml(doc.fileUrl)}" download="${escapeHtml(doc.name)}.${escapeHtml(String(doc.type||'file').toLowerCase())}">${ico('download',16)} ดาวน์โหลดไฟล์</a>`:''}<button class="button button-secondary" data-action="close-modal">ปิด</button></div></section></div>`;
    return;
  }
  let config = configs[kind];
  let editType = '';
  if (kind === 'add-item' || kind === 'edit-item') {
    editType = window.modalType || '';
  }
  if (!config && (kind === 'add-item' || kind === 'edit-item')) {
    const type = editType;
    const fieldsByType = {
      users:[['name','ชื่อ–นามสกุล'],['email','อีเมล'],['role','บทบาท','select',['ศึกษานิเทศก์','ผู้ดูแลระบบ']],['school','หน่วยงาน']],
      schools:[['name','ชื่อสถานศึกษา'],['district','อำเภอ'],['level','ระดับการศึกษา'],['director','ผู้อำนวยการ'],['phone','เบอร์โทรศัพท์']],
      projects:[['name','ชื่อโครงการ'],['owner','เจ้าของโครงการ','select',['ยังไม่มอบหมาย',...data.users.filter(u=>u.role==='ศึกษานิเทศก์').map(u=>u.name)]],['schools','จำนวนสถานศึกษา','number'],['period','ช่วงเวลาดำเนินงาน']],
      references:[['name','ชื่อเอกสาร'],['category','หมวดหมู่','select',['คู่มือ','มาตรฐาน','แนวทาง','แบบฟอร์ม']],['year','ปีเอกสาร'],['source','แหล่งที่มา']]
    };
    config = { title:kind==='edit-item'?'แก้ไขรายการ':({users:'เพิ่มบัญชีผู้ใช้งาน',schools:'เพิ่มสถานศึกษา',projects:'เพิ่มโครงการ',references:'เพิ่มเอกสารอ้างอิง'}[type]), collection:type, fields:fieldsByType[type] };
    editType = type;
  }
  if (!config) return;
  const isEdit = kind==='edit-item';
  const item = isEdit ? data[config.collection].find(x=>x.id===id) || {} : {};
  const formFields = config.fields.map(([name,label,type='text',options]) => {
    const value = item[name] || '';
    if (type === 'textarea') return `<label class="form-field"><span>${label}</span><textarea name="${name}" rows="4" ${name==='note'?'required':''}>${escapeHtml(value)}</textarea></label>`;
    if (type === 'select') {
      const values = typeof options === 'function' ? options() : options;
      return `<label class="form-field"><span>${label}</span><select name="${name}" required>${values.map(v=>`<option ${value===v?'selected':''}>${escapeHtml(v)}</option>`).join('')}</select></label>`;
    }
    if (type === 'file') return `<label class="form-field"><span>${label}</span><input name="${name}" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" required></label>`;
    return `<label class="form-field"><span>${label}</span><input name="${name}" type="${type}" value="${escapeHtml(value)}" ${type==='date'?'required':''}></label>`;
  }).join('');
  root.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal" data-modal><button class="modal-close" data-action="close-modal">${ico('close',19)}</button><div class="eyebrow">${isEdit?'จัดการข้อมูล':'เพิ่มข้อมูล'}</div><h2>${config.title}</h2><p class="muted">กรอกข้อมูลให้ครบถ้วนก่อนบันทึก</p><form id="modal-form" data-kind="${kind}" data-collection="${config.collection}" data-id="${id}">${formFields}<div class="modal-actions"><button type="button" class="button button-secondary" data-action="close-modal">ยกเลิก</button><button class="button button-primary" type="submit">${ico('check',16)} บันทึกข้อมูล</button></div></form></section></div>`;
}

function saveVisit(values) {
  const visit = { ...values, id:`v${Date.now()}`, inspector:'ศน. พิมพ์ชนก', status:'เสร็จสิ้น', quarter:values.quarter || 'ไตรมาส 3/2569' };
  data.visits.unshift(visit);
  logAction('บันทึกการนิเทศ',visit.school);
  persist(); render(); toast('บันทึกการนิเทศเรียบร้อยแล้ว');
}

async function saveImport(values, file) {
  let uploaded = null;
  let uploadError = '';
  try {
    const response = await fetch('/api/uploads', { method:'POST', headers:{'content-type':file.type||'application/octet-stream','x-file-name':encodeURIComponent(file.name)}, body:file });
    if (!response.ok) throw new Error((await response.json()).error || 'อัปโหลดไฟล์ไม่สำเร็จ');
    uploaded = await response.json();
  } catch (error) {
    uploadError = error.message || '';
  }
  const ext = file.name.split('.').pop().toUpperCase();
  const doc = { id:`d${Date.now()}`, name:file.name.replace(/\.[^.]+$/,''), category:values.category, school:values.school, updated:'วันนี้', type:uploaded?.type||ext, size:file.size > 1048576 ? `${(file.size/1048576).toFixed(1)} MB` : `${Math.max(1,Math.round(file.size/1024))} KB`, ...(uploaded?{fileUrl:uploaded.fileUrl,storage:'api'}:{storage:'browser'}) };
  data.documents.unshift(doc);
  logAction('นำเข้าเอกสาร',doc.name);
  persist(); render();
  toast(uploaded ? 'อัปโหลดไฟล์และเพิ่มเข้าคลังแล้ว' : `เพิ่มรายการไฟล์แล้ว แต่ยังเก็บไฟล์จริงไม่ได้${uploadError?` · ${uploadError}`:''}`, uploaded?'success':'error');
}

function saveCrud(form) {
  const type = form.dataset.collection;
  const kind = form.dataset.kind;
  const values = Object.fromEntries(new FormData(form).entries());
  const id = form.dataset.id;
  if (kind === 'edit-item') {
    const at = data[type].findIndex(x=>x.id===id);
    if (at >= 0) data[type][at] = { ...data[type][at], ...values, ...(type==='users'?{initials:values.name.split(/\s+/).slice(0,2).map(w=>w[0]).join('')}:{}) };
  } else {
    const newItem = { id:`${type[0]}${Date.now()}`, ...values };
    if (type==='users') Object.assign(newItem,{status:'ใช้งาน',initials:values.name.split(/\s+/).slice(0,2).map(w=>w[0]).join('')});
    if (type==='schools') newItem.status='เปิดใช้งาน';
    if (type==='projects') newItem.status=values.owner==='ยังไม่มอบหมาย'?'รอมอบหมาย':'กำลังดำเนินงาน';
    if (type==='references') newItem.files=1;
    data[type].unshift(newItem);
  }
  logAction(kind==='edit-item'?'แก้ไขข้อมูล':'เพิ่มข้อมูล',values.name||values.title||type);
  persist(); document.querySelector('#modal-root').innerHTML=''; render(); toast('บันทึกข้อมูลเรียบร้อยแล้ว');
}

function exportReport() {
  const content = document.querySelector('#report-content')?.value || data.reports[0]?.content || '';
  const title = data.reports[0]?.title || 'รายงานผลการนิเทศ';
  const sections = content.split(/\n\s*\n/).map(p=>`<p>${escapeHtml(p).replace(/\n/g,'<br>')}</p>`).join('');
  const win = window.open('', '_blank');
  if (!win) { toast('เบราว์เซอร์บล็อกหน้าสำหรับส่งออก กรุณาอนุญาตป๊อปอัป', 'error'); return; }
  win.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title><style>@page{size:A4;margin:24mm}body{font:16px/1.9 "Leelawadee UI",Tahoma,sans-serif;color:#1a2d45}header{text-align:center;margin:48px 0 70px}header small{color:#667891}h1{font-size:25px;margin:24px 0}.rule{height:3px;width:90px;background:#e8b547;margin:20px auto}main{white-space:normal}p{margin:0 0 20px;text-align:justify}footer{margin-top:70px;text-align:center;color:#7d8ca0;font-size:12px}@media print{body{print-color-adjust:exact}}</style></head><body><header><small>สำนักงานเขตพื้นที่การศึกษา</small><h1>${escapeHtml(title)}</h1><div class="rule"></div><small>ปีการศึกษา 2569</small></header><main>${sections}</main><footer>เอกสารสรุปผลการนิเทศ · จัดทำโดยระบบนิเทศดี</footer><script>window.onload=()=>setTimeout(()=>window.print(),250)<\/script></body></html>`);
  win.document.close();
  logAction('ส่งออกรายงาน',title);
}

async function synthesizeReport() {
  const quarter = document.querySelector('#report-quarter')?.value || 'ไตรมาส 3/2569';
  let report;
  try {
    const response = await fetch('/api/reports/synthesize',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({quarter})});
    if (!response.ok) throw new Error('API unavailable');
    ({report} = await response.json());
  } catch {
    const visits = data.visits.filter(v=>v.quarter===quarter);
    report={id:`r${Date.now()}`,title:`รายงานผลการนิเทศ ${quarter}`,quarter,updated:'วันนี้',status:'ฉบับร่าง',content:`รายงานผลการนิเทศ ${quarter}\n\nภาพรวมการดำเนินงาน\nดำเนินการนิเทศจำนวน ${visits.length} ครั้ง ครอบคลุม ${new Set(visits.map(v=>v.school)).size} สถานศึกษา\n\nผลการนิเทศ\n${[...new Set(visits.map(v=>v.result))].map((x,i)=>`${i+1}. ${x}`).join('\n')||'ยังไม่มีผลการนิเทศในช่วงเวลานี้'}\n\nข้อเสนอแนะ\n1. ติดตามสถานศึกษาที่อยู่ระหว่างพัฒนาและสนับสนุนตามบริบท\n2. แลกเปลี่ยนแนวปฏิบัติที่ได้ผลระหว่างสถานศึกษา\n\nหมายเหตุ: ร่างตัวอย่างจากข้อมูลบันทึกในโหมดสาธิต`};
  }
  data.reports.unshift(report);
  persist(); render(); toast('สร้างร่างรายงานจากข้อมูลนิเทศแล้ว');
}

document.addEventListener('click', async (event) => {
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const action = control.dataset.action;
  if (control.matches('.modal-backdrop') && event.target.closest('[data-modal]')) return;
  switch (action) {
    case 'choose-role': role=control.dataset.role; render(); break;
    case 'login': if (!role) { role='supervisor'; } localStorage.setItem('supervision-role',role); page=role==='admin'?'admin-home':'home'; logAction('เข้าสู่ระบบ','พื้นที่ทำงาน'); render(); break;
    case 'go': setPage(control.dataset.page); break;
    case 'switch-role': role=''; localStorage.removeItem('supervision-role'); render(); break;
    case 'mobile-menu': document.querySelector('.sidebar')?.classList.toggle('mobile-open'); break;
    case 'new-visit': openModal('visit'); break;
    case 'go-import': setPage('imports'); break;
    case 'open-import': openModal('import'); break;
    case 'add-item': window.modalType=control.dataset.type; openModal('add-item'); break;
    case 'edit-item': window.modalType=control.dataset.type; openModal('edit-item',control.dataset.id); break;
    case 'delete-item': {
      const type=control.dataset.type, id=control.dataset.id;
      const item=data[type].find(x=>x.id===id);
      if (item && window.confirm(`ลบรายการ “${item.name||item.title}” หรือไม่?`)) { data[type]=data[type].filter(x=>x.id!==id); logAction('ลบข้อมูล',item.name||item.title); persist(); render(); toast('ลบรายการแล้ว'); }
      break;
    }
    case 'toggle-user': {
      const user=data.users.find(u=>u.id===control.dataset.id);
      if (user) { user.status=user.status==='ใช้งาน'?'ระงับ':'ใช้งาน'; logAction('เปลี่ยนสถานะบัญชี',user.name); persist(); render(); toast(`เปลี่ยนสถานะบัญชีเป็น${user.status}แล้ว`); }
      break;
    }
    case 'view-visit': openModal('view-visit',control.dataset.id); break;
    case 'view-doc': openModal('view-doc',control.dataset.id); break;
    case 'close-modal': document.querySelector('#modal-root').innerHTML=''; break;
    case 'synthesize': await synthesizeReport(); break;
    case 'save-report': {
      const content=document.querySelector('#report-content')?.value||'';
      if (!data.reports.length) data.reports.unshift({id:`r${Date.now()}`,title:'รายงานผลการนิเทศ ไตรมาส 3/2569',quarter:'ไตรมาส 3/2569',updated:'วันนี้',status:'ฉบับร่าง',content});
      else {data.reports[0].content=content;data.reports[0].updated='วันนี้';}
      logAction('แก้ไขร่างรายงาน',data.reports[0].title); persist(); render(); toast('บันทึกร่างรายงานแล้ว'); break;
    }
    case 'export-report': exportReport(); break;
    case 'save-template': {
      const form=document.querySelector('#template-form');
      const values=Object.fromEntries(new FormData(form).entries());
      if (data.templates.length) data.templates[0]={...data.templates[0],...values,updated:'วันนี้'};
      else data.templates.unshift({id:`t${Date.now()}`,...values,updated:'วันนี้'});
      logAction('ปรับแต่งแม่แบบนิเทศ',values.name); persist(); render(); toast('บันทึกแม่แบบแล้ว'); break;
    }
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id === 'modal-form') {
    event.preventDefault();
    const form=event.target;
    const values=Object.fromEntries(new FormData(form).entries());
    if (form.dataset.collection==='visits') saveVisit(values);
    else if (form.dataset.collection==='documents') {
      const file=form.querySelector('input[type=file]').files[0];
      if (file) saveImport(values,file);
    } else saveCrud(form);
  }
});

document.addEventListener('input', (event) => {
  if (event.target.matches('.table-search, #global-search')) {
    const query=event.target.value.toLocaleLowerCase('th-TH');
    document.querySelectorAll('#filterable-rows tr').forEach(row=>row.hidden=!row.textContent.toLocaleLowerCase('th-TH').includes(query));
  }
  if (event.target.matches('#global-search') && event.target.value.trim().length===1) {
    document.querySelector('.page-content')?.scrollIntoView({block:'start',behavior:'smooth'});
  }
});

document.addEventListener('change', (event) => {
  const filters=['visit-quarter','visit-status','document-category'].filter(id=>document.getElementById(id));
  if (!filters.includes(event.target.id)) return;
  const query=document.querySelector('.table-search')?.value.toLocaleLowerCase('th-TH')||'';
  document.querySelectorAll('#filterable-rows tr').forEach(row=>{
    const matchesText=row.textContent.toLocaleLowerCase('th-TH').includes(query);
    const matchesQuarter=!document.getElementById('visit-quarter')?.value||row.textContent.includes(document.getElementById('visit-quarter').value);
    const matchesStatus=!document.getElementById('visit-status')?.value||row.textContent.includes(document.getElementById('visit-status').value);
    const matchesCategory=!document.getElementById('document-category')?.value||row.textContent.includes(document.getElementById('document-category').value);
    row.hidden=!(matchesText&&matchesQuarter&&matchesStatus&&matchesCategory);
  });
});

document.addEventListener('keydown',(event)=>{
  if ((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k') {event.preventDefault();document.querySelector('#global-search')?.focus();}
  if (event.key==='Escape') {document.querySelector('#modal-root')?.replaceChildren();document.querySelector('.sidebar')?.classList.remove('mobile-open');}
});

render();
hydrate();
