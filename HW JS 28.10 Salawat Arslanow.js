const getButton = document.getElementById('get-data-btn');
const postButton = document.getElementById('post-data-btn');
const listOfEntities = document.getElementById('list');
const postFormButton = document.getElementById('post-form-btn');



const generateList = (list) => {
    console.log("GENERATE LIST", list);
    listOfEntities.removeChild(listOfEntities.lastElementChild);
    for (i = 0; i < list.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Email: ${list[i].email}, Name: ${list[i].name}, Username: ${list[i].username}`;
        listOfEntities.appendChild(listItem);
    }
}

const generateNewList = (list) => {
    console.log("GENERATE NEW LIST", list);
    listOfEntities.innerHTML = '';
        const listItem = document.createElement("li");
        listItem.textContent = `Activity: ${list.activity}, type: ${list.type}, key: ${list.key}`;
        listOfEntities.appendChild(listItem);
    
}

const getData = () => {
    console.log("GET DATA");
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => generateList(json));
}

const postData = () => {
    console.log("GET DATA");
    fetch('http://www.boredapi.com/api/activity?type=recreational')
        .then(response => response.json())
        .then(json => generateNewList(json));


}

const generateFormList = (list) => {
    console.log("GENERATE FORM LIST", list);
    listOfEntities.innerHTML = '';
        const listItem = document.createElement("li");
        listItem.textContent = `Token: ${list.token}`;
        listOfEntities.appendChild(listItem);
    
}

const postFormData = () => {
    const user_mail = document.getElementById('E-Mail');
    const user_password = document.getElementById('Password');
    if(user_mail.value == '' ||  user_password.value == ''){
        alert('Please enter the required info.');
        return;
    }
    user_mail.value = 'eve.holt@reqres.in';
    user_password.value = 'cityslicka';

    const user = {
        email: user_mail.value,
        password: user_password.value,
    };
    console.log(user);  
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
      })
      .then(response => response.json())
      .then(json => generateFormList(json));
}

getButton.addEventListener('click', getData);
postButton.addEventListener('click', postData);
postFormButton.addEventListener('click', postFormData);