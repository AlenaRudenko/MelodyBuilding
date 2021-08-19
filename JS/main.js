$(document).ready(function () {
  let currentFloor = 2;//переменная где хранится номер текущего этажа
  let floorPath = $(".main__homeimage path"); /*svg синий этаж */
  let counterUp = $('.main__buttonup img');/*кнопка увеличения этажа */
  let counterDown = $('.main__buttondown img');/*кнопка уменьшения этажа */
  
  //функция при наведении мышки на этаж
  floorPath.on("mouseover", function () { 
    floorPath.removeClass("current-floor"); //удаляем активный каренткласс подсветки уже имеющийся у всех эл-тов
    currentFloor = $(this).attr("id"); //присваеваем номер айдишника каждого пафа карентфлору
  $('.main__counter').text(currentFloor); //выводим в счетчике значение карентфлора
 });
//функция при клике на верхний каунтер+подсветка нужного этажа 
 counterUp.on("click", function () { 
   if (currentFloor < 18) {
    currentFloor++; //прибавляем этаж
    let usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping:false}); //перевод в строку чтобы добавить 0 впереди у числа
    $('.main__counter').text(usCurrentFloor);//вставляем в счетчик новое число с нулем 
    floorPath.removeClass("current-floor");//удаляем класс подсветки у всех
    $(`[id=${usCurrentFloor}]`).toggleClass("current-floor");//присваеваем класс подсветки только тому, который на счетчике
   };
  });
  //функция при нажатии сниз на счетчике
  counterDown.on("click", function () {
    if(currentFloor > 2) {
      currentFloor--;
      let usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping:false});
      $('.main__counter').text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[id=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })
});