/* Fazer a mudança de personagem */

const characters = document.querySelectorAll('.character')

console.log(characters)

characters.forEach((character) => {
  character.addEventListener('mouseenter', () => {
    const selectedId = character.attributes.id.value

    if (selectedId === 'ultron') return
    const selectedCharacter = document.querySelector('.selected')
    selectedCharacter.classList.remove('selected')
    character.classList.add('selected')


    const player1Img = document.getElementById('player-1-character')
    player1Img.src = `./src/images/${selectedId}.png`

    const selectedName = character.getAttribute('data-name')

    const player1Name = document.getElementById("player-1-name")
    player1Name.innerHTML = selectedName
  })
})

