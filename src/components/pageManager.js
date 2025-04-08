const contentContainer = document.getElementById('content');
let page;


export function homePageTemplate(data) {
    if (data.length !== 0) {
        page = `
            <div class="center-container">
                <div class="home-page grid">
                    
                </div>
            </div>
        `;

    } else {
        page = `
            <div class="center-container">
                <div class="home-page empty">  
                    <button type="button" data-btn="createList">
                        make a list
                    </button>
                </div>
            </div>
        `;

    }

    contentContainer.innerHTML = page;


};

export function listPageTemplate() {

    page = `
        <div class="center-container">
            <div class="list-page">
                <div class="list-options">
                    <div class="back">
                        <i class="material-symbols-outlined"
                            >keyboard_backspace</i
                        >
                    </div>
                    <div class="edit">
                        <i class="material-symbols-outlined">edit</i>
                    </div>
                    <div class="trash">
                        <i class="material-symbols-outlined">delete</i>
                    </div>
                </div>

                <div class="list-container">
                    
                </div>
            </div>
        </div>
    `;

    contentContainer.innerHTML = page;

};

export function editPageTemplate() {
    page = `
        <div class="center-container">
            <div class="create-list-page">
                <div class="create-name">
                    <label for="todo-name">name:</label>
                    <input type="text" name="todo-name" id="todo-name" autocomplete="off" />
                </div>

                <div class="create-list">
                    <label for="list-name">list:</label>
                    <div class="list-input-container">
                        <input type="text" name="list-name" id="list-name" autocomplete="off" />
                        <button class="material-symbols-outlined" id="add-list" type='button'>
                            add
                        </button>
                    </div>
                    <ul class="list-container">
                        
                    </ul>
                </div>
                <div class="submit-cancel-container">
                    <button type="button" id="submit">submit</button>
                    <button type="button" id="cancel">cancel</button>
                </div>
            </div>
        </div>
    `;

    contentContainer.innerHTML = page;

}