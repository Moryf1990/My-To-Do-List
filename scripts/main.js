
var userInput = document.querySelector('.userInput');
var toDoItems = document.querySelector('.toDoItems');
var toDoList = document.querySelector('.toDoList');
var addBtn = document.querySelector('.addBtn');
var resetBtn = document.querySelector('.resetBtn');
var userInput = [];
var newListItems = '';
function clearText() {
    toDoItems.value = '';
}
function render() {
    toDoList.innerHTML = '';
    newListItems = '';
    for (var i = 0; i < userInput.length; i++) {
        newListItems += userInput[i] + '<br>';
        toDoList.innerHTML = newListItems;
    }
}

toDoItems.addEventListener('click', clearText);
addBtn.addEventListener('click', function() {
    userInput.push(toDoItems.value);
    render();
    console.log(toDoItems.value);

});
resetBtn.addEventListener('click', function() {
    userInput = [];
    newListItems = '';
    toDoList.innerHTML = '';
});
