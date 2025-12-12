document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var list = document.getElementById('nav-list');
  toggle && toggle.addEventListener('click', function(){
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    list.classList.toggle('show');
  });

  var year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
