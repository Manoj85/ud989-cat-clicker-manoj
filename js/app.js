$( function() {
    var counter = 0;
    $('#cat-image').click(function(e) {
        counter++;
        console.log('Cat Clicked - ' + counter + ' times!!'  );
        $('.clickCounter').text(counter);
    });
});

