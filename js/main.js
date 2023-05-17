
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();

  let sidenav = document.querySelectorAll('.sidenav');
  let instancia_sidenav = M.Sidenav.init(sidenav, {});

  let dropdowns = document.querySelectorAll('.dropdown-trigger');
  let instancia_dropwdown = M.Dropdown.init(dropdowns, {
    hover: false
  });

  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);

  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    duration: 400,
    indicators: true
  });

  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);

  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    indicators: false,
    interval: 4000,
    height: 500
  });
});

        
      
     