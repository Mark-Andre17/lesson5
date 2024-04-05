let elem = document.getElementById('list');
console.log(elem);
let button1 = document.getElementById('first');
let button2 = document.getElementById('second');
let button3 = document.getElementById('third');
let button4 = document.getElementById('fourth');
let button5 = document.getElementById('fifth');
button1.addEventListener('click', () => {
    let newElem = document.createElement('li');
    newElem.classList = 'list-item';
    newElem.innerHTML = 'Пункт в конце';
    return elem.append(newElem);
});
button2.addEventListener('click', () => {
    let newElem = document.createElement('li');
    newElem.classList = 'list-item';
    newElem.innerHTML = 'Пункт в начале';
    return elem.prepend(newElem);
});
button3.addEventListener('click', () => {
    let newElem = document.querySelector('li');
    return newElem.remove();
});
button4.addEventListener('click', () => {
    let newElem = document.querySelector('li:last-child');
    return newElem.remove();
});
button5.addEventListener('click', () => {
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'black';
});
