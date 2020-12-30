const button = document.querySelector('#btn-header')

const mouseHoverAnimation = () => {
  anime({
    targets: button,
    width: '100%',
    duration: 1000,
  })
}

const mouseOutAnimation = () => {
  anime({
    targets: button,
    width: '50%',
    delay: 100,
  })
}

anime({
  targets: '.content-left',
  opacity: 1,
  easing: 'easeInOutQuad',
  duration: 2000,
  delay: 800,
})

button.addEventListener('mouseout', mouseOutAnimation)
button.addEventListener('mouseover', mouseHoverAnimation)
