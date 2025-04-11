import { listPageController, createEditPageController } from "./pageController";


function homePageFunction(data) {
    
    window.addEventListener('click', (e) => {
        if (e.target.dataset.btn === 'createList') {
            createEditPageController([], data);
            
            
        }
    });

    let todoData = data;
    const todoContainer = document.querySelector('.home-page');

    todoData.forEach(item => {
        todoContainer.appendChild(addDataToList(item));
    });

    todoContainer.addEventListener('click', (e) => {
        let selectedDiv;
        let selectedData = [];

        // if the mouse clicked the div or the h2, the main list is picked
        if (e.target.tagName === 'DIV' && !e.target.classList.contains('home-page')) {
            selectedDiv = e.target;
            selectedData = todoData.filter((todo) => todo.id === selectedDiv.id);
            listPageController(selectedData, data);
        }  else if (e.target.tagName === 'H2' || e.target.tagName === 'I') {
            selectedDiv = e.target.parentNode;
            selectedData = todoData.filter((todo) => todo.id === selectedDiv.id);
            
            if (e.target.tagName === 'I') { // toggles the favorite button
                selectedData[0].favorite = !selectedData[0].favorite;
                selectedDiv.querySelector('i').classList.toggle('filled'); 
            } else {
                listPageController(selectedData, data);
            }
        } else {
            return;
        }         
    })
}



function addDataToList(data) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const starIcon = document.createElement('i');

    div.className = 'todo-box';
    div.id = data.id;

    h2.textContent = data.name;

    starIcon.className = 'material-symbols-outlined';
    starIcon.textContent = 'star';

    if (data.favorite === true) {
        starIcon.classList.add('filled');
    } else {
        starIcon.classList.remove('filled');
    };

    div.appendChild(h2);
    div.appendChild(starIcon);

    return div;


}

export default homePageFunction;