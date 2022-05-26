const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const container = document.querySelector(".container");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("yellow")) {
      body.style.backgroundColor = "yellow";
    } else if (button.classList.contains("white")) {
      body.style.backgroundColor = "white";
    } else if (button.classList.contains("blue")) {
      body.style.backgroundColor = "blue";
    } else if (button.classList.contains("grey")) {
      body.style.backgroundColor = "grey";
    }
    changeColor();
  });
});

function changeColor() {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);

  container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Sorunun bir başka çözümü
/*
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})
*/
