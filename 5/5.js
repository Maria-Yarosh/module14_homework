const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

  function addImg(apiData) {
    let newImg = '';
    apiData.forEach(item => {
        const card = `
        <div class="card">
            <img class="card-image" src="${item.download_url}">
            <p>${item.author}</p>
        </div>
    `;
    newImg += card;
    })
    resultNode.innerHTML = newImg;
  };

  localStorage.setItem('lastResponse', 'addImg');
  let checkStor = localStorage.getItem('lastResponse');

btnNode.addEventListener('click', () => {
    const pageValue = document.querySelector('.page').value;
    const limitValue = document.querySelector('.limit').value;
    let pageCheck = pageValue >= 1 && pageValue <= 10
    let limitCheck = limitValue >= 1 && limitValue <= 10 

    resultNode.textContent = '';

    if (pageCheck && limitCheck) {
        fetch(`https://picsum.photos/v2/list?page=${pageValue}&limit=${limitValue}`)
        .then((response) => {
            console.log('response', response)
            addImg(response.url)
            return response;
        })
        .catch(() => {
            console.log('ошибка');
        })

    } else if (pageCheck && !limitCheck) {
        resultNode.textContent = 'Лимит вне диапазона от 1 до 10';

    } else if (!pageCheck && limitCheck) {
        resultNode.textContent = 'Номер страницы вне диапазона от 1 до 10'

    } else {
       resultNode.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
    }
});