$(function() {
  montaSubtituloPica();
  setInterval(montaSubtituloPica, 5000);
});

function montaSubtituloPica() {
  const listaDoQueOMadeirasEh = [
    'Falido',
    'Desempregado',
    'Broxa',
    'Corno',
    'Arrombado',
    'Canalha',
    'Covarde',
    'Imbecíl',
    'Putinha do Pix',
    'Putinha dos Beatles',
    'Pardo',
    'Vagabundo',
    'Caloteiro',
    'Cabeçudo',
    'Pobre',
    'Energúmeno',
    'Boçal',
    'Fuma Pendrive',
    'Patético',
    'Bananão',
    'Analfabeto',
    'Cabeça de Cotonete',
  ];

  let qualidadeDoWoods = [];
  while (qualidadeDoWoods.length != 3) {
    const porraDeIndice = Math.floor(Math.random() * listaDoQueOMadeirasEh.length);
    if (!qualidadeDoWoods.includes(porraDeIndice)) {
      qualidadeDoWoods.push(porraDeIndice);
    }
  }

  qualidadeDoWoods = qualidadeDoWoods.map(artur => listaDoQueOMadeirasEh[artur]);

  $('#3AdjetivosDoMadeiras').text(`${qualidadeDoWoods[0]}, ${qualidadeDoWoods[1]} & ${qualidadeDoWoods[2]}`);
}
