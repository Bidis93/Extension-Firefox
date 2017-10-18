var nCount = 0; // Création du compteur pour le nombre d'erreur qui sera peut-être afficher
function js_content_script( request, sender, sendResponse )
{
	var messageResponse = ""; // Création d'une variable (string) content tous mes messages d'erreurs
	messageResponse += checkLangAttributeHtml(); // Ajout d'un message d'erreur via l'appel d'une fonction

	if( nCount > 0 ) // si le compteur d'erreur est supérieur à 0 ( au moins égale a 1 )
	{
		// On remonte le message 'il y a ..' au dessus de la liste des erreurs
		messageResponse = "Il y a " + nCount + " problème(s) sur ce site\n\n" + messageResponse;

		window.alert( messageResponse ); // Fait apparaitre un pop-up avec un message
	}
	else window.alert( "Aucun problème sur ce site" ); // Fait apparaitre un pop-up avec un message

	browser.runtime.onMessage.removeListener( js_content_script );
}

function checkLangAttributeHtml() // Fonction qui regarde si l'élément html possède un attribus lang
{
	// hasAttribute: retourne une value boolean
	if( document.documentElement.hasAttribute("lang") === false ) // si l'élément html possède pas d'attribus lang
	{
		nCount++; // ajoute + 1 a la variable nCount
		return "Le selecteur <html> n'as pas d'attribus lang (<html lang=\"fr\">)\n"; // Arrête l'éxecution de la fonction et retourne un message
	}
	return ""; // Arrête la fonction ici et retourne un message
}

browser.runtime.onMessage.addListener( js_content_script );