let welcome = document.querySelector(".welcome");
var Name=localStorage.getItem("user_name");

welcome.innerHTML = `<h1 class="pb-3">welcome ${Name}</h1>`;
