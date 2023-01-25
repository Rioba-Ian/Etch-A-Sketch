const container = document.getElementById("container")

const GRID_COLLECTION = {
  grid16: { size: 16, square: 2.06 },
  grid32: { size: 32, square: 0.968 },
  grid64: { size: 64, square: 0.422 }
}

const GRID_SIZES = 32

const asideBtns = document.querySelectorAll("aside>button")

asideBtns.forEach((btn) => {
  btn.addEventListener('click', getGridSize)
})

function getGridSize(e) {
  console.log(typeof e.target.value);
}

container.style.height = `35rem`
container.style.width = `35rem`


for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div")

  div.style.width = "2.06rem"
  div.style.height = "2.06rem"

  div.classList.add("grid")
  container.appendChild(div)
}

let isMouseDown;
document.addEventListener

function changeDivs() {
  const grid = document.body.querySelectorAll(".grid")

  const parentContainer = document.querySelector(".container")

  let isMouseDown;
  parentContainer.addEventListener('mousedown', () => isMouseDown = true)
  parentContainer.addEventListener('mouseup', () => isMouseDown = false)


  function changeColor(event) {
    if (event.buttons == 0) {
      window.removeEventListener("mousemove", changeColor)
    } else {
      event.target.style.backgroundColor = "black"
      event.preventDefault()
    }
  }


  grid.forEach((item) => {
    if (!isMouseDown) {
      item.addEventListener("mouseover", changeColor)
    }
  })
}

changeDivs()






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