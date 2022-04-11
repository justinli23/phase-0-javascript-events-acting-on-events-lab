const dodger = document.getElementById("dodger");
const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

const moveDodgerRight = () => {
    const rightNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(rightNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key=="ArrowLeft") {
        moveDodgerLeft()
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key=="ArrowRight") {
        moveDodgerRight()
    }
})

