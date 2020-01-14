//let headers[“x-api-key”] = "1b9643f8-84d6-4603-846b-6fc318bdc8e2"
const url = 'https://api.thecatapi.com/v1/images/search';
let cat = document.getElementById('cat');
let container = document.getElementById('container');
let buttons = document.getElementById('buttons');
let cats = [];
let catsArray=[];
let catImage;
let images;
let oreoPic;
var oreoPics = [
  "1WX8IA8Hk2qmXWBdhkV09phRGqgkLWXlK", "1_nGj-FxgzzINdYptxVxoZPTMYek4IJOQ", "17uhC4KVze3vwxdczK8-5CdX2QTkKPcj0", "1MWIoveOZkJPWaYhf6inTN4earyv_FGF0", "1-g_pLtyEVBRTPgicTcM8FYSDTJEUjfNq", "1ePCctHDcBujrzcsoU5n8gMYL7IY3LnBf", "1Ctj1cOrrk14xbsila-P5qQ-He3ktUHxw", "1DLrYh1P2Q_MxoiW_HqAm1y4_syjfND0i", "1B50joDLG7DPaZ9TWE1gGKZAI0QmB7-Gh", "1GAgAvKcMncRzJLUp6X2gAFJVzVhj7ge_", "1jcBKAMZL9tBIAFPRZCthtrN8NQJGWoOV", "1Xgp9P2zB1oOWMlUyBaDaGF3b837bhHwz", "1zT3R0updzzTW8QIZQiMV75TfwnYDxkdy", "11lDpLGXKyyHhZgMOwCnV4KMfU5nISnOt", "1sLbrMflZzdjFIVLspUG4d5t908uEAzQl", "14ND87beO9iP_lQBgzlNekhIVW1CRNihH", "16wnPTEgJLNlq2eohXUgoRUcmaqsyRtPS", "1AvVDWs9XBNCnnojmOBeDrtpi1gZIGT0G", "1AHBUVjlj0Hwo9iL3aC42D9IuIrpFdyUX", "1WkAkuQ3WXPtuFlT9TRwoWL32wrm3HkG3", "1_ssnzyvy-W7gkGvhBkjjJRPPPoas0pJy", "17gNrMDqiaUUe89HdBIAs7DPPU6sq7UAu", "1Ed1K71hgioFmtxRtmZcyGoQ9WCWctB2P", "1ThwDS1EBGV7CCJSR9F4Do749cr3qr00q", "1m5QBQZKg4BCj6E2Y8Y1vOPOV2Igl-e0Q", "1CBJFsg1DOISN1OFY9mBdG8O7NUcJkSle", "1QPiyVp8cCseJk7dW2xP6UXo5U3D6YBB9", "1J4rwiT9o6SltOlj0voCuIQpEh_IT5Ldq", "12JtiQltEhN28rkPaSJ5-Sj1r8JOcJbxO", "1gyE3TFyjTR1c8XPAnRxz1B1s9MWaaN0_", "1SGRNrn0rtvG3TCPjIhCb5tapYZ6kJMnK", "128bD7d_CXCkUxpVWLYVxOplB3bsrPzSb", "1aQ5zGes7eZy1lmymTHOxVJ2f03IuSfQ0", "1E7ROFuXiQWyOJlQbTCNJVs5N7iQV-Yh8", "1ambu9-VSr5tRBpiybFUFJCp1gKVS83KQ", "1vcT97BdNoUIlzKrHCrwBYi-HW7V-zEqj", "1n7PBeRw5f-_fU0JAPawEOIHmQmRaU9zT", "1Dr-i0h8VsOKDL5wof1vibqP0JeJ4maXG", "1L57dAJ7Oso9rpbki4BELI1c6ZbqkBkzN", "1Xc2T-Onsy9JAeXjAaA4ZuZkvbPy1XOES", "1L1VcFJmfpORmlhilYwy9UYpdoUtkpYCc", "1-8PRwX9bdQcguBOzugxr5kYGsQYgqNDC", "1se9zuXE0j5fwd1FrWtJmJFgj0QxnTaQ5", "1wx7Yfs9rJ2GGsK6JkDDfcwRdPtYJrzr5", "1ZkH48_0bF-9CH8w_vNfaL3Ihi9jn9xQa", "1thBaIbyPluA4C46v7nqk5dPod5xdaReu", "1iaGDmk6kZ8TOLAbazDF9wI3sWZmVClJp", "163QqFel6uAfn3DghquWpR_gL7lNeBezq", "1neouE9vlPBBVfM7opMvvY7fKQcimESyy", "1mqcCNEg2yQQZCCk1tqfGZbPoj-ZPtSwO", "1MNg1a9GqqwwZtzQSBhwpjORhZKY5Apv-", "18jaHB1e_DYQOJ_dozjPwOQB9jFAcr3vB", "1VyhtzBfi9I9h537KbOO23sPlhzZsRzXb", "1IZNMPf3HcIEPao4qHoncjE44MQyiDua_", "1cZprKVLvPvlJJPl6OYUXpblXweWcwIQR", "1f0ugxHnUT4GTuj643l5MSOEybzZ94BAj", "1iigAL7g2byFx0YVvuRo9dieskGi_uMRo", "1ybQEp03si5VxcbRMo2XlTUm6GmCv6H9v", "1nRW9u3i5OSIxKu6BFlhJA2y1JJ7WrpZ_", "1Rk7j5ZNQzwgPA6ICE4Z8ZG5fqvV58JCl", "1BK0VYsyNT5_YB5uLkB3pxj0W5-yGh_7U ", "1cdxzMhHFaTq7IFSxk9pKRrDkn8L2S0Uj"
];

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
        button.name = 'previous';
        button.type = 'button';
        button.innerText = 'PREVIOUS';
        button.setAttribute('onclick', 'previousCat()', );
        buttons.appendChild(button);
      }
    } else {
      let img = document.createElement('img');
      img.src = catImage;
      container.appendChild(img);
    }
  });
}

function oreoButton() {
  var randIdx = Math.random() * oreoPics.length;
  randIdx = parseInt(randIdx, 10);
  var link = 'https://drive.google.com/uc?export=view&id=' + oreoPics[randIdx];
  cats.push(link);
  images = document.getElementsByTagName('img');
  if (images.length > 0) {
    images[0].src = (link);
    if (cats.length === 2) {
      console.log('Creating previous button');
      let button = document.createElement('button');
      button.name = 'previous';
      button.type = 'button';
      button.innerText = 'PREVIOUS';
      button.setAttribute('onclick', 'previousCat()', );
      buttons.appendChild(button);
    }
  } else {
    let img = document.createElement('img');
    img.src = (link);
    container.appendChild(img);
  }
}

function previousCat() {
  console.log('loading previous cat...');
  let index = cats.indexOf(catImage);
  images[0].src = cats[index - 1];
}

var angle = 0,
  img = document.getElementById('container');
document.getElementById('button').onclick = function() {
  angle = (angle + 90) % 360;
  img.className = "rotate" + angle;
}
