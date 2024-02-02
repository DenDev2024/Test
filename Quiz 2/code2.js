var answers = ["Люди в черном","Спаун","Хакеры","Три икса","Скала",
"Игра","Угнать за 60 секунд","Химера","Ворон","Коматозники","Алита",
"Первому игроку приготовиться","Элизиум","Робот по имени Чаппи",
"Тихоокеанский рубеж","Зеленый фонарь","Кавказская пленница","На грани",
"Няньки","Крысиные бега","Дикий дикий запад","Лига выдающихся джентльменов",
"Человек паук","Пес призрак","Легенда","Годзилла","Книга Илая","Безумный Макс",
"Водный мир","Восставший из ада","Тихое место","Тихое место","Пункт назначения",
"Парк юрского периода","Блэйд"];
var question = 0;
var score = 0;
var displayScore = document.getElementById('score');
var topText = document.getElementById('top');

var imgNum = 1;
var imgPath ="./images/" + imgNum + ".png";
var img = document.getElementById('img');
var inputEl = document.getElementById('input');

var el;
function input(){
//переменная принимающая вводимый элемент
  el = inputEl.value;
//Проверка ответа
  compareInput(el);
//Проверка соответствия буквы
  compareLetter();
}

function compareLetter(){

var inputLength = inputEl.value.length;
var el = inputEl.value;
var inputLetter = el[inputLength -1];

var word = answers[question];
var wordLetter = word[inputLength -1];

if (inputLetter.toLowerCase() == wordLetter.toLowerCase()){
  letterMatch = true;
}else{
  letterMatch = false;
}

setColor();
}

function compareInput(text){
  var rightAnswer = answers[question];
  if (text.toLowerCase() == rightAnswer.toLowerCase()){
    correct();
  }
}

function correct(){
  //Плюс балл
  score ++;
  nextQuestion();
}

function nextQuestion(){
  //Следующий вопрос
  question = (question + 1) % answers.length;

  //Смена картинки
  imgNum ++;
  imgPath ="./images/" + imgNum + ".png";
  img.src = imgPath;

  //Отчистка поля ввода
  inputEl.value = "";

  //Обновление выводимых данных
  //topText.innerHTML = (answers.length - question)+"/"+(answers.length);
  //topText.innerHTML = (score)+"/"+(answers.length);
  topText.innerHTML = "Текущий вопрос: " + imgNum + "/" + answers.length;
  displayScore.innerHTML = "Правильных ответов: " + score + " / " + question;

  if(imgNum > answers.length){
    end();
  }
}

var deVito = document.getElementById('nope');
var letterMatch;
function setColor(){
  if(letterMatch == true){
    deVito.style.visibility = "hidden";
    inputEl.style.color = "white";
  }else{
    deVito.style.visibility = "visible";
    inputEl.style.color = "grey";
  }
}

var skipBtn = document.getElementById('skip')
function end(){
  imgPath ="./images/win.jpg";
  img.src = imgPath;
  topText.innerHTML = "";
  displayScore.innerHTML = "Правильных ответов: " + score + " / " + answers.length;
  inputEl.style.visibility = "hidden";
  skipBtn.style.visibility = "hidden";
}
