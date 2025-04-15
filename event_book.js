document.addEventListener("DOMContentLoaded", function () {
  const bookedDates = ["2025-04-17", "2025-04-20", "2025-04-25","2025-05-25","2025-05-20","2025-05-15","2025-05-5"]; 

  flatpickr("#calendar", {
    dateFormat: "Y-m-d",
    minDate: "today",
    disable: bookedDates,
    onChange: function (selectedDates, dateStr) {
      const slotContainer = document.getElementById("slots");
      const slotList = document.getElementById("timeSlots");

      
      slotList.innerHTML = "";


      if (bookedDates.includes(dateStr)) {
        slotContainer.classList.add("d-none");
        return;
      }

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

  const elements = document.querySelectorAll('.delay');
  
// console.log(elements)

  elements.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add('right');
    }, 2000); 
  });

  const elements1 = document.querySelectorAll('.delay1');
  
      elements1.forEach((element, i) => {
        setTimeout(() => {
          element.classList.add('left');
        }, 2000); 
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
        hours = hours ? hours : 12; 
    
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        document.getElementById("currentTime").innerHTML = formattedTime;
      }
    
      updateTime(); 
      setInterval(updateTime, 60000); 

