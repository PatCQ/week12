//1. get a reference to the button -> querySelector
//2. define a function to alert the user
//3. add the function as event listener

let btn = document.querySelector("button");
function buttonPressed() {
    alert("Button pressed");
}
btn.addEventListener("click", buttonPressed, {once: true});
