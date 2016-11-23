$( function() {

    var model = {
        currentCat: null,
        cats: [],
        init: function() {
            /*
            $.getJSON("./data/cats.json", (data) => {
                this.cats = data;
            });
            */
            this.cats = [
                {
                    "image_src": "./images/cat_1.jpg",
                    "name": "Cat1",
                    "clickCount": 0
                },
                {
                    "image_src": "./images/cat_2.jpg",
                    "name": "Cat2",
                    "clickCount": 0
                },
                {
                    "image_src": "./images/cat_3.jpg",
                    "name": "Cat3",
                    "clickCount": 0
                },
                {
                    "image_src": "./images/cat_4.jpg",
                    "name": "Cat4",
                    "clickCount": 0
                },
                {
                    "image_src": "./images/cat_5.jpg",
                    "name": "Cat5",
                    "clickCount": 0
                }
            ];

            this.currentCat = this.cats[0];
        }
    };

    var octopus = {
        init: function() {
            model.init();
            catView.init();
            catListView.init();
        },

        getCats: function() {
            return model.cats;
        },

        getCurrentCat: function() {
            return model.currentCat;
        },

        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },

        updateCount: function() {
            model.currentCat.clickCount++;
        }
    };

    let catView = {
        init: function() {
            this.catNameElem = document.querySelector('#cat-name');
            this.catImageElem = document.querySelector('#cat-img');
            this.catCountElem = document.querySelector('#cat-count');

            this.catImageElem.addEventListener('click', (function() {
                "use strict";
                return function () {
                    octopus.updateCount();
                    catView.render();
                }
            })(cat));

            catView.render();
        },
        render: function(){
            let currentCat = octopus.getCurrentCat();
            this.catNameElem.textContent = currentCat.name;
            this.catCountElem.textContent = currentCat.clickCount;
            this.catImageElem.src = currentCat.image_src;
        }
    };

    let catListView = {
        init: function() {
            this.catListElem = document.querySelector('#cat-list');

            catListView.render();
        },
        render: function(){

            const cats = octopus.getCats();
            const total_cats = cats.length;

            // Clear the Cat List View
            this.catListElem.innerHTML = '';

            for(let i=0; i<total_cats; i++) {
                const cat = cats[i];

                let cat_elem = document.createElement('li');
                cat_elem.textContent = cat.name;

                cat_elem.addEventListener('click', (function(catCopy) {
                    "use strict";
                    return function () {
                        octopus.setCurrentCat(catCopy);
                        catView.render();
                    }
                })(cat));
                this.catListElem.appendChild(cat_elem);
            }
        }
    };

    octopus.init();
});

