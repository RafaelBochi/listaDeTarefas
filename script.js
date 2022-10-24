

const btnAddList = document.querySelector(".addList");
const dadosList = document.querySelector(".listDados");
let divEditList = document.querySelector(".editList");

let inputTitleList = document.querySelector("#titleInput");
let inputDescripList = document.querySelector("#descripInput");
let inputDateList = document.querySelector("#dateInput");
let nivelPriority = document.querySelector("#priority");

let inputEditTitleList = document.querySelector("#titleEditInput");
let inputEditDescripList = document.querySelector(
  "#descripEditInput"
);
let inputEditDateList = document.querySelector("#dateEditInput");
let nivelPriorityEdit = document.querySelector("#priorityEditInput");
let btnEditList = document.querySelector("#editList");

function openDados() {
  dadosList.classList.toggle("open-close");
  inputDateList.value = "";
  inputDescripList.value = "";
  inputTitleList.value = "";
  nivelPriority.value = "";
}



btnAddList.addEventListener("click", openDados);

const validInput = () => {
  if (inputTitleList.value.length < 5) {
    return inputTitleList.classList.add("inputValid");
  } else if (inputDescripList.value.length < 5) {
    return inputDescripList.classList.add("inputValid");
  } else if (inputDateList.value.length < 3) {
    return inputDateList.classList.add("inputValid");
  } else {
    createList();
  }
};

let diasTotal;

function getDate(data) {
  let dataAtual = new Date();
  let diaAtual = Number(dataAtual.getDate());
  let mesAtual = Number(dataAtual.getMonth()) + 1;

  let dataEntrega = new Date(data);
  let diaEntrega = Number(dataEntrega.getDate());
  let mesEntrega = Number(dataEntrega.getMonth()) + 1;

  let diasDiferenca = diaEntrega - diaAtual;

  diasTotal = diasDiferenca;

  for (let i = mesAtual + 1; i <= mesEntrega; i++) {
    if (i == 2) {
      diasTotal += 28;
    } else if (i % 2 === 0) {
      diasTotal += 31;
    } else {
      diasTotal += 30;
    }
  }
}

const lists = document.querySelector("#lists");
const btnCreateList = document.querySelector("#createList");

function createList() {
  let title = inputTitleList.value;
  let descrip = inputDescripList.value;
  let priority = nivelPriority.value;
  let date = inputDateList.value;

  const divList = document.createElement("div");
  divList.classList.add("list");

  getDate(date);

  // Criação botão remover e concluir

  const actionsList = document.createElement("div");
  actionsList.classList.add("actions");

  const iconActionsList = document.createElement("i");
  iconActionsList.classList.add("fa-solid");
  iconActionsList.classList.add("fa-ellipsis-vertical");
  iconActionsList.classList.add("fa-2x");

  actionsList.appendChild(iconActionsList);

  const divItensActions = document.createElement("div");
  divItensActions.classList.add("itensActions");
  divItensActions.classList.add("open-close");

  const remove = document.createElement("div");
  remove.classList.add("remove");

  const textRemove = document.createElement("p");
  textRemove.innerHTML = "Remover";

  const iconRemove = document.createElement("i");
  iconRemove.classList.add("fa-solid");
  iconRemove.classList.add("fa-trash-can");

  remove.appendChild(textRemove);
  remove.appendChild(iconRemove);

  const complete = document.createElement("div");
  complete.classList.add("complete");

  const textComplete = document.createElement("p");
  textComplete.innerHTML = "Concluir";

  const iconComplete = document.createElement("i");
  iconComplete.classList.add("fa-solid");
  iconComplete.classList.add("fa-check");

  complete.appendChild(textComplete);
  complete.appendChild(iconComplete);

  const edit = document.createElement("div");
  edit.classList.add("edit");

  const textEdit = document.createElement("p");
  textEdit.innerHTML = "Editar";

  const iconEdit = document.createElement("i");
  iconEdit.classList.add("fa-solid");
  iconEdit.classList.add("fa-pen");

  edit.appendChild(textEdit);
  edit.appendChild(iconEdit);

  divItensActions.appendChild(remove);
  divItensActions.appendChild(complete);
  divItensActions.appendChild(edit);

  actionsList.appendChild(divItensActions);

  let prioridadeDiv = document.createElement("p");
  prioridadeDiv.classList.add("prioridade");
  prioridadeDiv.innerHTML = `Prioridade ${priority}`;

  // Criação Conteudo

  const titleList = document.createElement("h1");
  titleList.classList.add("title");
  titleList.innerHTML = title;

  const decripList = document.createElement("p");
  decripList.classList.add("descrip");
  decripList.innerHTML = descrip;

  const dateList = document.createElement("div");
  dateList.classList.add("date");

  dateList.innerHTML = `<p>Data de entrega: ${diasTotal} dias`;

  divList.appendChild(prioridadeDiv);
  divList.appendChild(actionsList);
  divList.appendChild(titleList);
  divList.appendChild(decripList);
  divList.appendChild(dateList);

  if (nivelPriority.value == 1) {
    divList.classList.add("pr-um");
    lists.appendChild(divList);
  }

  let prUM = document.querySelector(".pr-um");

  if (nivelPriority.value == 2) {
    lists.insertBefore(divList, prUM);

    divList.classList.add("pr-dois");
  } else if (nivelPriority.value == 3) {
    lists.insertBefore(divList, lists.firstChild);

    divList.classList.add("pr-tres");
  }

  openDados();

  iconActionsList.addEventListener("click", () =>
    openItensActions(actionsList)
  );
  complete.addEventListener("click", () =>
    completeList(complete, divList, decripList, dateList)
  );
  remove.addEventListener("click", () => removeList(remove, divList));

  edit.addEventListener("click", () =>
    openEditBasicList(edit, divList, title, descrip, priority, date)
  );

  localStorage();
}

