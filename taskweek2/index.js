const container = document.querySelector('#container');
container.innerHTML = "<h1>Devansh</h1>";




// const favcity = document.getElementsByClassName('favcity');
// console.log(favcity)

// for(city of favcity){
//     city.style.color = 'green';
// }



// const head = document.getElementById('head');

// head.style.color = 'red';
// head.style.border = '2px solid blue';

// console.log(head.innerHTML);

// head.innerHTML = "kuch bhiii";




const btn = document.querySelector('#btn');
const para = document.createElement('p');
container.appendChild(para);

const para2 = document.createElement('p');
container.appendChild(para2);

const para3 = document.createElement('p');
container.appendChild(para3);

btn.addEventListener('click', () => {
    console.log("button clicked");
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            para.innerText = data.setup;
            setTimeout(() =>{
                para2.innerText = data.punchline;
            },5000);
            
        })
        .catch((err) => {
            console.log(err);
        })
})

const search = document.querySelector('#search');
const country = document.querySelector('#country');
const data = document.querySelector('#data');


search.addEventListener('click', () =>  {
    
    fetch('http://universities.hipolabs.com/search?country=United+States')
    .then((res) => res.json())
    .then((universities) => {
        console.log(universities);
    })
})

