let ToDo = [];

const inputEL = document.getElementById("inp-el");
const inputBtn = document.getElementById("btn-inp");
const listEL = document.getElementById("list-el");

inputBtn.addEventListener('click', () => {
  if (inputEL.value !=""){
    ToDo.push(inputEL.value);
    inputEL.value = "";
    createToDo();
  }
});

function createToDo() {
    let DOList = "";
    for (let i = 0; i < ToDo.length; i++) {
        DOList += `
            <div class="flex-container todocon rounded bgpink">
                <div class="flex-items">
                    ${ToDo[i]}
                </div>
                <div class="flex-items">
                    <button class="remove-btn btn">Remove</button>
                </div>
            </div>
        `;
    }
    listEL.innerHTML = DOList;

    const removeButtons = document.querySelectorAll('.remove-btn');
    
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            removeToDo(index);
        });
    });
}

function removeToDo(index) {
    ToDo.splice(index, 1);
    createToDo();
}