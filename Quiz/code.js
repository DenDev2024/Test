var question = 1;
var scorePrnt = document.getElementById('score')
var score = 0;

  var img = document.getElementById('img');

  var answer1 = document.getElementById('1');
  var answer2 = document.getElementById('2');
  var answer3 = document.getElementById('3');
  var answer4 = document.getElementById('4');

nextQuestion()

function nextQuestion(){
 switch (question){
   case 1:
   img.src = "./img/1.png";
   answer1.innerHTML = "Поворот не туда";
   answer2.innerHTML = "ОНО";
   answer3.innerHTML = "Техасская резня бензопилой";
   answer4.innerHTML = "Джиперс-Криперс";
   break;
   case 2:
   img.src = "./img/2.png";
   answer1.innerHTML = "Поворот не туда";
   answer2.innerHTML = "Джиперс-Криперс";
   answer3.innerHTML = "Техасская резня бензопилой";
   answer4.innerHTML = "Дом восковых фигур";
   break;
   case 3:
   img.src = "./img/3.png";
   answer1.innerHTML = "Кошмар на улице Вязов";
   answer2.innerHTML = "Кукла Чакки";
   answer3.innerHTML = "Крик";
   answer4.innerHTML = "Пятница 13";
   break;
   case 4:
   img.src = "./img/4.png";
   answer1.innerHTML = "Коматозники";
   answer2.innerHTML = "Газонокосильщик";
   answer3.innerHTML = "Исполнитель Желаний";
   answer4.innerHTML = "Муха";
   break;
   case 5:
   img.src = "./img/5.png";
   answer1.innerHTML = "Лабиринт Фавна";
   answer2.innerHTML = "Сайлент Хилл 2";
   answer3.innerHTML = "Не бойся темноты";
   answer4.innerHTML = "Экзорцист Ватикана";
   break;
   case 6:
   img.src = "./img/6.png";
   answer1.innerHTML = "ОНО";
   answer2.innerHTML = "Проклятие Аннабель";
   answer3.innerHTML = "Кукла Чакки";
   answer4.innerHTML = "Приют";
   break;
   case 7:
   img.src = "./img/7.png";
   answer1.innerHTML = "Поворот не туда";
   answer2.innerHTML = "Избави нас от лукавого";
   answer3.innerHTML = "Кладбище домашних животных";
   answer4.innerHTML = "Коллекционер";
   break;
   case 8:
   img.src = "./img/8.png";
   answer1.innerHTML = "Заклятие 2";
   answer2.innerHTML = "Шкатулка дьявола";
   answer3.innerHTML = "Шкатулка проклятия";
   answer4.innerHTML = "Бойся своих желаний";
   break;
   case 9:
   img.src = "./img/9.png";
   answer1.innerHTML = "Исполнитель желаний 2";
   answer2.innerHTML = "Крампус";
   answer3.innerHTML = "Затащи меня в ад";
   answer4.innerHTML = "Экзорцист Ватикана";
   break;
   case 10:
   img.src = "./img/10.png";
   answer1.innerHTML = "Омен";
   answer2.innerHTML = "Мама";
   answer3.innerHTML = "Реинкарнация";
   answer4.innerHTML = "Сайлен Хилл";
   break;
   case 11:
   img.src = "./img/11.png";
   answer1.innerHTML = "Избави нас от лукавого";
   answer2.innerHTML = "Параноромальное явление";
   answer3.innerHTML = "Визит";
   answer4.innerHTML = "Проклятие Деборы Логан";
   break;
   case 12:
   img.src = "./img/12.png";
   answer1.innerHTML = "Омен";
   answer2.innerHTML = "Кладбище домашних животных";
   answer3.innerHTML = "Свора";
   answer4.innerHTML = "Обитель зла 2";
   break;
   case 13:
   img.src = "./img/13.png";
   answer1.innerHTML = "Сайлент хилл";
   answer2.innerHTML = "Мама";
   answer3.innerHTML = "1408";
   answer4.innerHTML = "Сайлент хилл2";
   break;
   case 14:
   img.src = "./img/14.png";
   answer1.innerHTML = "Живое";
   answer2.innerHTML = "Чужой: Наследие";
   answer3.innerHTML = "Химера";
   answer4.innerHTML = "Под водой";
   break;
   case 15:
   img.src = "./img/15.png";
   answer1.innerHTML = "Параноромальное явление";
   answer2.innerHTML = "Белый шум";
   answer3.innerHTML = "Звонок";
   answer4.innerHTML = "Полтергейст";
   break;
   case 16:
   end();
   break;
 }
}

function onClickButton(bt) {
  switch (question){
    case 1:
    if (bt.innerHTML == "ОНО"){
      match();
    }else{
      dismatch();
    };
    break;


    case 2:
    if (bt.innerHTML == "Джиперс-Криперс"){
      match();
    }else{
      dismatch();
    };
    break;


    case 3:
    if (bt.innerHTML == "Кошмар на улице Вязов"){
      match();
    }else{
      dismatch();
    };
    break;



    case 4:
    if (bt.innerHTML == "Муха"){
      match();
    }else{
      dismatch();
    };
    break;



    case 5:
    if (bt.innerHTML == "Не бойся темноты"){
      match();
    }else{
      dismatch();
    };
    break;



    case 6:
    if (bt.innerHTML == "Приют"){
      match();
    }else{
      dismatch();
    };
    break;



    case 7:
    if (bt.innerHTML == "Избави нас от лукавого"){
      match();
    }else{
      dismatch();
    };
    break;



    case 8:
    if (bt.innerHTML == "Заклятие 2"){
      match();
    }else{
      dismatch();
    };
    break;



    case 9:
    if (bt.innerHTML == "Затащи меня в ад"){
      match();
    }else{
      dismatch();
    };
    break;



    case 10:
    if (bt.innerHTML == "Мама"){
      match();
    }else{
      dismatch();
    };
    break;



    case 11:
    if (bt.innerHTML == "Проклятие Деборы Логан"){
      match();
    }else{
      dismatch();
    };
    break;



    case 12:
    if (bt.innerHTML == "Омен"){
      match();
    }else{
      dismatch();
    };
    break;



    case 13:
    if (bt.innerHTML == "1408"){
      match();
    }else{
      dismatch();
    };
    break;



    case 14:
    if (bt.innerHTML == "Живое"){
      match();
    }else{
      dismatch();
    };
    break;



    case 15:
    if (bt.innerHTML == "Полтергейст"){
      match();
    }else{
      dismatch();
    };
    break;

  }
}


function match() {
  score++;
  scorePrnt.innerHTML = score;
  question = question + 1;
  nextQuestion();
}
function dismatch() {
  question = question + 1;
  nextQuestion();
}
function end() {

  scorePrnt.innerHTML = score + " / 15";
  img.src = "./img/fin.jpg";
  answer1.style.visibility = "hidden" ;
  answer2.style.visibility = "hidden" ;
  answer3.style.visibility = "hidden" ;
  answer4.style.visibility = "hidden" ;
}
