// SVG animation
const svgIcon = new Vivus(
  'Shape',
  {
    type: 'sync',
    duration: 400,
    animTimingFunction: Vivus.EASE
  }
);

const dayList = document.querySelector('#form__day');
const monthsList = document.querySelector('.form__input_month');
const yearList = document.querySelector('.form__input_year');

// remove temporary year in option
yearList.addEventListener('click', () => {
  const tepmYear = yearList.querySelector('#tempYear');
  if (tepmYear) { tepmYear.remove(); }
})

function generateYearList(start, end) {
  for (let i = start; i <= end; i += 1) {
    const HTMLOption = `<option value="${i}">${i}</option>`;
    const HTMLOptionElement = document.createElement("OPTION");
    HTMLOptionElement.innerHTML = HTMLOption;
    yearList.appendChild(HTMLOptionElement);

  }
}
generateYearList(1920, 2023);

const months30 = ['April', 'June', 'September', 'November'];
const months31 = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];

function generateDays(daysQuantity) {
  for (let i = 1; i <= daysQuantity; i += 1) {
    const HTMLOption = `<option value="${i}">${i}</option>`;
    const HTMLOptionElement = document.createElement("OPTION");
    HTMLOptionElement.innerHTML = HTMLOption;
    dayList.appendChild(HTMLOptionElement);
  }
}
generateDays(31);

function getDaysQuantity(month) {
  if (months30.includes(month)) return 30;
  else if (months31.includes(month)) return 31;
  else if (month == 'February') {
    if (+yearList.value % 4 == 0) { return 29 }
    return 28
  }
}

// change month => change dayQuantity
monthsList.addEventListener('input', () => {
  while (dayList.firstChild) { dayList.firstChild.remove() }
  const dayss = getDaysQuantity(monthsList.value);
  generateDays(dayss);
})

// button disabled shaking
const submitBtn = document.querySelector('.form__submit-btn');

const inputEmail = document.querySelector('#form__email');
const inputFName = document.querySelector('#f-name');
const inputLName = document.querySelector('#l-name');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm');

submitBtn.addEventListener('click', () => {

  if (!(
    inputEmail.validity.valid &&
    inputFName.validity.valid &&
    inputLName.validity.valid &&
    password.validity.valid &&
    passwordConfirm.validity.valid
  )) {
    console.log('no!');
    submitBtn.classList.add('shake');
    setTimeout(() => {
      submitBtn.classList.remove('shake');
    }, 1000)
  }

});

// opacity animation
const blocks = document.querySelectorAll('.block');

window.addEventListener('load', () => {
  for (let i = 0; i < blocks.length; i += 1) {
    setTimeout(() => {
      blocks[i].classList.add('show');
    }, i * 1000)
  }
})