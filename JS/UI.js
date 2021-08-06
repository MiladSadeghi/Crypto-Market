class UI {
  showResult(result) {
    const row = document.querySelector('tbody')
    let i = 1
    result.forEach(element => {
      row.innerHTML += `
      <tr class="rowStyle">
        <td class="count hoverStyle">${i}</td>
        <td class="name">
          <img src="${element.logo_url}" width="35px" alt="${element.id}" title="${element.id}">
          <h4 class="hoverStyle">${element.name}</h4>
          <h5 class="hoverStyle">${element.symbol}</h5>
        </td>
        <td class="price hoverStyle">${this.calculateNumb('price' ,element.price)}</td>
        <td class="change hoverStyle">${Number(element['1d'].price_change_pct*100).toFixed(2)}%</td>
        <td class="volume hoverStyle">${this.calculateNumb('market' ,element['1d'].volume)}</td>
        <td class="cap hoverStyle">${this.calculateNumb('market' ,element.market_cap)}</td>
        <td class="supply hoverStyle">${this.calculateNumb('market' ,element.max_supply)}</td>
        <td class="favoritIcon"><i class="hoverStyle fa fa-plus"></i></td>
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
        return `${formatter.format(number/1000000000)}B`
      }
      if(number >= 1000000) {
        return `${formatter.format(number/1000000)}M`
      }
    }

    return formatter.format(number)
  }

  favoritList(image, name, price) {
    const favoritContent = document.querySelector('.favorit-content')
    const favorit = document.querySelector('.favorit')

    const div = document.createElement('div')
    div.classList.add('favorit-card')
    div.setAttribute('type', name)

    div.innerHTML = `
    <img src=${image} width="35px" alt="${name}" title="${name}">
    <h3>${name}</h3>
    <p class="price">${price}</p>
    <i class="remove fa fa-plus"></i>
    `
    favoritContent.appendChild(div)
  }

  deleteFavorite(row) {
    if(row.target.classList.contains('remove')) {
      row.target.parentElement.remove()
    }
  }
}