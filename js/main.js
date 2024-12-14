const userName = document.querySelector(".userName");
const userEmail = document.querySelector(".userEmail");
const userPassword = document.querySelector(".userPassword");
const loginBtn = document.querySelector(".loginBtn");

let user =[];

var regex = {
    userName:{
        value: /(^[A-Z|[a-z]{3,10}$)/,
        status: false
    },
    userEmail:{
        value: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
        status: false
    },
    userPassword:{
        value: /^[a-zA-Z0-9]{6,12}$/,
        status: false
    }
};

if(localStorage.getItem("user_information") != null){
    
        user = JSON.parse(localStorage.getItem("user_information"));
}

function errorMessage() {
    if((userEmail.value == "")||(userPassword.value == "") || (userName.value == "")){
        return false;
    }else{
        return true;
    }
}

// localStorage.clear("user_informatin");
loginBtn.addEventListener("click",addLogin);
function addLogin(){
    if(errorMessage() == false){
        document.querySelector("#errorMessage").innerHTML = `
        <p class="text-danger">All inputs is required</p>`;
    }
    if(userName.classList.contains("d-none")){
        if(validation(userEmail) && validation(userPassword) && emailExist(userEmail.value)){
            // loginAnchor.setAttribute("href","welcome.html");
            
            if (correct(userEmail,userPassword) == true){
                console.log(userEmail.value)
                location.href("welcome.html");
            }else{
                document.querySelector("#errorMessage").innerHTML = `
        <p class="text-danger">All inputs is required</p>`
            }
        }
    }else{
        if(validation(userEmail) == true && validation(userPassword) ==true && validation(userName) ==true  && emailExist(userEmail.value) ==true){
             document.querySelector("#sucess").innerHTML = `
        <p class="text-success">sucess</p>`;
        
        console.log(user)
            
        }
    }
    
    let userInfo = {
        userEmail : userEmail.value , 
        userPassword : userPassword.value ,
        userName : userName.value
    }
    user.push(userInfo);
    
    if(userEmail.value !="" && userPassword.value !=""){
        if (correct(userEmail,userPassword) == true){
            console.log(userEmail.value)
            location.href("welcome.html");
        }else{
            document.querySelector("#errorMessage").innerHTML = `
    <p class="text-danger">All inputs is required</p>`
        }
        
        clearInputs();
    }
    if(userEmail.value !="" && userPassword.value !="" && userName.value !=""){  
        localStorage.setItem("user_information",JSON.stringify(user));
        clearInputs();
    }
    
}

function clearInputs() {
    userEmail.value = "";
    userPassword.value = "";
    userName.value = "";
    userEmail.classList.remove("is-valid");
    userPassword.classList.remove("is-valid");
    userName.classList.remove("is-valid");
}

userName.addEventListener("input" , function(){
    validation(userName)
});
userEmail.addEventListener("input" , function(){
    validation(userEmail)
});
userPassword.addEventListener("input" , function(){
    validation(userPassword)
});

function validation(element) {
    if(regex[element.id].value.test(element.value) == true){
        regex[element.id].status  = true;
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        return true;
    }else{
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        return false;
    }
}


function emailExist(email){
    for(var i=0;i<user.length;i++){
        if(user[i].email==email){
            return false;
        }
    }
    return true;
}

function correct(email,password){
    for (var i = 0; i < user.length; i++) {
    if(user[i].email == userEmail && user[i].password == userPassword){
        localStorage.setItem("user_name" , user[i].userName);
        return true;
    } 
    return false;    
    }
}


// //!------------Name validation------------
// userName.addEventListener("input",nameValidation);
// function nameValidation() {
//     let nameRegex = /(^[A-Z|[a-z]{3,10}$)/;
//     if(nameRegex.test(userName.value)){
//         userName.classList.add("is-valid");
//         userName.classList.remove("is-invalid");
//         console.log("match");
//         return true;
//     }else{
//         userName.classList.remove("is-valid");
//         userName.classList.add("is-invalid");
//         console.log("not match");
//         return false;
        
//     }
// }

// //!------------Email validation------------
// userEmail.addEventListener("input",function(){
//     emailValidation();
// })
// function emailValidation() {
//     let emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
//     if(emailRegex.test(userEmail.value)){
//         userEmail.classList.add("is-valid");
//         userEmail.classList.remove("is-invalid");
//         console.log("match")
//         return true;
//     }else{
//         userEmail.classList.remove("is-valid");
//         userEmail.classList.add("is-invalid");
//         console.log("not match")
//         return false;
//     }
// }

// //!------------Password validation------------
// userPassword.addEventListener("input",function(){
//     passwordValidation();
// })
// function passwordValidation() {
//     let passwordRegex = /^[a-zA-Z0-9]{6,12}$/;
//     if(passwordRegex.test(userPassword.value)){
//         userPassword.classList.add("is-valid");
//         userPassword.classList.remove("is-invalid");
//         console.log("match")
//         return true;
//     }else{
//         userPassword.classList.remove("is-valid");
//         userPassword.classList.add("is-invalid");
//         console.log("not match")
//         return false;
//     }
// }



