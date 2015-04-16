$(document).on('ready', function() {
    
    //hide this class (we want to show it after a button click
    $('.password-visibility').hide();
    
    $('#btn-submit').click(function(e) {
        e.preventDefault() // ex. stop page refreshing if that was a default event
        if ($("#password-field").val() != $("#retype-password-field").val()) {
            // add border
            $('#password-field').addClass("error");
            $('#retype-password-field').addClass("error");
            // remove text
            $("#password-field").val("");
            $("#retype-password-field").val("");
            //make the error description visible
            $("#error-msg").html("Error: the passwords do not match. Please try again!");
        } 
        else {
            $('#form').submit();
        }
    });
    //had #password-field instead
    $('#password-field, #retype-password-field').click( function() {
        if($("#error-msg").html() != null) {
            $("#error-msg").html("");
            $('#password-field').removeClass("error");
            $('#retype-password-field').removeClass("error");
            //tried adding a delay, didnt look very nice
            //$('#retype-password-field').removeClass("error");
        }
    });
    
    $('#btn-show-password').click( function() {
        $('.password-visibility').toggle('750');
    });
});