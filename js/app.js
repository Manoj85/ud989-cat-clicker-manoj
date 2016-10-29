$( function() {
    var count1 = 0, count2 = 0;
    $('#clicker1').click(function(e) {
        count1++;
        $('#counter1').text(count1);
    });
    $('#clicker2').click(function(e) {
        count2++;
        $('#counter2').text(count2);
    });
});

