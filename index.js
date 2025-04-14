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
      }, { threshold: 0.5 }); // 50% visible
  
      observer.observe(section);
  
      document.getElementById("consultBtn").addEventListener("click", function() {
    window.location.href = "event_book.html"; // Replace with your target page URL
  });
      document.getElementById("consultBtn1").addEventListener("click", function() {
    window.location.href = "event_book.html"; // Replace with your target page URL
  });
      document.getElementById("home").addEventListener("click", function() {
    window.location.href = "#mainSlider"; // Replace with your target page URL
  });
      document.getElementById("book_an_event").addEventListener("click", function() {
    window.location.href = "#connect"; // Replace with your target page URL
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
  
    // Hide the loader
    function hideLoader() {
      document.getElementById("pageLoader").classList.remove("active");
    }
  
    // Example: show loader for 2 seconds on page load
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
        observ.unobserve(se); // Corrected observer name here
      }
    });
  }, { threshold: 0.3 });
  
  const se = document.getElementById('welcome-section');
  observ.observe(se); // Corrected to use 'observ'
  
  const text = `Welcome to REETIREEVAJ, your premier wedding planning destination in Mumbai! At REETIREEVAJ, we are passionate about creating unforgettable moments that celebrate love and commitment. With our meticulous attention to detail and creative flair, we specialize in crafting bespoke weddings that reflect your unique style and vision.
  
  From the vibrant streets of Mumbai to the serene beaches of Goa, we pride ourselves on transforming every wedding into a magical experience. Whether you dream of an opulent affair in a luxurious hotel ballroom or an intimate celebration under the stars, our dedicated team of planners will bring your vision to life with seamless execution and unparalleled elegance.`;
  
  const container = document.getElementById('typewriter');
  let index = 0;
  
  function startTyping() {
    function typeWriter() {
      if (index < text.length) {
        container.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 8); // Fast typing speed
      }
    }
    typeWriter();
  }
   