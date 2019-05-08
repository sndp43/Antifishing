

function hidepopup(){
	
	$("#wronguser,#playeduser,#warning").fadeOut();
	$(".content").fadeIn();
}
var qurl;
var ogans;
var obj = [];
var counter = 0;
var click_check_arr = [];
//check if storage counter is set to 10 then redirect to login page start;
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
var stored_counter = localStorage.getItem("counter");
	//alert(stored_counter);
	if(stored_counter==10 || stored_counter==null){ 
		//alert(stored_counter);
		window.location.href = 'index.html';
	}
 if(stored_counter){
        counter =  parseInt(stored_counter); 
     }
                 
} else {
   
}

//check if storage counter is set to 10 then redirect to login page end;


function ans_yes(qid){

//get foodata from api start//

	       var	data = {"food_questions": {
  
    "question1": {
        "id": "1",
        "url": "http://www.arnazon.com",
        "position": "right",
        "ans": "n"
    }, "question2": {
         "id": "2",
         "url": "http://128.237.239.95/sbibank/",
         "position": "left",
         "ans": "n"
    }, "question3": {
        "id": "3",
        "url": "http://www.citibank.net",
        "position": "right",
        "ans": "n"
    },
    "question4": {
        "id": "4",
        "url": "http://www3.nationalgeographic.com",
        "position": "left",
        "ans": "y"
    },
    "question5": {
        "id": "5",
        "url": "http://www.ebay.com",
        "position": "right",
        "ans": "y"
    },
    "question6": {
        "id": "6",
        "url": "https://www.online.citibank.co.in/products-services/online-services/epay.htm",
        "position": "left",
        "ans": "y"
    },
    "question7": {
          "id": "7",
         "url": "http://www.flipcart.com",
         "position": "right",
        "ans": "n"
    },
    "question8": {
        "id": "8",
        "url": "http://www.snapdeal.com",
        "position": "left",
        "ans": "y"
    },
    "question9": {
        "id": "9",
        "url": "http://www.hot-star.com",
        "position": "right",
        "ans": "n"
    },
    "question10": {
        "id": "10",
        "url": "http://www.tvvitter.com",
        "position": "left",
        "ans": "n"
    }
}};
    
		    //keep app food data in storage start//
		   localStorage.setItem("fooddata",data);
		    //keep app food data in storage end//
		   
		   var stored_asit_result = localStorage.getItem("result");
		   if(stored_asit_result!=''){
			   var stored_result = JSON.parse(localStorage.getItem("result"));
		   }else{
			   stored_result="";
		   }
		   //console.log(stored_result);
          //$('#food_div').empty();
		   var pos;
		   var postyle;
		   var check_arr = [];
        $.each(data,function(i,item){
                $.each(data[i],function(qsn,qsndata){
					
					if(qid == data[i][qsn].id){ 
						 qurl = data[i][qsn].url;
                         ogans = data[i][qsn].ans;
						
					}
			       
           });
          });
       
   
		after_yes_select_apicallsuccess(qid,qurl,ogans);
	

	
	//get foodata from api end//
}


function after_yes_select_apicallsuccess(qid,qurl,ogans){
	
	//var element = document.getElementById(qid);
//var qurl = element.getAttribute("data-url");
//var ogans = element.getAttribute("data-ogans");
//alert("yqsn"+qid);
//$("#qsn"+qid).show();
//$(window).resize();
var user_ans = "y";	
if(user_ans == ogans){
	$("#"+qid).attr('src','assets/images/happy.png');
}else{
    $("#"+qid).attr('src','assets/images/sad.png');	
}	
	
	

$("#"+qid).delay(500).animate({top:'0', opacity:'0'},1000)
$(".tipso_bubble").fadeOut();
//$('.qs'+qid).tipso('hide');	
//$(".tipso_bubble").tipso('hide');
	
// check if same id has been added(clicked)	 before incrementing counter start

if($.inArray(qid, click_check_arr) != -1){}else{
counter =counter+1;	
		
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
             localStorage.setItem("counter",counter);
var result = localStorage.getItem("result");
 if(result){
         obj= JSON.parse(result);  
     }
	
         obj.push({"qid":  qid,"qurl":  qurl, "cli_ans":"y", "ogans":ogans});
         localStorage.setItem("result",JSON.stringify(obj));
} else {
   
}
	 click_check_arr.push(qid);
}

// check if same id has been added(clicked)	 before incrementing counter end
	



if(counter==10){
	setTimeout(function(){ 
	window.location.href = 'result.html';
	 }, 2000);

    }
	
	
}

