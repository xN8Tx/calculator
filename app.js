const leftUp = document.querySelector('.calculater__left_up'),
        leftDown = document.querySelector('.calculater__left_down'),
        rightUp = document.querySelector('.calculater__right_up'),
        calculaterBody = document.querySelector('.calculater__body'),
        result = document.querySelector('.calculater__result');

 // choosen buttons
let choosenBtn = [];

const optionsLeft = [
    { name: 'AC', action: clear() },
    { name: '()', action: brackets() },
    { name: '%', action: procent() },
]

const optionsRight = [
    { name: '+', action: sum() },
    { name: '-', action: sub() },
    { name: '×', action: multiply() },
    { name: '÷', action: divide() },
    { name: '=', action: equals() },
]

const numbers = [
    { name: '1', action: 1 },
    { name: '2', action: 2 },
    { name: '3', action: 3 },
    { name: '4', action: 4 },
    { name: '5', action: 5 },
    { name: '6', action: 6 },
    { name: '7', action: 7 },
    { name: '8', action: 8 },
    { name: '9', action: 9 },
    { name: '0', action: 0},
    { name: ',', action: double() },
]

// functions 
function clear() {
    result.innerHTML = '';
    choosenBtn = [];
}
function brackets() {}
function procent() {}
function sum() {}
function sub() {}
function multiply() {}
function divide() {}
function equals() {
    result.innerHTML = '<h2></h2>';
}
function double() {}

// add buttons
function addButtons() {
    for (let i = 0; i < optionsLeft.length; i++) {
        const div = document.createElement('div');
        const p = document.createElement('p');

        div.classList.add('calculater__icon_vertical');
        p.classList.add('button');
        div.setAttribute('name', optionsLeft[i].name);

        p.innerHTML = optionsLeft[i].name;
        div.appendChild(p);
        leftUp.appendChild(div);
    }
    for (let i = 0; i < optionsRight.length; i++) {
        const div = document.createElement('div');
        const p = document.createElement('p');

        div.classList.add('calculater__icon_horizontal');
        p.classList.add('button');
        div.setAttribute('name', optionsRight[i].name);

        p.innerHTML = optionsRight[i].name;
        div.appendChild(p);
        rightUp.appendChild(div);
    }
    for (let i = 0; i < numbers.length; i++) {
        const div = document.createElement('div');
        const p = document.createElement('p');

        div.classList.add('calculater__icon_vertical');
        p.classList.add('button');
        div.setAttribute('name', numbers[i].name);
        
        p.innerHTML = numbers[i].name;
        div.appendChild(p);
        leftDown.appendChild(div);
    }
}

calculaterBody.addEventListener('click', (e) => {
    let event = e.target;
    let eventParent = event.parentNode.getAttribute('name');
    if (event.classList.contains('button')) {
        if (eventParent == 'AC') {
            clear()
        } else if (eventParent == '=') {
            equals()
        } else if (eventParent == '()') {
            brackets()
        }else {
            choosenBtn.push(eventParent);
            show()
        }
    }
})

// show 
function show() {
    let some = ''
    choosenBtn.forEach(i => {
        some += i;
    })
    result.innerHTML = `<h2>${some}</h2>`;
}

addButtons();