
const checkBox = document.querySelector(".checkbox");
const inputFields = document.querySelectorAll(".textfield");
const button = document.getElementById("button");
const contentDiv = document.getElementById('content-div');
console.log(checkBox, button, contentDiv, inputFields);

function handleInput(e) {
    console.log("handleInput", e.target);
    if (e.target.name === 'content') {
        contentDiv.innerHTML = e.target.value;
    }
}

inputFields.forEach(field => field.addEventListener('input', handleInput));

checkBox.addEventListener('change', function() {
    const colorInput = document.getElementById('color');
    contentDiv.style.backgroundColor = colorInput.value;
    console.log("checkbox triggad");
});

button.addEventListener('click', function() {
    contentDiv.remove();
    console.log("borttagen");
});

