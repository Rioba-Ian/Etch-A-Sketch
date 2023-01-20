const container = document.getElementById("container")

const GRID_SIZES = 32

container.style.height = `560px`
container.style.width = `560px`


for (let i = 0; i < 64 * 64; i++) {
  const div = document.createElement("div")

  div.style.width = "6.5133px"
  div.style.height = "6.5133px"

  div.classList.add("grid")
  container.appendChild(div)
}

function changeDivs() {
  const grid = document.body.querySelectorAll(".grid")

  function changeColor(event) {
    event.target.style.backgroundColor = "black"
  }

  grid.forEach((item) => {
    item.addEventListener('mouseover', (e) => changeColor(e))
  })
}

// changeDivs()