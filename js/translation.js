//  $(function() { should be used
// each time you use jQuery
 
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
    
    $(".button").click(function(){
        alert("delete this item");
    });
 
    // In order to get the translations,
    // we must use Ajax to load the XML
    // file and replace the contents
    // of the DIVs that need translating
 
    $.ajax({
 
        // Here, we specify the file that
        // contains our translations
 
        url: './content.xml',
 
        // The following code is run when
        // the file is successfully read
 
        success: function(xml) {
 
            // jQuery will find all <translation>
            // tags and loop through each of them
 
            $(xml).find('translation').each(function(){
 
                // We fetch the id we set in the XML
                // file and set a var 'id'
 
                var id = $(this).attr('id');
 
                // This is the most important step.
                // Based on the language we can set,
                // jQuery will search for a matching
                // tag and return the text inside it
 
                var text = $(this).find(language).text();
 
                // Last, but not least, we set the
                // contents of the DIV with a
                // class name matching the id in the
                // XML file to the text we just
                // fetched
 
                $("." + id).html(text);
            });
        }
    });
});
