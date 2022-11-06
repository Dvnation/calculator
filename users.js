
const user = () => sessionStorage.getItem("user");
const setUser = (user) => sessionStorage.setItem("user", user);

var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
    saveUserIntoDb(document.getElementById("user").value)
}
 
form.addEventListener('submit', handleForm);

function saveUserIntoDb(user) {
    
    setUser(user)
}