const openItensActions = (actionsList) => {
  let btnActions = document.querySelectorAll(".actions");

  for (let btnAction of btnActions) {
    if (btnAction.isSameNode(actionsList)) {
      btnAction.children[1].classList.toggle("open-close");
    }
  }
};

const removeBasicList = (remove, divList) => {
  let lists = document.querySelectorAll(".remove");

  for (let list of lists) {
    if (list.isSameNode(remove)) {
      divList.remove();
    }
  }

  localStorage();
};

const completeList = (
  complete,
  divList,
  decripList,
  dateList
) => {
  let lists = document.querySelectorAll(".complete");

  for (let list of lists) {
    if (
      list.isSameNode(complete) &&
      !divList.classList.contains("completed")
    ) {
      const icon = document.createElement("i");
      icon.classList.add("fa-regular");
      icon.classList.add("fa-circle-check");
      icon.classList.add("fa-4x");

      divList.classList.add("completed");

      decripList.remove();

      divList.insertBefore(icon, dateList);
    }
  }

  localStorage();
};

const openEditList = (edit, divList, title, descrip, priority, date) => {
  let lists = document.querySelectorAll(".edit");

  let listaAtual = divList;

  for (let list of lists) {
    if (list.isSameNode(edit)) {
      divEditList.classList.remove("open-close");

      inputEditTitleList.value = title;
      inputEditDescripList.value = descrip;
      nivelPriorityEdit.value = priority;
    }
  }

  btnEditList.addEventListener("click", () =>
  editList(edit, listaAtual, title, descrip, priority, date)
);

};

const editList = (
  edit,
  listaAtual,
  title,
  descrip,
  priority,
  date
) => {
  let listas = document.querySelectorAll(".edit");

  title = inputEditTitleList.value;
  descrip = inputEditDescripList.value;
  priority = nivelPriorityEdit.value;
  date = inputEditDateList.value;

  inputTitleBasicList.value = title;
  inputDescripBasicList.value = descrip;
  nivelPrioridade.value = prioridade;
  inputDateBasicList.value = data;

  for (let lista of listas) {
    if (lista.isSameNode(edit)) {
      createBasicList();
      listaAtual.remove();
      divEditBasicList.classList.add("open-close");
    }
  }

  localStorage();
};

const localStorage = () => {

  const lists = document.querySelectorAll('.list');

  localStorageLists = [...lists].map((list) => {

    const pr = list.children[0];
    const tt = list.children[2];
    const dc = list.children[3];
    const dt = list.children[4];
    const completed = list.classList.contains('completed');

    return { prioridadeLS: pr.innerHTML, titleLS: tt.innerHTML, descripLS: dc.innerHTML, dateLS: dt.innerHTML, completed };

  });

  window.localStorage.setItem("lists", JSON.stringify(localStorageLists));

}

