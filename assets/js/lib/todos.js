$("ul").on("click","li",function () { 
    $(this).toggleClass("li-clicked");
});
$("ul").on("click","span", function (e) { 
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
 });
 $("input[type='text']").keypress(function(e){
    if(e.which == 13){
        var litext = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ litext +"</li>");
    }
 });
 $(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
 })
 