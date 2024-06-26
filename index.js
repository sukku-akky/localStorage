const userName=document.getElementById("username");
const email=document.getElementById("email");
const number=document.getElementById("phone");
const button=document.getElementById("submit");
const list=document.getElementById("user-list");
const form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    const name = userName.value;
    const emailValue = email.value;
    const numberValue = number.value;

    const UserDetails={
        name:name,
        email:emailValue,
        number:numberValue

    };
    const newLi=document.createElement("li");
    newLi.innerHTML=`${name}-${emailValue}-${numberValue}`;
    list.appendChild(newLi);
    const button=document.createElement("input");
    button.value="Delete";
    button.type="button";
    newLi.appendChild(button);
    button.addEventListener("click",function(event){
        event.preventDefault();
        list.removeChild(button.parentNode);
    });



    localStorage.setItem(emailValue,JSON.stringify(UserDetails));


});