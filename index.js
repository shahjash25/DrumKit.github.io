//Event listner
// document.querySelector("button").addEventListener("click",handleClick);
//It will be executed on first button only
//didnt add paranthesis coz it will be executed on its own

// function handleClick(){
//     alert("I got clicked!");
// }

//querySelectorAll(".class/id/tag")
//will consider all of them having same classs/is/tag.

//anonymus functions

var noOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<noOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // var audio=new Audio('sounds/tom-1.mp3');
        // audio.play();
        // console.log(this.innerHTML);
        var key=this.innerHTML;
        makeSound(key);
    })
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
})

function makeSound(key){
switch (key) {
    case "w":
        var tom1=new Audio('sounds/tom1.mp3');
        tom1.play();
        break;
    case "a":
        var tom2=new Audio('sounds/tom2.mp3');
            tom2.play();
        break;    
    case "s":
        var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
    case "d":
        var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
    case "j":
        var snare=new Audio('sounds/snare.mp3');
            snare.play();
        break;
    case "k":
        var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
        break; 
    case "l":
        var crash=new Audio('sounds/crash.mp3');
            crash.play();
        break;          
    default:
        console.log(this.addEventListener);
        break;
}
}