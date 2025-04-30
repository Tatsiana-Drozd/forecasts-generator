/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function getRandom(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}



const btn = document.querySelector('.forecast-btn');
btn.addEventListener('click', function() {

    let predictionNumber = getRandom(1, 5);
    let predictionText = "";

    if (predictionNumber == 1) {
        predictionText = "Ваша цель достижима.";
    } else if (predictionNumber == 2) {
        predictionText = "Ориентируйся на маленькие победы - они повлекут за собой большие!";
    } else if (predictionNumber == 3) {
        predictionText = "Осторожно, впереди волна впечатлений!";
    } else if (predictionNumber == 4) {
        predictionText = "Улыбайся! Кто-то может влюбиться в твою улыбку!";
    } else {
        predictionText = "Не оставляйте усилий и получите желаемое!";
    }
    const currentForecast = document.querySelector('.current-forecast');
    let currentForecastH1 = currentForecast.querySelector('h1');
    currentForecastH1.textContent = predictionText;

    const currentForecastP = currentForecast.querySelector('p');
    currentForecastP.textContent = getRandom(1, 100);

    const template = document.querySelector('#forecast-item');
    const myTemplate = template.content.cloneNode(true);

    myTemplate.querySelector('h3').textContent = predictionText;
    myTemplate.querySelector('p').textContent = currentForecastP;

    const forecasts = document.querySelector('.forecasts');
    forecasts.append(myTemplate);
});