//1. get a reference to the button -> querySelector
//2. define a function to alert the user
//3. add the function as event listener

const btn = document.querySelector("button");
function buttonPressed() {
    alert("Button pressed");
}
function changeBGPink() {
    document.body.classList.add("pinkBG");
}
function changeText() {
    if (btn.textContent == "Clicked!") {
        btn.textContent = "Click me!";
    }
    else {
        btn.textContent = "Clicked!"
    }
}
btn.addEventListener("click", buttonPressed, {once: true});
btn.addEventListener("click", changeBGPink, {once: true});
btn.addEventListener("click", changeText);