//let headers[“x-api-key”] = "1b9643f8-84d6-4603-846b-6fc318bdc8e2"
const url = 'https://api.thecatapi.com/v1/images/search';
let cat = document.getElementById('cat');
let container = document.getElementById('container');
let buttons = document.getElementById('buttons');
let cats = [];
let catImage;
let images;

function buttonCat() {
  fetch(url, {
    headers: {
      'x-api-key': '1b9643f8-84d6-4603-846b-6fc318bdc8e2'
    }
  }).then((response) => {
    return response.json();
  }).then((myJson) => {
    catImage = myJson[0].url;
    cats.push(catImage);
    images = document.getElementsByTagName('img');
    if (images.length > 0) {
      images[0].src = catImage;
      if (cats.length === 2) {
        console.log('Creating previous button');
        let button = document.createElement('button');
        button.type = 'button';
        button.innerText = 'Previous';
        button.setAttribute('onclick', 'previousCat()');
        buttons.appendChild(button);
      }
    } else {
      let img = document.createElement('img');
      img.src = catImage;
      container.appendChild(img);
    }
  });
}

function previousCat() {
  console.log('loading previous cat...');
  let index = cats.indexOf(catImage) - 1;
  images[0].src= cats[index];
}