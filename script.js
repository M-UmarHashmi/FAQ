// In this line I have selected all the answer elements
let answer = document.querySelectorAll(".answer");

// This is handleClick function to handle what happens on Clicking the element
function handleClick(element) {
    // Here I have selected the answer element and image of the element which is clicked
  let answerShow = document.querySelector(`.${element.id}`);
  let imageSelf = document.querySelector(`#${element.id} img`)


//   This for loop ensures that all other question elements are turned to normal font size, their answer element is hidden and their image is in correct position
  for (let i = 0; i < answer.length; i++) {
    if (
      answer[i].classList.contains("hide") == false &&
      answer[i] != answerShow
    ) {
      answer[i].classList.add("hide");
      let image = document.querySelector(`#${answer[i].classList[1]} img`);
      let removeBold = document.querySelector(`#${answer[i].classList[1]}`);
      removeBold.style.fontWeight = "normal";
      image.style.transform = 'rotate(0deg)'
    }
  }
// Now when we have ensured that all elements other than element selected are in correct position. We can face two situations:
// One is the element is being clicked first time (mean that element is not bold and its answer is hidden)
// Second, the element is being clicked second time (mean that element is bold and its answer is visible)

// This block check if the element is hidden then we have removed the hide class and made its text bold and changed the orientation of arrow by changing its rotation
  if (answerShow.classList.contains("hide")) {
    answerShow.classList.remove("hide");
    element.style.fontWeight = "bold";
    imageSelf.style.transform = 'rotate(180deg)'
// this block will run if the element is visible so it will hide its answer, change font weight to normal and change orientation of arrow to down.
  } else {
    answerShow.classList.add("hide");
    element.style.fontWeight = 'normal';
    imageSelf.style.transform = 'rotate(0deg)'

  }
}
