$(document).on('ready', function() {
    
    //hide this class (we want to show it after a button click
    $('.password-visibility').hide();
    
    $('#btn-submit').click(function(e) {
        e.preventDefault() // ex. stop page refreshing if that was a default event
        if ($("#signup-password-field").val() != $("#signup-retype-password-field").val()) {
            // add border
            $('#signup-password-field').addClass("error");
            $('#signup-retype-password-field').addClass("error");
            // remove text
            $("#signup-password-field").val("");
            $("#signup-retype-password-field").val("");
            //make the error description visible
            $("#error-msg").html("Error: the passwords do not match. Please try again!");
        } 
        else {
            $('#form').submit();
        }
    });
    //had #password-field instead
    $('#signup-password-field, #signup-retype-password-field').click( function() {
        if($("#error-msg").html() != null) {
            $("#error-msg").html("");
            $('#signup-password-field').removeClass("error");
            $('#signup-retype-password-field').removeClass("error");
            //tried adding a delay, didnt look very nice
            //$('#retype-password-field').removeClass("error");
        }
    });
    
    $('#btn-show-password').click( function() {
        $('.password-visibility').toggle('750');
    });
});