class UI {
  showResult(result) {
    const row = document.querySelector('tbody')
    let i = 1
    result.forEach(element => {
      row.innerHTML += `
      <tr>
        <td class="count">${i}</td>
        <td class="name">
          <img src="${element.logo_url}" width="35px">
          <h4>${element.name}</h4>
          <h5>${element.symbol}</h5>
        </td>
        <td class="price">${element.price}</td>
        <td class="change">${element['1d'].price_change_pct}</td>
        <td class="volume">${element['1d'].volume}</td>
        <td class="cap">${element.market_cap}</td>
        <td class="supply">${element.max_supply}</td>
        <td class="favoritIcon"><i class="fa fa-plus"></i></td>
      </tr>
    `
    i +=1 
    });

    
  }
}