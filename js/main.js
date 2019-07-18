(function() {
    document.onkeydown = function(oe) {
        let evt = oe || window.event;

        let current = parseInt(window.location.pathname.split("/").pop().match(/^\d+/)[0]);

        switch (evt.keyCode) {
            case 37: // left
                if (current > 1) {
                    window.location.href = ((--current) + ".html");
                }
                break;
            case 39: // right
                if (current < 3) {
                    window.location.href = ((++current) + ".html");
                }
                break;
        }
    }
})()