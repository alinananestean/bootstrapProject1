$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.nav-menu').toggleClass('hidden-sm-down');
    });
});