const refreshLocalStorage = () => {

  const listsFromLocalStorage = JSON.parse(window.localStorage.getItem("lists"));

  console.log(listsFromLocalStorage)

  if (!listsFromLocalStorage) return;

  for (let listLS of listsFromLocalStorage) {
     
    const divList = document.createElement("div");
  divList .classList.add("list");

  // Criação botão remover e concluir

  const actionsList = document.createElement("div");
  actionsList.classList.add("actions");

  const iconActionsList = document.createElement("i");
  iconActionsList.classList.add("fa-solid");
  iconActionsList.classList.add("fa-ellipsis-vertical");
  iconActionsList.classList.add("fa-2x");

  actionsList.appendChild(iconActionsList);

  const divItensActions = document.createElement("div");
  divItensActions.classList.add("itensActions");
  divItensActions.classList.add("open-close");

  const remove = document.createElement("div");
  remove.classList.add("remove");

  const textRemove = document.createElement("p");
  textRemove.innerHTML = "Remover";

  const iconRemove = document.createElement("i");
  iconRemove.classList.add("fa-solid");
  iconRemove.classList.add("fa-trash-can");

  remove.appendChild(textRemove);
  remove.appendChild(iconRemove);

  const complete = document.createElement("div");
  complete.classList.add("complete");

  const textComplete = document.createElement("p");
  textComplete.innerHTML = "Concluir";

  const iconComplete = document.createElement("i");
  iconComplete.classList.add("fa-solid");
  iconComplete.classList.add("fa-check");

  complete.appendChild(textComplete);
  complete.appendChild(iconComplete);

  const edit = document.createElement("div");
  edit.classList.add("edit");

  const textEdit = document.createElement("p");
  textEdit.innerHTML = "Editar";

  const iconEdit = document.createElement("i");
  iconEdit.classList.add("fa-solid");
  iconEdit.classList.add("fa-pen");

  edit.appendChild(textEdit);
  edit.appendChild(iconEdit);

  divItensActions.appendChild(remove);
  divItensActions.appendChild(complete);
  divItensActions.appendChild(edit);

  actionsList.appendChild(divItensActions);

  let priorityDiv = document.createElement("p");
  priorityDiv.classList.add("priority");
  priorityDiv.innerHTML = listLS.prioridadeLS;

  // Criação Conteudo

  const titleList = document.createElement("h1");
  titleList.classList.add("title");
  titleList.innerHTML = listLS.titleLS;

  const decripList = document.createElement("p");
  decripList.classList.add("descrip");
  decripList.innerHTML = listLS.descripLS;

  const dateList = document.createElement("div");
  dateList.classList.add("date");

  dateList.innerHTML = listLS.dateLS;

  divList.appendChild(priorityDiv);
  divList.appendChild(actionsList);
  divList.appendChild(titleList);
  divList.appendChild(decripList);
  divList.appendChild(dateList);

  if (complete) {
    const icon = document.createElement("i");
      icon.classList.add("fa-regular");
      icon.classList.add("fa-circle-check");
      icon.classList.add("fa-4x");

      divList.classList.add("completed");

      decripList.remove();

      divList.insertBefore(icon, dateList);
  }

  if (listLS.prioridadeLS == "Prioridade 1") {
    divList.classList.add("pr-um");
    lists.appendChild(divList);
  }

  let prUM = document.querySelector(".pr-um");

  if (listLS.priorityLS == "Prioridade 2") {
    lists.insertBefore(divList, prUM);

    divList.classList.add("pr-dois");
  } else if (listLS.prioridadeLS == "Prioridade 3") {
    lists.insertBefore(divList, lists.firstChild);

    divList.classList.add("pr-tres");
  }

  iconActionsList.addEventListener("click", () =>
    openItensActions(actionsList)
  );
  complete.addEventListener("click", () =>
    completeList(complete, divList, decripList, dateList)
  );
  remove.addEventListener("click", () => removeBasicList(remove, divList));

  edit.addEventListener("click", () =>
    openEditBasicList(edit, divList, listLS.titleLS, listLS.descripLS, listLS.priorityLS, listLS.dateLS)
  );

}

}


refreshLocalStorage();


btnCreateList.addEventListener("click", () => validInput());
