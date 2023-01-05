
document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var quotes = {
    "Cheikh Ahmadou Bamba": '"Ne te plains pas tout le temps des épreuves qui taccablent Sois courageux  et agis de telle sorte que les gens croient  que tu ne manques de rien"',
    "Mame Abdou Aziz SY": '"Si vous aimez le Sénégal, si vous êtes  guidés par un intérêt national et si vous craingnez Dieu, le Sénégal avancera et sera en paix."',
    "Thomas Sankara": '"Il faut apprendre à l’enfant à être d’abord et avant tout un être social, c’est-à-dire un homme et non un individu."',
    "Cheikh Anta Diop": '"Formez-vous, armez-vous de sciences jusqu’aux dents (…) et arrachez votre patrimoine culturel.."',
    "Mame Cheikh Al Makhtoum": '"NAttendez pas que tout  le monde soit bon pour que vous soyez bons .Mais soyez plutôt bons pour inspirer aux autres la bonté Ce nest que par la politesse et la pudeur que lon se rapproche davantage de Dieu."',
    "Cheikh Ibrahima Niass ": '"Certes l’avenir de toute nation repose sur sa jeunesse , mais pas n’importe quelle jeunesse : sur les jeunes cultivés et doués de caractères nobles: une jeunesse sans culture et sans caractère noble est comme un arbre stérile. Appliquez vous sérieusement et persévérez dans la quête du savoir. Ne suffisent pas seulement les sciences religieuses ou la mathématique dans ses diverses branches rejoignez les chercheurs et préoccupés par la découverte des secrets de lunivers.."',
    "Cheikh Ahmadou Bamba ": '"Si tu es en quête du savoir : Réduis le sommeil, combats la paresse, diminue le repos et sois sobre en projets.Sache que celui qui refuse de rechercher le savoir dans sa jeunesse, tombera dans le regret."',
    
  };

  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author]
  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;

}