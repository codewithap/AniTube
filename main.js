fetch('https://api.jikan.moe/v4/top/anime?filter=favorite&limit=25')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  }).then(data => {
    let SlidesList = data['data'];
    let topAnime = document.querySelector('.top .anime');
    for (var i = 0; i < SlidesList.length; i++) {
      html = `<div class="card">
        <img src="${SlidesList[i]['images']['webp']['large_image_url']}"><p>${SlidesList[i]['title']}</p>
       </div>`;
       topAnime.innerHTML += html;
    }
    
  }).catch(error => {
    console.error(error)
  });

fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=25')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  }).then(data => {
    let SlidesList = data['data'];
    let topAnime = document.querySelector('.popular .anime');
    for (var i = 0; i < SlidesList.length; i++) {
      html = `<div class="card">
        <img src="${SlidesList[i]['images']['webp']['large_image_url']}"><p>${SlidesList[i]['title']}</p>
       </div>`;
      topAnime.innerHTML += html;
    }

  }).catch(error => {
    console.error(error)
  });
  
  fetch('https://anime-tv-v3-api.vercel.app/topanime?filter=airing&page=25')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(data => {
      let SlidesList = data['items'];
      let topAnime = document.querySelector('.airing .anime');
      for (var i = 0; i < SlidesList.length; i++) {
        html = `<div class="card">
          <img src="${SlidesList[i]['img']}"><p>${SlidesList[i]['title']}</p>
         </div>`;
        topAnime.innerHTML += html;
      }
  
    }).catch(error => {
      console.error(error)
    });