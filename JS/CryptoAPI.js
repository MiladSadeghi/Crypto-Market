class CryptoAPI {
  constructor() {
    this.API = 'ee2f9d281325238627dffb1e5a970ab8d21d71da'
  }

  async getDataFromAPI(numb) {
    let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.API}&status=active&per-page=100&page=${numb}`

    const response = await fetch(url)
    const result = await response.json()
    
    return result
  }
}