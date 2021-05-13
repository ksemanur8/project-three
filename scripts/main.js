/* Injecting name input into spans */
let nameButton = document.getElementById("name-submit");

function injectName() {
  let name = document.getElementById("name-input").value;
  let spans = document.querySelectorAll("span.name-blank");
  
  spans.forEach((span) => {
    span.innerText = name;
  });
}

nameButton.addEventListener("click", injectName);

/* Intersection observer for changing bubble nav color! */
let options = {
    root: null,
    threshold: 0.5,
}

function intersectionHandler(entries, observer) {
    let bubbles = document.querySelectorAll('div.bubble');
    let labels = document.querySelectorAll('div.label');

    entries.forEach(entry => {
        if(entry.isIntersecting) {
           if(entry.target.classList.contains('light')) {
                for (let i = 0; i < bubbles.length; i++) {
                    bubbles[i].classList.remove('light-bubble');
                    bubbles[i].classList.add('dark-bubble');
                }
                for (let i = 0; i < labels.length; i++) {
                    labels[i].classList.remove('light-label');
                    labels[i].classList.add('dark-label');
                }
           } else if (entry.target.classList.contains('dark')) {
                for (let i = 0; i < bubbles.length; i++) {
                    bubbles[i].classList.remove('dark-bubble');
                    bubbles[i].classList.add('light-bubble');
                }
                for (let i = 0; i < labels.length; i++) {
                    labels[i].classList.remove('dark-label');
                    labels[i].classList.add('light-label');
                }
           }
        }
    });
}

let observer = new IntersectionObserver(intersectionHandler, options);
/*
    We need to get reference to all of our slides
*/
let slides = document.querySelectorAll('div.slide');
/* 
    Loop through all slides and tell the observer to
    observe each one
*/
slides.forEach((slide) => {
    observer.observe(slide);
});
