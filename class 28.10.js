const getButton = document.getElementById('get-data-btn');
const postButton = document.getElementById('post-data-btn');
const listOfEntities = document.getElementById('list');

const getData = () => {
    console.log("GET DATA");

    // sendHttpRequest("DELETE","https://reqres.in/api/users?page=2")
    //     .then(result => {
    //         generateList(result.data);
    //     })

    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))


}

const postData = () => {
    sendHttpRequest("POST","https://reqres.in/api/login", {
        email: "peter@klaven"
    })
    .then(result => {
        listOfEntities.removeChild(listOfEntities.lastElementChild);
        const listItem = document.createElement("li");
        listItem.textContent = `Id: ${result.id}, CreatedAt: ${result.createdAt}`
        listOfEntities.appendChild(listItem);
    });
}


const sendHttpRequest = (method, url, body = undefined) => {
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: body ? {'Content-type': 'application/json'} : {}
    }).then(response => {
        if (response.status >= 400) {
            throw new Error(response.json());
        }
        return response.json();
    })
}



const generateList = (list) => {
    console.log("GENERATE LIST", list);
    listOfEntities.removeChild(listOfEntities.lastElementChild);
    for (i = 0; i < list.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Email: ${list[i].email}, Name: ${list[i].first_name} ${list[i].last_name}`
        listOfEntities.appendChild(listItem);
    }
}

getButton.addEventListener('click', getData);
postButton.addEventListener('click', postData);
