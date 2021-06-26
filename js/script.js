const myString = localStorage.getItem('myString');
const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.result');
const btn1 = document.getElementById('clear');
btn1.addEventListener('click', () => {
  resultNode.innerHTML = "Здесь будет результат";
  document.getElementById('input1').value = "";
  document.getElementById('input2').value = ""  
});
if (myString) {
  resultNode.innerHTML = myString;
}

btn.addEventListener('click', () => {
 
  const value1 = Number(document.getElementById('input1').value);
  const value2 = Number(document.getElementById('input2').value);
  if (isNaN(value1) || isNaN(value2) || (value1 < 1) || (value1 > 10) || (value2 < 1) || (value2 > 10)){
    resultNode.innerHTML = "одно из чисел вне диапазона от 1 до 10"
  }
  else {
     fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
       .then((response) => {
       console.log('response', response);
       const result = response.json()
       return result
     })
      .then((data) => {
       console.log(data)
 let cards = '';
  // console.log('start cards', cards);
  
  data.forEach(item => {
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
       return cards
})
   .then((cards) => {
       localStorage.setItem('myString', cards);
     })
    .catch(() => { console.log('error') });
   }
})