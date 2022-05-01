const $button = document.querySelector('button');
const $input = document.querySelector("input");
const $lista = document.querySelector('ol');
const $avarege = document.querySelector('#avarege');
const $approval = document.querySelector('#approval');

let total = 0;
let qtdNotas = 0;
let media = 0;

function handleClick(event) {
  event.preventDefault();

  const nota = $input.value;

  if (nota >= 0 && nota <= 10 && nota !== '' && qtdNotas <= 3) {
    if (nota < 7) {
        $lista.insertAdjacentHTML('beforeend', `<li style='color:#ff5252'>${parseInt(nota)}</li>`);
    } else {
        $lista.insertAdjacentHTML('beforeend', `<li>${parseInt(nota)}</li>`);
    }
      
      qtdNotas++;
      total += Number(nota); 
      media = total / qtdNotas;

      $avarege.textContent = media.toFixed(1);
  };

  if (media >= 7) {
    $approval.textContent = 'Sim';
    $approval.style = 'color: #33d9b2';
  } else {
    $approval.textContent = 'Não';
    $approval.style = 'color: #ff5252';
  };

  if ($input.disabled) {
    buttonLimpar();
  };

  if (qtdNotas === 4) {
    $input.setAttribute('disabled', 'disabled');
    $button.textContent = 'Limpar';
    $button.style = 'background-color: #778beb;';
  };

  $input.value = '';
};

function buttonLimpar() {
  while ($lista.firstChild) {
    $lista.removeChild($lista.firstChild);
  };

  $avarege.textContent = 0;
  $approval.textContent = 'Não';
  $approval.style = 'color: #ff5252';

  $button.textContent = 'Registrar';
  $button.style = 'background-color: #209CEE;';
  $input.disabled = false;
  total = 0;
  qtdNotas = 0;
  media = 0;
};

$button.addEventListener('click', handleClick);