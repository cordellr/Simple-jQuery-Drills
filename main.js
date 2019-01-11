$(document).ready(function () {
    $('#btnSubmit').prop('disabled', true);
    $('#textEntry').keyup(function () {
        if ($(this).val() != '') {
            $('#btnSubmit').prop('disabled', false);
        }
    });
});

$('#btnSubmit').click(function () {
    let textValue = $('#textEntry').val();
    alert('You entered "' + textValue + '"');
});

