$( function() {

    var cats = [];
    $.getJSON("./data/cats.json", function(data) {
        cats = data;
        const catListDiv = $("div#catname-box .list");
        const catTitleDiv = $("div#catTitle-box");
        const catCounterDiv = $("div#catCounter-box");
        const catImgDiv = $("div#catimg-box");
        const catDisplayBox = $("div#cat-display-box");

        /*
        $.each(cats, function () {

            var img_src = this.image_src;
            var img_title = this.name;
            var img_click_count = this.count;
            var $li = $("<li>")
                .text(img_title)
                .addClass("menu-item")
                .click( {param1: img_src, param2: img_title}, function(event) {
                    catTitleDiv.empty();
                    catImgDiv.empty();
                    catImgDiv.css({"background-image": "url(" + event.data.param1 + ")"});

                    catImgDiv.click(

                    );
                    catTitleDiv.text(event.data.param2);
                    catCounterDiv.text(img_click_count);
                })
                .appendTo(catListDiv)
        });
        */

        const total_cats = cats.length;
        for (let i = 0; total_cats && i < total_cats; i++) {
            let cat = cats[i];

            const elem = document.createElement('li');
            elem.textContent = cat.name;

            console.log(elem);

            catListDiv.appendChild(elem);
        }
    });






});

