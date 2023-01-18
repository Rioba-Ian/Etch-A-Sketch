const container = document.getElementById("container")

const GRID_SIZES = 32

container.style.height = `${GRID_SIZES}rem`
container.style.width = `${GRID_SIZES}rem`


for (let i = 0; i <= (GRID_SIZES * 16 + 32 * 8 + 15); i++) {
  const div = document.createElement("div")

  div.style.width = "16px"
  div.style.height = "16px"

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

changeDivs()