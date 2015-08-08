/*
 * Load localized translations
 */


$(function() {
    /*
     * Magic language code!!!
     * Checks URL params for valid language, then local storage, then browser
     * -> Saves old language setting and reverts if user tries to play around
     * -> Uses to espanol as default
     */
    var language = $.query.get('lang');
    if(language == null || (language != "es" && language != "en")) {
        language = localStorage.getItem("language");
        if(language == null || (language != "es" && language != "en")) {
            language = navigator.language.substr(0,2);
            if(language == null || (language != "es" && language != "en")) {
                language = "es";
            }
        }
        document.location.href = "" + $.query.set("lang",language);
    }
    localStorage.setItem("language", language);
    // End magic language code

 
    // Load xml file for translations
    $.ajax({
        url: './content.xml',
        success: function(xml) {
            // Replace text to be translated
            $(xml).find('translation').each(function(){
                var id = $(this).attr('id');
                var text = $(this).find(language).text();
                $("." + id).html(text);
            });
        }
    });
});
