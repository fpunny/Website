function menuOpen() {
    var x = document.getElementById('nav');
    x.style.top = '0px';
}

function menuClose() {
    var x = document.getElementById('nav');
    x.style.top ='-38px';
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(element) {
    var elementY = elmYPosition(element);
    var duration = 600;
    var startingY = window.pageYOffset;  
    var diff = elementY - startingY;
    var start;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp
            // Elapsed miliseconds since start of scrolling.
            var time = timestamp - start;
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent)

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    })
}