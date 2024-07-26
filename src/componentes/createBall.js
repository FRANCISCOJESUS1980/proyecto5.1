document.addEventListener('DOMContentLoaded', () => {
  const ballsContainer = document.querySelector('.balls-container')

  function createBall() {
    const ball = document.createElement('div')
    ball.classList.add('ball')
    ball.style.width = `${Math.random() * 60 + 40}px`
    ball.style.height = ball.style.width
    ball.style.left = `${Math.random() * 100}%`
    ball.style.top = `${Math.random() * 100}%`
    ball.style.animationDuration = `${Math.random() * 2 + 3}s`

    ballsContainer.appendChild(ball)
  }

  for (let i = 0; i < 20; i++) {
    createBall()
  }
})
