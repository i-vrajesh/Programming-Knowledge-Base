// // $(document).keydown(function(event){
// //     $("h1").text(event.key);
// //     console.log(event.key);
// // })

// $("h1").on("mouseover",function(){
//     $("h1").css("color","red");
// })

// $("h1").after("<button>Before</button>");//after the h1 tag
// $("h1").before("<button>After</button>");//before the h1 tag
// $("h1").prepend("<button>Prepend</button>");//add in h1 tag just before original data
// $("h1").append("<button>Append</button>");// add in h1 tag just after original data


$("button").on("click",function(){
    $("h1").hide();
    $("h1").show();
    $("h1").slideUp();
    $("h1").slideDown();
    $("h1").fadeIn();
    $("h1").faceOut();
    $("h1").slideUp().slideDown().animate({opacity:0.5});//chaining all the animations 1 by 1 & numeric animations are not allowed
})