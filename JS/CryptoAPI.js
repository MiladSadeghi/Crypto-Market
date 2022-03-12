class CryptoAPI {
  constructor() {
    this.API = "ee2f9d281325238627dffb1e5a970ab8d21d71da";
  }

  async getDataFromAPI(numb) {
    let url = `https://course-search-proxy.herokuapp.com`;
    let body1 = {
      urlToGet: "https://api.nomics.com/v1/currencies/ticker?key=ee2f9d281325238627dffb1e5a970ab8d21d71da&status=active&per-page=100&page=1" ,
      Params: "none" 
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body1)
    });
    const result = await response.json();
    console.log(result);
    return result;
  }
}
