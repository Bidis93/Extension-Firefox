var nCount = 0;
function js_content_script( request, sender, sendResponse )
{
	var messageResponse = "";
	messageResponse += checkLangAttributeHtml();

	if( nCount > 0 )
	{
		messageResponse = "Il y a " + nCount + " problème(s) sur ce site\n\n" + messageResponse;

		window.alert( messageResponse );
	}
	else window.alert( "Aucun problème sur ce site" );

	nCount = 0;
	browser.runtime.onMessage.removeListener( js_content_script );
}

function checkLangAttributeHtml()
{
	if( document.documentElement.hasAttribute("lang") === false ) {
		nCount++;
		return "Le selecteur <html> n'as pas d'attribus lang (<html lang=\"fr\">)\n";
	}
	return "";
}

browser.runtime.onMessage.addListener( js_content_script );