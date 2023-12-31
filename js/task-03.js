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

function createGallery() {
  const container = document.getElementsByClassName("gallery")[0];
  if (!container) { return "Контейней не найден"; }

  let html = "";
  images.forEach(el => {
    html += `<li><img src="${el.url}" alt="${el.alt}"></img></li>`
  })
  container.insertAdjacentHTML("afterBegin", html);
}

createGallery();

