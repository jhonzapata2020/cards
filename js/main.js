
       document.addEventListener('DOMContentLoaded', function() {
        M.AutoInit();
       });
        
      document.addEventListener('DOMContentLoaded', function() {
        let sidenav = document.querySelectorAll('.sidenav');
        let instancia_sidenav = M.Sidenav.init(sidenav,{});    
        let dropdowns = document.querySelectorAll('.dropdown-trigger');
        let instancia_dropwdown = M.Dropdown.init(dropdowns, {
        hover:false});
      });
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems,{
            duration:400,
            indicators:true
        });
      });
      document.addEventListener('DOMContentLoaded', function() {
        let sidenav = document.querySelectorAll('.sidenav');
        let instancia_sidenav = M.Sidenav.init(sidenav,{});    
        let dropdowns = document.querySelectorAll('.dropdown-trigger');
        let instancia_dropwdown = M.Dropdown.init(dropdowns, {
        hover:false});
        });
    