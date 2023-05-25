// Instantiating the global app object
var app = {};

// accordian
const accordionItems = document.querySelectorAll(".accordion-item");

const toggleAccordion = (index) => {
  const currentAccordion = accordionItems[index];
  currentAccordion.classList.toggle("is-active");

  const accordionContent = currentAccordion.querySelector(".accordion-content");
  const accordionTrigger = currentAccordion.querySelector(".accordion-trigger");

  if (currentAccordion.classList.contains("is-active")) {
    accordionContent.style.height = `${accordionContent.scrollHeight}px`;
    accordionTrigger.setAttribute("aria-expanded", "true");
  } else {
    accordionContent.style.height = 0;
    accordionTrigger.setAttribute("aria-expanded", "false");
  }
};

window.addEventListener("load", () => {
  accordionItems.forEach((accordion, index) => {
    const accordionTrigger = accordion.querySelector(".accordion-trigger");
    accordionTrigger.addEventListener("click", () => toggleAccordion(index));
  });
});
