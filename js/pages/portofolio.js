/* PORTOFOLIO — edit daftar proyek di bawah ini.
   Ganti "img" dengan foto asli studio, dan hapus tanda contoh:true setelah memakai karya sungguhan. */
(function () {
  var U = function (id) { return 'https://images.unsplash.com/photo-' + id + '?w=1200&q=80'; };
  var projects = [
    { id: 1, cat: 'rumah', title: 'Rumah Tropis Hemat Energi', desc: 'Rumah keluarga dengan ventilasi silang, teritisan lebar, dan taman tengah agar sejuk tanpa banyak pendingin udara.', img: U('1600607687939-ce8a6c25118c'), scale: 'Kecil – menengah', features: ['Ventilasi silang', 'Teritisan peneduh', 'Cahaya alami siang hari'], contoh: true },
    { id: 2, cat: 'rumah', title: 'Hunian Terang Material Alami', desc: 'Interior terang dengan bukaan besar dan material alami untuk mengurangi kebutuhan lampu di siang hari.', img: U('1600210492486-724fe5c67fb0'), scale: 'Menengah', features: ['Bukaan besar', 'Material alami', 'Lampu hemat energi'], contoh: true },
    { id: 3, cat: 'rumah', title: 'Bangunan Hijau Skala Besar', desc: 'Konsep bangunan besar dengan fasad peneduh dan area hijau untuk menekan panas dan beban listrik.', img: U('1511818966892-d7d671e672a2'), scale: 'Besar', features: ['Fasad peneduh', 'Area hijau', 'Atap hemat panas'], contoh: true },
    { id: 4, cat: 'greenhouse', title: 'Greenhouse Rumahan', desc: 'Greenhouse kecil untuk halaman rumah: cocok untuk sayuran, tanaman hias, dan pemula.', img: U('1585320806297-9794b3e4eeae'), scale: 'Kecil', features: ['Rangka ringan', 'Ventilasi atap', 'Mudah dirawat'], contoh: true },
    { id: 5, cat: 'greenhouse', title: 'Greenhouse Produksi', desc: 'Greenhouse skala besar untuk budidaya terkontrol dengan sirkulasi udara dan pengaturan cahaya.', img: U('1530836369250-ef72a3f5cda8'), scale: 'Besar', features: ['Kontrol suhu', 'Sirkulasi udara', 'Irigasi terjadwal'], contoh: true },
    { id: 6, cat: 'greenhouse', title: 'Perlengkapan Pertanian Modern', desc: 'Pilihan material dan perlengkapan untuk membangun serta merawat greenhouse.', img: U('1416879595882-3373a0480b5b'), scale: 'Semua skala', features: ['Paket material', 'Konsultasi fungsi', 'Bisa disesuaikan'], contoh: true },
    { id: 7, cat: 'daur', title: 'Furnitur dari Bahan Daur Ulang', desc: 'Furnitur dan dekorasi yang dibuat dari material bekas, sehingga mengurangi sampah dan tetap menarik.', img: U('1618221195710-dd6b41faaea6'), scale: 'Produk', features: ['Material bekas pilihan', 'Desain unik', 'Tahan lama'], contoh: true },
    { id: 8, cat: 'identitas', title: 'Nature. Form. Sustainability.', desc: 'Identitas visual Ecoform Studio: alam, bentuk, dan keberlanjutan dalam satu bahasa desain.', img: '../../storage/portofolio-images/home images.png', scale: 'Identitas merek', features: ['Logo', 'Palet alami', 'Tipografi'], contoh: false },
    { id: 9, cat: 'identitas', title: 'Thoughtful Living', desc: 'Studi desain tentang hidup yang lebih sadar: ruang, cahaya, dan alam yang saling menopang.', img: '../../assets/images/about/philosophy.jpg', scale: 'Studi konsep', features: ['Studi ruang', 'Cahaya alami', 'Tanaman'], contoh: false }
  ];
  var catName = { rumah: 'Rumah Hijau', greenhouse: 'Greenhouse', daur: 'Daur Ulang', identitas: 'Identitas & Studi' };
  var grid = document.getElementById('pfGrid'), modal = document.getElementById('pfModal'), last = null;
  if (!grid) return;
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  grid.innerHTML = projects.map(function (p) {
    return '<button type="button" class="pf-item" data-cat="' + p.cat + '" data-id="' + p.id + '"><img src="' + p.img + '" alt="' + esc(p.title) + '" loading="lazy"><div><span class="pf-badge">' + catName[p.cat] + (p.contoh ? ' · Contoh konsep' : '') + '</span><h3>' + esc(p.title) + '</h3><p>' + esc(p.desc.split('.')[0]) + '.</p></div></button>';
  }).join('');
  // Filter
  var tabs = document.querySelectorAll('.pf-filter button');
  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      tabs.forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
      b.classList.add('on'); b.setAttribute('aria-pressed', 'true');
      var f = b.dataset.filter;
      grid.querySelectorAll('.pf-item').forEach(function (it) { it.hidden = !(f === 'all' || it.dataset.cat === f); });
    });
  });
  // Hitung angka
  var cnt = document.getElementById('pfCount'); if (cnt) cnt.textContent = projects.length;
  // Jendela detail
  function open(id) {
    var p = projects.filter(function (x) { return x.id == id; })[0]; if (!p) return;
    last = document.activeElement;
    var q = encodeURIComponent('Desain: ' + p.title);
    modal.innerHTML = '<div class="pf-dialog" role="dialog" aria-modal="true" aria-label="' + esc(p.title) + '"><button class="pf-close" type="button" aria-label="Tutup">×</button><img src="' + p.img + '" alt="' + esc(p.title) + '"><div class="pf-info"><span class="pf-badge">' + catName[p.cat] + '</span><h2>' + esc(p.title) + '</h2><p>' + esc(p.desc) + '</p><dl><dt>Skala</dt><dd>' + esc(p.scale) + '</dd></dl><b>Fitur hijau</b><ul>' + p.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul><a class="pf-ask" href="../contact/index.html?product=' + q + '">Tanya admin tentang ini</a>' + (p.contoh ? '<p style="font-size:13px;margin-top:14px">Gambar ini contoh konsep sebagai ilustrasi.</p>' : '') + '</div></div>';
    modal.classList.add('open'); document.body.style.overflow = 'hidden';
    modal.querySelector('.pf-close').focus();
  }
  function close() { modal.classList.remove('open'); document.body.style.overflow = ''; if (last) last.focus(); }
  grid.addEventListener('click', function (e) { var b = e.target.closest('.pf-item'); if (b) open(b.dataset.id); });
  modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('.pf-close')) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
})();
