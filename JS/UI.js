class UI {
  showResult(result) {
    const row = document.querySelector("tbody");
    row.innerHTML = "";
    let i = 1;
    let timespan;
    result.forEach((element) => {
      if(!(element["1d"])) {
        timespan = element["7d"]
      } else {
        timespan = element["1d"]
      }
      row.innerHTML += `
      <tr class="rowStyle">
        <td class="count hoverStyle">${i}</td>
        <td class="name">
          <img src="${element.logo_url}" width="35px" alt="${
        element.id
      }" title="${element.id}">
          <h4 class="hoverStyle">${element.name}</h4>
          <h5 class="hoverStyle">${element.symbol}</h5>
        </td>
        <td class="price hoverStyle">${this.calculateNumb(
          "price",
          element.price
        )}</td>
        <td class="change hoverStyle">${Number(timespan.price_change_pct * 100).toFixed(2)}%</td>
        <td class="volume hoverStyle">${this.calculateNumb(
          "market",
          timespan.volume
        )}</td>
        <td class="cap hoverStyle">${this.calculateNumb(
          "market",
          element.market_cap
        )}</td>
        <td class="supply hoverStyle">${this.calculateNumb(
          "market",
          element.max_supply
        )}</td>
        <td class="favoritIcon"><i class="hoverStyle fa fa-plus"></i></td>
      </tr>
    `;
      i += 1;
    });
  }

  calculateNumb(type, numb) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });

    let number = Number(numb);

    if (type === "market") {
      if (number >= 1000000000) {
        return `${formatter.format(number / 1000000000)}B`;
      }
      if (number >= 1000000) {
        return `${formatter.format(number / 1000000)}M`;
      }
    }

    return formatter.format(number);
  }

  favoritList(image, name, price) {
    const favoritContent = document.querySelector(".favorit-content");
    const div = document.createElement("div");
    div.classList.add("favorit-card");
    div.setAttribute("type", name);

    div.innerHTML = `
    <img src=${image} width="35px" alt="${name}" title="${name}">
    <h3>${name}</h3>
    <p class="price">${price}</p>
    <i class="remove fa fa-plus"></i>
    `;
    favoritContent.appendChild(div)
  }

  deleteFavorite(row) {
    if (row.target.classList.contains("remove")) {
      row.target.parentElement.remove();
      const deleteFromArray = saveName.indexOf(row.target.parentElement.getAttribute('type'))
      saveName.splice(deleteFromArray, deleteFromArray + 1)
    }
  }

  pagenation(page) {
    const row = document.querySelector("tbody");
    if (page.classList.contains("next")) {
      let nextValue = Number(page.getAttribute("value")) + 1;
      page.setAttribute("value", nextValue);
      page.innerHTML = nextValue;

      let nowValue = nextValue - 1;
      let now = page.parentElement.children[1];
      now.setAttribute("value", nowValue);
      now.innerHTML = nowValue;

      let prev = page.parentElement.children[0];
      let prevValue = nowValue - 1;
      prev.setAttribute("value", prevValue);
      prev.innerHTML = prevValue;
      prev.style.display = "flex";

      return nextValue;
    }

    if (page.classList.contains("prev")) {
      let next = page.parentElement.children[2];
      let nextValue = Number(next.getAttribute("value")) - 1;
      next.setAttribute("value", nextValue);
      next.innerHTML = nextValue;

      let nowValue = nextValue - 1;
      let now = page.parentElement.children[1];
      now.setAttribute("value", nowValue);
      now.innerHTML = nowValue;

      let prev = page.parentElement.children[0];
      let prevValue = nowValue - 1;
      prev.setAttribute("value", prevValue);
      prev.innerHTML = prevValue;

      if (prevValue === 0) {
        prev.style.display = "none";
      }

      return prevValue;
    }

    if (page.classList.contains("now")) {
      return false;
    }
  }
}
