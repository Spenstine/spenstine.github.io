$(function(){
    $('#revDiv').on('click', '.revCircle', function(){
        $(this).addClass('revCircle-chosen');
        $(this).prevAll('span').addClass('revCircle-chosen');
        $(this).nextAll('span').removeClass('revCircle-chosen');
    });

    $('#revDiv').on('mouseover', '.revCircle', function(){
        $(this).addClass('revCircle-hover')
        $(this).prevAll('span').addClass('revCircle-hover');
    });

    $('#revDiv').on('mouseout', '.revCircle',function(){
        $(this).siblings('span').removeClass('revCircle-hover');
        $(this).removeClass('revCircle-hover');
    });


    $('#btn').click( function(){
        var $uinput = Number($('#uinput').val());
        if( $uinput){
            var $newElement = $('#circle').clone();
            $newElement.removeAttr('id');
            $('#revDiv').html('');
            for (var i = 0; i < $uinput - 1; i ++){
                $('#revDiv').append($newElement.clone());
            }
            $newElement.attr('id','circle');
            $('#revDiv').append($newElement.clone());
        }
        else{
            alert('Insert integers only!');
        }
        $('#uinput').val('');
    });
});