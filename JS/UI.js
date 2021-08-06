class UI {
  showResult(result) {
    const row = document.querySelector('tbody')
    let i = 1
    result.forEach(element => {
      row.innerHTML += `
      <tr class="rowStyle">
        <td class="count">${i}</td>
        <td class="name">
          <img src="${element.logo_url}" width="35px" alt="${element.id}" title="${element.id}">
          <h4>${element.name}</h4>
          <h5>${element.symbol}</h5>
        </td>
        <td class="price">${this.calculateNumb('price' ,element.price)}</td>
        <td class="change">${Number(element['1d'].price_change_pct*100).toFixed(2)}%</td>
        <td class="volume">${this.calculateNumb('market' ,element['1d'].volume)}</td>
        <td class="cap">${this.calculateNumb('market' ,element.market_cap)}</td>
        <td class="supply">${this.calculateNumb('market' ,element.max_supply)}</td>
        <td class="favoritIcon"><i class="fa fa-plus"></i></td>
      </tr>
    `
    i +=1 
    });
  }

  calculateNumb(type ,numb) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 3
    })

    let number = Number(numb)

    if(type === 'market') {
      if(number >= 1000000000) {
        console.log(number);
        return `${formatter.format(number/1000000000)}B`
      }
      if(number >= 1000000) {
        console.log(number);
        return `${formatter.format(number/1000000)}M`
      }
    }

    return formatter.format(number)
  }
}