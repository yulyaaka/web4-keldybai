document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".rooms-card");
  
  cards.forEach(function (card) {
    const button = card.querySelector(".rooms-card__button");
    const defaultText = button.dataset.textDefault;
    const selectedText = button.dataset.textSelected;
    
    button.textContent = defaultText;
    
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      
      if (card.classList.contains("rooms-card--available")) {
        card.dataset.pending = "true";
        button.disabled = true;
        button.style.cursor = "default";
      }
    });
    
    card.addEventListener("mouseleave", function () {
      if (card.dataset.pending === "true") {
        card.classList.remove("rooms-card--available");
        card.classList.add("rooms-card--selected");
        delete card.dataset.pending;
        
        if (button.textContent === defaultText && defaultText !== "Подробнее") {
          button.textContent = selectedText;
        }
        
        button.disabled = false;
      }
    });
    
    card.addEventListener("click", function (event) {
      if (event.target === button || button.contains(event.target)) return;
      
      if (card.classList.contains("rooms-card--selected")) {
        card.classList.remove("rooms-card--selected");
        card.classList.add("rooms-card--available");

        if (defaultText !== "Подробнее") {
          button.textContent = defaultText;
        }
      }
    });
  });
});