function ans_no(qid){

//get foodata from api start//

	
	
		       var	data = {"food_questions": {
  
    "question1": {
        "id": "1",
        "url": "http://www.arnazon.com",
        "position": "right",
        "ans": "n"
    }, "question2": {
         "id": "2",
         "url": "http://128.237.239.95/sbibank/",
         "position": "left",
         "ans": "n"
    }, "question3": {
        "id": "3",
        "url": "http://www.citibank.net",
        "position": "right",
        "ans": "n"
    },
    "question4": {
        "id": "4",
        "url": "http://www3.nationalgeographic.com",
        "position": "left",
        "ans": "y"
    },
    "question5": {
        "id": "5",
        "url": "http://www.ebay.com",
        "position": "right",
        "ans": "y"
    },
    "question6": {
        "id": "6",
        "url": "https://www.online.citibank.co.in/products-services/online-services/epay.htm",
        "position": "left",
        "ans": "y"
    },
    "question7": {
          "id": "7",
         "url": "http://www.flipcart.com",
         "position": "right",
        "ans": "n"
    },
    "question8": {
        "id": "8",
        "url": "http://www.snapdeal.com",
        "position": "left",
        "ans": "y"
    },
    "question9": {
        "id": "9",
        "url": "http://www.hot-star.com",
        "position": "right",
        "ans": "n"
    },
    "question10": {
        "id": "10",
        "url": "http://www.tvvitter.com",
        "position": "left",
        "ans": "n"
    }
}}; 
  

     
		    //keep app food data in storage start//
		   localStorage.setItem("fooddata",data);
		    //keep app food data in storage end//
		   
		   var stored_asit_result = localStorage.getItem("result");
		   if(stored_asit_result!=''){
			   var stored_result = JSON.parse(localStorage.getItem("result"));
		   }else{
			   stored_result="";
		   }
		   //console.log(stored_result);
          //$('#food_div').empty();
		   var pos;
		   var postyle;
		   var check_arr = [];
        $.each(data,function(i,item){
                $.each(data[i],function(qsn,qsndata){
					if(qid == data[i][qsn].id){
						 qurl = data[i][qsn].url;
                         ogans = data[i][qsn].ans;
					}
			       
           });
          });
      
    
   
		
		after_no_select_apicallsuccess(qid,qurl,ogans);

	//get foodata from api end//
}

function after_no_select_apicallsuccess(qid,qurl,ogans){
	

//var element = document.getElementById(qid);
//var qurl = element.getAttribute("data-url");
//var ogans = element.getAttribute("data-ogans");
var user_ans = "n";	
if(user_ans == ogans){
	$("#"+qid).attr('src','assets/images/happy.png');
}else{
    $("#"+qid).attr('src','assets/images/sad.png');	
}
$("#"+qid).delay(500).animate({top:'0', opacity:'0'},1000)
$(".tipso_bubble").fadeOut();
	
// check if same id has been added(clicked)	 before incrementing counter start

if($.inArray(qid, click_check_arr) != -1){}else{
counter =counter+1;	
	
	// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
	             localStorage.setItem("counter",counter);
    var result = localStorage.getItem("result");
 if(result){
         obj= JSON.parse(result);  
     }
         obj.push({"qid":  qid,"qurl":  qurl, "cli_ans":"n", "ogans":ogans});
         localStorage.setItem("result",JSON.stringify(obj));

} else {
    
}
 click_check_arr.push(qid);
}

// check if same id has been added(clicked)	 before incrementing counter end
	//alert(counter);
$("#"+qid).fadeOut();

$(".tipso_bubble").fadeOut();




if(counter==10){
window.location.href = 'result.html';
  }
	
	
}

