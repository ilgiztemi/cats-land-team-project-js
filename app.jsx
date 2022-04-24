const leftContent = document.querySelector('.left-content');
const middleContent = document.querySelector('.middle-content');
const rightContent = document.querySelector('.right-content');
const list = document.querySelector('#list');
const addedList = document.querySelector('#added-list');
const input = document.querySelector('#input');
const addBtn = document.querySelector('#add-btn');
const added = document.querySelector('#added');
const heartIcon = document.querySelectorAll('.fa-heart');
const deleteIcon = document.querySelector('.fa-trash-can');
const favList = document.querySelector('.fav-list');
const backList = document.querySelector('.back-list');
let element = [];
let fav = [];

addBtn.addEventListener('click', function() {
    let textInput = input.value;
    let textHtml = `<li id='added'>
    <p>${textInput}</p>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-solid fa-trash-can"></i>
</li>`
    input.value = '';
    element.push(addedList.innerHTML += textHtml);
})

addedList.addEventListener('click', function(el) {
    if(el.target.className === 'fa-solid fa-heart') {
        el.target.style.backgroundColor = 'green';
        el.target.style.color = 'red';
        el.target.style.border = '1px solid lightgreen';
        fav.push(el.target.parentElement);
        console.log(fav);
    }
    // console.log(el.target.className)
})

addedList.addEventListener('click', function(el) {
    if(el.target.className === 'fa-solid fa-trash-can') {
        el.target.parentElement.remove();
    }
})
favList.addEventListener('click', () => {
    addedList.innerHTML = '';
    for(let i in fav) {
        addedList.innerHTML += 
        `<li id='added'>
    <p>${fav[i].innerText}</p>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-solid fa-trash-can"></i>
</li>`;
    }
})
backList.addEventListener('click', () => {
    addedList.innerHTML = '';
    for(let i in element) {
        if(!element[i]){
            addedList.innerHTML += element[i];
        }
    }
})

const API = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10';

async function fetchData() {
    const res = await  fetch(API);
    const data = await res.json();
    // console.log(data);
    return data;
}
fetchData().then(data => {
    count = 1;
    data.map(el => {
        const items = `<li>
        <p>${count}. ${el.text}</p>
    </li>`
        list.innerHTML += items;
        count++;
    })
})

fetchData()


