import './main.scss'

document.addEventListener('DOMContentLoaded', () => {
  const games = document.querySelectorAll('.game')

  const musicUrl =
    'https://www.bensound.com/bensound-music/bensound-relaxing.mp3'

  let audio = new Audio(musicUrl)
  audio.loop = true
  audio.volume = 0.5

  const isMusicPlaying = localStorage.getItem('isMusicPlaying') === 'true'

  if (isMusicPlaying) {
    audio.play().catch((error) => {
      console.error('Error al reproducir la música:', error)
    })
  }

  const startMusic = () => {
    audio.play().catch((error) => {
      console.error('Error al reproducir la música:', error)
    })
    document.removeEventListener('click', startMusic)
  }

  const playPauseBtn = document.getElementById('playPauseBtn')
  const volumeControl = document.getElementById('volumeControl')

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play()
      playPauseBtn.textContent = 'Pause'
    } else {
      audio.pause()
      playPauseBtn.textContent = 'Play'
    }
  })

  volumeControl.addEventListener('input', (event) => {
    audio.volume = event.target.value
  })

  games.forEach((game) => {
    game.addEventListener('click', (event) => {
      event.preventDefault()
      const url = game.getAttribute('data-url')

      localStorage.setItem('isMusicPlaying', !audio.paused)

      window.location.href = url
    })
  })
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('isMusicPlaying', !audio.paused)
  })
})
