
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
 *     .page (displayed when .title was clicked or when is .default)
 *         title (text displayed inside of .head .title div)
 *     .page.default (initially visible page)
 *  
 */
$(document).ready(function() {
    $(".mui-tabs").each(function(){
        var tabs = $(this);
        tabs.prepend('<div class="head"></div>');
        var head = tabs.children(".head");

        tabs.children(".page").each(function(){
            var page    = $(this);
            var title   = page.attr("title"); 
            page.attr("title","");
            page.hide(); 

            head.append( '<div class="title">'+title+'</div>' );
            function activate()
            {
                head.children(".title").removeClass("active");
                head.children(".title:contains('"+title+"')").addClass("active");

                tabs.children(".page").hide();
                page.show(); 
            }
            head.children(".title:contains('"+title+"')").bind("click",activate);
            if( page.hasClass("default") ) activate();
        });
    });
});
