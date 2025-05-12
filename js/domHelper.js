export const showMenus = (element) => {
    taskListContainer.style.display = 'none';
    addTaskContainer.style.display = 'none';
    timeContainer.style.display = 'none';
    addEventContainer.style.display = 'none'
    element.style.display = 'flex'
};
export const showFilter = (divDisplay) => {
    filter.style.display = divDisplay;
};
export const elementsValuesForConfirmEditAction = (element, text) => {
    let elementDiv = document.createElement(element);
    const txt = document.createTextNode(text);
    elementDiv.append(txt);
    return elementDiv;
};
export const createInput = (prevValue) => {
    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('autocomplete', 'task');
    textInput.setAttribute('required', 'required');
    textInput.value = prevValue;
    return textInput;
};

export const createSelect = (prevValue) => {
    const selectInput = document.createElement('select');
    selectInput.append(optionsForSelectEditTaskStatus('Pendiente'));
    selectInput.append(optionsForSelectEditTaskStatus('Finalizado'));
    selectInput.append(optionsForSelectEditTaskStatus('No iniciada'));
    selectInput.value = prevValue;
    return selectInput;
};

const optionsForSelectEditTaskStatus = (value) => {
    const optionEnded = document.createElement('option');
    optionEnded.setAttribute('value', value);
    const textOptionEnded = document.createTextNode(value);
    optionEnded.append(textOptionEnded);
    return optionEnded;
};

export const generateTaskDivByType = (type) => {
    const div = document.createElement('div');
    div.setAttribute('class', `main__container__taskList__cart__grid__itemsType${type}`);
    return div;
};

export const createH3orH2 = (text, type) => {
    const h3OrH2 = document.createElement(type);
    const txt = document.createTextNode(text);
    h3OrH2.append(txt);
    return h3OrH2;
};
export const createBut = (txt, classCss, id, callback) => {
    const but = document.createElement('button');
    let text = document.createTextNode(txt);
    but.append(text);
    but.setAttribute('class', classCss);
    but.setAttribute('id', id);
    but.addEventListener('click', callback);
    return but;
};
