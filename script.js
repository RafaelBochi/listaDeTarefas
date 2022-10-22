const btnAddBasicList = document.querySelector(".addListBasic");
const dadosBasicList = document.querySelector(".basicListDados");
let divEditBasicList = document.querySelector(".editBasicList");

let inputTitleBasicList = document.querySelector("#titleInputBasic");
let inputDescripBasicList = document.querySelector("#descripInputBasic");
let inputDateBasicList = document.querySelector("#dateInputBasic");
let nivelPrioridade = document.querySelector(".number");

let inputEditTitleBasicList = document.querySelector("#titleEditInputBasic");
let inputEditDescripBasicList = document.querySelector(
  "#descripEditInputBasic"
);
let inputEditDateBasicList = document.querySelector("#dateEditInputBasic");
let nivelPrioridadeEdit = document.querySelector(".numberEdit");
let btnEditBasicList = document.querySelector("#editListBasic");

function openDadosBasic() {
  dadosBasicList.classList.toggle("open-close");
  inputDateBasicList.value = "";
  inputDescripBasicList.value = "";
  inputTitleBasicList.value = "";
  nivelPrioridade.value = "";
}

btnAddBasicList.addEventListener("click", openDadosBasic);

const validInput = () => {
  if (inputTitleBasicList.value.length < 5) {
    return inputTitleBasicList.classList.add("inputValid");
  } else if (inputDescripBasicList.value.length < 5) {
    return inputDescripBasicList.classList.add("inputValid");
  } else if (inputDateBasicList.value.length < 3) {
    return inputDateBasicList.classList.add("inputValid");
  } else {
    createBasicList();
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

const basicLists = document.querySelector("#listsBasic");
const btnCreateBasicList = document.querySelector("#createListBasic");

function createBasicList() {
  let title = inputTitleBasicList.value;
  let descrip = inputDescripBasicList.value;
  let prioridade = nivelPrioridade.value;
  let data = inputDateBasicList.value;

  const divListBasic = document.createElement("div");
  divListBasic.classList.add("listBasic");

  getDate(data);

  // Criação botão remover e concluir

  const actionsBasicList = document.createElement("div");
  actionsBasicList.classList.add("actions");

  const iconActionsBasciList = document.createElement("i");
  iconActionsBasciList.classList.add("fa-solid");
  iconActionsBasciList.classList.add("fa-ellipsis-vertical");
  iconActionsBasciList.classList.add("fa-2x");

  actionsBasicList.appendChild(iconActionsBasciList);

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

  actionsBasicList.appendChild(divItensActions);

  let prioridadeDiv = document.createElement("p");
  prioridadeDiv.classList.add("prioridade");
  prioridadeDiv.innerHTML = `Prioridade ${prioridade}`;

  // Criação Conteudo

  const titleBasicList = document.createElement("h1");
  titleBasicList.classList.add("title");
  titleBasicList.innerHTML = title;

  const decripBasicList = document.createElement("p");
  decripBasicList.classList.add("descrip");
  decripBasicList.innerHTML = descrip;

  const dateBasicList = document.createElement("div");
  dateBasicList.classList.add("date");

  dateBasicList.innerHTML = `<p>Data de entrega: ${diasTotal} dias`;

  divListBasic.appendChild(prioridadeDiv);
  divListBasic.appendChild(actionsBasicList);
  divListBasic.appendChild(titleBasicList);
  divListBasic.appendChild(decripBasicList);
  divListBasic.appendChild(dateBasicList);

  if (nivelPrioridade.value == 1) {
    divListBasic.classList.add("pr-um");
    basicLists.appendChild(divListBasic);
  }

  let prUM = document.querySelector(".pr-um");

  if (nivelPrioridade.value == 2) {
    basicLists.insertBefore(divListBasic, prUM);

    divListBasic.classList.add("pr-dois");
  } else if (nivelPrioridade.value == 3) {
    basicLists.insertBefore(divListBasic, basicLists.firstChild);

    divListBasic.classList.add("pr-tres");
  }

  openDadosBasic();

  iconActionsBasciList.addEventListener("click", () =>
    openItensActions(actionsBasicList)
  );
  complete.addEventListener("click", () =>
    completeBasicList(complete, divListBasic, decripBasicList, dateBasicList)
  );
  remove.addEventListener("click", () => removeBasicList(remove, divListBasic));

  edit.addEventListener("click", () =>
    openEditBasicList(edit, divListBasic, title, descrip, prioridade, data)
  );
}

const openItensActions = (actionsBasicList) => {
  let btnActions = document.querySelectorAll(".actions");

  for (let btnAction of btnActions) {
    if (btnAction.isSameNode(actionsBasicList)) {
      btnAction.children[1].classList.toggle("open-close");
    }
  }
};

const removeBasicList = (remove, divListBasic) => {
  let lists = document.querySelectorAll(".remove");

  for (let list of lists) {
    if (list.isSameNode(remove)) {
      divListBasic.remove();
    }
  }
};

const completeBasicList = (
  complete,
  divListBasic,
  decripBasicList,
  dateBasicList
) => {
  let lists = document.querySelectorAll(".complete");

  for (let list of lists) {
    if (
      list.isSameNode(complete) &&
      !divListBasic.classList.contains("concluida")
    ) {
      const icon = document.createElement("i");
      icon.classList.add("fa-regular");
      icon.classList.add("fa-circle-check");
      icon.classList.add("fa-4x");

      divListBasic.classList.add("concluida");

      decripBasicList.remove();

      divListBasic.insertBefore(icon, dateBasicList);
    }
  }
};

const openEditBasicList = (edit, divListBasic, title, descrip, prioridade, data) => {
  let lists = document.querySelectorAll(".edit");

  let listaAtual = divListBasic;

  for (let list of lists) {
    if (list.isSameNode(edit)) {
      divEditBasicList.classList.remove("open-close");

      inputEditTitleBasicList.value = title;
      inputEditDescripBasicList.value = descrip;
      nivelPrioridadeEdit.value = prioridade;
    }
  }

  btnEditBasicList.addEventListener("click", () =>
  editBasicList(edit, listaAtual, title, descrip, prioridade, data)
);

};

const editBasicList = (
  edit,
  listaAtual,
  title,
  descrip,
  prioridade,
  data
) => {
  let listas = document.querySelectorAll(".edit");

  title = inputEditTitleBasicList.value;
  descrip = inputEditDescripBasicList.value;
  prioridade = nivelPrioridadeEdit.value;
  data = inputEditDateBasicList.value;

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
};

btnCreateBasicList.addEventListener("click", () => validInput());
