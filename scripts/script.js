const landButton = document.querySelector('#toggleButton');
const dropdownContent = document.querySelector('#dropdownContent');
const arrowIcon = document.querySelector('.arrowIcon');
const doorgaanKnop = document.querySelector('#doorgaanKnop');
const verdwijnHeader = document.querySelector('#verdwijnHeader');
const detailsProductoverzicht = document.querySelector('#detailsproductoverzicht');
const detailsLeveringenretouren = document.querySelector('#detailsleveringenretouren');


// ChatGPT heeft mij geholpen met het schrijven van deze javascript code
// https://chatgpt.com/share/66f921a3-29e8-8004-a5a0-6ed1532b01dc
// Prompt: Hoe zorg ik er voor dat wanneer ik op de eerste button in de header klik een p tag met daarin Meer opties.... tevoorschijn komt als een soort box onder de knop.
landButton.onclick = function () {
    if (dropdownContent.className === 'visible') {
        dropdownContent.className = ''; 
        arrowIcon.className = '';
    } else {
        dropdownContent.className = 'visible'; 
        arrowIcon.className = 'rotated';
    }
};

doorgaanKnop.onclick = function () {
    verdwijnHeader.style.display = 'none';
};

// ChatGPT heeft mij geholpen met het schrijven van deze javascript code
// https://chatgpt.com/share/66f99e85-a728-8004-856a-b1b61eac2103
// Prompt: Hoe maak ik een hamburger menu die opent in een popup wanneer je op de hamburgericon klikt? 
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.getElementById("hamburgerButton");
    const popupMenu = document.getElementById("popupMenu");
    const closePopup = document.getElementById("closePopup");

    // Open de popup als de hamburgerknop wordt geklikt
    hamburgerButton.addEventListener("click", function() {
        popupMenu.classList.remove("hidden");
        popupMenu.style.display = "block"; // Zet display naar block
    });

    // Sluit de popup als de sluitknop wordt geklikt
    closePopup.addEventListener("click", function() {
        popupMenu.classList.add("hidden");
        popupMenu.style.display = "none"; // Zet display weer naar none
    });

    // Sluit de popup als buiten de popup wordt geklikt
    window.addEventListener("click", function(event) {
        if (event.target === popupMenu) {
            popupMenu.classList.add("hidden");
            popupMenu.style.display = "none"; // Zet display weer naar none
        }
    });
});

// ChatGPT heeft mij geholpen met het schrijven van deze javascript code
// https://chatgpt.com/share/66fb1adc-3ee4-8004-a090-85899c6dbf02
// Prompt: Hoe zorg ik er voor dat wanneer deze details tag geopend worden de source van de images in de summary veranderen naar images/detailsmin.svg
 
// Voeg een event toe dat uitgevoerd wordt wanneer het details-element geopend of gesloten wordt
 detailsProductoverzicht.addEventListener('toggle', function() {
    const img = detailsProductoverzicht.querySelector('summary img'); // Pak de afbeelding in het summary-element
    
    if (detailsProductoverzicht.open) {
      img.src = 'images/detailsmin.svg'; // Verander naar min-icoon
    } else {
      img.src = 'images/detailsplus.svg'; // Verander naar plus-icoon
    }
  });
  
  // Hetzelfde voor het tweede details-element
  
  detailsLeveringenretouren.addEventListener('toggle', function() {
    const img = detailsLeveringenretouren.querySelector('summary img');
    
    if (detailsLeveringenretouren.open) {
      img.src = 'images/detailsmin.svg';
    } else {
      img.src = 'images/detailsplus.svg';
    }
  });
