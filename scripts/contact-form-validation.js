// ========================================================
//
// Contact form validation
//
// ========================================================

    var $name = $(".form-name input"),
        $email = $(".form-email input"),
        $button = $("#contactFormWrapper .FormButton");
        
    $name.blur(function() {
        // on blur, check for valid input and assign respective CSS class
        if ( validName($(this).val()) ) {
            $(this).addClass("valid-input");
            $(this).removeClass("invalid-input");
        } else {
            $(this).addClass("invalid-input");
            $(this).removeClass("valid-input");
        }
    });
    $email.blur(function() {
        // on blur, check for valid input and assign respective CSS class
        if ( validEmail($(this).val()) ) {
            $(this).addClass("valid-input");
            $(this).removeClass("invalid-input");
        } else {
            $(this).addClass("invalid-input");
            $(this).removeClass("valid-input");
        }
    });
    $button.click(function(e) {
        var $nameVal = $name.val(),
            $emailVal = $email.val();

        if ( validName($nameVal) && validEmail($emailVal) ) {
        
        } else {
            e.preventDefault();
            $name.blur();
            $email.blur();
        }
    });
    
    function validName(name) {
        // if a value has been entered in the input box, return true else false
        return name !== "" ? true : false;
    }
    
    function validEmail(email) {
        // if a value matches with the regex, return true else false
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
