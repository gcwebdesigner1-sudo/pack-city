// Pack City — small, dependency-free interactions
(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Before / after sliders
  document.querySelectorAll('.ba input').forEach(function (r) {
    var box = r.closest('.ba');
    var set = function () { box.style.setProperty('--pos', r.value + '%'); };
    r.addEventListener('input', set); set();
  });

  // Gallery expand
  var g = document.querySelector('.gallery.collapsed'), more = document.getElementById('gallery-more');
  if (g && more) more.addEventListener('click', function () {
    g.classList.remove('collapsed'); more.parentElement.remove();
  });

  // Lightbox
  var dlg = document.getElementById('lightbox');
  if (dlg && dlg.showModal) {
    var img = dlg.querySelector('img'), cap = dlg.querySelector('p');
    document.querySelectorAll('.gallery button').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = b.querySelector('img');
        img.src = i.currentSrc || i.src; img.alt = i.alt; cap.textContent = i.alt;
        dlg.showModal();
      });
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.classList.contains('close')) dlg.close(); });
  }

  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
