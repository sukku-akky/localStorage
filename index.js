const userName=document.getElementById("username");
const email=document.getElementById("email");
const number=document.getElementById("phone");
const button=document.getElementById("submit");

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

    localStorage.setItem("User Details",JSON.stringify(UserDetails));


});