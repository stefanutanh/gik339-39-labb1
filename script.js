const checkbox = document.getElementById('divStyle');
const textFields = document.getElementsByClassName('textfield');
const button = document.querySelector('#button');
const contentDiv = document.getElementsByClassName('content-div')[0];

function handleInput(e) {
    console.log(e.target); 
    if (e.target.name === 'content') {
        contentDiv.innerHTML = e.target.value;
    }
}

checkbox.addEventListener('change', function() {
    const colorInput = document.getElementById('color');
    contentDiv.style.backgroundColor = colorInput.value;
    console.log(checkbox)
});

Array.from(textFields).forEach(field => {
    field.addEventListener('input', handleInput);
});

button.addEventListener('click', function() {
    contentDiv.remove();
    console.log("Removed element");
});



