let btn_elem = document.querySelector('button');
let ul_elem = document.querySelector('ul');
let impt_elem = document.querySelector('input');
// impt_elem.required = true;
let li_elem;
btn_elem.addEventListener('click', btnClick);

function btnClick() {
    let impt_val = impt_elem.value;
    console.log('impt_val = ', impt_val);
    if(impt_val != ''){
        alert('Please enter the item');
        impt_elem.focus();
        return;
    }
    impt_elem.value = '';
    li_elem = document.createElement('li');
    let span_elem = document.createElement('span');
    let btn_new_elem = document.createElement('button');
    btn_new_elem.style.width = '75px';
    btn_new_elem.style.height = '20px';
    btn_new_elem.innerText = 'Delete';
    btn_new_elem.style.text
    li_elem.appendChild(span_elem);
    li_elem.appendChild(btn_new_elem);
    span_elem.innerText = impt_val;
    console.log(span_elem.textContent);
    ul_elem.appendChild(li_elem);
    btn_new_elem.addEventListener('click', listDelete);
    btn_elem.removeEventListener('click', btnClick);
}

function listDelete(){
    li_elem.remove();
    impt_elem.focus();
    btn_elem.addEventListener('click', btnClick);
}