
/*
 * Minimalist UI
 * Quite possibly the smallest UI framework.
 *
 * Written by Andrew, attribution unnecessary.
 */




/*
 * Mui Tabs
 * A tabbed UI component
 *
 * expects a document structure as follows
 * .mui-tabs       
 *     .head (container for titles)
 *     .body (container for content)
 *     .page 
 *         .title (displayed inside of .head)
 *         .content (displayed inside of .body)
 *  
 */
$(document).ready(function() {
    $(".mui-tabs").each(function(){
        var tabs = $(this);
        var head = tabs.children(".head");
        var body = tabs.children(".body");

        tabs.children(".page").each(function(){
            var page    = $(this);
            var title   = page.children(".title");
            var content = page.children(".content");

            page.hide();
            head.append( title );
            title.bind("click", function(){ body.html(content); });
            if( page.hasClass("default") ) body.html(content);
        });
    });
});
