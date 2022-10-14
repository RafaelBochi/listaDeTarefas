const btnAddBasicList = document.getElementById('addListBasic');
const blockBasicList = document.getElementById('listsBasic');
const blockBasicListDados = document.getElementById('basicListDados');
const btnCreate = document.getElementById('createListBasic')

btnAddBasicList.addEventListener('click', openListBasic);


let i = true;
function openListBasic() {

    if (i == true) {
        blockBasicListDados.style.display = "flex";
        i = false}
    else {
        blockBasicListDados.style.display = "none";
        i = true
    }
}

let inputTitleBasicList = document.getElementById('titleInputBasic');
let inputDescripBasicList = document.getElementById('descripInputBasic');
let inputDateBasicList = document.getElementById('dateInputBasic');

btnCreate.addEventListener('click', createBasicList);

function createBasicList() {

    if (inputTitleBasicList.value == '') alert('Adicione um titulo');
    else if (inputDescripBasicList.value == '') alert('Adicione uma descrição');
    else if (inputDateBasicList.value == '') {
         inputDateBasicList.value = "Sem data";
        
         blockBasicList.innerHTML = blockBasicList.innerHTML + `<div class="listBasic"> 

         <p class="title">
             <strong>a</strong>
         </p>
     
         <p class="descrip">
             s
         </p>
     
         <div class="date">
            <p>Sem data</p>
             <span id="removeBasicList">Remover</span>  
         </div>
     
     </div>
         `

        }

    else {
        blockBasicList.innerHTML = blockBasicList.innerHTML + `<div class="listBasic"> 

        <p class="title">
            <strong>a</strong>
        </p>
    
        <p class="descrip">
            s
        </p>
    
        <div class="date">
           <p>${inputDateBasicList.value}</p>
            <span id="removeBasicList">Remover</span>  
        </div>
    
    </div>
        `
    }
}

const btnRemoveBasicList = document.getElementById('removeBasicList');

let listsBasic = document.getElementsByClassName('listBasic');

btnRemoveBasicList.addEventListener('click', removerListBasic);

function removerListBasic(event) {
    console.log(event)
}
