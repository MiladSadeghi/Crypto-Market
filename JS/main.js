const userInterFace = new UI()
const cryptoAPI = new CryptoAPI()

let pageNumber;

document.addEventListener('DOMContentLoaded', () => {
  
  const page = document.querySelector('.page')
  page.addEventListener('click', (e) => {
    pageNumber = userInterFace.pagenation(e.target)
    const resultAPI = cryptoAPI.getDataFromAPI(pageNumber)
  .then((data) => {
    userInterFace.showResult(data)
    })
  })

  const resultAPI = cryptoAPI.getDataFromAPI()
  .then((data) => {
    userInterFace.showResult(data)
  })
  
  const addToFavorit = document.querySelector('tbody')
  addToFavorit.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa')) {
      const image = e.target.parentElement.parentElement.children[1].children[0].src
      const name = e.target.parentElement.parentElement.children[1].children[1].textContent
      const price = e.target.parentElement.parentElement.children[2].textContent
      userInterFace.favoritList(image, name, price)
    }

    const remove = document.querySelector('.favorit-card')
    remove.addEventListener('click', (e) => {
      userInterFace.deleteFavorite(e)
    })
  })
})
