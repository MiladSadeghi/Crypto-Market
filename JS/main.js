const userInterFace = new UI()
const cryptoAPI = new CryptoAPI()

document.addEventListener('DOMContentLoaded', () => {

  const resultAPI = cryptoAPI.getDataFromAPI()
  .then((data) => {
    userInterFace.showResult(data)
  })
})