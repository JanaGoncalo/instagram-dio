let time = 3000,
  currentImageIndex = 0,
  imagens = document.querySelectorAll('#slider img')
max = imagens.length

function nextImage() {
  imagens[currentImageIndex].classList.remove('selected')
  currentImageIndex++
  if (currentImageIndex >= max) currentImageIndex = 0

  imagens[currentImageIndex].classList.add('selected')
  console.log(currentImageIndex)
}

function start() {
  setInterval(() => {
    //troca de imagem
    nextImage()
  }, time)
}

window.addEventListener('load', start)
