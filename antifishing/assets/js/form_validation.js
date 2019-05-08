
        // $.validator.setDefaults( {
        //     submitHandler: function () {
        //         alert( "submitted!" );
        //     }
        // } );

        $( document ).ready( function () {

$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};


            $( "#signinForm" ).validate( {
                rules: {
                   
                    username: {
                        required: true,
                        minlength: 2
                    },
                    password: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    
                    username: {
                        required: "Please enter a username",
                        minlength: "Your username must consist of at least 2 characters"
                    },
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    }
                },
                errorElement: "em",
                errorPlacement: function ( error, element ) {
                    // Add the `help-block` class to the error element
                    error.addClass( "help-block" );

                    if ( element.prop( "type" ) === "checkbox" ) {
                        //error.insertAfter( element.parent( "label" ) );
                    } else {
                        //error.insertAfter( element );
                    }
                },
                highlight: function ( element, errorClass, validClass ) {
                    //$( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
					$( element ).addClass( "error" ).removeClass( "success" );
                },
                unhighlight: function (element, errorClass, validClass) {
                    //$( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
					$( element ).addClass( "success" ).removeClass( "error" );
                }
            } );



            $('#signinForm').submit(function(e){
             
            // Stop the form actually posting
            e.preventDefault();
            
            // I want to be able to do the check here if the form has passed validation
            if( $(this).valid() ) { 
$("#waiting").fadeIn();
var signinFormData = $("#signinForm").serializeObject();
var json_signinFormData = JSON.stringify(signinFormData);
var URL = "signin.json";  //Your URL

    //Hook your headers here and set it with before send function.
$.ajaxSetup({
    beforeSend: function(xhr) {
        //xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        //xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa('username:passwordhere'));
    }
});
// Sends your ajax
  $.ajax({
  
       type:"POST",
       url:URL,
       //contentType:"application/json; charset=utf-8",
       //dataType:"json",
       data: {json_signinFormData:json_signinFormData},
       success:function(data){
          //$('#food_div').empty();
        $.each(data,function(i,item){



if(data[i].User_auth == "Y" && data[i].Game_result == "F" ){

            // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
	     localStorage.setItem("User_auth",data[i].User_auth);
	     localStorage.setItem("Game_result",data[i].Game_result);
         localStorage.setItem("User_Email_ID",data[i].User_Email_ID);
         localStorage.setItem("ProfilePic",data[i].ProfilePic);
         localStorage.setItem("User_display_name",data[i].User_display_name);
         $("#waiting").fadeOut();
         window.location.href = 'introduction.html';

} else {
    
   }
  }else if(data[i].User_auth == "Y" && data[i].Game_result == "P" ){ 
      $("#waiting").fadeOut();
      $("#playeduser").fadeIn(); 
  
  }else if(data[i].User_auth != "Y" && data[i].Game_result == "F" ){
      $("#waiting").fadeOut();
      $("#wronguser").fadeIn(); 
  }
 });
},
    
    complete:function(){}
    });

  
  }
}) ;  

});
 