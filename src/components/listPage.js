import { homePageController } from "./pageController";

function listPageFunction(selectedData, storedData) {
    listOptions(storedData);
    makeList(selectedData[0])
    clickHandler(selectedData[0]);
    
}

function makeList(todo) {
    const listContainer = document.querySelector('.list-container');
    let i = 0;

    todo.listData.forEach(list => {
        const div = document.createElement('div');
        const text = list.text;

        div.className = 'list';
        div.textContent = text;
        div.id = i;

        if(list.checked === true) {
            div.classList.add('checked');
        } else {
            div.classList.remove('checked');
        }

        listContainer.appendChild(div);

        i++;
    });

    const dateDiv = document.createElement('div');
    const date = document.createElement('p');

    dateDiv.className = 'date-container';
    
    date.textContent = `updated at ${todo.date}`;

    dateDiv.appendChild(date);

    listContainer.appendChild(dateDiv);

};

function listOptions(storedData) {
    const optionsContainer = document.querySelector('.list-options');
    const options = optionsContainer.querySelectorAll('div');

    options.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.currentTarget.className === 'back') {
                homePageController(storedData);
            } else if (e.currentTarget.className === 'trash') {
                console.log('trash');
            } else {
                console.log('edit');
            }
        })
    })
    
};

function clickHandler(selectedData) {
    const listContainer = document.querySelector('.list-container');

    listContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('list')) {
            e.target.classList.toggle('checked');

            if (e.target.classList.contains('checked')) {
                selectedData.listData[e.target.id].checked = true;
            } else {
                selectedData.listData[e.target.id].checked = false;
            }

            
        }
    })

    
}





export default listPageFunction;