let input=document.querySelector('input');
let addBtn=document.querySelector('button');
let ul=document.querySelector('ul');

addBtn.addEventListener('click',function(event){
    if(!input.value.trim()){
        return;
    }

    let newLi=document.createElement('li');
    let delBtn=document.createElement('button');

    newLi.innerText=input.value;

    delBtn.style.marginLeft="5px";
    delBtn.classList.add('btn','btn-danger','btn-sm','rounded-pill','btn-sm-custom','remove');
    delBtn.innerText="Remove";
    
    input.value="";
    
    newLi.append(delBtn);
    ul.appendChild(newLi);
    input.focus();

    delBtn.addEventListener('click',function(){
        newLi.remove();
    });  
});