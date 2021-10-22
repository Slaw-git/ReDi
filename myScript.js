let btn_elem = document.querySelector('button');
let ul_elem = document.querySelector('ul');
let impt_elem = document.querySelector('input');

btn_elem.addEventListener('click', btnClick);

function btnClick {
    let impt_val = impt_elem.value;
    impt_val = ' ';
    let li_elem = document.createElement('li');
    let span_elem = document.createElement('span');
    let btn_new_elem = document.createElement('button');
    li_elem.appendChild(span_elem);
    li_elem.appendChild(btn_new_elem);
    span_elem.innerText = impt_val;
}