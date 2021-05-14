/* Injecting name input into spans */
let nameButton = document.getElementById('name-submit');

function injectName() {
  let name = document.getElementById('name-input').value;
  let spans = document.querySelectorAll('span.name-blank');
  
  spans.forEach((span) => {
    span.innerText = name;
  });
}

nameButton.addEventListener('click', injectName);

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

/* Create observer */
let observer = new IntersectionObserver(intersectionHandler, options);

/* Get reference to all of our slides */
let slides = document.querySelectorAll('div.slide');

/* Loop through all slides and tell the observer to observe each one */
slides.forEach((slide) => {
    observer.observe(slide);
});


/* Game board functionality
* Collecting selected boxes in an array, adding event listeners to
* score and clear buttons, taking action on board if those buttons
* are pressed.
*/
let boxes = document.querySelectorAll('.box');
let scoreButton = document.getElementById('score');
let resetButton = document.getElementById('reset');
let selected = [];

function boxSelected(event) {
    if(event.target.classList.contains('box-highlight')) {
        event.target.classList.remove('box-highlight');
        selected.pop(event.target);
    } else {
        event.target.classList.add('box-highlight');
        selected.push(event.target);
    }
}

function reportScore() {
    let count = 0;
    selected.forEach((box) => {
        if(box.classList.contains('not-free')) {
            box.classList.add('bad-brand');
            count++;
        } else {
            box.classList.add('good-brand');
        }
    })
    if(count > 0) {
        document.getElementById('result-text').innerHTML = `Unfortunately ${count} of the brands you shop from are not cruelty-free :(`;
    } else {
        document.getElementById('result-text').innerHTML = `None of your selected brands test on animals. Thank you! :)`;
    }
}

function resetBoard() {
    selected.forEach((box) => {
        box.classList.remove('box-highlight');
        box.classList.remove('bad-brand');
        box.classList.remove('good-brand');
    })
    document.getElementById('result-text').innerHTML = '';
    selected = [];
}

boxes.forEach((box) => {
    box.addEventListener('click', boxSelected);
});
scoreButton.addEventListener('click', reportScore);
resetButton.addEventListener('click', resetBoard);

/*  Accordion 
*   Adding click event listener to each panel of accordion
*/
let accordion = document.getElementsByClassName("panel");
          for (i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener("click", function () {
              this.classList.toggle("active");
            });
          }

/* Source modal */
let viewButton = document.getElementById('view-sources');
let sourceContainer = document.getElementById('source-container');
let closeButton = document.getElementById('close-sources');

function modalView() {
    if(sourceContainer.classList.contains('show')) {
        sourceContainer.classList.remove('show');
    } else {
        sourceContainer.classList.add('show');
    }
}

viewButton.addEventListener('click', modalView);
closeButton.addEventListener('click', modalView);
