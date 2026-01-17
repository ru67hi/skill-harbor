function openPayment() {
    document.getElementById("paymentModal").style.display = "flex";
  }
  
  function closePayment() {
    document.getElementById("paymentModal").style.display = "none";
  }
  
  function paymentSuccess() {
    alert("Payment successful!");
    closePayment();
  
    // Show video section
    document.getElementById("videoSection").style.display = "block";
  
    // Scroll to video
    document.getElementById("videoSection").scrollIntoView({
      behavior: "smooth"
    });
  }
  
  const slides = document.querySelectorAll(".slide");
  let current = 0;
  
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4000);
  

  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-slider .slide");
    let current = 0;
  
    if (slides.length === 0) {
      console.error("No slides found");
      return;
    }
  
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 4000);
  });
  
