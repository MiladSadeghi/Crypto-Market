const userInterFace = new UI();
const cryptoAPI = new CryptoAPI();

let pageNumber;
let saveName = []


document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  page.addEventListener("click", (e) => {
    pageNumber = userInterFace.pagenation(e.target);
    const resultAPI = cryptoAPI.getDataFromAPI(pageNumber).then((data) => {
      userInterFace.showResult(data);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });

  const resultAPI = cryptoAPI.getDataFromAPI().then((data) => {
    userInterFace.showResult(data);
  });
});

const addToFavorit = document.querySelector("tbody");
addToFavorit.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa")) {
    const image =
      e.target.parentElement.parentElement.children[1].children[0].src;
    const name =
      e.target.parentElement.parentElement.children[1].children[1]
        .textContent;
    const price =
      e.target.parentElement.parentElement.children[2].textContent;
    
    if(saveName.length > 0){
      if(!(saveName.includes(name))) {
        saveName.push(name)
        userInterFace.favoritList(image, name, price);
      }
    } else {
      saveName.push(name)
      userInterFace.favoritList(image, name, price);
    }
  }
});

const remove = document.querySelector(".favorit-content");
  remove.addEventListener("click", (e) => {
    userInterFace.deleteFavorite(e);
  });
