
  // Active nav tabs
  document.querySelectorAll('.tabs-ville .nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.tabs-ville .nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  document.querySelectorAll('.tabs-filter .nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.tabs-filter .nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  document.querySelectorAll('.gestion-tabs .nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.gestion-tabs .nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Calendar day click
  document.querySelectorAll('.cal-day').forEach(day => {
    day.addEventListener('click', function() {
      document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('today'));
      this.classList.add('today');
    });
  });

  // Newsletter
  document.querySelector('.newsletter-box button')?.addEventListener('click', function() {
    const input = document.querySelector('.newsletter-box input');
    if (input.value && input.value.includes('@')) {
      input.value = '';
      this.textContent = '✓ Inscrit !';
      setTimeout(() => { this.innerHTML = 'Je m\'inscris <i class="fas fa-arrow-right"></i>'; }, 2000);
    } else {
      input.style.borderColor = 'red';
      setTimeout(() => input.style.borderColor = '', 2000);
    }
  });

  // Changer btn
  document.querySelector('.btn-changer')?.addEventListener('click', function() {
    const city = document.querySelectorAll('.changer-select')[0].value;
    if (city !== 'Je choisis une ville') {
      alert('Redirection vers : ' + city);
    }
  });
