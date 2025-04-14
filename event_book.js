flatpickr("#calendar", {
    minDate: "today",
    onChange: function(selectedDates, dateStr) {
      const slotContainer = document.getElementById("slots");
      const slotList = document.getElementById("timeSlots");
      slotList.innerHTML = "";
      const times = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:30 PM"];

      times.forEach(time => {
        const slot = document.createElement("div");
        slot.className = "px-3 py-2 border rounded time-slot";
        slot.textContent = time;
        slot.onclick = () => {
          document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active-slot'));
          slot.classList.add('active-slot');
          alert(`You selected ${dateStr} at ${time}`);
        };
        slotList.appendChild(slot);
      });

      slotContainer.classList.remove("d-none");
    }
  });

  // Form validation and submission
  const bookingForm = document.getElementById("bookingForm");
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fields = ["calendar", "name", "email", "contact", "details"];
    let isValid = true;

    fields.forEach(id => {
      const input = document.getElementById(id);
      const value = input.value.trim();
      let valid = true;

      if (id === "email") {
        valid = /\S+@\S+\.\S+/.test(value);
      } else {
        valid = !!value;
      }
      if (id === "contact") {
        valid = /^\d{10}$/.test(value);
      } else {
        document.getElementById("ph").innerHTML = "Enter 10 digit ph number.";
        valid = !!value;
      }
      if (id === "details") {
        valid = /^\s*\S+\s+\S+/.test(value);
      } else if (!/^\s*\S+\s+\S+/.test(value)){
        document.getElementById("r").innerHTML = "Please enter at least two words.";

      }else {
        valid = !!value;
      }

      if (!valid) {
        input.classList.add("is-invalid");
        isValid = false;
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (isValid) {
      document.getElementById("confirmation").classList.remove("d-none");
      bookingForm.reset();
    }
  });

//   <!-- Optional Bootstrap Spinner (if not included already) -->
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

//   <!-- Example JS to control loader -->
//   <script>
  // Show the loader
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

  const elements = document.querySelectorAll('.delay');
  
// console.log(elements)
  // Loop through all elements and apply the class after 1 minute (60000ms)
  elements.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add('right');
    }, 2000); // Apply to each element with an increasing delay
  });

  const elements1 = document.querySelectorAll('.delay1');
  
  // console.log(elements)
      // Loop through all elements and apply the class after 1 minute (60000ms)
      elements1.forEach((element, i) => {
        setTimeout(() => {
          element.classList.add('left');
        }, 2000); // Apply to each element with an increasing delay
      });


      function back(){
        window.history.back()
      }
      function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        hours = hours % 12;
        hours = hours ? hours : 12; // convert 0 to 12
    
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        document.getElementById("currentTime").innerHTML = formattedTime;
      }
    
      updateTime(); // Show time immediately
      setInterval(updateTime, 60000); // Update every 1 minute