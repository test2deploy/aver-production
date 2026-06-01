// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});



// LANGUAGE SYSTEM

const trBtn = document.getElementById("trBtn");
const enBtn = document.getElementById("enBtn");

function setLanguage(lang) {

  document.querySelectorAll(".translate").forEach((el) => {

    el.innerHTML = el.getAttribute(`data-${lang}`);

  });



  document.querySelectorAll(".nav a").forEach((el) => {

    el.innerHTML = el.getAttribute(`data-${lang}`);

  });



  localStorage.setItem("language", lang);

}



trBtn.addEventListener("click", () => {

  setLanguage("tr");

});



enBtn.addEventListener("click", () => {

  setLanguage("en");

});



// LOAD SAVED LANGUAGE

const savedLang = localStorage.getItem("language") || "en";

setLanguage(savedLang);