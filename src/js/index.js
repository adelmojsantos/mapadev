/* Fazer a mudança de personagem */

const characters = document.querySelectorAll('.character')

console.log(characters)

characters.forEach((character) => {
  character.addEventListener('mouseenter', () => {
    const selectedCharacter = document.querySelector('.selected')
    selectedCharacter.classList.remove('selected')
    character.classList.add('selected')

    const selectedId = character.attributes.id.value
  })
})

