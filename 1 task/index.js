const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let myInterval = setInterval(() => {
      
      // если таймер по нулям
      if(!seconds) {
        // чистим интервал
        clearInterval(myInterval)

        // дизейблим кнопку
        buttonEl.disabled = false

        // говорим что таймер закончился
        return timerEl.innerHTML = 'Таймер закончился'
      }

      // уменьшаем секунды на 1
      seconds--

      // получаем часы, минуты, секунды
      let hours = Math.floor(seconds / 60 / 60)
      let minutes = Math.floor(seconds / 60) - (hours * 60)
      let sec = seconds % 60

      // добавляем 0 если число однозначное
      let formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        sec.toString().padStart(2, '0')
      ].join(':')

      // выводим результат таймера
      timerEl.innerHTML = formatted
    }, 1000)
  };
};


const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  // чистим input от букв
  inputEl.value = inputEl.value.replace(/[^0-9]/g,"")
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value)

  buttonEl.disabled = true

  animateTimer(seconds)

  inputEl.value = ''
});
