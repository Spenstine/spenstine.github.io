$(function(){
    $('#revDiv').on('click', '.revCircle', function(){
        $(this).addClass('revCircle-chosen');
        $(this).prevAll('div').addClass('revCircle-chosen');
        $(this).nextAll('div').removeClass('revCircle-chosen');
    });

    $('#revDiv').on('mouseover', '.revCircle', function(){
        $(this).addClass('revCircle-hover')
        $(this).prevAll('div').addClass('revCircle-hover');
    });

    $('#revDiv').on('mouseout', '.revCircle',function(){
        $(this).siblings('div').removeClass('revCircle-hover');
        $(this).removeClass('revCircle-hover');
    });

    $('#btn').click( function(){
        var $uinput = Number($('#uinput').val());
        if( $uinput){
            var $newElement = $('#circle').clone();
            $newElement.attr('id', '');
            for (var i = 0; i < $uinput; i ++){
                $('#revDiv').append($newElement.clone());
            }
        }
        else{
            alert('Insert integers only!');
        }
        $('#uinput').val('');
    });
});