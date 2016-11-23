function demo1() {
    let demoOutput = document.querySelector(".demo_output_1");
    demoOutput.innerHTML = '';
    demoOutput.style.background = '#fff';

    const nums = [1, 2, 3];

    // Loop over the 'nums' array
    for (let i = 0; i < nums.length; i++) {

        // This is the number we are on ...
        // [UPDATE] This variable keeps changing every time we iterate!
        // [UPDATE] It's first value is 1, then 2, then finally 3
        var num = nums [i];

        // We're creating a DOM element for the number
        const elem = document.createElement('div');
        elem.textContent = num;

        // ... and when we click, alert the value of num
        elem.addEventListener('click', function () {
            // [UPDATE] Alert/Console Log num's value at the moment of the click!
            console.log(num);

            // [UPDATE] Specifically, we're alerting the num variable that's defined
            // [UPDATE] outside of this inner function.
            // [UPDATE] Each of these inner functions are pointing to the same `num`
            // [UPDATE] variable ... the one that changes on each iteration, and which
            // [UPDATE] equals 3 at the end of the for loop.
            // [UPDATE] Whenever the anonymous function is called on the click event,
            // [UPDATE] the function will reference the same `num` (which now equals 3)

        });

        // Finally, let's add this element to the document
        demoOutput.appendChild(elem);
    }

}

function demo2() {
    let demoOutput = document.querySelector(".demo_output_2");
    demoOutput.innerHTML = '';
    demoOutput.style.background = '#fff';

    const nums = [1, 2, 3];

    // Loop over the 'nums' array
    for (let i = 0; i < nums.length; i++) {

        // This is the number we are on ...
        var num = nums [i];

        // We're creating a DOM element for the number
        const elem = document.createElement('div');
        elem.textContent = num;

        // ... and when we click, alert the value of num
        elem.addEventListener('click', (function ( numCopy ) {
            return function() {
                console.log(numCopy);
            };
        })(num));

        // Finally, let's add this element to the document
        demoOutput.appendChild(elem);
    }

}