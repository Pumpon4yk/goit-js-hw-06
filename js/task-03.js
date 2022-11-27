const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryImg = document.querySelector('.gallery');

function creatGalleryElement (element){
  return element.map(el => {
    const li = document.createElement('li');
    li.classList.add('gallery__item')
    const img = document.createElement('img');
    img.src = `${el.url}`;
    img.alt = `${el.alt}`;
    img.width = "760";
    img.height = '420';
    li.appendChild(img)
    return li;
  })
}

const galleryElement = creatGalleryElement(images);
console.log(galleryElement);
galleryImg.append(...galleryElement);
