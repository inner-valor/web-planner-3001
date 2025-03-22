import { listPageTemplate } from "./pageManager";

function homePageFunction(data) {
    window.addEventListener('click', (e) => {
        if (e.target.dataset.btn === 'createList') {
            listPageTemplate()
        }
    });

    let todoData = data;
    const todoContainer = document.querySelector('.home-page');

    todoData.forEach(item => {
        todoContainer.appendChild(addDataToList(item));
    });

    console.log(todoData)

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