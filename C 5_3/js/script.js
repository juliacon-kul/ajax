const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.result');
function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
xhr.send();
};
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}
btn.addEventListener('click', () => {
  const value = Number(document.querySelector('input').value);
  if ((value > 10)||(value < 1)){    
    resultNode.innerHTML = "число вне диапазона от 1 до 10"}
  else {
    let url =  `https://picsum.photos/v2/list?limit=${value}`;
    useRequest(url,displayResult);
  }
  });
