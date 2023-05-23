alert("Welcome to my Lab-08!");

$(document).ready(function() {

    $("#login-button").on("click", function(event) {
        // prevent the form from submitting
        event.preventDefault();

        // keep track of the form validity
        let validity = true;

        if ($("#login-email").val() == "") {
            // use the bootstrap built in styles to indicate a problem with the field.
            $("#login-email").addClass("is-invalid");

            // ensure that the #login-email field doesn't have the is-valid class applied.
            $("#login-email").removeClass("is-valid");

            let tooltip = new boostrap.Tooltip("#login-email", {
                title: "Email Cannot Be Blank"
                });

            // set the validity to false;
            validity = false;
        }
        else {
            // remove the is-invalid class, if it exists, from the login-email field
            $("#login-email").removeClass("is-invalid");

            // add the css class "is-invalid" to give positive feedback to the user
            $("#login-email").addClass("is-valid");
            
            // remove any tooltip on this element
            if ($("#login-email").tooltip != undefined) {
                $("#login-email").tooltip("dispose");
            }
        }

        // login-password
        if ($("#login-password").val() == "") {
            // use the bootstrap built in styles to indicate a problem with the field.
            $("#login-password").addClass("is-invalid");

            // ensure that the #login-email field doesn't have the is-valid class applied.
            $("#login-password").removeClass("is-valid");

            let tooltip = new boostrap.Tooltip("#login-password", {
                title: "Email Cannot Be Blank"
                });

            // set the validity to false;
            validity = false;
        }
        else {
            // remove the is-invalid class, if it exists, from the login-email field
            $("#login-password").removeClass("is-invalid");

            // add the css class "is-invalid" to give positive feedback to the user
            $("#login-password").addClass("is-valid");
            
            // remove any tooltip on this element
            if ($("#login-password").tooltip != undefined) {
                $("#login-password").tooltip("dispose");
            }
        }

        if (!validity) {
            return false;
        }

        $("#login-spinner").addClass("spin");
        $("#login-button").attr("disable");
        
        $("#loginModal").animate({ opacity: 0 }, 2000, function() {
            // what we are going to do once the animation completes
            // hide model
            $("#loginModal").modal("hide");

            // hide login button
            $("#part-1").hide();

            // show part 2 of the exercise
            $("#part-2").show();
        })

    }); // end click handler
    
    // add the "outlined" to each of the 3 boxes
    $(".box").addClass("outlined");
        
    // modify the background-color css attribute 
    $("#button_toggle_colors").click(function() {
        $(".box").each(function(index) {
            // if the box has colored than remove the color and add color to new box.
            if ($(this).hasClass("colored")) {
                $(this).removeClass("colored");
            }
            else {
                $(this).addClass("colored");
            }
        })
    })

    // add/remove the round-edge class
    $("#button_toggle_roundedges").click(function() {
        $(".box").each(function(index) {
            // when the box already have the class "rounded-box", then remove the class.
            if ($(this).hasClass("rounded-box")) {
                $(this).removeClass("rounded-box");
            }
            else {
                $(this).addClass("rounded-box");
            }
        })
    })

    // add new a new box
    $("#button_add_box").click(function() {
        // for unique box id 
        let boxN = $(".box").length + 1;
        $("#boxes").append(`<div id="box${boxN}" class="box outlined"></div>`);
    })




}); // end ready handler

