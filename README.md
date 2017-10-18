Extension firefox

Analyse de site, pour voir si les éléments sont bien placés.
Vérifier si le site respecte bien le code HTML 5.

L’idée est de créer un bouton analyser sur la barre d’outil qui ferait apparaitre un encadré, dans ce dernier les réponses apparaissent en indiquant ce qui va et ce qui ne va pas.

Créer un projet Github où l’on trouvera un Readme.md avec tous les lien utiles pour la doc ainsi que le code source de l’extension.

L’idéal sera d’exporter cette extension pour les autres navigateurs.

Se répartir 3 ou 4 normes simples à vérifier.

On peut trouver les règles sur la documentation officielle -, W3C et d’autres .

Se renseigner sur les différentes fonctions qui analysent le code.

Pour la répartition du travail, chacun travaillera sur une fonction précise.


exemples de fonctionnalité pour les balises :

var divCheck = document.getElementsByTagName("div");
var sectionCheck = document.getElementsByTagName("section");
var asideCheck = document.getElementsByTagName("aside");
var articleCheck = document.getElementsByTagName("article");
var pCheck = document.getElementsByTagName("p");
var headerCheck = document.getElementsByTagName("header");
var footerCheck = document.getElementsByTagName("footer");
var mainCheck = document.getElementsByTagName("main");
