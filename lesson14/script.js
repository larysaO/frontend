const form = document.getElementById("form");
const gridContainer = document.getElementById("grid-container");
//console.log(form, div);
function clearList() {
    while (ul.hasChildNodes()) {
      ul.firstChild.remove();
    }
  }
  const filmList = [
    {
      film: "Хоббит",
      author: "Питер Джексон",
      year:"2012",
      foto:"https://hd-rezka.one/uploads/posts/2017-04/1491408273-1577353869-hobbit-nezhdannoe-puteshestvie.jpg"
    },
    {
        film: "Властелин Колец",
        author: "Питер Джексон",
        year:"2001",
        foto:"https://hd-rezka.tv/uploads/mini/fullstory-short/a1e/de706f7353a45c1e6eed71a62dce6.png"
    },
    {
        film: "Звёздные войны",
        author: "Джорж Лукас",
        year:"1977",
        foto:"https://lordfilms-zvezdnye-voyny.ru/wp-content/uploads/2023/11/300x450-3-2.webp"
    }
  ];
  const changeStatus = (event) => {
    if (event.target.style.textDecoration === 'line-through') {
      event.target.style.textDecoration = 'none'
    } else {
      event.target.style.textDecoration = 'line-through'
    }
  }
  function createList() {
    filmList.map((el) => {
      const gridItem = document.createElement("div");
      const img = document.createElement("img");
      img.src = el.foto;
      gridItem.append(img);
      const h2 = document.createElement("h2");
      h2.innerText = `${el.film}: ${el.author}: ${el.year}`;
      gridItem.append (h2);
      gridItem.onclick = changeStatus;
      gridContainer.append(gridItem);
    });
  }
  createList()