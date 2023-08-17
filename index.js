document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");
    const toggleAllBtn = document.querySelector(".toggle-all-btn, .accordion-heading");
  
    toggleAllBtn.addEventListener("click", function () {
      accordionItems.forEach(function (item) {
        const content = item.querySelector(".accordion-content");
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  
    accordionItems.forEach(function (item) {
      const heading = item.querySelector(".accordion-heading");
      const content = item.querySelector(".accordion-content");
  
      heading.addEventListener("click", function () {
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });

  