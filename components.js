let slider = document.querySelector('.slideShow .slider');
console.log(slider.offsetWidth)
slider.style.height = `${1.42*(slider.offsetWidth)}px`;
let counter = 0;
  // image Slide show //

fetch('https://api.jikan.moe/v4/top/anime')
  .then(response => {
      return response.json();
  }).then(data => {
    console.log(data)
    let SlidesList = data['data'];
    for (let i = 0; i < SlidesList.length; i++) {
  slider.innerHTML += `<div class='a' style='left: ${i*100}%'>
  <div class='btn'><span class='title'><p>${SlidesList[i]['title']}</p><button class='watchBtn'><i class="bi bi-play-fill"></i> START WATCHING</button></span><span class='bg'></span><img src='${SlidesList[i]['images']['webp']['large_image_url']}'>
  </div></div>`;
}
  }).catch(error => {
    console.error(error)
  });

function slide() {
  let slides = slider.querySelectorAll('.a');
  if (Math.abs(counter) > 9) {
    counter = 0;
  }
  for (let i = 0; i < 10; i++) {
    slides[i].style.transform = `translateX(-${(Math.abs(counter))*100}%)`;
  } }
  
let prev = () => {
  if (counter > 0) {
    counter -= 1;
    slide()
  }
  
  else if (counter == 0) {
    counter = 9;
    slide()
  }
}

let next = () => {
  counter += 1;
  slide()
}
setInterval(next, 8000);
/////////////////////////