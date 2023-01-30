// get the container and set it to fixed size.
const container = document.getElementById("container")

container.style.height = `560px`
container.style.width = `560px`


// the grids and the sizes.
const GRID_COLLECTION = {
  grid16: { size: 16, square: 32.766666 },
  grid32: { size: 32, square: 15.266 },
  grid64: { size: 64, square: 6.5133 }
}
// handle the color chosen by user.
let colorshade = '#000';





// handle state for container when mouse is down
let isMouseDown;
container.addEventListener('mousedown', () => isMouseDown = true)
container.addEventListener('mouseup', () => isMouseDown = false)

function getColorInput() {
  const colorPicker = document.querySelector("#color-picker")

  colorPicker.addEventListener('change', (e) => colorshade = e.target.value)

  console.log(colorshade);
}

getColorInput()

function clearColorInput() {
  const eraser = document.querySelector("#eraser")

  const eraserImg = document.querySelector(".eraser-img")

  eraserImg.addEventListener("click", () => {
    eraser.toggleAttribute("checked")
    eraserImg.setAttribute("outline", "4px solid coral")
  })

}

clearColorInput()

// function to handle the changing of colors of divs
function changeDivs() {
  const grid = document.body.querySelectorAll(".grid")
  function changeColor(event) {
    if (event.buttons == 0) {
      window.removeEventListener("mousemove", changeColor)
    } else {
      event.target.style.backgroundColor = colorshade

      event.preventDefault()
    }
  }


  grid.forEach((item) => {
    if (!isMouseDown) {
      item.addEventListener("mouseover", changeColor)
    }
  })

}



function drawGrids() {
  // get the aside btns
  const asideBtns = document.querySelectorAll("aside>button")


  // event handlers
  asideBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {

      const gridNodes = () => {
        for (let i = 0; i < getGridSize(e)[0] * getGridSize(e)[0]; i++) {
          const div = document.createElement("div")
          div.style.width = `${getGridSize(e)[1]}px`
          div.style.height = `${getGridSize(e)[1]}px`
          div.classList.add("grid")
          container.appendChild(div)

          // handle changeDivs event
          if (!isMouseDown) {
            div.addEventListener("mouseover", changeDivs)
          }


        }
      }

      if (container.childNodes.length == 0) {
        gridNodes()
      } else if (container.childElementCount > 0) {
        const existingGrids = document.querySelectorAll(".grid")
        existingGrids.forEach((item) => item.remove())
        gridNodes()
      }

    })
  })

}




drawGrids()





// helper function.

function getGridSize(e) {
  let squareSize,
    sizes;
  if (+e.target.value == GRID_COLLECTION.grid16.size) {
    sizes = GRID_COLLECTION.grid16.size
    squareSize = GRID_COLLECTION.grid16.square
  } else if (+e.target.value == GRID_COLLECTION.grid32.size) {
    sizes = GRID_COLLECTION.grid32.size
    squareSize = GRID_COLLECTION.grid32.square
  } else if (+e.target.value == GRID_COLLECTION.grid64.size) {
    sizes = GRID_COLLECTION.grid64.size
    squareSize = GRID_COLLECTION.grid64.square
  }

  return [sizes, squareSize]
}