function load_food()
{

  // Check browser support
//if (typeof(Storage) !== "undefined") {
//    localStorage.setItem("result",'')
//} else {
//   
//}


  //$('#food_div').empty();
  
	
  
       var	data = {"food_questions": {
  
    "question1": {
        "id": "1",
        "url": "http://www.arnazon.com",
        "position": "right",
        "ans": "n"
    }, "question2": {
         "id": "2",
         "url": "http://128.237.239.95/sbibank/",
         "position": "left",
         "ans": "n"
    }, "question3": {
        "id": "3",
        "url": "http://www.citibank.net",
        "position": "right",
        "ans": "n"
    },
    "question4": {
        "id": "4",
        "url": "http://www3.nationalgeographic.com",
        "position": "left",
        "ans": "y"
    },
    "question5": {
        "id": "5",
        "url": "http://www.ebay.com",
        "position": "right",
        "ans": "y"
    },
    "question6": {
        "id": "6",
        "url": "https://www.online.citibank.co.in/products-services/online-services/epay.htm",
        "position": "left",
        "ans": "y"
    },
    "question7": {
          "id": "7",
         "url": "http://www.flipcart.com",
         "position": "right",
        "ans": "n"
    },
    "question8": {
        "id": "8",
        "url": "http://www.snapdeal.com",
        "position": "left",
        "ans": "y"
    },
    "question9": {
        "id": "9",
        "url": "http://www.hot-star.com",
        "position": "right",
        "ans": "n"
    },
    "question10": {
        "id": "10",
        "url": "http://www.tvvitter.com",
        "position": "left",
        "ans": "n"
    }
}};
		  console.log(data);
		   var stored_asit_result = localStorage.getItem("result");
		   if(stored_asit_result!=''){
			   var stored_result = JSON.parse(localStorage.getItem("result"));
		   }else{
			   stored_result="";
		   }
		   //console.log(stored_result);
          //$('#food_div').empty();
		   var pos;
		   var postyle;
		   var check_arr = [];
        $.each(data,function(i,item){
                $.each(data[i],function(qsn,qsndata){	
					if(stored_result !=''){
						$.each(stored_result,function(stored_qsn,stored_qsndata){
			//alert(stored_result[stored_qsn].cli_ans);
          //alert(stored_result[stored_qsn].ogans);
           //alert(stored_result[stored_qsn].qid);
          // alert(stored_result[stored_qsn].qurl);
						
					if(data[i][qsn].id ==  stored_result[stored_qsn].qid){
						
						 check_arr.push(data[i][qsn].id);
						
					}	
			  });
		   }
				
					//console.log(check_arr);
				
					if($.inArray(data[i][qsn].id, check_arr) != -1){}else{
						
						 //alert(data[i][qsn].url);
                      //$('#food_div').append('<div data-qid="'+data[i][qsn].id+'" data-url="'+data[i][qsn].url+'" data-ogans="'+data[i][qsn].ans+'" class="trans'+data[i][qsn].id+'" onclick="question(this)" id="'+data[i][qsn].id+'" >'+data[i][qsn].url+'</div>');
					 if(data[i][qsn].position=="right"){pos = 'right' ; postyle = '' ; }else{pos = 'left' ; postyle = 'alt' ;}
					 $('#game').append('<img  data-qid="'+data[i][qsn].id+'" data-url="'+data[i][qsn].url+'" data-ogans="'+data[i][qsn].ans+'" id="'+data[i][qsn].id+'" src="assets/images/worm.png" class="qs'+data[i][qsn].id+' worm'+postyle+' worm'+data[i][qsn].id+'"/>');
					//alert(data[i][qsn].position);
					
					
					
					 $('.qs'+data[i][qsn].id).tipso({
	    		       position:pos,
					   hideDelay:0,
					  // tooltipHover:false,
				       content: function(){
					return data[i][qsn].url+'<br> <a data-qid="'+data[i][qsn].id+'" data-url="'+data[i][qsn].url+'" data-ogans="'+data[i][qsn].ans+'" onclick="ans_yes('+data[i][qsn].id+')" href="javascript:void(0);" class="bt btyes"></a><a data-qid="'+data[i][qsn].id+'" data-url="'+data[i][qsn].url+'" data-ogans="'+data[i][qsn].ans+'" onclick="ans_no('+data[i][qsn].id+')" href="javascript:void(0);" class="bt btno"></a>'; },
					   onShow : null,
	                   onHide : null
	          });
			 }
           });
          });
      

}


// detect version of browser start	
	function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 (aka Edge) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
	// detect version of browser end	

$(document).ready(function() {
	
	// detect version of browser call start
if (detectIE()) {
	window.location.href = 'nonsupport.html';
} else {}	
					// detect version of browser call end
	
load_food();

$('.left').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    margin:0,
    stagePadding:0,
    smartSpeed:450,
	mouseDrag:false,
	touchDrag:false,
	nav:true,
	autoplay:true,
	//autoplayTimeout:1000,
	loop:true,
	navText : ['<img src="assets/images/per.png" />','<img src="assets/images/next.png" />']
});

});
  

var $bubbles = $('.bubbles');

function bubbles() {
  
  // Settings
  var min_bubble_count = 15, // Minimum number of bubbles
      max_bubble_count = 30, // Maximum number of bubbles
      min_bubble_size = 7, // Smallest possible bubble diameter (px)
      max_bubble_size = 15; // Largest possible bubble diameter (px)
  
  // Calculate a random number of bubbles based on our min/max
  var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));
  
  // Create the bubbles
  for (var i = 0; i < bubbleCount; i++) {
    $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
  }
  
  // Now randomise the various bubble elements
  $bubbles.find('.bubble-container').each(function(){
    
    // Randomise the bubble positions (0 - 100%)
    var pos_rand = Math.floor(Math.random() * 80);
    
    // Randomise their size
    var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 2));
    
    // Randomise the time they start rising (0-15s)
    var delay_rand = Math.floor(Math.random() * 3);
    
    // Randomise their speed (3-8s)
    var speed_rand = 1.5 + Math.random() * 5;
    
    // Cache the this selector
    var $this = $(this);
    
    // Apply the new styles
    $this.css({
      'left' : pos_rand + '%',
      
      '-webkit-animation-duration' : speed_rand + 's',
      '-moz-animation-duration' : speed_rand + 's',
      '-ms-animation-duration' : speed_rand + 's',
      'animation-duration' : speed_rand + 's',
      
      '-webkit-animation-delay' : delay_rand + 's',
      '-moz-animation-delay' : delay_rand + 's',
      '-ms-animation-delay' : delay_rand + 's',
      'animation-delay' : delay_rand + 's'
    });
    
    $this.children('.bubble').css({
      'width' : size_rand + 'px',
      'height' : size_rand + 'px'
    });
    
  });
}



bubbles();