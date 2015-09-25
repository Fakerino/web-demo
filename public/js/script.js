$( document ).ready(function(data) {

    $("#btn-submit").click(function(){
        fakeData();
    });

    $("#btn-reset").click(function(){
        $("textarea#inputData").val('');
    });

    function fakeData(data) {
        var inputData = $("textarea#inputData").val();
        var lang = $("select#lang").val();

        if (inputData == "") {
            noValueProvided()
        } else {
            $.post( "fake.php", {inputData: inputData, lang: lang}, function( data ) {
                //data = JSON.parse(data, null, 2);
                $( "#result" ).html( data );
            });
        }
    }

    function noValueProvided()
    {
        $( "#result" ).text('No input specified');
    }

});