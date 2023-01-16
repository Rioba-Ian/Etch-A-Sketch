const container = document.getElementById("container")



for (let i = 0; i < 40; i++) {
  const div = document.createElement("div")

  div.style.width = `${(container.clientWidth / container.clientWidth) * 0.9}rem`
  div.style.height = `${container.clientHeight / container.clientHeight}rem`

  div.classList.add("grid")
  container.appendChild(div)
}