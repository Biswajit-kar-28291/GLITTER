document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");
    const wrapper = document.getElementById("navbar-wrapper");
    const stickyOffset = wrapper.offsetTop + wrapper.offsetHeight;
  
    const links = document.querySelectorAll(".nav-link");
    const underline = document.querySelector(".underline");
  
    function moveUnderline(target) {
      const rect = target.getBoundingClientRect();
      const container = target.closest(".nav-links").getBoundingClientRect();
      underline.style.width = `${rect.width}px`;
      underline.style.left = `${rect.left - container.left}px`;
    }
  
    links.forEach(link => {
      link.addEventListener("mouseenter", () => moveUnderline(link));
      link.addEventListener("click", (e) => {
        e.preventDefault();
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        moveUnderline(link);
      });
    });
  
    const active = document.querySelector(".nav-link.active");
    if (active) moveUnderline(active);
  
    window.addEventListener("scroll", function () {
      if (window.scrollY >= stickyOffset) {
        navbar.classList.add("sticky", "bg-white", "shadow-sm");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  });
  
  const section = document.getElementById('textSection');
      const button = document.getElementById('consultBtn');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('animate');
            button.classList.add('animate');
          }
        });
      }, { threshold: 0.5 }); 
  
      observer.observe(section);
  
      document.getElementById("consultBtn").addEventListener("click", function() {
    window.location.href = "event_book.html"; 
  });
      document.getElementById("consultBtn1").addEventListener("click", function() {
    window.location.href = "event_book.html"; 
  });
      document.getElementById("home").addEventListener("click", function() {
    window.location.href = "#mainSlider"; 
  });
      document.getElementById("book_an_event").addEventListener("click", function() {
    window.location.href = "#connect"; 
  });
      document.getElementById("about").addEventListener("click", function() {
    window.location.href = "#aboutus";
  });
      document.getElementById("con").addEventListener("click", function() {
    window.location.href = "#contect";
  });
  
  function showLoader() {
      document.getElementById("pageLoader").classList.add("active");
    }
  
   
    function hideLoader() {
      document.getElementById("pageLoader").classList.remove("active");
    }
  
 
    window.addEventListener("load", () => {
      showLoader();
      setTimeout(hideLoader, 2000);
    });
  
    const observe = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, {
        threshold: 0.3
      });
  
      document.querySelectorAll('.left, .right').forEach(el => {
        observe.observe(el);
      });
  
      const observ = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const se = entry.target;
        se.classList.add('visible');
        startTyping();
        observ.unobserve(se); 
      }
    });
  }, { threshold: 0.3 });
  
  


  function revealOnScroll() {
    const section = document.getElementById("welcome-section");
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("visible");
    }
  }

  // Trigger on scroll
  window.addEventListener("scroll", revealOnScroll);
  // Also run it once in case the section is already visible
  revealOnScroll();

  window.addEventListener("scroll", function () {
    const section = document.getElementById("welcome-section");
    const sectionTop = section.getBoundingClientRect().top;
  
    if (sectionTop < window.innerHeight) {
      section.classList.add("active");
    }
  });



  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(function(link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 991 && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          });
          bsCollapse.hide(); 
        }
      });
    });
  });
