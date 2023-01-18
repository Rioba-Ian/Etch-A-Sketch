const container = document.getElementById("container")

const GRID_SIZES = 16

container.style.height = `${GRID_SIZES}rem`
container.style.width = `${GRID_SIZES}rem`


for (let i = 0; i <= (GRID_SIZES ** 2 + 256 + 64 + 32 + 16); i++) {
  const div = document.createElement("div")

  div.style.width = "8px"
  div.style.height = "8px"

  div.classList.add("grid")
  container.appendChild(div)
}