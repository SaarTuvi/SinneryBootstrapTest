var mainpath = "images/";
var promosubpath = "promo";
var posterssubpath = "posters";
var merchsucpath = 'merch';
var liveshotspath = 'liveshots';


function setCarousels() {
  getphotos(promosubpath)
  getphotos(posterssubpath);
  getphotos(merchsucpath);
  setThumbnailtsToMerch();
  getphotos(liveshotspath);
};

function getphotos(path) {
  let car = document.querySelector("#" + path + "-carousel-items");
  for (let i = 0; i < 8; i++) {
    let elemm = document.createElement('div');
    elemm.classList.add("carousel-item");
    if (i == 0) {
      elemm.classList.add("active");
    }
    let img = document.createElement('img');
    img.classList.add('d-block');
   //img.classList.add('img-fluid');

    img.classList.add('w-100');  //  "d-block w-100"

    img.src = mainpath + path + '/' + path + i + '.jpg';
    img.onload = function () {
      elemm.appendChild(img);
    }
    car.appendChild(elemm);
  }
}
function setThumbnailtsToMerch() {
  let car = document.getElementById('merch-carousel');

  let olElemm = document.createElement('ol');
  olElemm.classList.add('carousel-indicators');
  olElemm.classList.add('list-inline');

  var carElements = document.querySelectorAll("#merch-carousel-items .carousel-item");
  for (var i = 0; i < carElements.length; i++) {
    let liElemm = document.createElement('li');
    liElemm.setAttribute('data-target', "#merch-carousel");
    liElemm.setAttribute('data-slide-to', i);
    liElemm.classList.add('list-inline-item');
    if (i == 0) {
      liElemm.classList.add('active');
    }


    //Setting image
    let img = document.createElement('img')
    img.src = 'images/merch/merch' + i + '.jpg';

    img.classList.add('d-block');
    img.classList.add('w-100');
//img.classList.add('img-fluid');

    liElemm.appendChild(img);
    olElemm.appendChild(liElemm);
  }

  car.appendChild(olElemm);
}
