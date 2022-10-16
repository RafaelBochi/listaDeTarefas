const btnAddBasicList = document.querySelector('.addListBasic');
const dadosBasicList = document.querySelector('.basicListDados');

    let inputTitleBasicList = document.querySelector('#titleInputBasic');
    let inputDescripBasicList = document.querySelector('#descripInputBasic');
    let inputDateBasicList = document.querySelector('#dateInputBasic');
    

const openDadosBasic = () => {

    dadosBasicList.classList.toggle('open-close');
    inputDateBasicList.value = "";
    inputDescripBasicList.value = "";
    inputTitleBasicList.value = "";
}

btnAddBasicList.addEventListener("click", () => openDadosBasic());

const basicLists = document.querySelector('#listsBasic')
const btnCreateBasicList = document.querySelector('#createListBasic');


const createBasicList = () => {

    const divListBasic = document.createElement('div');
divListBasic.classList.add('listBasic');

    const actionsBasicList = document.createElement('div')
    actionsBasicList.classList.add('actions');

    const iconActionsBasciList = document.createElement('i');
    iconActionsBasciList.classList.add('fa-solid');
    iconActionsBasciList.classList.add('fa-ellipsis-vertical');
    iconActionsBasciList.classList.add('fa-2x');

    actionsBasicList.appendChild(iconActionsBasciList);

    const divItensActions = document.createElement('div');
    divItensActions.classList.add('itensActions');
    divItensActions.classList.add('open-close');


    const remove = document.createElement('div');
    remove.classList.add('remove');

    const textRemove = document.createElement('p');
    textRemove.innerHTML = "Remover";

    const iconRemove = document.createElement('i');
    iconRemove.classList.add('fa-solid')
    iconRemove.classList.add('fa-trash-can')

    remove.addEventListener('click', () => removeBasicList(remove, divListBasic))

    remove.appendChild(textRemove);
    remove.appendChild(iconRemove);

    const complete = document.createElement('div');
    complete.classList.add('complete');

    const textComplete = document.createElement('p');
    textComplete.innerHTML = "Concluir";

    const iconComplete = document.createElement('i');
    iconComplete.classList.add('fa-solid')
    iconComplete.classList.add('fa-check')

    complete.appendChild(textComplete);
    complete.appendChild(iconComplete);


    divItensActions.appendChild(remove);
    divItensActions.appendChild(complete);

    actionsBasicList.appendChild(divItensActions)

    
    iconActionsBasciList.addEventListener('click', () => openItensActions(actionsBasicList))

    const titleBasicList = document.createElement('h1');
    titleBasicList.classList.add('title');
    titleBasicList.innerHTML = inputTitleBasicList.value;

    const decripBasicList = document.createElement('p');
    decripBasicList.classList.add('descrip');
    decripBasicList.innerHTML = inputDescripBasicList.value;

    const dateBasicList = document.createElement('div');
    dateBasicList.classList.add('date');
    dateBasicList.innerHTML = inputDateBasicList.value;

    divListBasic.appendChild(actionsBasicList)
    divListBasic.appendChild(titleBasicList);
    divListBasic.appendChild(decripBasicList);
    divListBasic.appendChild(dateBasicList);

    basicLists.appendChild(divListBasic);

    btnAddBasicList.click();
}

const openItensActions = (actionsBasicList) => {
    let btnActions = document.querySelectorAll('.actions');

    for(let btnAction of btnActions) {
        if (btnAction.isSameNode(actionsBasicList)){
            btnAction.children[1].classList.toggle('open-close');
        }
    }
};

const removeBasicList = (remove, divListBasic) => {
    let lists = document.querySelectorAll('.remove');

    for (let list of lists) {
        if (list.isSameNode(remove)) {
            divListBasic.remove();
        }
        
    }
}

btnCreateBasicList.addEventListener('click', () => createBasicList());





