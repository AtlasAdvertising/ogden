$(document).ready(function() {

    // ********************************************
    // hides/shows media center items
    // ********************************************
    var $events = $(".events-wrapper li"),
        $blogPosts = $(".blog-posts-wrapper li"),
        $newsItems = $(".news-list li");
    
    function initializeTweets() {
        // show only first 2 tweets, hide the rest.
        // call event listener function.
        $events.hide().slice(0,3).show();
        $blogPosts.hide().slice(0,4).show();
        $newsItems.hide().slice(0,3).show();
        addListeners();
    }
    
    function addListeners() {
        // add click listener to show more buttons
        $(".show-more").click(function() {
            showHandler($(this).parent());
        });
        $(".show-less").click(function() {
            hideHandler($(this).parent());
        });
    }
    
    function showHandler(listWrapper) {
        // show more tweets for respective list
        var $theseTweets = listWrapper.find("li"),    // tweets based on which 'show more' button is clicked
            visible = $theseTweets.filter(":visible").length;    // number of visible tweets
        
        visible = visible + 2;    // we want to show 2 more
        $theseTweets.slice(0, visible).fadeIn();
    
        listWrapper.find(".show-less").show();
    }
    
    function hideHandler(listWrapper) {
        // show more tweets for respective list
        var $theseTweets = listWrapper.find("li"),    // tweets based on which 'show more' button is clicked
            len = $theseTweets.length;
        $theseTweets.slice(-len + 2).fadeOut();
        listWrapper.find(".show-less").hide();
    }
    
    initializeTweets();
    // ********************************************
    // ********************************************
    
});