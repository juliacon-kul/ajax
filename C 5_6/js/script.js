const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.result');
const btn1 = document.getElementById('clear');
btn1.addEventListener('click', () => {
  resultNode.innerHTML = "Здесь будет результат";
  document.getElementById('input1').value = "";
  document.getElementById('input2').value = ""  
});

btn.addEventListener('click', () => {
 
  const value1 = Number(document.getElementById('input1').value);
  const value2 = Number(document.getElementById('input2').value);
  if (isNaN(value1) || isNaN(value2) || (value1 < 100) || (value1 > 300) || (value2 < 100) || (value2 > 300)){
    resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300"
  }
  else {
     fetch(`https://picsum.photos/${value1}/${value2}`)
       .then((response) => {
       console.log('response', response);
       
       return response
     })
      .then((data) => {
       // console.log(data)
       const cardBlock = `
      <div>
        <img
          src="${data.url}"
          
        />
        
      </div>
    `;
      resultNode.innerHTML = cardBlock; 
     })
    .catch(() => { console.log('error') });
   }
})
    
      
        