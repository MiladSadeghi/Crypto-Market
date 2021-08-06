const userInterFace = new UI()
const cryptoAPI = new CryptoAPI()

document.addEventListener('DOMContentLoaded', () => {

  const resultAPI = cryptoAPI.getDataFromAPI()
  .then((data) => {
    userInterFace.showResult(data)

    const addToFavorit = document.querySelector('tbody')

    
    addToFavorit.addEventListener('click', (e) => {
      if(e.target.classList.contains('fa')) {
        const image = e.target.parentElement.parentElement.children[1].children[0].src
        const name = e.target.parentElement.parentElement.children[1].children[1].textContent
        const price = e.target.parentElement.parentElement.children[2].textContent
        userInterFace.favoritList(image, name, price)
      }
    })
  })
})
