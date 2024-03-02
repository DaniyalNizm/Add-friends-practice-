var istatus = document.querySelector("h5")
var btn = document.querySelector("#Add")


let flag = 0 
btn.addEventListener("click",function(){
    if(flag == 0){
    istatus.innerHTML = "Friend"
    istatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
   flag = 1
}else{
    istatus.innerHTML = "stranger"
    istatus.style.color = "red"
    btn.innerHTML = "Add Friend"
    flag = 0
}
 })

