function createGame(player1, hour, player2) {
  return `
<li>
  <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
  <strong>${hour}</strong>
  <img
    src="./assets/icon-${player2}.svg"
    alt="Bandeira de ${player2}"
  />
</li> 
  `
}

function createCard(date, day, games) {
  return `
<div class="card">
   <h2>${date} <span>${day}</span></h2>
   <ul>
  ${games}
   </ul>
</div>
  `
}

document.querySelector('#app').innerHTML = `
<header>
<img
  src="./assets/logo.svg"
  alt="Imagem do projeto NLW Copa, mais o título Calendário"
/>
</header>
 <main id="cards">

${createCard('21/11', 'segunda', createGame('eua', '16:00', 'gales'))}

${createCard('22/11', 'terça', createGame('franca', '16:00', 'australia'))}

${createCard('23/11', 'quarta', createGame('alemanha', '10:00', 'japao'))}

${createCard('24/11', 'quinta', createGame('brasil', '16:00', 'servia'))}

${createCard('25/11', 'sexta', createGame('eua', '16:00', 'inglaterra'))}

${createCard(
  '26/11',
  'sábado',
  createGame('franca', '13:00', 'dinamarca') +
    createGame('argentina', '16:00', 'mexico')
)}

${createCard('27/11', 'domingo', createGame('espanha', '13:00', 'alemanha'))}

${createCard(
  '28/11',
  'segunda',
  createGame('brasil', '13:00', 'suica') +
    createGame('portugal', '16:00', 'uruguai')
)}

${createCard('29/11', 'terça', createGame('gales', '16:00', 'inglaterra'))}

${createCard('30/11', 'quarta', createGame('argentina', '16:00', 'polonia'))}

${createCard(
  '01/12',
  'quinta',
  createGame('croacia', '12:00', 'belgica') +
    createGame('espanha', '16:00', 'japao')
)}

${createCard('02/12', 'sexta', createGame('brasil', '16:00', 'camaroes'))}

`
