// 1) дз сделать GET запрос с помощью fetch на сервер /users вывести всех пользователей в html,отследить ошибку
const URL = 'https://jsonplaceholder.typicode.com/users';

const getBtn = document.getElementById('getInfo');

function getUserInfo() {
    console.log(`${URL}`)

    fetch(`${URL}`)

        .then(response => {
            if (response.ok){
                return response.json()
            }
            else {
                return `Error ${response.status}`
            }
        }).then(data => {
            const div = document.getElementById('item')
            data.forEach(e => {
                div.innerHTML += `
                    <ul class="list">
                    <p class="text">Name:${e.name}</p>
                    <li class="info">Id: ${e.id}</li>
                    <li class="info">Username: ${e.username}</li>
                    <li class="info">Email: ${e.email}</li>
                    <li class="info">Username: ${e.phone}</li>
                    </ul>
                `
            })
            console.log(data)
        })
}

getBtn.addEventListener('click', getUserInfo)



// 2) Сделать POST запрос на сервер с помощью fetch() на адрес https://jsonplaceholder.typicode.com/users, данный взять из текстового поля,и сделать запрос по клику на кнопку
const url  = 'https://jsonplaceholder.typicode.com/users';


const postBtn = document.getElementById('post_btn');

const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: 'Sincere@april.biz'
}
fetch(URL, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})



function postUser() {
    fetch(URL)
        .then(response => {
            if(response.ok) {
                return response.json()
            } 
            else {
                return `error ${response.status}`
            }
        }).then(data => console.log(data))
}
postBtn.addEventListener('click', postUser);