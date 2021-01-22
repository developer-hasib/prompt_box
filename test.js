let perName = prompt("What is your name?");

if(perName){
    document.querySelector("#enter_person").innerHTML = perName + "!";
}else{
    document.querySelector("#enter_person").innerHTML = "Hi There!";
}
