$('.navLink').click(function(e){
    $('.navLink').removeClass('selected');
    $(e.target).addClass('selected');
    
    $('main').addClass('d-none');
    if(e.target.id === 'stakeNavLink') {
        $('main').removeClass('d-none');
    }
});
$('.rowDelete').click(function(e){
console.log($(e.target).parent('tableRow'));
$(e.target).closest('.tableRow').remove();
});
  