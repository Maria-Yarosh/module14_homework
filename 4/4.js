const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

function addImg(url) {
  let newImg = '';
  newImg = newImg + `<img class="image" src="${url}">`
  resultNode.innerHTML = newImg;
};

btnNode.addEventListener('click', () => {
  const value1 = document.querySelector('.width').value;
  const value2 = document.querySelector('.height').value;
  
  if (value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300) {
    resultNode.textContent = 'одно из чисел вне диапазона от 100 до 300';
    return
  } else {
  
  fetch(`https://picsum.photos/${value1}/${value2}`)
     .then((response) => {
       console.log('response', response)
       addImg(response.url)
       return response;
     })
     .catch(() => {
       console.log('ошибка')
     });
}
});