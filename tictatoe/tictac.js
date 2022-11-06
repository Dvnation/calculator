

     let form = document.getElementById("inputform")
     let toes = document.querySelectorAll(".toes")
     let username = document.getElementById("formss")

 function play(){ 
    box = document.getElementById("buttons")
        sessionStorage.setItem('name', username.value)
    }
   play ();
  
     let mapss = Array.from(toes).map(maps=>maps)
       console.log(mapss);
   
     //map creates a  new array, forEach iterates over the array
     
    //  var form = document.getElementById("myForm");
    //  function handleForm(event) {
    //    event.preventDefault();
    //      saveUserIntoDb(document.getElementById("user").value)
    //  }
      
    //  form.addEventListener('submit', handleForm);
     
     let eachMapss= mapss.forEach(function(n){n.addEventListener   ///n=>n.value
    ("input",  function play(){ 
             localStorage.setItem('word', toes[0].value)
            localStorage.setItem('words', toes[1].value)
            localStorage.setItem('wordss', toes[2].value)
            localStorage.setItem('wordsss', toes[3].value)
            localStorage.setItem('wordssss', toes[4].value)
            localStorage.setItem('wordsssss', toes[5].value)
            localStorage.setItem('wordssssss', toes[6].value)
            localStorage.setItem('wordsssssss', toes[7].value)
            localStorage.setItem('wordssssssss', toes[8].value)
        
        setInterval(() => {
            toes[0].value =  localStorage.getItem('word')
        
            toes[1].value = localStorage.getItem('words')
            toes[2].value = localStorage.getItem('wordss')
            toes[3].value = localStorage.getItem('wordsss')
            toes[4].value = localStorage.getItem('wordssss')
            toes[5].value = localStorage.getItem('wordsssss')
            toes[6].value = localStorage.getItem('wordssssss')
            toes[7].value = localStorage.getItem('wordsssssss')
            toes[8].value = localStorage.getItem('wordssssssss')
        },);
           
 if(username.value == '' ){
    localStorage.clear('word')
    alert('input your username and enter the submit button')
    
}
    
      if (toes[0].value&&toes[1].value&&toes[2].value !=='' ){
      if(toes[0].value&&toes[1].value==toes[2].value){
      strike = document.querySelector("#strike-l1hor")
      strike.style.visibility = 'visible' 
      same = sessionStorage.getItem('name')
            
display = document.querySelector(".gameover")
display.style.visibility = 'visible'
alert(`${username.value} has won`)
       
    }}
             
 
       if(toes[0].value&&toes[3].value&&toes[6].value !==''){
        if(toes[0].value&&toes[3].value==toes[6].value){
        strike = document.querySelector("#strike-l1ver")
        strike.style.visibility = 'visible'
        same = sessionStorage.getItem('name')
    
             
display = document.querySelector(".gameover")
display.style.visibility = 'visible'
alert(`${username.value} has won`)
}}
             
        if(toes[2].value&&toes[5].value&&toes[8].value !==''){
        if(toes[2].value&&toes[5].value==toes[8].value){
        strike = document.querySelector("#strike-l3ver")
        strike.style.visibility = 'visible'
        same = sessionStorage.getItem('name')
                  
display = document.querySelector(".gameover")
display.style.visibility = 'visible'
alert(`${username.value} has won`) }}
           
     if(toes[1].value&&toes[4].value&&toes[7].value !==''){
     if(toes[1].value&&toes[4].value==toes[7].value){
     strike = document.querySelector("#strike-l2ver")
     strike.style.visibility = 'visible'
     same = sessionStorage.getItem('name')
                   
display = document.querySelector(".gameover")
display.style.visibility = 'visible'
alert(`${username.value} has won`)}}

        if(toes[3].value&&toes[4].value&&toes[5].value !==''){
        if(toes[3].value&&toes[4].value==toes[5].value){
        strike = document.querySelector("#strike-l2hor")
        strike.style.visibility = 'visible'
        same = sessionStorage.getItem('name')
                           
display = document.querySelector(".gameover")
display.style.visibility = 'visible' 
alert(`${username.value} has won`) }}

        if(toes[6].value&&toes[7].value&&toes[8].value !==''){
        if(toes[6].value&&toes[7].value==toes[8].value){
        strike = document.querySelector("#strike-l3hor")
        strike.style.visibility = 'visible'
        same = sessionStorage.getItem('name')
                        
display = document.querySelector(".gameover") 
display.style.visibility = 'visible'
alert(`${username.value} has won`)}}


       if(toes[0].value&&toes[4].value&&toes[8].value !==''){
        if(toes[0].value&&toes[4].value==toes[8].value){
        strike = document.querySelector("#strike-diagonal1")
        strike.style.visibility = 'visible'
        same = sessionStorage.getItem('name')
               
display = document.querySelector(".gameover")
display.style.visibility = 'visible'
alert(`${username.value} has won`) }}


       if(toes[2].value&&toes[4].value&&toes[6].value !==''){
       if(toes[2].value&&toes[4].value==toes[6].value){
       strike = document.querySelector("#strike-diagonal2")
       strike.style.visibility = 'visible'
       same = sessionStorage.getItem('name')
           
display = document.querySelector(".gameover")
display.style.visibility = 'visible'
alert(`${username.value} has won`) }}
})
     })
 
 
 function playon(){
    display = document.querySelector(".gameover")
    localStorage.clear()
    strike.style.visibility  = "hidden"
    if(strike.style.visibility = "hidden"){
    display.style.visibility = "hidden"
    }
 }

 function quit(){
  boxes =   document.querySelector(".tic")
  thanks = document.querySelector(".Thanks")
  boxes.style.visibility == "hidden"
  strike.style.visibility = "hidden"
  display.style.visibility = "hidden"
  thanks.style.visibility = "visible"
  thanks.innerHTML = `Thank you ${username.value} for playing my game`

 }
 
 
 
 
 
 
 
 
 
 
 
    