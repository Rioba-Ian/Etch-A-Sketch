const container = document.getElementById("container")

const GRID_COLLECTION = {
  grid16: { size: 16, square: 32.766666 },
  grid32: { size: 32, square: 15.266 },
  grid64: { size: 64, square: 6.5133 }
}

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

// const GRID_SIZES = 32

// container.style.height = `${GRID_SIZES}rem`
// container.style.width = `${GRID_SIZES}rem`


// for (let i = 0; i <= (GRID_SIZES * 16 + 32 * 8 + 15); i++) {
//   const div = document.createElement("div")

//   div.style.width = "16px"
//   div.style.height = "16px"

//   div.classList.add("grid")
//   container.appendChild(div)
// }

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