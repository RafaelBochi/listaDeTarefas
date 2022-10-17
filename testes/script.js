const dataAtual = new Date();

const diaAtual = dataAtual.getDate();
const mesAtual = dataAtual.getMonth() +1;

const input = document.querySelector('input');

const dataEntrega = new Date(input.value);

const diaEntrega = dataEntrega.getDate();
const mesEntrega = dataEntrega.getMonth() +1;