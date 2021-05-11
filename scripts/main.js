let nameButton = document.getElementById("name-submit");

function injectName() {
  let name = document.getElementById("name-input").value;
  
  let spans = document.querySelectorAll("span.name-blank");
  
  spans.forEach((span) => {
    span.innerText = name;
  });
}

nameButton.addEventListener("click", injectName);

function bubbleColor(destination) {
    let bubbleTo = destination;
    if(bubbleTo == "ralph-hello" || bubbleTo == "introduction"|| bubbleTo == "game" || bubbleTo == "how-to-help") {
        let bubbles = document.querySelectorAll('div.bubble');
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].classList.remove('light-bubble');
            bubbles[i].classList.add('dark-bubble');
        }
        let labels = document.querySelectorAll('div.label');
        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.remove('light-label');
            labels[i].classList.add('dark-label');
        }
    } else if(bubbleTo == "welcome" || bubbleTo == "sources") {
        let bubbles = document.querySelectorAll('div.bubble');
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].classList.remove('dark-bubble');
            bubbles[i].classList.add('light-bubble');
        }
        let labels = document.querySelectorAll('div.label');
        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.remove('dark-label');
            labels[i].classList.add('light-label');
        }
    }
}