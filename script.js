// Minimal interactions: mobile nav, form handling, small helpers

document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', ()=> nav.classList.toggle('open'));

  // current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // simple form handling
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    // basic validation
    if(!data.get('name') || !data.get('email') || !data.get('message')){
      status.textContent = 'Please complete all fields.';return;
    }
    status.textContent = 'Sending…';
    // simulate network
    setTimeout(()=>{
      status.textContent = 'Thanks! We\'ll be in touch soon.';
      form.reset();
    },900);
  });
});