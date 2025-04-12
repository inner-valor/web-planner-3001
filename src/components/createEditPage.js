import { v4 as uuidv4 } from 'uuid';
import { homePageController, listPageController } from './pageController';

function createEditPageFunction(selectedData, storedData) {
    const todoName = document.getElementById('todo-name');
    const createdList = document.getElementById('list-name');
    const createdListBtn = document.getElementById('add-list');
    const listContainer = document.querySelector('.list-container');
    const submitBtn = document.getElementById('submit');
    const cancelBtn = document.getElementById('cancel');
    let tempListData = [];

    if (selectedData.length === 0) {
        todoName.value = '';
        createdList.value = '';
        submitBtn.addEventListener('click', () => {
            const newData = {
                name: todoName.value,
                id: uuidv4(),
                favorite: false,
                listData: tempListData,
                date: new Date().toLocaleString(),
            };

            if (newData.name.trim() === '') {
                alert('please enter a name!')
            } else {
                storedData.push(newData);
                localStorage.setItem('storedData', JSON.stringify(storedData));
                homePageController(storedData);
            };
        });
    
        cancelBtn.addEventListener('click', () => {
            homePageController(storedData);
        })

    } else {
        todoName.value = selectedData[0].name;
        tempListData = Object.create(selectedData[0].listData);

        tempListCreator(tempListData);

        submitBtn.addEventListener('click', () => {
            selectedData[0].date = new Date().toLocaleString();
            selectedData[0].listData = [...tempListData];
            localStorage.setItem('storedData', JSON.stringify(storedData));
            listPageController(selectedData, storedData);

        })

        cancelBtn.addEventListener('click', () => {
            listPageController(selectedData, storedData);
        })
    }



    createdListBtn.addEventListener('click', () => {
        if (createdList.value.trim() === '') {
            alert('please enter a value!');
            return;
        } else {
            tempListData.push({ text: createdList.value, checked: false });
            createdList.value = '';
            tempListCreator(tempListData);
        }
        
    })

    function tempListCreator(listData) {
        while (listContainer.firstChild) {
            listContainer.removeChild(listContainer.firstChild);
        };

        let i = 0;
    
        listData.forEach(list => {
            const div = document.createElement('div');
            const deleteBtn = document.createElement('button');
            const text = list.text;
    
            div.className = 'list';
            div.textContent = text;
            div.id = i;

            deleteBtn.className = 'material-symbols-outlined delete-btn';
            deleteBtn.textContent = 'delete';
    
            if (list.checked === true) {
                div.classList.add('checked');
            } else {
                div.classList.remove('checked');
            }

            deleteBtn.addEventListener('click', (e) => {
                tempListData.splice(e.target.parentNode.id, 1);
                div.remove();
                tempListCreator(tempListData);

            })
    
            div.appendChild(deleteBtn);
            listContainer.appendChild(div);
    
            i++;
        });
    }

}

export default createEditPageFunction;