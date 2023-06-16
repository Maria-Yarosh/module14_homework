const btnNode = document.querySelector('button');
const resultNode = document.querySelector('.result');

function useRequest(url, callback) {
  const xhr = new XMLHttpRequest ();
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
    let images = '';
    // console.log('start images', images);
    
    apiData.forEach(item => {
      const imagesBlock = `
        <div class="cards">
          <img
            src="${item.download_url} class="images"
          />
          <p>${item.author}</p>
        </div>
      `;
      images = images + imagesBlock;
    });
    
    // console.log('end images', images);
      
    resultNode.innerHTML = images;
};
  
  btnNode.addEventListener ('click', () => { 
    const value = document.querySelector('input').value;
    if (value < 1 && value > 10) {
        resultNode.innerHTML = `<p>Число вне диапозона от 1 до 10</p>`;  
    } else {
        url = `https://picsum.photos/v2/list?limit=${value}`;
    }
    useRequest (url, displayResult)
});