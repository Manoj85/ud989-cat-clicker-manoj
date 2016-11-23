$( function() {

    var model = {
        currentCat: null,
        cats: [],
        isAdminView: false,
        init: function() {
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
            catAdminButtonView.init();
            catEditView.init();
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
        },

        getAdminViewMode: function() {
            return model.isAdminView;
        },

        setAdminViewMode: function(mode) {
            model.isAdminView = mode;
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
            })());

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

    let catAdminButtonView = {
        init: function() {
            this.catAdminBtnElem = document.querySelector('#admin-btn');
            this.catAdminBtnElem.addEventListener('click', function() {
                "use strict";
                octopus.setAdminViewMode(true);
                catEditView.render();
            });
            this.render();
        },
        render: function(){
            "use strict";

        }
    };

    let catEditView = {
        init: function() {
            this.catEditElem = document.querySelector('#cat-edit-form');

            this.catEditNameElem = document.querySelector('#cat-edit-name');
            this.catEditImgElem = document.querySelector('#cat-edit-img-url');
            this.catEditCountElem = document.querySelector('#cat-edit-count');
            this.catEditSaveBtnElem = document.querySelector('#cat-edit-save-btn');
            this.catEditCancelBtnElem = document.querySelector('#cat-edit-cancel-btn');

            this.catEditSaveBtnElem.addEventListener('click', () => {
                "use strict";
                const editCat = {
                    "image_src": this.catEditImgElem.textContent,
                    "name": this.catEditNameElem.textContent,
                    "clickCount": this.catEditCountElem.textContent
                };
                octopus.setCurrentCat(editCat);
                catEditView.render();
            });
            this.catEditCancelBtnElem.addEventListener('click', () => {
                "use strict";
                octopus.setAdminViewMode(false);
                catEditView.render();
            });

            this.render();
        },
        render: function(){
            "use strict";
            const is_admin_view = octopus.getAdminViewMode();
            this.catEditElem.style.display = (!is_admin_view) ? 'none' : 'block';
            if (is_admin_view) {
                const cat = octopus.getCurrentCat();
                this.catEditNameElem.value = cat.name;
                this.catEditImgElem.value = cat.image_src;
                this.catEditCountElem.value = cat.clickCount;
            }
        }
    };

    octopus.init();
});

