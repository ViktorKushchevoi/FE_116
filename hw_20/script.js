const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '4f005fce1caa4d47915673f37cfd3339';
let baseQuery = 'soccer';

$.ajax({
  url: API_URL,
  method: 'get',
  dataType: 'json',
  data: {
    apiKey: API_KEY,
    q: baseQuery
  },
  success: function(data){
    render(data.articles);
    console.log(data.articles);
  },
  error: function (jqXHR, exception) {
    console.log(jqXHR);
    console.log(exception);
  }
});

function render (data) {
  for (let i = 0; i < 20; i++) {
    let layout = `<article>
                  <h2>${data[i].title}</h2>
                  <img src="${data[i].urlToImage}" alt="${data[i].title}">
                  <p>${data[i].description}</p>
                  </article>`;
    $(".all-articles").append(layout);
  }
}
